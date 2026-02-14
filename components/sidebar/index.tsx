'use client'
import cn from 'classnames'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { sidebarEffects } from './siebar-effect'
import { Button } from '../ui/button'
import Logo from '../common/logo'
import Shortcuts from './shortcuts'
import LegalLink from '../common/legal-links'

const Sidebar = () => {
  const searchParams = useSearchParams()
  return (
    <header className="text-foreground border-r font-mono w-80 hidden lg:flex flex-col top-0 left-0 text-sm h-[100svh] flex-none bg-sidebar">
      <div className="p-4 flex items-center h-16 border-b gap-3">
        <Logo />
        <p className="font-bold">{process.env.NEXT_PUBLIC_APP_NAME}</p>
      </div>
      <nav className="py-4 border-b h-full">
        <h6 className="px-4 font-bold mb-4">Effects:</h6>
        <ol className="flex gap-4 flex-col text-sm">
          {sidebarEffects?.map(({ slug, name }) => {
            const isActive = searchParams?.get('effect') === slug
            return (
              <li className={cn('w-full  px-4')} key={slug}>
                <Link
                  className={cn(
                    'duration-300 ease-in-out h-full flex items-center w-full gap-3 w-full'
                  )}
                  href={`/?effect=${slug}`}
                >
                  <Button
                    className="w-full justify-between rounded-none"
                    variant={isActive ? 'default' : 'outline'}
                  >
                    <span>{name}</span>
                  </Button>
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
      {searchParams.get('effect') !== null ? <Shortcuts /> : <LegalLink />}
    </header>
  )
}

export default Sidebar
