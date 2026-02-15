'use client'
import { useSearchParams } from 'next/navigation'
import Logo from '../common/logo'
import Shortcuts from './shortcuts'
import LegalLink from '../common/legal-links'
import SidebarNav from './sidebar-nav'

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

        <SidebarNav />
      </nav>
      {searchParams.get('effect') !== null ? <Shortcuts /> : <LegalLink />}
    </header>
  )
}

export default Sidebar
