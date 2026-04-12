import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeProductDetail } from "@/components/home-product-detail"

export const metadata: Metadata = {
  title: "ACTAN Plus Ectoin 2% Serum | Beautytech LLC",
  description:
    "Арьсны хамгаалах давхаргыг сэргээж, үрэвслийг намдааж, гүн чийгшүүлэх нөхөн сэргээх серум",
}

const product = {
  id: "actan-serum",
  name: "ACTAN Plus Ectoin 2% Serum",
  subtitle: "Barrier сэргээх, үрэвсэл намдаах, гүн чийгшүүлэх серум",
  category: "SKIN BARRIER CARE",
  description:
    "Гэмтсэн арьсны хамгаалах давхаргыг сэргээж, үрэвсэл болон хуурайшлыг бууруулж, арьсны нөхөн төлжилтийг дэмжих өндөр үйлчилгээтэй серум.",
  longDescription:
    "ACTAN Plus Ectoin 2% Serum нь арьсны хамгаалах давхаргыг сэргээх, үрэвслийг намдаах, нөсөөжилтөөс сэргийлэх 3 шатлалт үйлдэлтэй нөхөн сэргээх серум юм. Найрлагад агуулагдах RonaCare® Ectoin 2% нь арьсыг гадаад орчны стрессээс хамгаалж, Troxerutin 2% нь улайлт, эмзэгшлийг бууруулна. Мөн Niacinamide 2% нь арьсны өнгийг жигд болгож, нөсөөжилтөөс сэргийлнэ. Процедурын дараах болон хэт хуурайшсан, мэдрэмтгий арьсанд онцгой тохиромжтой.",

  price: "—",
  image: "/images/home/actanserum.png",

  treatmentArea: "Нүүр",
  skinType: "Мэдрэмтгий, хуурай, гэмтсэн арьс",
  format: "20 ml",
  routine: "Өглөө & Орой",

  specs: [
    { label: "Хэрэглэх хэсэг", value: "Нүүр" },
    { label: "Арьсны төрөл", value: "Мэдрэмтгий, хуурай арьс" },
    { label: "Хэмжээ", value: "20 ml" },
    { label: "Хэрэглэх цаг", value: "Өглөө & Орой" },
  ],

  benefits: [
    "Арьсны хамгаалах давхаргыг сэргээнэ",
    "Үрэвсэл, улайлтыг бууруулна",
    "Гүн чийгшүүлж, хуурайшлыг арилгана",
    "Нөсөөжилтөөс сэргийлж, арьсны өнгийг жигд болгоно",
    "Процедурын дараах арьсны нөхөн төлжилтийг хурдасгана",
    "Мэдрэмтгий арьсанд аюулгүй, зөөлөн найрлага",
  ],

  ingredients: [
    {
      name: "RonaCare® Ectoin 2%",
      benefit:
        "Арьсыг гадаад орчны стресс, хуурайшилтаас хамгаалж, barrier-г сэргээнэ",
    },
    {
      name: "RonaCare® Troxerutin 2%",
      benefit:
        "Үрэвсэл, улайлт, эмзэгшлийг бууруулна",
    },
    {
      name: "Niacinamide 2%",
      benefit:
        "Арьсны өнгийг жигд болгож, нөсөөжилтөөс сэргийлнэ",
    },
  ],

  howToUse: [
    "Цэвэрлэсний дараа серумын шатанд хэрэглэнэ",
    "Өглөө болон орой өдөрт 2 удаа түрхэнэ",
    "Процедурын дараа арьс тайвшруулах зорилгоор хэрэглэж болно",
    "Крем хэрэглэхийн өмнө түрхвэл илүү үр дүнтэй",
  ],
}

export default function ActanSerumPage() {
  return (
    <main>
      <Header />
      <HomeProductDetail product={product} />
      <Footer />
    </main>
  )
}