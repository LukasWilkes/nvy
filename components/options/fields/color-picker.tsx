import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import useSidebarOptions, { TEffectType } from '@/stores/useSidebarOptions'
import React from 'react'

type TColorPicker = {
  color: number[]
  effectType: TEffectType
}

const ColorPicker = ({ color, effectType }: TColorPicker) => {
  const { updateSettings } = useSidebarOptions((state) => state)

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const color = e.target.value.replace('#', '')

      const redValue = parseInt(color?.slice(0, 2).padStart(2), 16) || 0
      const greenValue = parseInt(color?.slice(2, 4).padStart(2), 16) || 0
      const blueValue = parseInt(color?.slice(4, 6).padStart(2), 16) || 0
      let rgbCode = [redValue, greenValue, blueValue]

      updateSettings(effectType, { color: rgbCode })
    }, 300)
  }

  return (
    <Field>
      <FieldLabel>Wähle deine Farbe aus</FieldLabel>
      <Input
        defaultValue={`#${color.map((x) => x.toString(16))?.join('')}`}
        onChange={onColorChange}
        type={'color'}
      />
      <FieldDescription>Wähle die Farbe der Tönung</FieldDescription>
    </Field>
  )
}

export default ColorPicker
