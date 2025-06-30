"use client"

import { useTheme } from "./theme-provider"
import { useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const toggleTheme = () => {
    setIsTransitioning(true)
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-[56px] h-[30px] rounded-full
        bg-[#547792]/20 dark:bg-[#1a2634]
        transition-colors duration-300
        border border-[#94B4C1]/20
        p-[3px]
      `}
      aria-label="Toggle theme"
    >
      {/* Toggle Circle with Icon */}
      <div
        className={`
          h-[24px] w-[24px] rounded-full
          flex items-center justify-center
          bg-[#547792] dark:bg-[#94B4C1]
          transition-all duration-300 ease-in-out
          ${theme === 'dark' ? 'translate-x-[26px]' : 'translate-x-0'}
          ${isTransitioning ? 'scale-90' : 'scale-100'}
        `}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5 text-[#ECEFCA]"
          fill="currentColor"
          strokeWidth="2"
        >
          {theme === 'light' ? (
            // Simplified sun icon
            <circle cx="12" cy="12" r="4" />
          ) : (
            // Moon icon
            <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
          )}
        </svg>
      </div>
    </button>
  )
} 