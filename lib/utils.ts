import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function HexCodeColorToRGB(color: string) {
  const colorValues = color.replace('#', '')

  const redValues = parseInt(colorValues.slice(0, 2).padStart(2), 16)
  const greenValues = parseInt(colorValues.slice(2, 4).padStart(2), 16)
  const blueValues = parseInt(colorValues.slice(4, 6).padStart(2), 16)

  return { r: redValues, g: greenValues, b: blueValues }
}

export function RGBColorToHexCode(colorValues: {
  r: number
  g: number
  b: number
}) {
  const { r, g, b } = colorValues
  const hexCode = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}}`

  return hexCode
}
