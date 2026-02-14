import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import useSidebarOptions from '@/stores/useSidebarOptions'
import { ImageIcon } from 'lucide-react'
import { useRef } from 'react'

const ImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const updateImageUrl = useSidebarOptions((state) => state.updateImageUrl)
  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e: any) => {
          const file = e.target.files[0]
          if (e.target.files[0]) {
            const localUrl = URL.createObjectURL(file)

            updateImageUrl(localUrl)
          }
        }}
        className="hidden" // Das Input ist unsichtbar
        accept="image/*"
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
