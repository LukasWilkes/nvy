'use client'
import ImageUpload from '@/components/options/fields/image-upload'
import CanvasSettings from '@/features/view-port-settings/components/canvas-settings'
import ExportImage from '@/features/view-port-settings/components/export-image'
import { useSearchParams } from 'next/navigation'

const ViewPortOptions = () => {
  const searchParams = useSearchParams()
  const effectType = searchParams?.get('effect')

  if (!effectType) {
    return null
  }

  return (
    <div className="border fixed bottom-4 flex items-center px-4 left-1/2 -translate-x-1/2 h-16  bg-sidebar w-[calc(100%_-_4rem)] lg:w-auto">
      <div className="flex gap-4 w-full">
        <ImageUpload />
        <ExportImage />
      </div>
    </div>
  )
}

export default ViewPortOptions
