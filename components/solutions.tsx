"use client"

import Image from "next/image"
import Link from "next/link"

const solutions = [
  {
    id: "home",
    title: "Гэрийн арчилгаа",
    subtitle: "home solutions",
    description: "Өдөр тутмын арьс арчилгааны бүтээгдэхүүнүүд",
    image: "/images/IMG_0231.jpg",
    href: "/solutions/home",
  },
  {
    id: "professional",
    title: "Мэргэжлийн шийдэл",
    subtitle: "professional cosmetic solutions",
    description: "Гоо сайхны салонд зориулсан мэргэжлийн бүтээгдэхүүнүүд",
    image: "/images/IMG_0203.jpg",
    href: "/solutions/professional",
  },
  {
    id: "medical",
    title: "Эмнэлгийн шийдэл",
    subtitle: "medical solutions",
    description: "Эмнэлгийн түвшний арьс засал эмчилгээний бүтээгдэхүүнүүд",
    image: "/images/IMG_0184.jpg",
    href: "/solutions/medical",
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Бүтээгдэхүүний ангилал
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
            Манай <span className="italic font-medium">Шийдлүүд</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Та өөрийн хэрэгцээнд тохирсон бүтээгдэхүүнүүдийг сонгоно уу
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              href={solution.href}
              className="group relative block overflow-hidden bg-background"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title Overlay */}
              <div className="text-white absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-white text-foreground group-hover:text-card text-lg font-light tracking-wide transition-colors duration-500">
                  {solution.subtitle}
                </h3>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xs tracking-[0.2em] uppercase mb-2">
                  {solution.title}
                </span>
                <p className="text-black text-sm text-center max-w-[200px]"
                style={{ textShadow: "10 10 40px rgba(255,255,255,10)" }}>
                  
                  {solution.description}
                  
                </p>
                <span className="mt-4 px-6 py-2 border border-card/50 text-card text-xs tracking-wider uppercase">
                  Дэлгэрэнгүй
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
