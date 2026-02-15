'use client'
import DitherOptionsForm from '@/features/dither/components/dither-options-form'
import TintOptionsForm from '@/features/tint/components/tint-options-form'
import { TEffectType } from '@/stores/useSidebarOptions'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export const MAP_PARAMS_TO_OPTIONS: Record<
  TEffectType,
  React.ComponentType<any>
> = {
  tint: TintOptionsForm,
  dither: DitherOptionsForm,
}

const MapOptions = () => {
  const searchParams = useSearchParams()
  const effectType = searchParams.get('effect') as TEffectType

  if (
    !effectType ||
    !Object.keys(MAP_PARAMS_TO_OPTIONS)?.includes(effectType)
  ) {
    return null
  }

  const Component = MAP_PARAMS_TO_OPTIONS[effectType!]
  return <Component type={effectType} />
}

export default MapOptions
