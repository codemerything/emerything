"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useEffect, useState, useCallback } from "react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  // Ensure mounted is set after hydration
  useEffect(() => {
    setMounted(true)

    const userTheme = localStorage.getItem("theme")
    if (!userTheme) {
      setTheme("system")
    }

    const hasVisited = localStorage.getItem("theme-notification-shown")
    if (!hasVisited) {
      setShowNotification(true)
      localStorage.setItem("theme-notification-shown", "true")

      setTimeout(() => setShowNotification(false), 3000)
    }
  }, [setTheme])

  // Theme toggling logic in one function
  const toggleTheme = useCallback(() => {
    const activeTheme = theme === "system" ? systemTheme : theme
    setTheme(activeTheme === "light" ? "dark" : "light")
  }, [theme, systemTheme, setTheme])

  // Global keyboard shortcut: works even in production
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "d" &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey
      ) {
        const target = event.target as HTMLElement
        if (
          target.tagName !== "INPUT" &&
          target.tagName !== "TEXTAREA" &&
          !target.isContentEditable
        ) {
          event.preventDefault()
          if (mounted) toggleTheme()
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [mounted, toggleTheme])

  const currentTheme = theme === "system" ? systemTheme : theme

  if (!mounted) {
    return (
      <div className="relative w-14 h-7 bg-misty-rose-200 dark:bg-smoky-black-700 rounded-full p-1">
        <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
      </div>
    )
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 border border-misty-rose-600 dark:border-smoky-black-800 rounded-full p-1 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Toggle theme"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${currentTheme === "dark" ? "translate-x-7" : "translate-x-0"
                  }`}
              >
                <Sun
                  className={`w-3 h-3 text-shamock-green-500 transition-all duration-300 ${currentTheme === "light"
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                    }`}
                />
                <Moon
                  className={`absolute w-3 h-3 text-shamock-green-900 transition-all duration-300 ${currentTheme === "dark"
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                    }`}
                />
              </div>
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-smoky-black-900 text-misty-rose-100 border-smoky-black-700"
          >
            <p>Press "D" to switch themes</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-smoky-black-900 text-misty-rose-100 px-4 py-3 rounded-lg shadow-lg border border-smoky-black-700 animate-in slide-in-from-right-2 duration-300">
          <div className="flex items-center gap-2">
            <span className="text-sm">💡</span>
            <p className="text-sm font-medium">Press "D" to switch themes</p>
          </div>
        </div>
      )}
    </>
  )
}
