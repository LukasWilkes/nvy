import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  mapRatioToSize,
  TAvailableRatios,
  useCanvasOptions,
} from '@/stores/useCanvasOptions'
import { RatioIcon } from 'lucide-react'

const CanvasSettings = () => {
  const { updateRatio, ratio } = useCanvasOptions((state) => state)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <RatioIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2">
        {Object.keys(mapRatioToSize)?.map((ratio) => (
          <Button
            onClick={() => {
              updateRatio(ratio as TAvailableRatios)
            }}
            key={ratio}
          >
            {ratio}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export default CanvasSettings
