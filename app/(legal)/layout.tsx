import Header from '@/components/common/header'
import React from 'react'
import '../globals.css'

type TLegalLayout = {
  children: React.ReactNode
}

const LegalLayout = ({ children }: TLegalLayout) => {
  return (
    <html>
      <body className="min-h-screen">
        <Header />
        <main className="p-8">{children}</main>
      </body>
    </html>
  )
}

export default LegalLayout
