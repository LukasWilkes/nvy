'use client'

import ImageUpload from '@/components/options/fields/image-upload'
import ExportImage from '@/features/view-port-settings/components/export-image'
import MobileSettings from '@/components/options/mobile-options'
import Logo from '@/components/common/logo'

const ViewPortOptions = () => {
  return (
    <div className="border-t gap-4 justify-between sm:border fixed duration-300 ease-in-out  left-0 bottom-0 sm:bottom-4 flex items-center px-4 sm:left-1/2 sm:-translate-x-1/2 h-16  bg-sidebar w-full sm:w-auto">
      <div className="flex md:hidden gap-4">
        <MobileSettings />
      </div>
      <Logo className="block md:hidden" />
      <div className="flex gap-4">
        <ImageUpload />
        <ExportImage />
      </div>
    </div>
  )
}

export default ViewPortOptions
