import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export const metadata: Metadata = {
  title: "CO2 Carboxy Therapy | Beautytech LLC",
  description: "RIBESKIN CO2 Carboxy Therapy - 2007 оноос хойш дэлхийд танигдсан инвазив бус арьс сэргээх эмчилгээ. Арьсны бодисын солилцоог сайжруулж, бүх төрлийн арьс арчилгааны процедурын үр дүнг нэмэгдүүлнэ.",
}

const carboxyProduct = {
  id: "carboxy",
  name: "CO2 Carboxy Therapy",
  nameKr: "카복시 테라피",
  tagline: "2007 оноос хойш. Инвазив бус.",
  description: "CO2 Carboxy Therapy нь инвазив бус, олон талт арьс сэргээх эмчилгээ бөгөөд нүүр болон бүх биеийн арчилгааг дахин тодорхойлдог. Зүү хэрэглэдэггүй энэ техник нь арьсны бодисын солилцоог сайжруулж, лазер, мезотерапи, пилинг, батга цэвэрлэх зэрэг бүх төрлийн арьс эмнэлгийн процедурын үр дүнг нэмэгдүүлдэг.",
  heroImage: "/images/pro/Website-Body-Square-2-2-768x768.png",
  benefits: [
    {
      title: "Хүчилтөрөгчжүүлэлт",
      description: "Бор эффектээр дамжуулан арьсны эсүүдэд хүчилтөрөгч шууд хүргэж, эсийн сэргэлтийг идэвхжүүлнэ.",
      icon: "sparkles" as const,
    },
    {
      title: "Цус эргэлт сайжруулалт",
      description: "CO2 хий арьсаар шингэж, цусны эргэлтийг сайжруулж, хорт бодисыг зайлуулна.",
      icon: "droplets" as const,
    },
    {
      title: "Процедурын үр дүн нэмэгдүүлэлт",
      description: "Лазер, мезотерапи, пилинг зэрэг процедурын өмнө хийснээр идэвхт бодисын шингэлтийг сайжруулна.",
      icon: "shield" as const,
    },
    {
      title: "Шуурхай үр дүн",
      description: "1 удаагийн эмчилгээний дараа шууд харагдах гэрэлтсэн, уян арьс.",
      icon: "zap" as const,
    },
  ],
  clinicalResults: [
    {
      percentage: "61.11%",
      label: "Үрчлээ багасалт",
      description: "1 удаагийн эмчилгээний дараа | 30 орчим насны эмэгтэй",
    },
    {
      percentage: "29.48%",
      label: "Порфирин бууралт",
      description: "1 удаагийн эмчилгээний дараа | 40 орчим насны эмэгтэй",
    },
    {
      percentage: "12.85%",
      label: "Нүхний хэмжээ багасалт",
      description: "1 удаагийн эмчилгээний дараа | 60 орчим насны эмэгтэй",
    },
  ],
  applications: [
    {
      title: "Нүүр & Хүзүү",
      description: "Нүүрний арьсыг гэрэлтүүлж, үрчлээг багасгаж, арьсны уян хатан чанарыг сайжруулна. Давхар эрүүний арчилгаанд тохиромжтой. Коллаген болон уураг нийлэгжүүлэлтийг идэвхжүүлж, арьсны бүтцийг сайжруулна.",
      image: "/images/pro/IMG_1529.jpg",
    },
    {
      title: "Бие",
      description: "Нүүрний маскнаас 3 дахин их CO2 агуулгатай. Цээж, гар, нуруу, хэвлий, хөл зэрэг биеийн бүх хэсэгт зориулагдсан. Өөхний эс задлах, стретч марк арилгах, хөл хавдалт багасгахад үр дүнтэй.",
      image: "/images/pro/카복시-복부-768x538.jpg",
    },
    {
      title: "Процедурын өмнө",
      description: "Лазер, батга цэвэрлэгээ, мезотерапи, пилингийн өмнө хэрэглэснээр нүхийг гүнзгий цэвэрлэж, идэвхт бодисын шингэлтийг сайжруулна.",
      image: "/images/pro/카복시-아하-클렌저-저용량-scaled.jpg",
    },
    {
      title: "Процедурын дараа",
      description: "Пластик мэс засал, липолиз, радио долгионы эмчилгээний дараа хэрэглэснээр хөхрөлт, хавдалтыг хурдан эдгээнэ.",
      image: "/images/pro/카복시-겔앤마스크-썸네일.jpg",
    },
  ],
  steps: [
    {
      step: 1,
      title: "AHA 1% Cleanser",
      description: "Эмчилгээний үед CO2 хийн шингэлтийг сайжруулахын тулд арьсыг цэвэрлэнэ.",
    },
    {
      step: 2,
      title: "CO2 Gel & Sheet",
      description: "Арьсанд CO2 хүргэх гел болон хуудсыг тавина. 15-20 минут байлгана.",
    },
    {
      step: 3,
      title: "Soothing Gel",
      description: "Эмчилгээний дараа арьсыг тайвшруулж, үр дүнг уртасгана.",
    },
    {
      step: 4,
      title: "Cover Cream",
      description: "Арьсны хамгаалалтын давхаргыг бэхжүүлж, чийгшүүлнэ.",
    },
  ],
  gallery: [
    "/images/pro/BA-Website-3.png",
    "/images/pro/BA-Website-5.png",
    "/images/pro/BA-Website-6-300x211.png",
  ],
}

export default function CarboxyPage() {
  return (
    <>
      <Header />
      <ProductDetail product={carboxyProduct} />
      <Footer />
    </>
  )
}