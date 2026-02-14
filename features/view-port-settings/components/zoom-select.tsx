import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import useViewPortOptions from '@/stores/useViewPortOptions'
import { Check, ChevronDown, ZoomInIcon, ZoomOutIcon } from 'lucide-react'

const zoomOptions = [
  {
    name: 'Zoom to 50%',
    value: 0.5,
  },
  {
    name: 'Zoom to 75%',
    value: 0.75,
  },
  {
    name: 'Zoom to 200%',
    value: 2,
  },
  {
    name: 'Zoom to fit',
    value: 1,
  },
]

export function ViewPortZoom() {
  const { setSettings, settings } = useViewPortOptions((state) => state)
  const selectedZoomOption = zoomOptions?.find(
    (zOption) => zOption.value === settings?.scale
  )

  return (
    <>
      <div className=" flex items-center">
        <Button
          variant={'secondary'}
          size="icon"
          className="rounded-r-none"
          onClick={() => {
            setSettings({ scale: settings?.scale - 0.05 })
          }}
        >
          <ZoomOutIcon />
        </Button>

        <Popover>
          <PopoverTrigger className="w-24 rounded-none justify-between" asChild>
            <Button variant="secondary">
              {(settings?.scale * 100)?.toFixed(0)}%<ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col">
              {zoomOptions?.map((zOption) => (
                <Button
                  variant={'ghost'}
                  className="justify-between"
                  key={zOption.name}
                  onClick={() => {
                    setSettings({ scale: zOption.value })
                  }}
                >
                  {zOption.name}
                  {selectedZoomOption?.value === zOption.value && <Check />}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant={'secondary'}
          size="icon"
          className="rounded-l-none"
          onClick={() => {
            setSettings({ scale: settings?.scale + 0.05 })
          }}
        >
          <ZoomInIcon />
        </Button>
      </div>
    </>
  )
}
