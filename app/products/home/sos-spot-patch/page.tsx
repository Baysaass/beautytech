import { Metadata } from "next"
import Image from "next/image"
import { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeProductDetail } from "@/components/home-product-detail"

export const metadata: Metadata = {
  title: "SOS Spot Patch | Beautytech LLC",
  description: "Батганы өмнөх болон дараах арчилгаанд зориулсан 2 үйлдэлт наалт",
}

const product = {
  id: "sos-spot-patch",
  name: "SOS Spot Patch",
  subtitle: "Батганы өмнөх ба дараах арчилгааны наалт",
  category: "ACNE CARE SOLUTIONS",
  description:
    "Батганы үүсэх үе шат бүрт тохирсон, үрэвслийг намдааж, нөхөн сэргээх 2 үйлдэлт ухаалаг наалт.",

  longDescription:
    "SOS Spot Patch нь батганы өмнөх болон дараах үе шат бүрт зориулсан 2 төрлийн наалтаас бүрдсэн иж бүрэн шийдэл юм. Plasta Patch нь батганы үрэвслийг богино хугацаанд намдааж, тослогийг гадаргуу руу татан гаргах үйлчилгээтэй. Харин Hydrocolloid Patch нь шахсны дараах арьсыг хамгаалж, хурдан нөхөн сэргээх, сорвижилт болон нөсөөжилтөөс сэргийлэхэд тусална.",

  price: "—",
  image: "/images/home/sos.jpg",

  treatmentArea: "Нүүр (батгатай хэсэг)",
  skinType: "Бүх төрөл, ялангуяа батгатай арьс",
  format: "138 ширхэг (2 төрөл)",
  routine: "Шаардлагатай үед",

  specs: [
    { label: "Хэрэглэх хэсэг", value: "Батгатай хэсэг" },
    { label: "Арьсны төрөл", value: "Бүх төрөл" },
    { label: "Тоо ширхэг", value: "138 (Plasta 93 / Hydrocolloid 45)" },
    { label: "Хэмжээ", value: "10 мм & 12 мм" },
  ],

  benefits: [
    "Батганы үе шат бүрт тохирсон 2 үйлдэлт арчилгаа",
    "Үрэвслийг хурдан намдааж, тослогийг гадагшлуулна",
    "Шахсны дараах шархыг хамгаалж, хурдан нөхөн сэргээнэ",
    "Сорви болон нөсөөжилт үүсэхээс сэргийлнэ",
    "Арьсыг гадны бохирдол, бактерээс хамгаална",
    "Харагдахгүй нимгэн бүтэцтэй",
    "Хөлс, усанд тэсвэртэй",
  ],

  ingredients: [
    {
      name: "Салицилийн хүчил (BHA)",
      benefit:
        "Нүх сүв доторх тослог, үхэжсэн эсийг уусгаж батганы үүсэлтийг бууруулна",
    },
    {
      name: "Цайны модны тос",
      benefit:
        "Үрэвслийн эсрэг үйлчилгээтэй, батганы бактерийг дарангуйлж арьсыг тайвшруулна",
    },
    {
      name: "Ниацинамид",
      benefit:
        "Шахсны дараах нөсөөжилтөөс сэргийлж, арьсны өнгийг жигд болгоно",
    },
    {
      name: "Мадекассосид",
      benefit:
        "Арьсыг тайвшруулж, нөхөн төлжилтийг дэмжин гадны цочролоос хамгаална",
    },
  ],

  // 🔥 UPDATED хэсэг
  howToUse: [
    "Арьсаа цэвэрлэж, бүрэн хуурай болгоно",
    "Батганы үе шатнаас хамааран тохирох наалтыг сонгоно",

    // TYPE 1
    <div key="type1" className="mt-6">
      <h4 className="font-semibold text-lg mb-2">
        TYPE 1 — Plasta Patch (шахахаас өмнө)
      </h4>
      <p className="text-sm mb-3">
        Батганы үрэвслийг богино хугацаанд намдааж, тослогийг гадаргуу руу татан гаргана.
      </p>

      <div className="relative w-full h-[220px] mb-3 rounded overflow-hidden">
        <Image
          src="/images/home/sos패치-비포-2.png"
          alt="Plasta Patch"
          fill
          className="object-cover"
        />
      </div>
    </div>,

    // TYPE 2
    <div key="type2" className="mt-6">
      <h4 className="font-semibold text-lg mb-2">
        TYPE 2 — Hydrocolloid Patch (шахсны дараа)
      </h4>
      <p className="text-sm mb-3">
        Шархыг хамгаалж, хурдан нөхөн сэргээж, сорвижилт болон нөсөөжилтөөс сэргийлнэ.
      </p>

      <div className="relative w-full h-[220px] mb-3 rounded overflow-hidden">
        <Image
          src="/images/home/sos패치-에프터-3.png"
          alt="Hydrocolloid Patch"
          fill
          className="object-cover"
        />
      </div>
    </div>,

    "6–8 цаг эсвэл шөнөжин нааж хэрэглэж болно",
    "Наалтыг болгоомжтой авч, дараагийн арчилгаагаа үргэлжлүүлнэ",
  ] as (string | ReactNode)[],
}

export default function SOSSpotPatchPage() {
  return (
    <main>
      <Header />
      <HomeProductDetail product={product} />
      <Footer />
    </main>
  )
}