"use client"

import Image from "next/image"
import { Award, Users, Globe, Shield } from "lucide-react"

const stats = [
  { number: "10+", label: "Жилийн туршлага" },
  { number: "377+", label: "Хамтрагч гоо сайхны төв" },
  { number: "20,000", label: "Сэтгэл хаманжтай үйлчлүүлэгчид" },
  { number: "300+", label: "Ribeskin албан ёсны certification" },
]

const values = [
  {
    icon: Award,
    title: "Чанар",
    description: "RIBESKIN брэндийн баталгаат, чанартай бүтээгдэхүүнүүдийг албан ёсны сувгаар оруулж ирнэ.",
  },
  {
    icon: Users,
    title: "Мэргэжлийн баг",
    description: "Гоо сайхны салбарт мэргэшсэн, туршлагатай мэргэжилтнүүдийн баг хамт олон.",
  },
  {
    icon: Globe,
    title: "Олон улсын стандарт",
    description: "Солонгосын болон дэлхийн 45+ орны гоо сайхны стандартад нийцсэн бүтээгдэхүүн, үйлчилгээ.",
  },
  {
    icon: Shield,
    title: "Найдвартай байдал",
    description: "Бүтээгдэхүүний аюулгүй байдал, үр дүнтэй ажиллагааг баталгаажуулсан.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/IMG_1345.jpg"
                alt="Beautytech LLC - Бидний тухай"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-card p-6 lg:p-8 shadow-2xl border border-border max-w-xs">
              <p className="text-accent text-sm tracking-widest uppercase mb-2">Туршлага</p>
              <p className="font-serif text-4xl lg:text-5xl text-foreground font-light">10+</p>
              <p className="text-muted-foreground text-sm mt-2">
                Жилийн турш Монгол улсын гоо сайхны салбарт үйл ажиллагаа явуулж байна
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Бидний тухай
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light mb-6">
              Beautytech <span className="italic font-medium">LLC</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Beautytech LLC нь Солонгосын RIBESKIN брэндийн Монгол улс дахь албан ёсны 
              борлуулагч бөгөөд 2014 оноос хойш мэргэжлийн гоо сайхны салбарт 
              чанараар тэргүүлэгч байр суурийг эзэлж ирсэн.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Бид Carboxy therapy, Deep Shoot, G-Peel, betterfill зэрэг мэргэжлийн арьс 
              арчилгааны бүтээгдэхүүнүүдийг Монгол улсад нийлүүлж, Мэргэжлийн гоо сайхны төвүүд, 
              эмнэлгүүдэд бүтээгдэхүүний дэмжлэг болон сургалт үйлчилгээг хүргэж байна.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-foreground font-medium mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 border-t border-b border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl lg:text-5xl text-foreground font-light mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
