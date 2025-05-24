import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "New Delhi Smart City Command Center | Government of NCT Delhi",
  description:
    "Advanced AI-powered urban management system providing real-time insights and predictive analytics for sustainable city operations across the National Capital Territory of Delhi.",
  keywords:
    "smart city, Delhi, urban management, IoT, AI, government, NCT Delhi, traffic management, energy grid, public safety",
  authors: [{ name: "Government of NCT Delhi" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "New Delhi Smart City Command Center",
    description: "Advanced AI-powered urban management system for Delhi NCT",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
