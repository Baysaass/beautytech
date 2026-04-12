import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export const metadata: Metadata = {
  title: "Deep Shoot | Beautytech LLC",
  description: "RIBESKIN Deep Shoot - Дэвшилтэт мезотерапийн технологи. Арьсны гүн давхаргад тэжээлийн бодисуудыг шууд хүргэж, арьсны залуужилт, чийгшүүлэлтийг дээд зэргээр хангана.",
}

const deepShootProduct = {
  id: "deep-shoot",
  name: "Deep Shoot",
  nameKr: "딥슛",
  tagline: "Дэвшилтэт мезотерапи. Гүн тэжээл.",
  description: "Deep Shoot технологи нь арьсны гүн давхаргад тэжээлийн бодисуудыг шууд хүргэж, арьсны залуужилт, чийгшүүлэлтийг дээд зэргээр хангана. Гиалуроны хүчил, витамин, пептидүүдийг арьсны дермал давхаргад нэвтрүүлнэ.",
  heroImage: "/images/pro/딥슛-라인-1-scaled-e1747127215610-2048x1783.png",
  benefits: [
    {
      title: "Гүн чийгшүүлэлт",
      description: "Гиалуроны хүчлийг арьсны гүн давхаргад хүргэж, дотроосоо чийгшүүлнэ.",
      icon: "droplets" as const,
    },
    {
      title: "Залуужуулах нөлөө",
      description: "Коллаген болон эластины үйлдвэрлэлийг идэвхжүүлж, арьсыг залуужуулна.",
      icon: "sparkles" as const,
    },
    {
      title: "Уян хатан чанар",
      description: "Арьсны уян хатан чанарыг сайжруулж, чангаруулна.",
      icon: "shield" as const,
    },
    {
      title: "Үр дүнтэй шингээлт",
      description: "Идэвхт бодисуудыг 90% хүртэл шингээлтээр арьсанд хүргэнэ.",
      icon: "zap" as const,
    },
  ],
  clinicalResults: [
    {
      percentage: "89%",
      label: "Чийгшүүлэлт нэмэгдэлт",
      description: "4 удаагийн эмчилгээний дараа",
    },
    {
      percentage: "76%",
      label: "Уян хатан чанар сайжралт",
      description: "6 удаагийн эмчилгээний дараа",
    },
    {
      percentage: "82%",
      label: "Гэрэлтэлт нэмэгдэлт",
      description: "2 удаагийн эмчилгээний дараа",
    },
  ],
  applications: [
    {
      title: "Нүүрний арчилгаа",
      description: "Нүүрний арьсыг гүнээс чийгшүүлж, жижиг үрчлээг арилгаж, арьсны гэрэлтэлтийг нэмэгдүүлнэ. Хуурай, усгүйжсэн арьсанд онцгой тохиромжтой.",
      image: "/images/pro/IMG_0833.jpg",
    },
    {
      title: "Нүдний орчим",
      description: "Нүдний доорх хөх цагаан, үрчлээ, ядарсан байдлыг арилгаж, нүдний орчмын арьсыг сэргээнэ.",
      image: "/images/pro/IMG_0816.jpg",
    },
  ],
  steps: [
    {
      step: 1,
      title: "Арьс цэвэрлэх",
      description: "Эмчилгээний өмнө арьсыг сайтар цэвэрлэж бэлтгэнэ.",
    },
    {
      step: 2,
      title: "Deep Shoot тарилга",
      description: "Тусгай төхөөрөмжөөр идэвхт бодисуудыг арьсны гүнд тарина.",
    },
    {
      step: 3,
      title: "Массаж",
      description: "Бодисуудыг жигд тархаахын тулд зөөлөн массаж хийнэ.",
    },
    {
      step: 4,
      title: "Тайвшруулах маск",
      description: "Эмчилгээний дараа арьсыг тайвшруулж, хамгаална.",
    },
  ],
  gallery: [
    "/images/pro/Screenshot 2026-04-12 164545.png",
    "/images/pro/Screenshot 2026-04-12 164616.png",
  ],
}

export default function DeepShootPage() {
  return (
    <>
      <Header />
      <ProductDetail product={deepShootProduct} />
      <Footer />
    </>
  )
}