"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const products = [
{
  id: "carboxy",
  name: "CO2 Carboxy Therapy",
  description: "Зүүгүй CO2 эмчилгээ нь арьсны хүчилтөрөгчийн солилцоог идэвхжүүлж, нөхөн төлжилтийг хурдасгана.",
  longDescription:
    "CO2 Carboxy Therapy нь зүү хэрэглэхгүйгээр арьсны гүнд нүүрсхүчлийн хийг нэвтрүүлж, Bohr effect-ийн үйлчлэлээр эсүүдийн хүчилтөрөгчийн хангамжийг нэмэгдүүлдэг дэвшилтэт эмчилгээ юм. Энэ процесс нь цусны эргэлт, эсийн метаболизм, уураг нийлэгжилтийг идэвхжүүлж, арьсны нөхөн төлжилт болон детокс үйл явцыг эрчимжүүлнэ. Мөн лазер, мезо, пилинг зэрэг бүх төрлийн арьс арчилгааны эмчилгээний үр дүнг нэмэгдүүлэх давуу талтай.",
  image: "/images/pro/Website-Body-Square-2-2-768x768.png",
  benefits: [
    "Эсийн хүчилтөрөгчийн хангамжийг нэмэгдүүлнэ",
    "Цусны эргэлт, метаболизмийг идэвхжүүлнэ",
    "Арьсны нөхөн төлжилтийг хурдасгана",
    "Эмчилгээний дараах хаван, хөхрөлтийг багасгана",
  ],
  color: "from-amber-500/20 to-orange-500/20",
},
  {
  id: "deep-shoot-ha",
  name: "Deep Shoot HA",
  description: "Гурвалсан гиалуроны хүчил бүхий гүн чийгшүүлэх арьс сэргээх шийдэл.",
  longDescription:
    "Deep Shoot HA нь бага, дунд, өндөр молекул жинтэй 3 төрлийн гиалуроны хүчил агуулсан дэвшилтэт найрлагатай. Энэ нь арьсны гадаргуу болон гүн давхаргад зэрэг үйлчилж, чийгшлийг удаан хадгалах, уян хатан чанарыг сайжруулах, арьсны бүтцийг жигд болгох үр нөлөө үзүүлдэг. Turtlepin технологитой хослон хэрэглэгдэх үед идэвхт бодисын шингээлтийг хэд дахин нэмэгдүүлж, богино хугацаанд мэдэгдэхүйц үр дүн өгдөг.",
  image: "/images/pro/딥슛-라인-1-scaled-e1747127215610-2048x1783.png",
  benefits: [
    "Зорилтот давхаргийг гүн чийгшүүлнэ",
    "Арьсны уян хатан чанарыг нэмэгдүүлнэ",
    "Гэрэлтсэн, толигор арьс бий болгоно",
    "Үрчлээг багасгах үйлчилгээтэй",
  ],
  color: "from-cyan-500/20 to-blue-500/20",
},
{
  id: "deep-shoot-aa",
  name: "Deep Shoot AA",
  description: "Олон үйлдэлт anti-aging коктейль, арьсны залуужилтыг идэвхжүүлнэ.",
  longDescription:
    "Deep Shoot AA нь Glutathione, PDRN, Growth Factor, Peptide болон Vitamin B комплекс зэрэг хүчирхэг найрлагуудыг хослуулсан anti-aging skin booster юм. Энэ нь коллаген нийлэгжилтийг дэмжиж, арьсны хамгаалах давхаргыг бэхжүүлэн, эсийн нөхөн төлжилтийг эрчимжүүлдэг. Арьсны өнгийг жигд болгож, үрчлээг багасган, залуу, эрүүл төрхийг сэргээхэд зориулагдсан.",
  image: "/images/pro/딥슛-라인-1-scaled-e1747127215610-2048x1783.png",
  benefits: [
    "Коллаген нийлэгжилтийг дэмжинэ",
    "Арьсны уян хатан чанарыг сайжруулна",
    "Арьсны өнгийг цайруулж, жигд болгоно",
    "Хөгшрөлтийн шинж тэмдгийг бууруулна",
  ],
  color: "from-purple-500/20 to-pink-500/20",
},
{
  id: "gwang-peel",
  name: "Gwang Peel 72hr",
  description: "Физик ба химийн хосолсон пилинг, батганд өртөмтгий арьсанд зориулагдсан.",
  longDescription:
    "Gwang Peel 72hr нь 99% цэвэр Spicule болон 0.5% BHA-г хослуулсан, арьсны гүн давхаргад үйлчлэх шинэ үеийн пилинг эмчилгээ юм. Энэ нь бөглөрсөн нүх сүвийг цэвэрлэж, илүүдэл тослогийг уусган, батганы идэвхтэй болон дараах сорвийг багасгана. Мөн growth factor болон peptide комплексоор дамжуулан арьсны нөхөн төлжилтийг 72 цагийн турш идэвхжүүлдэг.",
  image: "/images/pro/Website-Small-Square.png",
  benefits: [
    "Батга болон сорвийг бууруулна",
    "Нүх сүвийг гүн цэвэрлэнэ",
    "Арьсны нөхөн төлжилтийг идэвхжүүлнэ",
    "Тослог ялгарлыг зохицуулна",
  ],
  color: "from-emerald-500/20 to-teal-500/20",
},
{
  id: "dr-mal",
  name: "Dr. MAL",
  description: "PDT эмчилгээнд зориулсан фотосенсибилизатор гель, батганы эмчилгээнд өндөр үр дүнтэй.",
  longDescription:
    "Dr. MAL нь 10.8% Methyl-ALA агуулсан фотосенсибилизатор бөгөөд Photodynamic Therapy (PDT)-ийн үр дүнг дээд хэмжээнд хүргэдэг. Тосонд уусдаг бүтэцтэй тул арьсны тослог булчирхай болон нүх сүвд илүү сонгомол шингэж, батга үүсгэгч бактерийг устгах үйлдлийг сайжруулна. Мөн уламжлалт ALA-тай харьцуулахад эрүүл эсийг хамгаалж, өвдөлт болон сөрөг нөлөөгүй.",
  image: "/images/dr-mal.jpg",
  benefits: [
    "Батга үүсгэгч бактерийг устгана",
    "PDT эмчилгээний үр дүнг нэмэгдүүлнэ",
    "Өвдөлт болон side effect багатай",
    "Арьсны үрэвслийг бууруулна",
  ],
  color: "from-indigo-500/20 to-purple-500/20",
},
]

export function Products() {
  const [activeProduct, setActiveProduct] = useState(products[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const handleProductChange = (product: (typeof products)[0]) => {
    if (product.id === activeProduct.id) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveProduct(product)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Манай бүтээгдэхүүнүүд
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
            RIBESKIN <span className="italic font-medium">Шийдлүүд</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Солонгосын шилдэг гоо сайхны брэнд RIBESKIN-ийн мэргэжлийн арьс арчилгааны бүтээгдэхүүнүүд
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 lg:mb-16">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductChange(product)}
              className={cn(
                "px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all border",
                activeProduct.id === product.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:border-primary hover:text-primary"
              )}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Product Display */}
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-opacity duration-300",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Product Image */}
          <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden">
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-50",
                activeProduct.color
              )}
            />
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light mt-2">
                {activeProduct.name}
              </h3>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {activeProduct.longDescription}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              <h4 className="text-sm font-medium tracking-wide uppercase text-foreground">
                Үндсэн давуу талууд
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {activeProduct.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </span>
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link
              href={`/products/${activeProduct.id}`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent"
            >
              Дэлгэрэнгүй үзэх
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
