import Canvas from '@/components/canvas'
import ViewPortOptions from '@/features/view-port-settings/components'
import React from 'react'

type Props = {}

const ArtboardPage = (props: Props) => {
  return (
    <>
      <Canvas />
      <ViewPortOptions />
    </>
  )
}

export default ArtboardPage
