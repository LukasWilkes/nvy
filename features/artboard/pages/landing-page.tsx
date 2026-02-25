import Logo from '@/components/common/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <section className="text-foreground font-mono h-full w-full flex">
      <div className="text-center flex flex-col items-center justify-center w-full">
        <Logo />
        <p className="text-sm mb-8 mt-4">
          Bild wählen {'->'} Effekt anwenden {'->'} Ergebnis exportieren
        </p>
        <Link href={'/?effect=tint'}>
          <Button>Jetzt testen {'->'}</Button>
        </Link>
      </div>
    </section>
  )
}

export default LandingPage
