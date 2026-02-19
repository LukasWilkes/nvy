import Header from '@/components/common/header'
import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'
import '../globals.css'

type TLegalLayout = {
  children: React.ReactNode
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const LegalLayout = ({ children }: TLegalLayout) => {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main className="p-8">{children}</main>
      </body>
    </html>
  )
}

export default LegalLayout
