"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 800)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-md mx-4 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-gray-700 rounded-full p-1.5 transition-colors"
          aria-label="Хаах"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="relative w-full aspect-[4/3] bg-gray-100">
          <Image
            src="/popup-image.jpg"
            alt="Урамшуулал"
            fill
            className="object-cover"
          />
        </div>

        {/* Action button */}
        <div className="bg-white px-6 py-5 flex justify-center">
          <a
            href=""
            className="w-full text-center bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors text-sm tracking-wide"
          >
            Дэлгэрэнгүй үзэх
          </a>
        </div>
      </div>
    </div>
  )
}
