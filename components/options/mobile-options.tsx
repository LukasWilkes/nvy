import { Menu, MenuIcon, Settings, Settings2, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import SidebarNav from '@/components/sidebar/sidebar-nav'

import StandardDitherForm from '@/features/dither/components/standard-dither-form'

import { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { useSearchParams } from 'next/navigation'
import LegalLink from '../common/legal-links'
import MapOptions from './map-options'

const MobileSettings = () => {
  const { width } = useWindowSize()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState<'options' | 'effects' | null>(null)

  useEffect(() => {
    if (width > 1024 || searchParams) {
      setIsOpen(null)
    }
  }, [width, searchParams])

  if (width > 1024) return null

  return (
    <>
      {isOpen && (
        <>
          <div
            className="h-screen w-screen absolute bottom-full left-0 bg-white/00"
            onClick={() => {
              setIsOpen(null)
            }}
          />
          <div className="h-64 w-screen md:w-full bg-sidebar py-4 -translate-y-px md:border-x border-t text-foreground absolute bottom-full left-0 ">
            <ScrollArea scrollHideDelay={0} className="h-full  px-4">
              {isOpen === 'options' && <MapOptions />}
              {isOpen === 'effects' && (
                <>
                  <SidebarNav />
                  <LegalLink />
                </>
              )}
            </ScrollArea>
          </div>
        </>
      )}
      <div className="flex md:hidden gap-4">
        <Button
          variant={'outline'}
          className="border-none text-foreground"
          onClick={() => setIsOpen(isOpen === 'effects' ? null : 'effects')}
        >
          <span className="sr-only md:not-sr-only">Effekte</span>
          {isOpen === 'effects' ? <XIcon /> : <MenuIcon />}
        </Button>
        <Button
          variant={'outline'}
          className="border-none text-foreground"
          onClick={() => setIsOpen(isOpen === 'options' ? null : 'options')}
        >
          <span className="sr-only md:not-sr-only">Optionen</span>
          {isOpen === 'options' ? <XIcon /> : <Settings />}
        </Button>
      </div>
    </>
  )
}

export default MobileSettings
