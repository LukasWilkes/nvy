'use client'
import { ChevronUp, Command } from 'lucide-react'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { Button } from '../ui/button'
import { Kbd } from '../ui/kbd'

type TShortcut = {
  name: string
  keys: string[]
}

const SHORTCUTS: TShortcut[] = [
  {
    name: 'Zoom in',
    keys: ['+'],
  },
  {
    name: 'Zoom out',
    keys: ['-'],
  },
  {
    name: 'Fit to view',
    keys: ['0'],
  },
  {
    name: '50% Zoom',
    keys: ['1'],
  },
  {
    name: '75% Zoom',
    keys: ['2'],
  },
]

const Shortcuts = () => {
  const [isMac, setIsMac] = useState(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsMac(navigator.userAgent.toLowerCase().includes('mac'))
  }, [])

  let metaKey = isMac ? <Command /> : 'ctrl'

  return (
    <div className="mt-auto p-4">
      <div className="p-4 border bg-input/30">
        <Button
          className="!p-0 justify-between w-full h-auto"
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
          variant={'ghost'}
          aria-expanded={isOpen}
        >
          Shortcuts
          <ChevronUp
            className={cn('duration-300 ease-in-out', {
              'rotate-180': isOpen,
            })}
          />
        </Button>
        {isOpen && (
          <ul className="flex flex-col gap-2 mt-2">
            {SHORTCUTS?.map((sCut) => (
              <li key={sCut.name} className="flex justify-between">
                <span>{sCut.name}:</span>
                <div className="flex gap-1">
                  <Kbd>{metaKey}</Kbd>
                  <span>+</span>
                  {sCut.keys?.map((k) => (
                    <Kbd key={sCut?.name + k}>{k}</Kbd>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Shortcuts
