import ImageUpload from '@/components/options/fields/image-upload'
import { Slider } from '@/components/ui/slider'
import useSidebarOptions, {
  TEffects,
  TEffectType,
} from '@/stores/useSidebarOptions'
import { Eclipse } from 'lucide-react'
import React from 'react'
import StandardDitherForm from './standard-dither-form'

type TDitherOptionsForm = {
  type: TEffectType
}

const ditherTypes = ['standard', 'floyd_steinberg']

const MAP_DITHER_TYPE_TO_FORM = {
  standard: StandardDitherForm,
}

const DitherOptionsForm = ({ type }: TDitherOptionsForm) => {
  const { updateImageUrl, settings, effectVariant } = useSidebarOptions(
    (state) => state
  )
  const ditherSettings = settings[
    type as keyof typeof settings
  ] as TEffects['dither']

  if (!Object.keys(MAP_DITHER_TYPE_TO_FORM).includes(effectVariant)) {
    return null
  }

  const Component =
    MAP_DITHER_TYPE_TO_FORM[
      effectVariant as keyof typeof MAP_DITHER_TYPE_TO_FORM
    ]

  return (
    <>
      <div className="h-16 flex-none border-b px-4 flex items-center">
        <h6 className="font-bold">Dither Algorithmen</h6>
      </div>
      <div className="px-4 py-4">
        <Component />
      </div>
    </>
  )
}

export default DitherOptionsForm
