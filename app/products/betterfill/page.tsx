import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export const metadata: Metadata = {
  title: "Betterfill 56+ | Beautytech LLC",
  description:
    "RIBESKIN Betterfill 56+ — PDRN, Growth Factor, Glutathione, Peptide, Vitamin B Complex зэрэг 56+ идэвхт найрлагатай дэвшилтэт мезо эмчилгээний skin booster.",
}

const betterfillProduct = {
  id: "betterfill",
  name: "Betterfill 56+",
  nameKr: "베터필 56+",
  tagline: "Fill your skin with 56+ Anti-Aging Actives",
  description:
    "RIBESKIN Betterfill 56+ нь 56+ идэвхт найрлагыг агуулсан дэвшилтэт комплекс бөгөөд гэмтсэн арьсны эдийг нөхөн сэргээхэд оновчлогдсон. PDRN, Growth Factor, Glutathione, Peptide, Vitamin B Complex, Hyaluronic Acid болон бусад идэвхт найрлагуудыг агуулж, янз бүрийн мезотерапийн төхөөрөмжтэй нийцтэй.",

  heroImage: "/images/pro/딥슛-라인-1-scaled-e1747127215610-2048x1783.png",

  benefits: [
    {
      title: "All-in-One Anti-Aging",
      description:
        "PDRN, Growth Factor, Glutathione, Peptide, Vitamin B Complex, Hyaluronic Acid зэрэг 56+ идэвхт найрлага нэг бүтээгдэхүүнд хослосон.",
      icon: "sparkles" as const,
    },
    {
      title: "Эсийн эрчим идэвхжүүлэлт",
      description:
        "Vitamin B Complex, амин хүчил, Coenzyme Q10 нь коэнзим нийлэгжилтийг дэмжиж, эсийн эрчмийн үйлдвэрлэлийг нэмэгдүүлнэ.",
      icon: "zap" as const,
    },
    {
      title: "Гэрэлтүүлэлт & Антиоксидант",
      description:
        "Glutathione болон энзимүүд арьсыг гэрэлтүүлж, чөлөөт радикалтай тэмцэж, 10 төрлийн Vitamin B-ээр бодисын солилцоог сайжруулна.",
      icon: "droplets" as const,
    },
    {
      title: "Арьсны нөхөн сэргэлт",
      description:
        "Growth Factor, Peptide, Neuropeptide нь арьсны нөхөн сэргэлтийг хурдасгаж, фибробластыг идэвхжүүлж, шарх эдгэрэлтийг дэмжинэ.",
      icon: "shield" as const,
    },
  ],

  clinicalResults: [
    {
      percentage: "35.52%",
      label: "Үрчлээ сайжруулалт",
      description: "2 удаагийн эмчилгээ | 2 долоо хоног | 40 орчим насны эрэгтэй",
    },
    {
      percentage: "23.92%",
      label: "Нүх багасалт",
      description: "2 удаагийн эмчилгээ | 2 долоо хоног | 40 орчим насны эрэгтэй",
    },
    {
      percentage: "56+",
      label: "Идэвхт найрлага",
      description: "5ml × 5 vial | NRX Post Mask хамт",
    },
  ],

  applications: [
    {
      title: "Нүүрний залуужилт",
      description:
        "PDRN болон Growth Factor-ийн хосолсон үйлчлэлээр коллагены нийлэгжилтийг идэвхжүүлж, арьсны уян хатан чанарыг сэргээнэ. Үрчлээ, сунасан шугамыг харагдахуйц багасгана.",
      image: "/images/pro/IMG_0833.jpg",
    },
    {
      title: "Гэрэлтүүлэлт & Тэгшитгэлт",
      description:
        "Glutathione болон Vitamin B Complex нь арьсны пигментацийг зохицуулж, өнгийг жигд болгоно. Нарны гэмтлийн толбо, харанхуй нүдний тойргийг багасгана.",
      image: "/images/pro/IMG_0816.jpg",
    },
    {
      title: "Гүн чийгшүүлэлт",
      description:
        "Өндөр молекул жинтэй Hyaluronic Acid болон амин хүчлүүд NMF-ийг нэмэгдүүлж, арьсны гүн давхаргад чийг хадгалах чадварыг сайжруулна.",
      image: "/images/pro/IMG_1634.jpg",
    },
    {
      title: "Нөхөн сэргэлт",
      description:
        "Neuropeptide болон Growth Factor нь гэмтсэн эсийн нөхөн сэргэлтийг идэвхжүүлж, арьсны бүтцийг сайжруулна. Процедурын дараах нөхөн сэргэлтэд ч тохиромжтой.",
      image: "/images/pro/IMG_0805.jpg",
    },
  ],

  steps: [
    {
      step: 1,
      title: "EFI — Сэргэлт",
      description:
        "Өндөр концентрацийн Growth Factor агуулсан EFI-ийг хэрэглэж, шарх болон сорвины хурдан эдгэрэлтийг дэмжинэ.",
    },
    {
      step: 2,
      title: "NRX Post Mask",
      description:
        "Bio cellulose материалаар хийгдсэн маск нь шууд хөргөлт ба арьсны нөхөн сэргэлтийг хангана.",
    },
    {
      step: 3,
      title: "EP+DERM Plus Gel",
      description:
        "Цочирсон арьсыг шууд тайвшруулж, нөхөн сэргэлтийг идэвхжүүлнэ.",
    },
    {
      step: 4,
      title: "EP+DERM Plus SOS Cover Cream",
      description:
        "Арьсны хамгаалалтыг бэхжүүлж, цочирсон арьсыг сэргээнэ. Процедурын дараах арчилгааны эцсийн алхам.",
    },
  ],

  gallery: [
    "/images/pro/BA-Website-3.png",
    "/images/pro/BA-Website-5.png",
  ],
}

export default function BetterfillPage() {
  return (
    <>
      <Header />
      <ProductDetail product={betterfillProduct} />
      <Footer />
    </>
  )
}
