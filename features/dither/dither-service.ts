const standardDither = (img: any, settings: any) => {
  img.loadPixels()

  const { contrast, threshold, brightness, invert } = settings

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
