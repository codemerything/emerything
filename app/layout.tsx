import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Emery",
  description: "Design Engineer",
  openGraph: {
    title: "Emery - Design Engineer",
    description: "Personal portfolio and blog of Emery, a Design Engineer",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Emery Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Emery - Design Engineer",
    description: "Personal portfolio and blog of Emery, a Design Engineer",
    images: ["/icon.svg"]
  },
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
      <body className="font-alte bg-misty-rose-50 text-smoky-black-900 dark:bg-smoky-black-950 dark:text-misty-rose-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <div className="min-h-screen">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
