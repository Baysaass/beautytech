"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const productCategories = [
  {
    id: "facial",
    name: "Carboxy Therapy",
    products: [
      {
        id: "Carboxy Therapy face",
        name: "Carboxy Therapy",
        subtitle: "RIBESKIN PRO – мэргэжлийн карбокси эмчилгэээ",
        description:
          "CO₂ Carboxy Therapy нь зүү хэрэглэхгүй (non-invasive) аргаар арьсанд CO₂ үүсгэж, арьсны бодисын солилцоог идэвхжүүлдэг мэргэжлийн эмчилгээ юм. Энэхүү технологи нь Bohr effect-ийг ашиглан арьсны хүчилтөрөгчийн хангамжийг нэмэгдүүлж, арьсны нөхөн төлжилт, уян хатан чанарыг сайжруулдаг.",
        image: "/images/pro/IMG_1478.jpg",
        benefits: [
          "Зүүгүй, non-invasive эмчилгээ",
          "Арьсны метаболизм, хүчилтөрөгчийн солилцоог дэмжинэ",
          "Бүх төрлийн арьсанд тохирно",
          "Бусад эмчилгээний (laser, peeling, mesotherapy гэх мэт) үр дүнг нэмэгдүүлдэг",
          "Арьсны өнгө, уян хатан чанар, нүхжилтийг сайжруулна",
          "Нэг удаагын үйлчилгээгээр мэдэгдэх үр дүн"
        ],
        usage: "Gel түрхээд sheet тавьж CO₂ урвал үүсгэнэ 15–20 минут байлгана. Бусад арьс эмчилгээтэй хослуулахад илүү үр дүнтэй",
        volume: "25 удаагын үйлчилгээ гель 750ml цаас 1 box /         50 удаагын үйлчилгээ гель 1500ml цаас 2 box",
      },
      {
        id: "Carboxy Therapy body",
        name: "Carboxy Therapy body",
        subtitle: "Биеийн carboxy",
        description:
          "CO₂ Carboxy Therapy нь биеийн арьсанд зүүгүй аргаар CO₂ үүсгэж, тухайн хэсгийн цусны эргэлт болон хүчилтөрөгчийн хангамжийг нэмэгдүүлдэг мэргэжлийн эмчилгээ юм. Энэхүү процесс нь арьсны бодисын солилцоог идэвхжүүлж, өөхөн давхаргын задрал болон арьсны уян хатан чанарт эерэг нөлөө үзүүлдэг.",
        image: "/images/pro/IMG_0766.jpg",
        benefits: [
          "Цусны эргэлтийг идэвхжүүлнэ",
          "Арьсны уян хатан чанарыг сайжруулна",
          "Целлюлитийн харагдах байдлыг багасгахад дэмжлэг үзүүлнэ",
          "Арьс язралтаас үүссэн сорви толбо арилгахад тусална",
          "Биеийн арьсыг жигд, толигор харагдуулна",
        ],
        usage: "Нэг удаагийн эмчилгээ: 20–30 минут, Долоо хоногт 1–2 удаа, 5–10 удаагийн курс болно. ",
        volume: "25 удаагын үйлчилгээ гель 750ml цаас 1 body roll цасс      50 удаагын үйлчилгээ гель 1500ml 1 body roll цасс",
      },{
        id: "Carboxy Therapy before after",
        name: "Carboxy Therapy before & after care",
        subtitle: "Carboxy эмчилгээний өмнө болон дараах арчилгааны бүтээгдэхүүн",
        description:
          "Carboxy Therapy Before & After Care систем нь CO₂ карбокси эмчилгээний үр дүнг нэмэгдүүлж, арьсыг процедурын өмнө бэлтгэх болон дараа нь тайвшруулах, нөхөн сэргээх иж бүрэн мэргэжлийн арчилгаа юм. \n\nПроцедурын өмнө AHA 1.0% цэвэрлэгч нь арьсыг гүн цэвэрлэж, CO₂ хий шингэх чадварыг нэмэгдүүлснээр эмчилгээний үр дүнг илүү тод болгодог. \n\nПроцедурын дараа soothing gel & mask нь арьсыг тайвшруулж, чийгшүүлэн, нөхөн төлжилтийг дэмжинэ. Мөн cover cream нь арьсны хамгаалалтын давхаргыг сэргээж, үрэвслийн эсрэг болон бактерийн эсрэг үйлчилгээ үзүүлэн эмзэгшсэн арьсыг хамгаална. \n\nЭнэхүү иж бүрэн систем нь арьсны нөхөн төлжилтийг дэмжиж, эмчилгээний дараах үр дүнг урт хугацаанд хадгалах нөхцөлийг бүрдүүлдэг.",
        image: "/images/pro/IMG_0191.jpg",
        benefits: [
          "CO₂ эмчилгээний үр дүнг нэмэгдүүлнэ",
          "Арьсыг процедурын өмнө гүн цэвэрлэж бэлтгэнэ",
          "Процедурын дараах улайлт, цочролыг багасгана",
          "Арьсны хамгаалалтын давхаргыг сэргээнэ",
          "Чийгшүүлж, нөхөн төлжилтийг дэмжинэ",
        ],
        usage: "Процедурын өмнө AHA Cleanser ашиглан арьсыг цэвэрлэнэ. Процедурын дараа Soothing Gel & Mask хэрэглэж тайвшруулан, эцэст нь Cover Cream түрхэж хамгаална.",
        volume: "Cleanser 500ml / Gel 100g / Mask 430g 25 удаагын хэрэглээ / Cover Cream 100g",
      },
    ],
  },
  {
    id: "peeling",
    name: "GPeel",
    products: [
      {
        id: "Gwang peel",
  name: "G-Peel",
  subtitle: "Зөөлөн гуужуулалт",
  description:
    "G-Peel  нь арьсны гадаргуугийн үхэжсэн эсийг зөөлөн гуужуулж, арьсны өнгө, бүтцийг жигд болгох мэргэжлийн пилинг эмчилгээ юм. Мэдрэг болон анхны хэрэглэгчдэд тохиромжтой, арьсыг цочроохгүйгээр сэргээхэд чиглэсэн үйлчилгээтэй.",
  image: "/images/pro/IMG_1083.jpg",
  benefits: [
    "Үхэжсэн эсийг зөөлөн гуужуулна",
    "Арьсны өнгийг жигд, гэрэлтсэн болгоно",
    "Нүхжилт болон арьсны бүтцийг сайжруулна",
    "Мэдрэг арьсанд тохиромжтой бага цочролтой",
    "Дараагийн арчилгааны шимэгдэлтийг сайжруулна",
  ],
  usage: "7–10 хоногт 1 удаа (арьсны байдлаас хамааруулан)",
  volume: "25 удаагын үйлчилгээтэй 25ш Цайрын scpicul, BHA , Cell booster",
      },
    ],
  },
  {
    id: "hydration",
    name: "Чийгшүүлэлт",
    products: [
      {
      id: "hydra-boost",
      name: "DEEP SHOOT HA",
      subtitle: "Гүн чийгшүүлэх мэсо эмчилгээ",
      description:
        "DEEP SHOOT HA нь гурван өөр молекул жинтэй гиалуроны хүчлийг хослуулсан, арьсны гүн давхаргад чийгийг хүргэж, удаан хугацаанд хадгалах мэргэжлийн мэсо эмчилгээний шийдэл юм. Арьсны ус-тосны балансыг сэргээж, хуурайшилт, өнгө алдалтыг багасган, арьсыг дүүрэн, уян хатан харагдуулна.",
      image: "/images/pro/IMG_1634.jpg",
      benefits: [
        "Гурван молекул жинтэй гиалуроны хүчил (low, medium, high)",
        "Арьсны гүн болон гадаргуу давхаргад зэрэг чийгшүүлнэ",
        "Арьсны уян хатан чанар, өнгийг сайжруулна",
        "Үрчлээ болон хуурайшилтыг багасгахад дэмжлэг үзүүлнэ",
        "Мэсо stamping технологиор шимэгдэлтийг нэмэгдүүлнэ",
      ],
      usage:
        "7 хоногт 1 удаа, 4–5 долоо хоногийн курс (мэргэжлийн мэсо төхөөрөмжөөр хэрэглэх)",
      volume: "3ml x 5 ampoule + 5 ширхэг applicator",
    },
      {
      id: "deep-shoot-aa",
      name: "DEEP SHOOT AA",
      subtitle: "Anti-aging мэсо skin booster",
      description:
        "DEEP SHOOT AA нь Glutathione, PDRN, Growth factors, Peptide комплекс болон Vitamin B агуулсан олон үйлдэлт anti-aging коктейль бөгөөд арьсны нөхөн төлжилтийг идэвхжүүлж, үрчлээ, уян хатан чанарын алдагдлыг багасгана. Арьсыг залуужуулж, гэрэлтсэн, эрүүл төрхийг сэргээх мэргэжлийн мэсо эмчилгээний шийдэл юм.",
      image: "/images/pro/IMG_0805.jpg",
      benefits: [
        "PDRN – эсийн нөхөн төлжилтийг дэмжинэ",
        "Glutathione – арьсны өнгийг сэргээж, антиоксидант үйлчилгээ үзүүлнэ",
        "Growth factor & Peptide – коллагены нийлэгжилтийг нэмэгдүүлнэ",
        "Арьсны уян хатан чанар, нягтралыг сайжруулна",
        "Мэсо stamping технологиор идэвхтэй найрлагыг гүн нэвтрүүлнэ",
      ],
      usage:
        "7 хоногт 1 удаа, 4–5 долоо хоногийн курс (мэргэжлийн мэсо төхөөрөмжөөр хэрэглэх)",
      volume: "3ml x 5 ampoule + 5 ширхэг applicator",
    },
    ],
  },
]

