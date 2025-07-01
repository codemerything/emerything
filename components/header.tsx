"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const NavigationLinks = ({ mobile = false, onLinkClick }: { mobile?: boolean; onLinkClick?: () => void }) => (
    <>
      <Link
        href="/about"
        onClick={onLinkClick}
        className={
          isActive("/about")
            ? `text-smoky-black-700 dark:text-smoky-black-200 transition-colors ${mobile ? 'block py-2 text-lg' : ''}`
            : `text-smoky-black-600 hover:text-shamock-green-700 dark:text-smoky-black-100 dark:hover:text-shamock-green-300 transition-colors ${mobile ? 'block py-2 text-lg' : ''}`
        }
      >
        About
      </Link>
      <Link
        href="/projects"
        onClick={onLinkClick}
        className={
          isActive("/projects")
            ? `text-smoky-black-900 dark:text-smoky-black-200 transition-colors ${mobile ? 'block py-2 text-lg' : ''}`
            : `text-smoky-black-600 hover:text-shamock-green-700 dark:text-smoky-black-100 dark:hover:text-shamock-green-300 transition-colors ${mobile ? 'block py-2 text-lg' : ''}`
        }
      >
        Projects
      </Link>
      <Link
        href="/resume"
        onClick={onLinkClick}
        className={
          isActive("/resume")
            ? `text-smoky-black-700 dark:text-smoky-black-200 transition-colors ${mobile ? 'block py-2 text-lg' : ''}`
            : `text-smoky-black-600 hover:text-shamock-green-700 dark:text-smoky-black-100 dark:hover:text-shamock-green-300 transition-colors ${mobile ? 'block py-2 text-lg' : ''}`
        }
      >
        Resume
      </Link>
      {mobile && (
        <div className="pt-4">
          <ThemeToggle />
        </div>
      )}
    </>
  )

  return (
    <header className="border-misty-rose-200 dark:border-smoky-black-700 bg-misty-rose-50 dark:bg-smoky-black-950">
      <div className="max-w-4xl mx-auto px-4 py-3 mt-10 flex items-center justify-between">
        <Link href="/" className="text-lg text-smoky-black-900 dark:text-smoky-black-100 hover:text-shamock-green-700 dark:hover:text-shamock-green-300 transition-colors">
          Emery — Design Engineer
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavigationLinks />
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-smoky-black-600 hover:text-shamock-green-700 dark:text-smoky-black-100 dark:hover:text-shamock-green-300 hover:bg-misty-rose-100 dark:hover:bg-smoky-black-800"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-misty-rose-50 dark:bg-smoky-black-950 border-misty-rose-200 dark:border-smoky-black-700">
            <SheetHeader>
              <SheetTitle className="text-left text-smoky-black-900 dark:text-smoky-black-100">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col mt-8">
              <NavigationLinks mobile onLinkClick={() => setIsOpen(false)} />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
