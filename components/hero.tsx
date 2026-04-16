"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, ChevronRight } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToProducts = () => {
    const element = document.querySelector("#products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_0187.jpg"
          alt="Beautytech - Гоо сайхны технологи"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tagline */}
          <p
            className="
              mt-16 md:mt-20
              text-white/80
              text-xs sm:text-sm md:text-base
              tracking-[0.2em] md:tracking-[0.3em]
              uppercase
              mb-4
            "
          >
            RIBESKIN Брэндийн Монгол улс дахь албан ёсны борлуулагч
          </p>

          {/* Main Title */}
          <h1
            className="
              font-serif
              text-2xl
              sm:text-3xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              text-white
              font-light
              leading-snug
              mb-4
              max-w-[280px]
              sm:max-w-md
              md:max-w-2xl
              mx-auto
            "
          >
            <span className="block">Мэргэжлийн гоо сайхны </span>
            <span className="block mt-2 md:mt-6 font-medium">
          <span className="italic">бүтээгдэхүүн</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              max-w-[300px]
              sm:max-w-md
              md:max-w-2xl
              mx-auto
              text-white/80
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              leading-relaxed
              mb-8
            "
          >
            Солонгосын шилдэг мэргэжлийн гоо сайхны бүтээгдэхүүнийг Монгол улсад нэвтрүүлж,
            мэргэжлийн арьс арчилгааны шийдлүүдийг хүргэнэ.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={scrollToProducts}
              className="
                group
                flex items-center gap-2
                px-6 py-3 sm:px-8 sm:py-4
                bg-white text-foreground
                text-xs sm:text-sm
                font-medium
                tracking-wide uppercase
                transition-all
                hover:bg-accent hover:text-white
              "
            >
              Бүтээгдэхүүн үзэх
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#about"
              className="
                px-6 py-3 sm:px-8 sm:py-4
                border border-white/50
                text-white
                text-xs sm:text-sm
                font-medium
                tracking-wide uppercase
                transition-all
                hover:bg-white/10 hover:border-white
              "
            >
              Дэлгэрэнгүй
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`hidden sm:flex absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <button
            onClick={scrollToProducts}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
            aria-label="Доош гүйлгэх"
          >
            <span className="text-xs tracking-widest uppercase">Доош</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}