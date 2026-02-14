import { ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import cn from 'classnames'
import { Button } from '../ui/button'
import { Kbd } from '../ui/kbd'

type Props = {}

const Shortcuts = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="mt-auto p-4">
      <div className="p-4 border bg-input/30">
        <Button
          className="!p-0 justify-between w-full h-auto"
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
          variant={'ghost'}
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
            <li className="flex justify-between">
              <span>Zoom in:</span>
              <Kbd>ctrl/cmd + +</Kbd>
            </li>
            <li className="flex justify-between">
              <span>Zoom out:</span>
              <Kbd>ctrl/cmd + -</Kbd>
            </li>
            <li className="flex justify-between">
              <span>Fit to view:</span>
              <Kbd>ctrl/cmd + 0</Kbd>
            </li>
            <li className="flex justify-between">
              <span>50% Zoom:</span>
              <Kbd>ctrl/cmd + 1</Kbd>
            </li>
            <li className="flex justify-between">
              <span>75% Zoom:</span>
              <Kbd>ctrl/cmd + 2</Kbd>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Shortcuts