export function ProfessionalProducts() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0])
  const [activeProduct, setActiveProduct] = useState(
    productCategories[0].products[0]
  )
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    productCategories[0].id
  )

  const handleCategoryClick = (category: (typeof productCategories)[0]) => {
    if (expandedCategory === category.id) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category.id)
      setActiveCategory(category)
      setActiveProduct(category.products[0])
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light">
            Бүтээгдэхүүний <span className="italic font-medium">Каталог</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Мэргэжлийн косметикийн бүтээгдэхүүнүүдээс сонгоно уу
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-2">
              {productCategories.map((category) => (
                <div key={category.id} className="border border-border">
                  {/* Category Header */}
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 text-left transition-colors",
                      activeCategory.id === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card hover:bg-muted"
                    )}
                  >
                    <span className="font-medium">{category.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        expandedCategory === category.id && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Products List */}
                  {expandedCategory === category.id && (
                    <div className="border-t border-border">
                      {category.products.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => setActiveProduct(product)}
                          className={cn(
                            "w-full p-4 text-left border-b border-border last:border-b-0 transition-colors",
                            activeProduct.id === product.id
                              ? "bg-accent/10 border-l-4 border-l-accent"
                              : "hover:bg-muted"
                          )}
                        >
                          <span className="block text-sm font-medium text-foreground">
                            {product.name}
                          </span>
                          <span className="block text-xs text-muted-foreground mt-1">
                            {product.subtitle}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content - Product Detail */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border">
              {/* Product Image */}
              <div className="relative w-full">
  <Image
    src={activeProduct.image}
    alt={activeProduct.name}
    width={800}
    height={600}
    className="w-full h-auto object-contain"
  />
</div>

              {/* Product Info */}
              <div className="p-8 lg:p-10">
                <div className="mb-6">
                  <span className="text-accent text-sm tracking-widest uppercase">
                    {activeProduct.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground font-light mt-2">
                    {activeProduct.name}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {activeProduct.description}
                </p>

                {/* Product Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-medium tracking-wide uppercase text-foreground mb-4">
                      Давуу талууд
                    </h4>
                    <ul className="space-y-3">
                      {activeProduct.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-accent" />
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Usage Info */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium tracking-wide uppercase text-foreground mb-2">
                        Хэрэглэх заавар
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {activeProduct.usage}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wide uppercase text-foreground mb-2">
                        Багтаамж
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {activeProduct.volume}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent"
                  >
                    Захиалга өгөх
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground text-sm font-medium tracking-wide uppercase transition-all hover:border-primary hover:text-primary"
                  >
                    Зөвлөгөө авах
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
