'use client'

import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'

const greetings = [
  'Hello!',
  'Xin chào!',
  'Kumusta!',
  'Bonjour!',
  'Hola!',
  'Hallo!',
  'Ciao!',
  'こんにちは!',
  '안녕하세요!',
  '你好!',
  'Привет!',
  'Merhaba!',
  'Olá!',
  'שלום!',
  'مرحبا!',
]

const HelloMarquee: FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)

  useEffect(() => {
    if (marqueeRef.current) {
      setContentWidth(marqueeRef.current.scrollWidth)
    }
  }, [])

  const speed = 80 // px per second
  const duration = contentWidth ? contentWidth / speed : 15

  return (
    <div className="w-full overflow-hidden relative h-16 flex items-center bg-transparent">
      <div
        className="flex w-fit animate-marquee pause-on-hover"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex" ref={marqueeRef}>
          {greetings.map((greet) => (
            <span
              className="text-4xl font-medium text-gray-400 mr-12 tracking-wide whitespace-nowrap select-text"
              key={greet}
            >
              {greet}
            </span>
          ))}
        </div>
        <div className="flex">
          {greetings.map((greet) => (
            <span
              className="text-4xl font-medium text-gray-400 mr-12 tracking-wide whitespace-nowrap select-text"
              key={`copy-${greet}`}
            >
              {greet}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HelloMarquee
