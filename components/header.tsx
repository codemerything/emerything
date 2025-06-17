"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-3 mt-10 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Emery
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className={
              isActive("/about")
                ? "text-red-500 dark:text-red-400 transition-colors"
                : "text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
            }
          >
            About
          </Link>
          <Link
            href="/projects"
            className={
              isActive("/projects")
                ? "text-red-500 dark:text-red-400 transition-colors"
                : "text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
            }
          >
            Projects
          </Link>
          <Link
            href="/writing"
            className={
              isActive("/writing")
                ? "text-red-500 dark:text-red-400 transition-colors"
                : "text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
            }
          >
            Writing
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
