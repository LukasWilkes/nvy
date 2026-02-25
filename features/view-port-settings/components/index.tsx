'use client'

import ImageUpload from '@/components/options/fields/image-upload'
import ExportImage from '@/features/view-port-settings/components/export-image'
import MobileSettings from '@/components/options/mobile-options'
import Logo from '@/components/common/logo'
import { InfoIcon } from 'lucide-react'

const ViewPortOptions = () => {
  return (
    <>
      <div className="bg-sidebar/80 backdrop-blur-md lg:hidden h-14 absolute top-0 left-0 w-full border-b text-muted-foreground flex font-mono text-xs items-center justify-center px-6 z-50">
        <p className="leading-tight flex gap-3 items-center">
          <span className="mr-2">
            <InfoIcon />
          </span>
          Mobile Optimierung folgt. Nutze für das volle Erlebnis die
          Desktop-Version.
        </p>
      </div>
      <div className="border-t gap-4 justify-between sm:border fixed duration-300 ease-in-out  left-0 bottom-0 sm:bottom-4 flex items-center px-4 sm:left-1/2 sm:-translate-x-1/2 h-16  bg-sidebar w-full sm:w-auto">
        <MobileSettings />

        <Logo className="block md:hidden" />
        <div className="flex gap-4">
          <ImageUpload />
          <ExportImage />
        </div>
      </div>
    </>
  )
}

export default ViewPortOptions
