import { create } from 'zustand'

type TAvailableRatios =
  | 'instagram'
  | 'wallpaper'
  | '2k_wallpaper'
  | '4k_wallpaper'
  | 'custom'

export type TCanvasOptions = {
  ratio: TAvailableRatios
  width?: number
  height?: number

  updateRatio: (ratio: TAvailableRatios) => void
}

export const mapRatioToSize = {
  instagram: {
    width: 1080,
    height: 1080,
  },
  wallpaper: {
    width: 1920,
    height: 1080,
  },
  '2k_wallpaper': {
    width: 2560,
    height: 1440,
  },
  '4k_wallpaper': {
    width: 3840,
    height: 2560,
  },
  custom: {
    width: 1080,
    height: 1080,
  },
}

export const useCanvasOptions = create<TCanvasOptions>((set) => ({
  ratio: 'instagram',
  width: 1080,
  height: 1080,

  updateRatio: (ratio: TAvailableRatios) =>
    set({
      ratio,
      width: mapRatioToSize[ratio]?.width,
      height: mapRatioToSize[ratio]?.height,
    }),
}))
