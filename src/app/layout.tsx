import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import Head from "next/head"
import Navbar from "./components/Navbar"

export const metadata: Metadata = {
  title: "Shadhin Aid",
  description: "A fundraising platform for the underprivileged",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
