import { TEffects } from '@/stores/useSidebarOptions'
import { P5CanvasInstance } from '@p5-wrapper/react'
import { ditherServcie } from '../dither/dither-service'
import { TBaseProps, TSettings } from './canvas-types'

type Point = { x: number; y: number }
type SetTranslate = (value: Point | ((prev: Point) => Point)) => void
type SetZoom = (value: number | ((prev: number) => number)) => void

export const handleShortcuts = (
  e: KeyboardEvent,
  setTranslate: SetTranslate,
  setZoom: SetZoom
) => {
  if (e.metaKey || e.ctrlKey) {
    switch (e.key) {
      case '0':
        e.preventDefault()
        setTranslate({ x: 0, y: 0 })
        setZoom(1)
        break
      case '1':
        e.preventDefault()
        setTranslate({ x: 0, y: 0 })
        setZoom(0.5)
        break
      case '2':
        e.preventDefault()
        setTranslate({ x: 0, y: 0 })
        setZoom(0.75)
        break
      case '+':
        e.preventDefault()
        setZoom((prev) => {
          return prev + 0.05
        })
        break
      case '-':
        e.preventDefault()
        setZoom((prev: number) => {
          return prev - 0.05
        })
        break
      default:
        break
    }
  }
}

export const handleWheel = (
  e: WheelEvent | React.WheelEvent,
  setZoom: SetZoom,
  setTranslate: SetTranslate
) => {
  e.preventDefault()

  if (e.metaKey || e.ctrlKey) {
    const zoomSpeed = 0.005

    setZoom((prevZoom) => {
      const newZoom = prevZoom - e.deltaY * zoomSpeed

      return Math.max(0.1, Math.min(newZoom, 5))
    })
  } else {
    setTranslate((prev) => ({
      x: prev.x - e.deltaX,
      y: prev.y - e.deltaY,
    }))
  }
}

export const applyEffects = async (
  p5: P5CanvasInstance<TSettings>,
  currentProps: TBaseProps & { imageFormat: 'png' | 'jpg' },
  img: any
) => {
  const settings =
    currentProps?.type === 'default'
      ? null
      : currentProps?.settings[currentProps?.type]

  if (settings) {
    switch (currentProps?.type) {
      case 'tint':
        const { color } = settings as TEffects['tint']
        if (color) {
          p5.tint(color[0], color[1], color[2])
        }
        break
      case 'dither':
        img.loadPixels()
        const variant = currentProps?.variant
        if (variant === 'standard') {
          ditherServcie[variant](
            img,
            settings[variant as keyof typeof settings],
            currentProps?.imageFormat
          )
        }
        break
      default:
        break
    }
  }

  p5.image(
    img,
    0,
    0,
    p5.width,
    p5.height,
    0,
    0,
    img.width,
    img.height,
    p5.CONTAIN
  )
}
