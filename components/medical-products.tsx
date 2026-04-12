"use client"

import Image from "next/image"
import { Check, ArrowRight, Shield, Award, Syringe, TestTube } from "lucide-react"

const medicalProducts = [
  {
    id: "dermal-filler",
    name: "Dermal Filler HA",
    subtitle: "Гиалуроны хүчлийн филлер",
    description:
      "FDA, KFDA баталгаажуулсан дээд зэргийн гиалуроны хүчлийн филлер. Уруул томруулах, үрчлээ арилгах, нүүрний тодорхойлолт өгөхөд ашиглана.",
    image: "/images/dermal.jpg",
    features: [
      { icon: Shield, text: "FDA, KFDA баталгаатай" },
      { icon: Award, text: "12-18 сар үргэлжилнэ" },
      { icon: Syringe, text: "Өвдөлтгүй технологи" },
      { icon: TestTube, text: "Цэвэр HA формула" },
    ],
    applications: [
      "Уруул томруулах",
      "Хацар бөглөх",
      "Эрүү тодорхойлох",
      "Үрчлээ арилгах",
      "Хамрын хэлбэр засах",
    ],
  },
  {
    id: "skin-booster",
    name: "Skin Booster",
    subtitle: "Арьсны сэргээх эмчилгээ",
    description:
      "Гиалуроны хүчил, витамин, амин хүчлүүдийн хослол нь арьсны гүн давхаргыг тэжээж, чийгшүүлж, залуужуулна.",
    image: "/images/deep-shoot.jpg",
    features: [
      { icon: Shield, text: "Байгалийн найрлага" },
      { icon: Award, text: "Шууд үр дүн" },
      { icon: Syringe, text: "Микро инъекц" },
      { icon: TestTube, text: "Витамин коктейль" },
    ],
    applications: [
      "Нүүрний залуужилт",
      "Хүзүүний арчилгаа",
      "Гарын арьс сэргээх",
      "Толбо арилгах",
    ],
  },
  {
    id: "lipolytic",
    name: "Lipolytic Solution",
    subtitle: "Өөх хайлуулах инъекц",
    description:
      "Нүүрний давхар эрүү, биеийн тодорхой хэсгийн илүүдэл өөхийг эмчилгээгээр хайлуулж арилгах шийдэл.",
    image: "/images/carboxy-therapy.jpg",
    features: [
      { icon: Shield, text: "Мэс заслын бус" },
      { icon: Award, text: "Байнгын үр дүн" },
      { icon: Syringe, text: "Нарийн чиглэлтэй" },
      { icon: TestTube, text: "Байгалийн найрлагатай" },
    ],
    applications: [
      "Давхар эрүү",
      "Хацарны өөх",
      "Биеийн локал өөх",
    ],
  },
]

export function MedicalProducts() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light">
            Эмнэлгийн <span className="italic font-medium">Бүтээгдэхүүнүүд</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Зөвхөн мэргэшсэн эмч нарт зориулсан эмнэлгийн түвшний бүтээгдэхүүнүүд
          </p>
        </div>

        <div className="space-y-16">
          {medicalProducts.map((product, index) => (
            <div
              key={product.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-accent text-sm tracking-widest uppercase">
                  {product.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground font-light mt-2 mb-4">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.features.map((feature, idx) => {
                    const Icon = feature.icon
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature.text}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-medium tracking-wide uppercase text-foreground mb-3">
                    Хэрэглээ
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted text-sm text-muted-foreground"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent"
                >
                  Мэдээлэл авах
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
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
