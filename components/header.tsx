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
    <header className=" border-misty-rose-200 dark:border-smoky-black-700 bg-misty-rose-50 dark:bg-smoky-black-950">
      <div className="max-w-4xl mx-auto px-4 py-3 mt-10 flex items-center justify-between">
        <Link href="/" className="text-lg  text-smoky-black-900 dark:text-smoky-black-100 hover:text-shamock-green-700 dark:hover:text-shamock-green-300 transition-colors">
          Emery — Design Engineer
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className={
              isActive("/about")
                ? "text-smoky-black-700 dark:text-smoky-black-200 transition-colors"
                : "text-smoky-black-600 hover:text-shamock-green-700 dark:text-smoky-black-100 dark:hover:text-shamock-green-300 transition-colors"
            }
          >
            About
          </Link>
          <Link
            href="/projects"
            className={
              isActive("/projects")
                ? "text-smoky-black-900 dark:text-smoky-black-200 transition-colors"
                : "text-smoky-black-600 hover:text-shamock-green-700 dark:text-smoky-black-100 dark:hover:text-shamock-green-300 transition-colors"
            }
          >
            Projects
          </Link>
          <Link
            href="/writing"
            className={
              isActive("/writing")
                ? "text-smoky-black-700 dark:text-smoky-black-200 transition-colors"
                : "text-smoky-black-600 hover:text-shamock-green-700 dark:text-smoky-black-100 dark:hover:text-shamock-green-300 transition-colors"
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
