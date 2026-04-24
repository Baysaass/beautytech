"use client"

import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: "carboxy-face",
    name: "CO2 Carboxy Therapy",
    subtitle: "Нүүрний карбокси эмчилгээ",
    description: "Зүүгүй CO₂ эмчилгээ. Арьсны хүчилтөрөгчийн солилцоог идэвхжүүлж, нөхөн төлжилтийг хурдасгана.",
    image: "/images/pro/IMG_1478.jpg",
    href: "/products/carboxy",
  },
  {
    id: "carboxy-body",
    name: "Carboxy Therapy Body",
    subtitle: "Биеийн карбокси эмчилгээ",
    description: "Цусны эргэлт болон арьсны уян хатан чанарыг сайжруулах биеийн эмчилгээ.",
    image: "/images/pro/IMG_0766.jpg",
    href: "/products/carboxy",
  },
  {
    id: "carboxy-care",
    name: "Carboxy Before & After Care",
    subtitle: "Өмнөх болон дараах арчилгаа",
    description: "CO₂ эмчилгээний үр дүнг нэмэгдүүлэх иж бүрэн арчилгааны систем.",
    image: "/images/pro/IMG_0191.jpg",
    href: "/products/carboxy",
  },
  {
    id: "gwang-peel",
    name: "Gwang Peel 72hr",
    subtitle: "Зөөлөн гуужуулалт",
    description: "Spicule + BHA хосолсон 72 цагийн нөхөн төлжүүлэх мэргэжлийн пилинг.",
    image: "/images/pro/IMG_1083.jpg",
    href: "/products/gpeel",
  },
  {
    id: "deep-shoot-ha",
    name: "Deep Shoot HA",
    subtitle: "Гүн чийгшүүлэх мэсо",
    description: "Гурвалсан гиалуроны хүчлээр арьсны гүн давхаргыг чийгшүүлж, уян хатан болгоно.",
    image: "/images/pro/IMG_1634.jpg",
    href: "/products/deep-shoot",
  },
  {
    id: "deep-shoot-aa",
    name: "Deep Shoot AA",
    subtitle: "Anti-aging skin booster",
    description: "PDRN, Glutathione, Growth Factor агуулсан олон үйлдэлт залуужуулах коктейль.",
    image: "/images/pro/IMG_0805.jpg",
    href: "/products/deep-shoot",
  },
]

export function ProfessionalProducts() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Мэргэжлийн бүтээгдэхүүнүүд
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
            Бүтээгдэхүүний <span className="italic font-medium">Каталог</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Гоо сайхны салон, спа төвүүдэд зориулсан мэргэжлийн арьс арчилгааны шийдлүүд
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group relative block overflow-hidden bg-card"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Always visible title */}
              <div className="p-5 bg-card">
                <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1">
                  {product.subtitle}
                </p>
                <h3 className="font-serif text-lg text-foreground font-light">
                  {product.name}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-card text-sm text-center max-w-[220px] mb-4">
                  {product.description}
                </p>
                <span className="px-6 py-2 border border-card/60 text-card text-xs tracking-wider uppercase">
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
