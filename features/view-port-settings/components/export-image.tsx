import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Field, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useViewPortOptions from '@/stores/useViewPortOptions'
import { Share } from 'lucide-react'
import { useState } from 'react'

type Props = {}

const ExportImage = (props: Props) => {
  const {
    save,
    settings: viewPortSettings,
    triggerSave,
    setSettings: setViewPortSettings,
  } = useViewPortOptions()
  const supportedImageFormats = ['jpg', 'png']
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="" asChild>
        <Button>
          <span className="sr-only md:not-sr-only">Export</span>
          <Share />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md font-mono text-foreground">
        <DialogHeader>
          <DialogTitle>Bild exportieren</DialogTitle>
          <DialogDescription>
            Wie möchtest du dein Bild speichern?
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="name-1">Dateiname</Label>
            <Input
              id="name-1"
              name="name"
              onChange={(e) => {
                e.preventDefault()
                setTimeout(() => {
                  setViewPortSettings({ fileName: e.target.value })
                }, 200)
              }}
              defaultValue="export"
            />
          </Field>
          <Field>
            <Label htmlFor="username-1">Bildformat</Label>
            <Select
              defaultValue={viewPortSettings?.imageFormat}
              onValueChange={(value) => {
                setViewPortSettings({ imageFormat: value })
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {supportedImageFormats?.map((iFormat) => (
                  <SelectItem key={iFormat} value={iFormat}>
                    {iFormat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Export abbrechen</Button>
          </DialogClose>
          <Button
            onClick={() => {
              triggerSave(true)

              setTimeout(() => {
                triggerSave(false)
                setIsOpen(false)
              }, 300)
            }}
            type="submit"
          >
            <span>{save ? 'Exportiere Bild' : 'Bild exportieren'}</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ExportImage
