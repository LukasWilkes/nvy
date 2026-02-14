'use client'
import DitherOptionsForm from '@/features/dither/components/dither-options-form'
import TintOptionsForm from '@/features/tint/components/tint-options-form'
import { TEffectType } from '@/stores/useSidebarOptions'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import ImageUpload from './fields/image-upload'

const MAP_PARAMS_TO_OPTIONS: Record<TEffectType, React.ComponentType<any>> = {
  tint: TintOptionsForm,
  dither: DitherOptionsForm,
}

const Options = () => {
  const searchParams = useSearchParams()
  const effectType = searchParams.get('effect') as TEffectType

  if (
    !effectType ||
    !Object.keys(MAP_PARAMS_TO_OPTIONS)?.includes(effectType)
  ) {
    return null
  }

  const Component = MAP_PARAMS_TO_OPTIONS[effectType!]
  return (
    <aside className="sticky  top-0 w-80 right-0 hidden lg:flex font-mono flex-col h-full border-l top-0 h-[100svh] flex-none bg-sidebar text-foreground">
      <Component type={effectType} />
      <div className="p-4 border-t mt-auto">
        <ul className="p-4 flex justify-between flex-col gap-2 text-sm border bg-input/30">
          <li>
            <Link
              className="flex justify-between items-center"
              href={'/impressum'}
            >
              Impressum <ArrowRight className="size-4" />
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-between items-center"
              href={'/datenschutz'}
            >
              Datenschutz <ArrowRight className="size-4" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Options
