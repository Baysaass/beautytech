"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sun, Moon, Sparkles } from "lucide-react"

const homeProducts = [
  {
    id: "sos-spot-patch",
    name: "SOS Spot Patch",
    subtitle: "Батганы өмнөх ба дараах арчилгааны наалт",
    category: "ACNE CARE SOLUTIONS",
    description:
      "Батганы үе шат бүрт тохирсон, үрэвслийг намдааж, нөхөн сэргээх 2 үйлдэлт наалт.",
    image: "/images/home/sos.jpg",
    treatmentArea: "Нүүр",
    skinType: "Бүх төрөл",
    format: "-",
  },
  {
    id: "nicomed",
    name: "NICOMED® Cream",
    subtitle: "Процедурын дараах арьс тайвшруулах, үрэвслийн эсрэг крем",
    category: "POST-PROCEDURE CARE",
    description:
      "Арьсны эмчилгээ болон процедурын дараах үрэвсэл, улайлт, цочролыг бууруулж, арьсыг тайвшруулан нөхөн сэргээх үйлчилгээтэй крем.",
    image: "/images/home/Nicomed.png",
    treatmentArea: "Нүүр",
    skinType: "Бүх төрөл",
    format: "15g",
  },
  {
    id: "bruderm",
    name: "BRUDERM® Cream",
    subtitle: "Хөхрөлт, хавдар бууруулах нөхөн сэргээх крем",
    category: "POST-PROCEDURE CARE",
    description:
      "Гоо сайхны болон арьсны эмчилгээний дараах хөхрөлт, хавдрыг бууруулж, эдгэрэлтийг хурдасгах үйлчилгээтэй нөхөн сэргээх крем.",
    image: "/images/home/bruderm.png",
    treatmentArea: "Нүүр",
    skinType: "Бүх төрөл",
    format: "30g / 10g",
  },
{
  id: "actan-cream",
  name: "ACTAN Plus 2% Cream",
  subtitle: "Гүн чийгшүүлэх, арьсны хамгаалах давхарга сэргээх крем",
  category: "SKIN BARRIER CARE",
  description:
    "Хуурайшсан, мэдрэмтгий болон гэмтсэн арьсыг гүнээс чийгшүүлж, хамгаалах давхаргыг сэргээх өдөр тутмын арчилгааны крем.",
  price: "210,000₮",
  image: "/images/home/actancream.png",
  routine: "Өглөө & Орой",
  treatmentArea: "Нүүр",
  skinType: "Хуурай, мэдрэмтгий",
  format: "150 ml",
},
{
  id: "actan-serum",
  name: "ACTAN Plus Ectoin 2% Serum",
  subtitle: "Barrier сэргээх, үрэвсэл намдаах, гүн чийгшүүлэх серум",
  category: "SKIN BARRIER CARE",
  description:
    "Гэмтсэн, мэдрэмтгий болон хэт хуурайшсан арьсыг гүнээс чийгшүүлж, хамгаалах давхаргыг сэргээн, үрэвслийг бууруулах нөхөн сэргээх серум.",
  price: "—",
  image: "/images/home/actanserum.png",
  routine: "Өглөө & Орой",
  treatmentArea: "Нүүр",
  skinType: "Мэдрэмтгий, хуурай",
  format: "20 ml",
},
{
  id: "EFI",
  name: "EFI Regeneration Cream",
  subtitle: "Growth factor-той нөхөн сэргээх пост-процедур крем",
  category: "POST-PROCEDURE CARE",
  description:
    "Лазер болон арьсны эмчилгээний дараах гэмтсэн арьсыг хурдан нөхөн сэргээж, сорвижилт болон нөсөөжилтөөс сэргийлэх өндөр үйлчилгээтэй крем.",
  price: "24,000₮",
  image: "/images/home/efi.png",
  routine: "Процедурын дараа",
  treatmentArea: "Нүүр",
  skinType: "Мэдрэмтгий, гэмтсэн арьс",
  format: "20g / 10g",
}
]

export function HomeProducts() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light">
            Гэрийн <span className="italic font-medium">Арчилгаа</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Өдөр тутмын арьс арчилгааны бүрэн цуглуулга
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeProducts.map((product) => (
            <div key={product.id} className="group relative bg-card">

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-card/95 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-6">
                  
                  {/* Top */}
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-accent text-xs uppercase">
                      {product.category}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="space-y-2 border-t border-border pt-4 text-sm">
                    <div className="flex justify-between">
                      <span>Хэрэглэх хэсэг</span>
                      <span>{product.treatmentArea || "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Арьсны төрөл</span>
                      <span>{product.skinType || "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Хэмжээ</span>
                      <span>{product.format || "-"}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    href={`/products/home/${product.id}`}
                    className="mt-4 block text-center py-3 bg-foreground text-background text-sm uppercase tracking-wide"
                  >
                    Бүтээгдэхүүн үзэх
                  </Link>

                </div>
              </div>

              {/* Normal State */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {product.name}
                </h3>

                <div className="flex justify-center mb-3">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Routine Section */}
        <div className="mt-20 bg-muted p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl text-foreground">
              Өдөр тутмын <span className="italic">Арьс арчилгаа</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Morning */}
            <div className="bg-card p-6 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-6 h-6 text-accent" />
                <h4>Өглөөний арчилгаа</h4>
              </div>
            </div>

            {/* Evening */}
            <div className="bg-card p-6 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Moon className="w-6 h-6 text-accent" />
                <h4>Оройн арчилгаа</h4>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase"
          >
            Захиалга өгөх
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}