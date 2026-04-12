import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export const metadata: Metadata = {
  title: "Dr.MAL PDT Therapy | Beautytech LLC",
  description:
    "RIBESKIN Dr.MAL - Photodynamic Therapy (PDT) эмчилгээний хамгийн үр дүнтэй шийдэл. Батганы бактерийг устгаж, үрэвслийг бууруулна.",
}

const drMalProduct = {
  id: "dr-mal",
  name: "Dr.MAL PDT Therapy",
  nameKr: "닥터 MAL",
  tagline: "Acne Treatment Gold Standard",
  description:
    "RIBESKIN Dr.MAL нь Photodynamic Therapy (PDT)-д зориулагдсан өндөр үр дүнтэй photosensitizer бүтээгдэхүүн бөгөөд 10.8% Methyl-ALA агуулдаг. Энэхүү oil-soluble найрлага нь батганы эсүүдэд илүү сонгомлоор шингэж, эрүүл эдийг гэмтээхгүйгээр бактерийг устгаж, үрэвслийг бууруулдаг.",

  heroImage: "/images/pro/닥터말-메인-배너-2.png",

  benefits: [
    {
      title: "Батганы бактер устгал",
      description:
        "PDT + MAL технологи нь батга үүсгэгч бактер болон sebaceous gland-ийг устгана.",
      icon: "sparkles" as const,
    },
    {
      title: "Бага өвдөлт, бага side effect",
      description:
        "Methyl-ALA нь ALA-аас илүү сонгомол шингэлттэй тул эрүүл эдийг хамгаална.",
      icon: "shield" as const,
    },
    {
      title: "Илүү гүн шингэлт",
      description:
        "Oil-soluble бүтэц нь батгатай хэсэгт илүү гүн нэвтэрч үр дүнг нэмэгдүүлнэ.",
      icon: "droplets" as const,
    },
    {
      title: "Өндөр үр дүн",
      description:
        "Inflammatory acne-д илүү өндөр үр дүн үзүүлдэг нь клиникээр батлагдсан.",
      icon: "zap" as const,
    },
  ],

  clinicalResults: [
    {
      percentage: "10.8%",
      label: "Methyl-ALA",
      description: "Идэвхтэй найрлага",
    },
    {
      percentage: "↑ өндөр",
      label: "Selective absorption",
      description: "Pathologic cells дээр төвлөрнө",
    },
    {
      percentage: "↓ бага",
      label: "Pain & side effect",
      description: "ALA-аас бага",
    },
  ],

  applications: [
    {
      title: "Идэвхтэй батга",
      description:
        "Sebaceous gland болон батга үүсгэгч бактерийг устгаж, үрэвслийг бууруулна.",
      image: "/images/pro/OIP.webp",
    },
    {
      title: "Үрэвсэлтэй арьс",
      description:
        "Inflammatory acne-д илүү өндөр үр дүнтэй.",
      image: "/images/pro/IMG_0781.jpg",
    },
    {
      title: "PDT эмчилгээ",
      description:
        "LED (630nm) гэрэлтэй хослон хамгийн өндөр үр дүнг өгнө.",
      image: "/images/dermal.jpg",
    },
    {
      title: "Арьсны хамгаалалт",
      description:
        "Panax Ginseng extract нь арьсны хамгаалалтыг сайжруулна.",
      image: "/images/deep-shoot.jpg",
    },
  ],

  steps: [
    {
      step: 1,
      title: "Preparation",
      description:
        "Арьс цэвэрлэж, шаардлагатай бол батга шахалт хийнэ.",
    },
    {
      step: 2,
      title: "Apply Dr.MAL",
      description:
        "Батгатай хэсэгт түрхэж, дараа нь бүх нүүрэнд тараана.",
    },
    {
      step: 3,
      title: "Incubation (20-25 мин)",
      description:
        "Арьсанд шингэх хүртэл харанхуй нөхцөлд байлгана.",
    },
    {
      step: 4,
      title: "LED Therapy",
      description:
        "630nm RED light 15–20 мин шарж PDT reaction үүсгэнэ.",
    },
  ],

  gallery: [
    "/images/pro/닥터말-bna2-300x132.png",
    "/images/pro/닥터말-bna2.png",
    "/images/pro/닥터말-bna1-300x134.png",
  ],
}

export default function DrMalPage() {
  return (
    <>
      <Header />
      <ProductDetail product={drMalProduct} />
      <Footer />
    </>
  )
}