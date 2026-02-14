import Logo from '@/components/common/logo'
import Options from '@/components/options'
import { ThemeProvider } from '@/components/providers/theme-provider'
import Sidebar from '@/components/sidebar'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
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
          <main className="h-svh hidden xl:flex">
            <Suspense>
              <Sidebar />
              <section className="w-full">{children}</section>
              <Options />
            </Suspense>
          </main>
          <main className=" text-foreground h-svh flex-col px-8 w-screen font-mono flex xl:hidden justify-center items-center">
            <div className="h-full flex flex-col items-center justify-center">
              <Logo />
              <p className="text-center mx-auto mt-4 max-w-sm text-sm">
                nvy is a high-precision tool designed for larger displays.
                Mobile support is coming soon.
              </p>
            </div>
            <div className="flex gap-8 text-sm pb-8">
              <Link href={'/impressum'}>Impressum</Link>
              <Link href={'/datenschutz'}>Datenschutz</Link>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
