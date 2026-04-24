"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("popup-shown")) return
    const timer = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem("popup-shown", "1")
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-2xl"
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
        <div className="w-full bg-gray-100">
          <Image
            src="/popup-image.jpg"
            alt="Урамшуулал"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Action button */}
        <div className="bg-white px-6 py-4 flex justify-center">
          <a
            href="https://www.facebook.com/photo?fbid=1431509678991175&set=a.465552132253606"
            className="w-full text-center bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors text-sm tracking-wide"
          >
            Дэлгэрэнгүй үзэх
          </a>
        </div>
      </div>
    </div>
  )
}