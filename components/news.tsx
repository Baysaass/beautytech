"use client"

import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const news = [
  {
    id: 1,
    title: "RIBESKIN Betterfill 56+ шинэ бүтээгдэхүүн",
    excerpt:
      "Коллаген сэргээх шинэ технологи бүхий Betterfill 56+ бүтээгдэхүүн Монгол зах зээлд нэвтэрлээ.",
    date: "2026-04-01",
    displayDate: "2026 оны 4-р сарын 1",
    category: "Шинэ бүтээгдэхүүн",
    image: "/images/carboxy-therapy.jpg",
  },
  {
    id: 2,
    title: "IMCAS Paris 2026 олон улсын хурал",
    excerpt:
      "Beautytech LLC IMCAS Paris 2026 олон улсын гоо сайхны хуралд оролцож, шинэ технологиудтай танилцлаа.",
    date: "2026-03-15",
    displayDate: "2026 оны 3-р сарын 15",
    category: "Үйл явдал",
    image: "/images/deep-shoot.jpg",
  },
  {
    id: 3,
    title: "Мэргэжлийн сургалтын хөтөлбөр",
    excerpt:
      "Гоо сайхны мэргэжилтнүүдэд зориулсан RIBESKIN бүтээгдэхүүний ашиглалтын сургалт зохион байгуулагдлаа.",
    date: "2026-02-28",
    displayDate: "2026 оны 2-р сарын 28",
    category: "Сургалт",
    image: "/images/gpeel.jpg",
  },
]

export function News() {
  return (
    <section id="news" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Мэдээ мэдээлэл
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
              Сүүлийн <span className="italic font-medium">мэдээнүүд</span>
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Бүх мэдээ үзэх
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-background/90 text-foreground text-xs font-medium tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={item.date}>{item.displayDate}</time>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl text-foreground font-light mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  Дэлгэрэнгүй
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
