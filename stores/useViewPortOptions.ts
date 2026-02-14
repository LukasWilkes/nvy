import { create } from 'zustand'

type TViewPortOptions = {
  save: boolean

  settings: {
    scale: number
    background: number[]
    imageFormat: 'jpg' | 'png'
    fileName: string
  }

  triggerSave: (save: boolean) => void
  setSettings: (newSettings: any) => void
}

const useViewPortOptions = create<TViewPortOptions>((set) => ({
  save: false,
  settings: {
    scale: 1,
    background: [255, 255, 255],
    imageFormat: 'jpg',
    fileName: 'export',
  },

  triggerSave: (save) => set({ save }),
  setSettings: (newSettings) =>
    set((state) => ({ settings: { ...state.settings, ...newSettings } })),
}))

export default useViewPortOptions
