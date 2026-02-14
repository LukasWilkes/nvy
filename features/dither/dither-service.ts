import { HexCodeColorToRGB } from '@/lib/utils'
import { TEffects } from '@/stores/useSidebarOptions'

const standardDither = (
  img: any,
  settings: TEffects['dither']['standard'],
  imageFormat: 'png' | 'jpg'
) => {
  img.loadPixels()

  const { contrast, threshold, brightness, invert, shadows, highlights } =
    settings

  const highlightValues = HexCodeColorToRGB(highlights)
  const shadowValues = HexCodeColorToRGB(shadows)

  for (let i = 0; i < img.pixels.length; i += 4) {
    const r = img.pixels[i]
    const g = img.pixels[i + 1]
    const b = img.pixels[i + 2]

    let avgBrightness = (r + g + b) / 3

    avgBrightness = (avgBrightness - 128) * contrast + 128

    avgBrightness = avgBrightness + brightness

    avgBrightness = Math.max(0, Math.min(255, avgBrightness + brightness))

    let value: number
    if (invert) {
      value = avgBrightness < threshold ? 0 : 1
    } else {
      value = avgBrightness > threshold ? 0 : 1
    }

    img.pixels[i] = value === 1 ? shadowValues.r : highlightValues.r
    img.pixels[i + 1] = value === 1 ? shadowValues.g : highlightValues.g
    img.pixels[i + 2] = value === 1 ? shadowValues.b : highlightValues.b
    img.pixels[i + 3] = imageFormat === 'png' && value === 0 ? 0 : 255
  }

  img.updatePixels()
}
const colorizeDither = (
  img: any,
  threshold: number,
  contrast: number,
  brightness: number,
  invert: boolean
) => {
  img.loadPixels()

  //Sagen wir wir haben 12 thresholds
  //Wir teilen 0-255 in 12 Teile
  //Jeder Teil wird eine spezifische Farbe haben
  //Wir schauen nicht ob weiß oder schwarz sondern welche Farbe zu dem threshold passt
  //Spanne definieren 256 / 12 =>

  for (let i = 0; i < img.pixels.length; i += 4) {
    //Get the color Values for the pixel
    const r = img.pixels[i]
    const g = img.pixels[i + 1]
    const b = img.pixels[i + 2]

    let avgBrightness = (r + g + b) / 3

    //Contrast
    //(255 - 128) * 0.5 + 128 => 191,5
    avgBrightness = (avgBrightness - 128) * contrast + 128

    //Brightness
    avgBrightness = avgBrightness + brightness

    let value: number
    if (invert) {
      value = avgBrightness < threshold ? 255 : 0
    } else {
      value = avgBrightness > threshold ? 255 : 0
    }

    //Clamp Funktion => keep value between 0 and 255
    value = Math.max(0, Math.min(255, value))

    img.pixels[i] = value
    img.pixels[i + 1] = value
    img.pixels[i + 2] = value
    img.pixels[i + 3] = value === 255 ? 0 : 255
  }

  img.updatePixels()
}

export const ditherServcie = {
  standard: standardDither,
}
