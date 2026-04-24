import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export const metadata: Metadata = {
  title: "Betterfill EXO56+ | Beautytech LLC",
  description:
    "RIBESKIN Betterfill EXO56+ — PhytoEXO технологи ба 56+ идэвхт найрлагын хослолоор эсийн гүн нөхөн сэргэлтийг идэвхжүүлдэг дэвшилтэт мезо эмчилгээ.",
}

const betterfillExoProduct = {
  id: "betterfill-exo",
  name: "Betterfill EXO56+",
  nameKr: "베터필 EXO56+",
  tagline: "56x Better Rejuvenation",
  description:
    "RIBESKIN Betterfill EXO56+ нь PhytoEXO технологи болон 56+ идэвхт найрлагын хослолоор эсийн гүн нөхөн сэргэлтийг идэвхжүүлдэг. Centella Asiatica болон 7 ургамлын экстрактаас гаргасан ургамлын гаралтай эксосом нь 56+ биологийн идэвхт найрлагуудыг арьсны гүн давхаргад хүргэнэ.",

  heroImage: "/images/pro/IMG_1529.jpg",

  benefits: [
    {
      title: "PhytoEXO Технологи",
      description:
        "Centella Asiatica болон Licorice, Green Tea, Rosemary зэрэг 7 ургамлын экстрактаас гаргасан 50–200nm хэмжээтэй ургамлын гаралтай эксосом.",
      icon: "sparkles" as const,
    },
    {
      title: "Гүн давхаргын нөхөн загварчлал",
      description:
        "PhytoEXO болон 56+ идэвхт найрлага хамтран арьсны гүн дермал давхаргыг нөхөн загварчилж, бүтцийн сайжруулалтыг хангана.",
      icon: "shield" as const,
    },
    {
      title: "Антиоксидант & ДНХ Хамгаалалт",
      description:
        "Glutathione, Niacinamide болон ургамлын полифенол нь эсийн ДНХ-ийг хамгаалж, чөлөөт радикалыг саармагжуулж, хүчтэй антиоксидант үйлчилгээ үзүүлнэ.",
      icon: "droplets" as const,
    },
    {
      title: "Синергийн үйлчлэл",
      description:
        "EGF, PDRN, Coenzyme Q10, Niacinamide нь PhytoEXO-тэй хамтран хэрэглэгдэх үед идэвхт найрлагуудын арьсанд шингэлт ба үр дүнг олон дахин нэмэгдүүлнэ.",
      icon: "zap" as const,
    },
  ],

  clinicalResults: [
    {
      percentage: "33.7%",
      label: "Арьсны бүтэц сайжруулалт",
      description: "4 удаагийн эмчилгээ | 4 долоо хоног | 30 орчим насны эмэгтэй",
    },
    {
      percentage: "21.1%",
      label: "Толбо бууралт",
      description: "4 удаагийн эмчилгээ | 4 долоо хоног | 30 орчим насны эрэгтэй",
    },
    {
      percentage: "56+",
      label: "Идэвхт найрлага",
      description: "50mg × 2 vial лиофилизат + 3ml × 2 vial идэвхжүүлэгч уусмал",
    },
  ],

  applications: [
    {
      title: "Арьсны бүтэц сайжруулалт",
      description:
        "PhytoEXO технологи нь гүн дермал давхаргад үйлчилж, арьсны нягтрал, гөлгөр байдлыг сайжруулна. Нүхжилтийг багасгаж, арьсны өнгийг жигд болгоно.",
      image: "/images/pro/Enlarged-pores-after-1-1536x452.png",
    },
    {
      title: "Пигментация & Толбо арилгалт",
      description:
        "Glutathione болон Niacinamide нь пигментацийн эсрэг нэгдсэн үйлчлэлээр нарны толбо, мелазма болон постacne гиперпигментацийг харагдахуйц бууруулна.",
      image: "/images/pro/Acneprone-skin-Clogged-1-1536x452.png",
    },
    {
      title: "Арьсны залуужилт",
      description:
        "EGF болон PDRN нь фибробластыг идэвхжүүлж, коллаген нийлэгжилтийг дэмжинэ. Нарийн үрчлээ, арьсны уян хатан чанарын алдагдлыг сайжруулна.",
      image: "/images/pro/IMG_0833.jpg",
    },
    {
      title: "Эмчилгээний дараах нөхөн сэргэлт",
      description:
        "Ургамлын гаралтай эксосомын найрлага нь лазер, RF болон бусад үйлчилгээний дараа арьсны нөхөн сэргэлтийг хурдасгаж, улайлт, цочрол буурна.",
      image: "/images/pro/IMG_0816.jpg",
    },
  ],

  steps: [
    {
      step: 1,
      title: "Уусмал бэлтгэх",
      description:
        "Лиофилизат нунтагийг (50mg) идэвхжүүлэгч уусмалтай (3ml) холин найрлагыг бэлтгэнэ. Бүрэн уусах хүртэл зөөлөн хутгана.",
    },
    {
      step: 2,
      title: "Арьс бэлтгэх",
      description:
        "Арьсыг цэвэрлэж, шаардлагатай бол тэгшлэгч бэлтгэгч хэрэглэнэ. Мезотерапийн төхөөрөмж эсвэл microinjection аргаар хийхэд бэлтгэнэ.",
    },
    {
      step: 3,
      title: "Мезо тарилга",
      description:
        "Бэлтгэсэн найрлагыг мэргэжлийн мезотерапийн төхөөрөмжөөр арьсны дермал давхаргад хүргэнэ. 7 хоногт нэг удаа, 4 удаагийн курс.",
    },
    {
      step: 4,
      title: "Процедурын дараах арчилгаа",
      description:
        "NRX Post Mask болон EP+DERM Plus Gel-ийг хэрэглэж арьсыг тайвшруулна. SOS Cover Cream-ээр хамгаалалтыг бэхжүүлнэ.",
    },
  ],

  gallery: [
    "/images/pro/BA-Website-3.png",
    "/images/pro/BA-Website-5.png",
  ],
}

export default function BetterfillExoPage() {
  return (
    <>
      <Header />
      <ProductDetail product={betterfillExoProduct} />
      <Footer />
    </>
  )
}
