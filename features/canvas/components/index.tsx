'use client'

import { applyEffects } from '@/features/canvas/canvas-actions'

import {
  initialBaseProps,
  initialCanvasProps,
  initialViewPortProps,
} from '@/features/canvas/canvas-initial'

import { TSettings } from '@/features/canvas/canvas-types'
import { useArtboard } from '@/features/canvas/hooks/use-artboard'
import { useCanvasOptions } from '@/stores/useCanvasOptions'
import useSidebarOptions from '@/stores/useSidebarOptions'
import useViewPortOptions from '@/stores/useViewPortOptions'
import { NextReactP5Wrapper } from '@p5-wrapper/next'
import { Sketch } from '@p5-wrapper/react'
import { useSearchParams } from 'next/navigation'

const sketch: Sketch<TSettings> = (p5) => {
  let img: any | null
  let viewPortProps = initialViewPortProps
  let baseProps = initialBaseProps
  let canvasProps = initialCanvasProps

  let currentUrl = ''

  p5.setup = async () => {
    img = await p5.loadImage(baseProps?.imageUrl)
    p5.createCanvas(1080, 1080)
    p5.imageMode(p5.CENTER)

    p5.noLoop()
  }

  p5.updateWithProps = async (props) => {
    baseProps = props?.baseSettings
    viewPortProps = props.viewPortSettings
    canvasProps = props.canvasSettings

    if (baseProps.imageUrl && baseProps?.imageUrl !== currentUrl) {
      currentUrl = props.baseSettings.imageUrl
      img = await p5.loadImage(baseProps.imageUrl)
      p5.redraw()
    }

    if (props?.triggerSave) {
      p5.saveCanvas(`${viewPortProps?.fileName}.${viewPortProps?.imageFormat}`)
    }
    p5.redraw()
  }

  p5.draw = () => {
    if (!['png'].includes(viewPortProps?.imageFormat)) {
      p5.background(viewPortProps?.background)
    } else {
      p5.clear()
    }

    p5.push()

    p5.translate(canvasProps?.width / 2, canvasProps?.height / 2)
    p5.scale(viewPortProps?.scale)

    p5.fill(255, 100, 0)
    p5.rectMode(p5.CENTER)

    if (img) {
      let tempImg = img.get()
      applyEffects(
        p5,
        { ...baseProps, imageFormat: viewPortProps?.imageFormat },
        tempImg
      )
    }

    p5.pop()
  }
}

const Canvas = () => {
  const { translate, zoom, ref } = useArtboard()

  const { width, height } = useCanvasOptions((state) => state)
  const { settings: viewPortSettings, save } = useViewPortOptions(
    (state) => state
  )
  const { imageUrl, settings, effectVariant } = useSidebarOptions(
    (state) => state
  )

  const searchParams = useSearchParams()
  const effectType = searchParams.get('effect')

  return (
    <div
      ref={ref}
      className="flex relative overscroll-x-none overscroll-y-none w-full justify-center h-full items-center overflow-hidden"
    >
      <div
        className="absolute"
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
          transformOrigin: 'center center',
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <NextReactP5Wrapper
          sketch={sketch}
          triggerSave={save}
          baseSettings={{
            settings,
            imageUrl,
            type: effectType,
            color: [100, 100, 100],
            variant: effectVariant ?? 'default',
          }}
          viewPortSettings={viewPortSettings}
          canvasSettings={{ width, height }}
        />
      </div>
    </div>
  )
}

export default Canvas
