import { useEffect, useRef } from 'react'
import seasonBook from '@/assets/season-book.avif'

function removeWhiteBackground(img: HTMLImageElement) {
  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(img, 0, 0)

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const d = imageData.data

  for (let i = 0; i < d.length; i += 4) {
    const whiteness = Math.min(d[i], d[i + 1], d[i + 2]) / 255
    if (whiteness > 0.78) {
      d[i + 3] = Math.round(d[i + 3] * (1 - (whiteness - 0.78) / 0.22))
    }
  }

  ctx.putImageData(imageData, 0, 0)
  img.src = canvas.toDataURL('image/png')
}

export function HeroBook() {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    const process = () => removeWhiteBackground(img)
    if (img.complete && img.naturalWidth) process()
    else img.addEventListener('load', process)
  }, [])

  return (
    <div
      className="relative flex justify-center items-end"
      style={{ animation: 'bookfloat 5s ease-in-out infinite' }}
    >
      <img
        ref={imgRef}
        src={seasonBook}
        alt="Season reading book"
        className="w-full max-w-[380px] relative z-10"
        crossOrigin="anonymous"
      />
      {/* grounding shadow */}
      <div
        className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-[200px] h-[24px] rounded-full z-0"
        style={{
          background: 'oklch(0.62 0.13 195 / 0.35)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  )
}
