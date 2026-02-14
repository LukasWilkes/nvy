import { Field, FieldContent, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import useSidebarOptions, { TEffectType } from '@/stores/useSidebarOptions'
import { useSearchParams } from 'next/navigation'
import React from 'react'

type TColorPicker = {
    color: number[];
    effectType: TEffectType;
}

const ColorPicker = ({color, effectType}: TColorPicker) => {
    const {updateSettings, settings} = useSidebarOptions(state => state)
    
    
  return (            
        <Field>                    
            <FieldLabel>Wähle deine Farbe aus</FieldLabel>
            <Input defaultValue={`#${color.map(x => x.toString(16))?.join('')}`} onChange={(e) => {
                setTimeout(() => {
                    const color = e.target.value.replace('#', '');
        
                    const redValue = parseInt(color?.slice(0,2).padStart(2), 16) || 0;
                    const greenValue = parseInt(color?.slice(2,4), 16) || 0;
                    const blueValue = parseInt(color?.slice(4,6), 16) || 0;
                    let rgbCode = [redValue, greenValue, blueValue]                      

                    updateSettings(effectType, {color: rgbCode})
                }, 300)
            }} type={'color'} />        
            <FieldDescription>Wähle die Farbe der Tönung</FieldDescription>
        </Field>
    
  )
}

export default ColorPicker