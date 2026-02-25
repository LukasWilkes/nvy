import Canvas from '@/features/canvas/components'
import ViewPortOptions from '@/features/view-port-settings/components'

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
