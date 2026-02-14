import { Effects } from '@/stores/useSidebarOptions'
import { TBaseProps, TCanvasProps, TViewPortProps } from './canvas-types'

export let initialViewPortProps: TViewPortProps = {
  scale: 1,
  background: [255, 255, 255],
  imageFormat: 'jpg',
  fileName: 'export',
}
export let initialBaseProps: TBaseProps = {
  imageUrl: '/test-image.jpg',
  color: [100, 100, 100],
  type: 'default',
  settings: Effects,
  variant: null,
}

export let initialCanvasProps: TCanvasProps = {
  width: 1080,
  height: 1080,
}
