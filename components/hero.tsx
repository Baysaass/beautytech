"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

/* ─────────────────────────────────────────────────────────────
   SLIDES — шинэ slide нэмэхийн тулд энэ array-д объект нэм
───────────────────────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    image: "/images/IMG_0187.jpg",
    tag: "RIBESKIN Брэндийн Монгол улс дахь албан ёсны борлуулагч",
    title: "Мэргэжлийн гоо\nсайхны",
    titleHighlight: "бүтээгдэхүүн",
    description:
      "Солонгосын шилдэг мэргэжлийн гоо сайхны бүтээгдэхүүнийг Монгол улсад нэвтрүүлж, мэргэжлийн арьс арчилгааны шийдлүүдийг хүргэнэ.",
    cta: { label: "Бүтээгдэхүүн үзэх", href: "#products", scroll: true },
    ctaSecondary: { label: "Дэлгэрэнгүй", href: "#about" },
  },
  {
    id: 2,
    image: "/images/IMG_0203.jpg",
    tag: "Мэргэжлийн шийдэл",
    title: "CO2 Carboxy &\nDeep Shoot",
    titleHighlight: "эмчилгээ",
    description:
      "Зүүгүй CO₂ эмчилгээ болон дэвшилтэт мезо технологиор арьсны нөхөн төлжилтийг хурдасгаж, гэрэлтсэн, залуу арьс бий болгоно.",
    cta: { label: "Мэргэжлийн шийдэл", href: "/solutions/professional", scroll: false },
    ctaSecondary: { label: "Дэлгэрэнгүй", href: "/products/carboxy" },
  },
  {
    id: 3,
    image: "/images/IMG_0184.jpg",
    tag: "Coming Soon",
    title: "Betterfill 56+",
    titleHighlight: "удахгүй нэвтэрнэ",
    description:
      "56+ идэвхт найрлагатай дэвшилтэт мезо эмчилгээний шийдэл. PDRN, Growth Factor, Glutathione хослолоор 35.52% үрчлээ сайжруулна.",
    cta: { label: "Мэдэгдэл авах", href: "#contact", scroll: false },
    ctaSecondary: { label: "Дэлгэрэнгүй", href: "/products/betterfill" },
  },
]
/* ─────────────────────────────────────────────────────────────
   Дээрх array-д нэмэлт slide оруулна:
   {
     id: 4,
     image: "/images/your-image.jpg",
     tag: "Promotion эсвэл мэдэгдэл",
     title: "Гарчиг",
     titleHighlight: "онцолсон үг",
     description: "Тайлбар текст",
     cta: { label: "Товч", href: "/link", scroll: false },
     ctaSecondary: { label: "Товч 2", href: "/link2" },
   }
───────────────────────────────────────────────────────────── */

const AUTOPLAY_DELAY = 5000

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setProgress(0)
      setCurrent((index + slides.length) % slides.length)
      setTimeout(() => setIsAnimating(false), 700)
    },
    [isAnimating]
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  /* Auto-play */
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setTimeout(next, AUTOPLAY_DELAY)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, isPaused, next])

  /* Progress bar */
  useEffect(() => {
    if (isPaused) return
    setProgress(0)
    const step = 100 / (AUTOPLAY_DELAY / 50)
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100))
    }, 50)
    return () => {
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [current, isPaused])

  /* Keyboard */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [next, prev])

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const slide = slides[current]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background images (fade transition) ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            "absolute inset-0 z-0 transition-opacity duration-700",
            i === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={s.image}
            alt={s.tag}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div
          key={current}
          className="animate-fade-in pt-20 md:pt-0"
          style={{ animation: "heroFadeIn 0.7s ease forwards" }}
        >
          {/* Tag */}
          <p className="text-white/70 text-xs sm:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 mt-16 md:mt-20">
            {slide.tag}
          </p>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-snug mb-4 max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto">
            {slide.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i > 0 && <span className="block mt-2 md:mt-4" />}
                {line}
              </span>
            ))}
            <span className="block mt-2 md:mt-4 font-medium italic">
              {slide.titleHighlight}
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-[300px] sm:max-w-md md:max-w-2xl mx-auto text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            {slide.description}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {slide.cta.scroll ? (
              <button
                onClick={() => scrollToSection(slide.cta.href)}
                className="group flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-foreground text-xs sm:text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent hover:text-white"
              >
                {slide.cta.label}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <Link
                href={slide.cta.href}
                className="group flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-foreground text-xs sm:text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent hover:text-white"
              >
                {slide.cta.label}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            <Link
              href={slide.ctaSecondary.href}
              className="px-6 py-3 sm:px-8 sm:py-4 border border-white/50 text-white text-xs sm:text-sm font-medium tracking-wide uppercase transition-all hover:bg-white/10 hover:border-white"
            >
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/30 text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all"
        aria-label="Өмнөх"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/30 text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all"
        aria-label="Дараах"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Dot indicators + progress ── */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="relative h-0.5 transition-all duration-300 overflow-hidden bg-white/30"
            style={{ width: i === current ? 40 : 20 }}
          >
            {i === current && (
              <span
                className="absolute inset-y-0 left-0 bg-white transition-none"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute bottom-24 md:bottom-28 right-6 md:right-10 z-20 text-white/40 text-xs tracking-widest hidden sm:block">
        <span className="text-white/80">{String(current + 1).padStart(2, "0")}</span>
        {" / "}
        {String(slides.length).padStart(2, "0")}
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex">
        <button
          onClick={() => scrollToSection("#products")}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          aria-label="Доош гүйлгэх"
        >
          <span className="text-xs tracking-widest uppercase">Доош</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* ── Bottom gradient ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-10" />

      {/* ── Keyframe animation ── */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
