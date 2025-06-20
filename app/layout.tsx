import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emery",
  description: "Design Engineer",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      }
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className + " bg-misty-rose-50 text-smoky-black-900 dark:bg-smoky-black-950 dark:text-misty-rose-100"}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
