'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

const galleryImages = [
  { src: '/gallery/gal7.png', alt: 'Customer photo of a Jolt watch' },
  { src: '/contrast/fig07.png', alt: 'Customer photo of a Jolt watch' },
  { src: '/gallery/gal1.png', alt: 'Customer photo of a Jolt watch' },
  { src: '/gallery/gal4.png', alt: 'Customer photo of a Jolt watch' },
  { src: '/gallery/gal5.png', alt: 'Customer photo of a Jolt watch' },
  { src: '/gallery/gal6.png', alt: 'Customer photo of a Jolt watch' },
]

export default function GalleryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{
    pointerId: number
    startX: number
    startScrollLeft: number
    lastX: number
    lastTime: number
    velocity: number
  } | null>(null)
  const momentumFrameRef = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  function stopMomentum() {
    if (momentumFrameRef.current !== null) {
      cancelAnimationFrame(momentumFrameRef.current)
      momentumFrameRef.current = null
    }
  }

  function startMomentum(velocity: number) {
    const track = trackRef.current
    if (!track || Math.abs(velocity) < 0.15) {
      setIsDragging(false)
      return
    }

    let previousTime = performance.now()
    const animate = (time: number) => {
      const currentTrack = trackRef.current
      if (!currentTrack) {
        momentumFrameRef.current = null
        setIsDragging(false)
        return
      }

      const elapsed = Math.min(time - previousTime, 32)
      previousTime = time
      currentTrack.scrollLeft += velocity * elapsed
      velocity *= Math.pow(0.94, elapsed / 16.67)

      if (Math.abs(velocity) < 0.015) {
        momentumFrameRef.current = null
        setIsDragging(false)
        return
      }

      momentumFrameRef.current = requestAnimationFrame(animate)
    }

    momentumFrameRef.current = requestAnimationFrame(animate)
  }

  function scrollToImage(index: number) {
    stopMomentum()
    setIsDragging(false)

    const track = trackRef.current
    const image = track?.children[index]

    if (!track || !image) return

    track.scrollTo({
      left: (image as HTMLElement).offsetLeft - track.offsetLeft,
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  function updateActiveImage() {
    const track = trackRef.current
    if (!track) return

    const images = Array.from(track.children) as HTMLElement[]
    const closestImage = images.reduce((closest, image, index) => {
      const distance = Math.abs(image.offsetLeft - track.offsetLeft - track.scrollLeft)
      const closestDistance = Math.abs(closest.offsetLeft - track.offsetLeft - track.scrollLeft)
      return distance < closestDistance ? image : closest
    }, images[0])

    setActiveIndex(images.indexOf(closestImage))
  }

  return (
    <div aria-label="Customer photo carousel" className="mt-8 flex items-center gap-2 sm:gap-4">
      <button
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#152b25]/20 transition-colors hover:bg-white/60 disabled:opacity-40"
        type="button"
        onClick={() => scrollToImage(Math.max(activeIndex - 1, 0))}
        disabled={activeIndex === 0}
        aria-label="Previous customer photo"
      >
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <div
        ref={trackRef}
        className={`flex min-w-0 flex-1 select-none gap-3 overflow-x-auto pb-3 md:gap-5 ${
          isDragging
            ? 'cursor-grabbing snap-none'
            : 'cursor-grab snap-x snap-mandatory'
        }`}
        onScroll={updateActiveImage}
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse' || event.button !== 0) return

          stopMomentum()
          dragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startScrollLeft: event.currentTarget.scrollLeft,
            lastX: event.clientX,
            lastTime: performance.now(),
            velocity: 0,
          }
          setIsDragging(true)
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current
          if (!drag || drag.pointerId !== event.pointerId) return

          const distance = event.clientX - drag.startX
          const now = performance.now()
          const elapsed = now - drag.lastTime
          if (elapsed > 0) {
            drag.velocity = Math.max(-1.5, Math.min(1.5, -(event.clientX - drag.lastX) / elapsed))
          }
          drag.lastX = event.clientX
          drag.lastTime = now
          event.preventDefault()
          event.currentTarget.scrollLeft = drag.startScrollLeft - distance
        }}
        onPointerUp={(event) => {
          const drag = dragRef.current
          if (drag?.pointerId !== event.pointerId) return

          dragRef.current = null
          event.currentTarget.releasePointerCapture(event.pointerId)
          startMomentum(drag.velocity)
        }}
        onPointerCancel={() => {
          dragRef.current = null
          setIsDragging(false)
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {galleryImages.map((image) => (
          <figure key={image.src} className="w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white/70 sm:w-1/2 md:w-1/3">
            <Image
              className="aspect-[4/5] w-full object-cover"
              src={image.src}
              alt={image.alt}
              width={480}
              height={500}
              draggable={false}
            />
          </figure>
        ))}
      </div>
      <button
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#152b25]/20 transition-colors hover:bg-white/60 disabled:opacity-40"
        type="button"
        onClick={() => scrollToImage(Math.min(activeIndex + 1, galleryImages.length - 1))}
        disabled={activeIndex === galleryImages.length - 1}
        aria-label="Next customer photo"
      >
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
