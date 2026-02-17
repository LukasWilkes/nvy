'use client'

import { TEffectType } from '@/stores/useSidebarOptions'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const DitherOptionsForm = dynamic(
  () => import('@/features/dither/components/dither-options-form')
)
const TintOptionsForm = dynamic(
  () => import('@/features/tint/components/tint-options-form')
)

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
