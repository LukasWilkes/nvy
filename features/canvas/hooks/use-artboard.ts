import React, { useCallback, useEffect, useRef, useState } from 'react'
import { handleShortcuts, handleWheel } from '../canvas-actions'

type TTranslateData = {
  x: number
  y: number
}

export const useArtboard = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [zoom, setZoom] = useState(1)
  const [translate, setTranslate] = useState<TTranslateData>({ x: 0, y: 0 })

  const onWheel = useCallback(
    (e: WheelEvent) => handleWheel(e, setZoom, setTranslate),
    []
  )

  useEffect(() => {
    const wrapper = wrapperRef?.current
    if (!wrapper) return

    wrapper.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      wrapper.removeEventListener('wheel', onWheel)
    }
  }, [])

  useEffect(() => {
    const listener = (e: KeyboardEvent) =>
      handleShortcuts(e, setTranslate, setZoom)

    document.addEventListener('keydown', listener, { passive: false })
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  return {
    translate,
    zoom,
    onWheel,
    ref: wrapperRef,
  }
}
