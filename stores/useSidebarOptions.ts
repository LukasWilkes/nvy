import { create } from 'zustand'

export type TDither = 'standard' | 'floyd_steinberg'

export type TEffectVariants = TDither

export type TEffects = {
  tint: {
    color: number[]
  }
  dither: {
    standard: {
      threshold: number
      brightness: number
      contrast: number
      invert: boolean
      shadows: string
      highlights: string
    }
  }
}

export type TEffectType = 'tint' | 'dither'

export const Effects = {
  tint: {
    color: [100, 100, 100],
  },
  dither: {
    standard: {
      threshold: 128,
      brightness: 0,
      contrast: 1,
      invert: false,
      shadows: '#000000',
      highlights: '#ffffff',
    },
  },
}

type TSidebarOptions = {
  imageUrl: string
  effectVariant: TDither
  settings: TEffects

  updateImageUrl: (url: string) => void
  updateSettings: (effect: keyof typeof Effects, newValues: any) => void
}

const useSidebarOptions = create<TSidebarOptions>((set) => ({
  imageUrl: '/test-image.png',
  settings: Effects,
  effectVariant: 'standard',

  setEffectVariant: (variant: TEffectVariants) =>
    set({ effectVariant: variant }),
  updateImageUrl: (url) => set({ imageUrl: url }),
  updateSettings: (effect, newValues) =>
    set((state) => ({
      settings: {
        ...state.settings,
        [effect]: { ...state.settings[effect], ...newValues },
      },
    })),
}))

export default useSidebarOptions
