import Logo from '@/components/common/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <section className="text-foreground font-mono h-full w-full flex">
      <div className="text-center flex flex-col items-center justify-center w-full">
        <Logo />
        <h1 className="text-3xl font-bold mb-3 mt-8">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <p className="text-sm mb-8">
          Select Image {'->'} Adjust Effect {'->'} Export Result
        </p>
        <Link href={'/?effect=tint'}>
          <Button>Try out {'->'}</Button>
        </Link>
      </div>
    </section>
  )
}

export default LandingPage
