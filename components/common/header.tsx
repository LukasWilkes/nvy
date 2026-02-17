import Link from 'next/link'
import Logo from '@/components/common/logo'

const Header = () => {
  return (
    <header className="w-full sticky top-0 h-16 px-8 ">
      <div className="sticky text-foreground bg-background flex justify-between items-center text-sm h-16 top-0 max-w-4xl mx-auto">
        <div className="flex gap-3 items-center">
          <Logo />
          <p>{process.env.NEXT_PUBLIC_APP_NAME}</p>
        </div>
        <nav className="flex gap-4">
          <Link href={'/datenschutz'}>Datenschutz</Link>
          <Link href={'/impressum'}>Impressum</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
