import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export const metadata: Metadata = {
  title: "GWANG PEEL 72 Hr Professional | Beautytech LLC",
  description:
    "RIBESKIN GWANG PEEL 72 Hr Professional - Spicule + BHA хосолсон батганд зориулсан нөхөн төлжүүлэх пилинг.",
}

const gwangPeelProduct = {
  id: "gwang-peel",
  name: "GWANG PEEL 72 Hr Professional",
  nameKr: "광필 72시간 프로페셔널",
  tagline: "Spicule + BHA Dual Action | 72 цагийн нөхөн төлжилт",
  description:
    "GWANG PEEL нь батганд өртөмтгий арьсанд зориулсан нөхөн төлжүүлэх пилинг бөгөөд Spicule + BHA хослол нь нүх цэвэрлэж, 72 цагийн турш арьсны regeneration идэвхжүүлнэ.",

  heroImage: "/images/pro/광필-메인-이미지2.jpg",

  benefits: [
    {
      title: "Давхар үйлчлэл",
      description: "Physical + Chemical peeling хослол",
      icon: "sparkles" as const,
    },
    {
      title: "Гүн цэвэрлэгээ",
      description: "BHA нь нүх доторх тослогийг цэвэрлэнэ",
      icon: "droplets" as const,
    },
    {
      title: "72 цагийн regeneration",
      description: "Spicule micro-needle effect",
      icon: "zap" as const,
    },
    {
      title: "Батганы сорви",
      description: "Нөсөөжилт, сорвийг багасгана",
      icon: "shield" as const,
    },
  ],

  clinicalResults: [
    {
      percentage: "72 цаг",
      label: "Үйлчлэл",
      description: "Continuous regeneration",
    },
    {
      percentage: "32.4%",
      label: "Шингэц",
      description: "Cell Booster",
    },
    {
      percentage: "0.5%",
      label: "BHA",
      description: "Non-comedogenic",
    },
  ],

  applications: [
    {
      title: "Батгатай арьс",
      description: "Бөглөрсөн нүх, тослогийг цэвэрлэнэ",
      image: "/images/pro/Website-Small-Square.png",
    },
    {
      title: "Сорви & нөсөөжилт",
      description: "Өнгө жигд болгоно",
      image: "/images/pro/OIP.webp",
    },
  ],

  steps: [
    {
      step: 1,
      title: "Preparation",
      description: "Арьс цэвэрлэх",
    },
    {
      step: 2,
      title: "Mix",
      description: "BHA + Spicule",
    },
    {
      step: 3,
      title: "Cell Booster",
      description: "Шингээх",
    },
    {
      step: 4,
      title: "Aftercare",
      description: "Mask + Sunscreen",
    },
  ],

  gallery: [
    "/images/pro/Acneprone-skin-Clogged-1-1536x452.png",
    "/images/pro/Enlarged-pores-after-1-1536x452.png",
  ],
}

export default function GwangPeelPage() {
  return (
    <>
      <Header />
      <ProductDetail product={gwangPeelProduct} />
      <Footer />
    </>
  )
}