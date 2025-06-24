"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  /**
   * When the component mounts:
   * 1. Set the mounted state to true
   * 2. Check if theme preference exists, if not, set to system theme
   * 3. Show notification for first-time visitors
   */
  useEffect(() => {
    setMounted(true)

    // Check if user has a theme preference
    const userTheme = localStorage.getItem('theme')
    if (!userTheme) {
      // If no preference, set to system theme
      setTheme('system')
    }

    // Check if this is the first visit
    const hasVisited = localStorage.getItem('theme-notification-shown')
    if (!hasVisited) {
      setShowNotification(true)
      localStorage.setItem('theme-notification-shown', 'true')

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    }
  }, [setTheme])

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'd' && !event.ctrlKey && !event.altKey && !event.metaKey) {
        // Only trigger if not typing in an input field
        const target = event.target as HTMLElement
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA' && !target.isContentEditable) {
          event.preventDefault()
          setTheme(theme === "light" ? "dark" : "light")
        }
      }
    }

    if (mounted) {
      document.addEventListener('keydown', handleKeyPress)
      return () => document.removeEventListener('keydown', handleKeyPress)
    }
  }, [mounted, theme, setTheme])

  const toggleTheme = () => {
    // If currently using system theme, switch to explicit light/dark
    if (theme === 'system') {
      setTheme(systemTheme === 'dark' ? 'light' : 'dark')
    } else {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  // Get the actual theme (accounting for system theme)
  const currentTheme = theme === 'system' ? systemTheme : theme

  if (!mounted) {
    return (
      <div className="relative w-14 h-7 bg-misty-rose-200 dark:bg-smoky-black-700 rounded-full p-1">
        <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
      </div>
    )
  }

  return (
    <>
      {/* Switch Toggle with Tooltip */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 border border-misty-rose-600 dark:border-smoky-black-800 rounded-full p-1 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Toggle theme"
            >
              {/* Toggle Handle */}
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${currentTheme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                  }`}
              >
                {/* Icons */}
                <Sun className={`w-3 h-3 text-shamock-green-500 transition-all duration-300 ${currentTheme === 'light' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`} />
                <Moon className={`absolute w-3 h-3 text-shamock-green-900 transition-all duration-300 ${currentTheme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`} />
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

      {/* Notification Popup */}
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
