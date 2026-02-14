import {
  TEffects,
  TEffectType,
  TEffectVariants,
} from '@/stores/useSidebarOptions'
import { SketchProps } from '@p5-wrapper/react'

export type TViewPortProps = {
  background: [255, 255, 255]
  fileName: string
  imageFormat: 'png' | 'jpg'
  scale: 1
}

export type TBaseProps = {
  color: number[]
  imageUrl: string
  settings: TEffects
  type: TEffectType | 'default'
  variant: TEffectVariants | null
}

export type TCanvasProps = {
  width: number
  height: number
}

export type TSettings = SketchProps & {
  type: TEffectType | 'default'
  settings: TEffects
  color: number[]
  imageUrl: string
  variant: TEffectVariants | null

  viewPortSettings: TViewPortProps
  baseSettings: TBaseProps
  canvasSettings: TCanvasProps
}
