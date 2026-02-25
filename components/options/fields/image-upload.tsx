import { Button } from '@/components/ui/button'
import useSidebarOptions from '@/stores/useSidebarOptions'
import { ImageIcon } from 'lucide-react'
import { ChangeEvent, ChangeEventHandler, InputEvent, useRef } from 'react'

import { toast } from 'sonner'

const ImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const updateImageUrl = useSidebarOptions((state) => state.updateImageUrl)

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0]

      if (!file) return

      const fileSizeInMB = file.size / 1024 / 1024

      if (fileSizeInMB > 2.5) {
        throw new Error('Die Datei ist größer als 2,5 MB.')
      }

      const img = new Image()
      const localUrl = URL.createObjectURL(file)

      img.onload = () => {
        const width = img.naturalWidth
        const height = img.naturalHeight

        if (width > 1600 && height > 1600) {
          toast('Dein Bild ist größer als 1600 x 1600px.', {
            position: 'top-center',
          })
          return
        }
        updateImageUrl(localUrl)
      }

      img.src = localUrl
    } catch (error) {
      let errorMessage
      if (error instanceof Error) {
        errorMessage = error.message
      } else {
        errorMessage = 'Es ist ein unbekannt Fehler aufgetreten.'
      }

      toast(errorMessage, { position: 'top-center' })
    }
  }
  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
        accept="image/jpeg"
      />

      <Button
        variant={'secondary'}
        onClick={() => {
          if (fileInputRef?.current) {
            fileInputRef?.current.click()
          }
        }}
      >
        <span className="sr-only lg:not-sr-only">Select Image</span>
        <ImageIcon />
      </Button>
    </>
  )
}

export default ImageUpload
