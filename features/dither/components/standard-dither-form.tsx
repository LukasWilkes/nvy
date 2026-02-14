import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import useSidebarOptions from '@/stores/useSidebarOptions'

type Props = {}

const StandardDitherForm = (props: Props) => {
  const { settings, updateSettings } = useSidebarOptions()
  const standardThresholdDither = settings['dither']?.standard

  const updateStandardDither = (option: string, value: any) => {
    setTimeout(() => {
      updateSettings('dither', {
        standard: { ...standardThresholdDither, [option]: value },
      })
    }, 100)
  }

  return (
    <div className="flex flex-col gap-8 font-mono">
      <div>
        <h6 className="font-bold mb-2">Standard Threshold Dithering</h6>
        <p className="text-xs opacity-80">
          Berechnung auf Basis der durchschnittlichen Helligkeit.
        </p>
      </div>
      <Field>
        <FieldLabel className="flex justify-between">
          <span>Threshold:</span>
          <Input
            className="rounded-none h-6 w-14 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type={'number'}
            value={standardThresholdDither?.threshold}
            onChange={(e) => {
              updateStandardDither('threshold', Number(e.target.value))
            }}
          />
        </FieldLabel>
        <Slider
          min={1}
          max={255}
          step={5}
          value={[standardThresholdDither?.threshold]}
          onValueChange={(value) => {
            updateStandardDither('threshold', value.at(0))
          }}
        />
      </Field>
      <Field>
        <FieldLabel className="flex justify-between">
          <span>Kontrast:</span>
          <Input
            className="rounded-none h-6 w-14 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type={'number'}
            value={standardThresholdDither?.contrast}
            onChange={(e) => {
              const value = Number(e.target.value)
              if (value >= 0.1 && value <= 2) {
                updateStandardDither('contrast', Number(e.target.value))
              }
            }}
          />
        </FieldLabel>
        <Slider
          min={0.1}
          max={2}
          step={0.1}
          value={[standardThresholdDither?.contrast]}
          onValueChange={(value) => {
            updateStandardDither('contrast', value.at(0))
          }}
        />
      </Field>
      <Field>
        <FieldLabel className="flex justify-between">
          <span>Brightness:</span>
          <Input
            className="rounded-none h-6 w-14 text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type={'number'}
            value={standardThresholdDither?.brightness}
            onChange={(e) => {
              const value = Number(e.target.value)
              if (value >= -100 && value <= 100) {
                updateStandardDither('brightness', Number(e.target.value))
              }
            }}
          />
        </FieldLabel>
        <Slider
          min={-100}
          max={100}
          step={1}
          value={[standardThresholdDither?.brightness]}
          onValueChange={(value) => {
            updateStandardDither('brightness', value.at(0))
          }}
        />
      </Field>

      <Field className="flex-row">
        <FieldLabel htmlFor="shadows">Schatten</FieldLabel>
        <Input
          className="!w-10 !p-1 !py-1"
          id="shadows"
          onChange={(e) => {
            updateStandardDither('shadows', e.target.value)
          }}
          defaultValue={standardThresholdDither?.shadows}
          type={'color'}
        />
      </Field>
      <Field className="flex flex-row">
        <FieldLabel htmlFor="highlights">Highlights</FieldLabel>
        <Input
          className="!w-10 !p-1 !py-1"
          id="highlights"
          onChange={(e) => {
            updateStandardDither('highlights', e.target.value)
          }}
          defaultValue={standardThresholdDither?.highlights}
          type={'color'}
        />
      </Field>

      <Field className="flex-row justify-between w-full">
        <FieldLabel htmlFor="invert">
          <span>Invertieren:</span>
        </FieldLabel>
        <Checkbox
          id="invert"
          className="size-6 !w-6 rounded-none"
          checked={standardThresholdDither?.invert}
          onCheckedChange={(checked) => {
            updateStandardDither('invert', checked)
          }}
        />
      </Field>
    </div>
  )
}

export default StandardDitherForm
