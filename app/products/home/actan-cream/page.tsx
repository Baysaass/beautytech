import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeProductDetail } from "@/components/home-product-detail"

export const metadata: Metadata = {
  title: "ACTAN Plus 2% Cream | Beautytech LLC",
  description:
    "Арьсны хамгаалах давхаргыг сэргээж, гүн чийгшүүлэх өдөр тутмын эмчилгээний крем",
}

const product = {
  id: "actan-cream",
  name: "ACTAN Plus 2% Cream",
  subtitle: "Гүн чийгшүүлэх, barrier сэргээх крем",
  category: "SKIN BARRIER CARE",
  description:
    "Хэт хуурайшсан, мэдрэмтгий арьсыг гүнээс чийгшүүлж, гэмтсэн хамгаалах давхаргыг сэргээх өдөр тутмын арчилгааны крем.",
  longDescription:
    "ACTAN Plus Ectoin 2% Cream нь Герман улсаас гаралтай RonaCare® Ectoin 2% болон Spirodela Polyrrhiza хандыг агуулсан, арьсны хамгаалах давхаргыг сэргээх өндөр үйлчилгээтэй чийгшүүлэгч крем юм. Арьсыг гүнээс нь чийгшүүлж, стрессд орсон болон гэмтсэн арьсыг нөхөн сэргээхэд тусална. Мөн загатнах, цочролыг багасгаж, арьсны ерөнхий байдлыг сайжруулна.",

  price: "—",
  image: "/images/home/actancream.png",

  treatmentArea: "Нүүр",
  skinType: "Хуурай, мэдрэмтгий, гэмтсэн арьс",
  format: "150 ml",
  routine: "Өглөө & Орой",

  specs: [
    { label: "Хэрэглэх хэсэг", value: "Нүүр" },
    { label: "Арьсны төрөл", value: "Хуурай, мэдрэмтгий арьс" },
    { label: "Хэмжээ", value: "150 ml" },
    { label: "Хэрэглэх цаг", value: "Өглөө & Орой" },
  ],

  benefits: [
    "Арьсыг 100 цаг хүртэл гүн чийгшүүлнэ",
    "Гэмтсэн skin barrier-г сэргээнэ",
    "Хуурайшилт, загатнааг багасгана",
    "Арьсыг тайвшруулж, стрессийг бууруулна",
    "Арьсны уян хатан чанар, эрүүл байдлыг дэмжинэ",
    "Өдөр тутмын арчилгаанд аюулгүй хэрэглэх боломжтой",
  ],

  ingredients: [
    {
      name: "RonaCare® Ectoin 2%",
      benefit:
        "Арьсыг хуурайшилт, дулаан, UV зэрэг гадаад нөлөөллөөс хамгаалж, гүн чийгшүүлнэ",
    },
    {
      name: "Spirodela Polyrrhiza Extract",
      benefit:
        "Детокс үйлчилгээтэй, загатнаа багасгаж, арьсны ерөнхий байдлыг сайжруулна",
    },
  ],

  howToUse: [
    "Цэвэрлэсэн арьсанд жигд түрхэнэ",
    "Өглөө болон орой өдөрт 2 удаа хэрэглэнэ",
    "Хуурайшсан болон гэмтсэн арьсанд тогтмол хэрэглэнэ",
    "Серумын дараа, кремийн шатанд хэрэглэвэл илүү үр дүнтэй",
  ],
}

export default function ActanPlusPage() {
  return (
    <main>
      <Header />
      <HomeProductDetail product={product} />
      <Footer />
    </main>
  )
}