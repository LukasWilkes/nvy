import ColorPicker from '@/components/options/fields/color-picker'
import ImageUpload from '@/components/options/fields/image-upload'
import useSidebarOptions, {
  TEffects,
  TEffectType,
} from '@/stores/useSidebarOptions'

type TTintOptionsForm = {
  type: TEffectType
}

const TintOptionsForm = ({ type }: TTintOptionsForm) => {
  const { updateImageUrl, settings } = useSidebarOptions((state) => state)

  const tintSettings = settings[
    type as keyof typeof settings
  ] as TEffects['tint']

  return (
    <>
      <div className="px-4 hidden md:flex  items-center h-16 border-b">
        <h6 className="font-bold">Tint Effekt:</h6>
      </div>
      <div className="py-4 md:p-4">
        <ColorPicker color={tintSettings?.color} effectType={type} />
      </div>
    </>
  )
}

export default TintOptionsForm
