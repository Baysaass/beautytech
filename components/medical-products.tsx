"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield } from "lucide-react"

const medicalProducts = [
  {
    id: "betterfill",
    name: "Betterfill 56+",
    subtitle: "56+ Anti-Aging Actives | Skin Booster",
    description:
      "PDRN, Growth Factor, Glutathione, Peptide, Vitamin B Complex зэрэг 56+ идэвхт найрлагатай дэвшилтэт мезо эмчилгээний шийдэл. 35.52% үрчлээ сайжруулна.",
    image: "/images/pro/딥슛-라인-1-scaled-e1747127215610-2048x1783.png",
    href: "/products/betterfill",
  },
  {
    id: "betterfill-exo",
    name: "Betterfill EXO56+",
    subtitle: "PhytoEXO Technology | 56+ Actives",
    description:
      "Centella Asiatica болон 7 ургамлын экстрактаас гаргасан PhytoEXO технологи. Эсийн гүн нөхөн сэргэлтийг идэвхжүүлж, арьсны бүтцийг сайжруулна.",
    image: "/images/pro/IMG_1529.jpg",
    href: "/products/betterfill-exo",
  },
  {
    id: "dr-mal",
    name: "Dr. MAL PDT Therapy",
    subtitle: "Photodynamic Therapy | Acne Treatment",
    description:
      "10.8% Methyl-ALA агуулсан PDT photosensitizer. Батга үүсгэгч бактерийг сонгомлоор устгаж, LED (630nm) гэрэлтэй хослон өндөр үр дүн өгнө.",
    image: "/images/pro/닥터말-메인-배너-2.png",
    href: "/products/dr-mal",
  },
]

export function MedicalProducts() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Эмнэлгийн бүтээгдэхүүнүүд
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
            Бүтээгдэхүүний <span className="italic font-medium">Каталог</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Зөвхөн мэргэшсэн эмч нарт зориулсан эмнэлгийн түвшний бүтээгдэхүүнүүд
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {medicalProducts.map((product) => (
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

        {/* Warning Notice */}
        <div className="mt-20 p-8 bg-muted border border-border">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-foreground mb-2">
                Мэргэжлийн бүтээгдэхүүн
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Эдгээр бүтээгдэхүүнүүд нь зөвхөн мэргэшсэн эмч, арьс заслын
                мэргэжилтнүүдэд зориулагдсан. Худалдан авахын тулд мэргэжлийн
                гэрчилгээ шаардлагатай. Дэлгэрэнгүй мэдээлэл авахыг хүсвэл
                бидэнтэй холбогдоно уу.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
