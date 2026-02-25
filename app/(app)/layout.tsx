import Options from '@/components/options'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Sidebar from '@/components/sidebar'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Suspense } from 'react'
import '../globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'nvy.app | Tattoo Stencil Generator',
  description:
    'Convert sketches into high-contrast, printable tattoo stencils using advanced dithering and threshold algorithms.',
  authors: [{ name: 'Lukas Wilkes' }],
  keywords: [
    'Tattoo',
    'Stencil',
    'Dithering',
    'Image Processing',
    'Next.js',
    'P5.js',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <main className="h-svh flex">
            <Suspense>
              <Sidebar />
              <section className="w-full">{children}</section>
              <Options />
            </Suspense>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
