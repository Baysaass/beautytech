import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeProductDetail } from "@/components/home-product-detail"

export const metadata: Metadata = {
  title: "EFI Regeneration Cream | Beautytech LLC",
  description:
    "Лазер болон арьсны процедурын дараах нөхөн сэргэлтийг хурдасгах growth factor крем",
}

const product = {
  id: "EFI",
  name: "EFI Regeneration Cream",
  subtitle: "Growth factor-той нөхөн сэргээх пост-процедур крем",
  category: "POST-PROCEDURE CARE",

  description:
    "Лазер болон арьсны эмчилгээний дараах гэмтсэн арьсыг хурдан нөхөн сэргээж, сорвижилт болон нөсөөжилтөөс сэргийлэх өндөр үйлчилгээтэй крем.",

  longDescription:
    "EFI Regeneration Cream нь арьсны нөхөн төлжилтийг хурдасгах growth factor-уудын өндөр агууламжтай пост-процедур крем юм. Найрлагад агуулагдах EGF, bFGF, IGF-1 болон Copper Tripeptide-1 нь арьсны эсийн нөхөн төлжилтийг идэвхжүүлж, гэмтсэн арьсыг хурдан сэргээхэд тусална. Мөн меланины үүсэлтийг дарангуйлж, үрэвслийн дараах нөсөөжилтөөс хамгаална. Арьсны эмч нарын өргөн хэрэглэдэг, эмнэлгийн түвшний нөхөн сэргээх арчилгаа юм.",

  price: "24,000₮",
  image: "/images/home/efi.png",

  treatmentArea: "Нүүр",
  skinType: "Мэдрэмтгий, гэмтсэн арьс",
  format: "20g / 10g",
  routine: "Процедурын дараа",

  specs: [
    { label: "Хэрэглэх хэсэг", value: "Нүүр" },
    { label: "Арьсны төрөл", value: "Мэдрэмтгий, гэмтсэн арьс" },
    { label: "Хэмжээ", value: "20g / 10g" },
    { label: "Хэрэглэх үе", value: "Процедурын дараа" },
  ],

  benefits: [
    "Арьсны нөхөн төлжилтийг хурдасгана",
    "Сорвижилт үүсэхээс сэргийлнэ",
    "Үрэвслийн дараах нөсөөжилтийг бууруулна",
    "Гэмтсэн skin barrier-г сэргээнэ",
    "Арьсыг тайвшруулж, улайлтыг багасгана",
    "Лазер болон эмчилгээний дараа хэрэглэхэд тохиромжтой",
  ],

  ingredients: [
    {
      name: "EGF (Epidermal Growth Factor)",
      benefit:
        "Арьсны эсийн нөхөн төлжилтийг идэвхжүүлж, гэмтсэн арьсыг сэргээнэ",
    },
    {
      name: "bFGF",
      benefit:
        "Арьсны хамгаалах давхаргыг бэхжүүлж, нөхөн сэргэлтийг дэмжинэ",
    },
    {
      name: "IGF-1",
      benefit:
        "EGF-тэй хамтран үйлчилж, арьсны нөхөн төлжилтийг улам сайжруулна",
    },
    {
      name: "Copper Tripeptide-1",
      benefit:
        "Арьсны шинэчлэлтийг дэмжиж, ерөнхий байдлыг сайжруулна",
    },
  ],

  howToUse: [
    "Процедурын дараа шууд хэрэглэж эхэлнэ",
    "Эхний үед 2–3 цаг тутамд нимгэн түрхэнэ",
    "Дараагийн 2 хоног өдөрт 2 удаа хэрэглэнэ",
    "Зөөлөн массажлан арьсанд шингээнэ",
    "Нарны тос, будалттай хамт хэрэглэхэд тохиромжтой",
  ],
}

export default function EFICreamPage() {
  return (
    <main>
      <Header />
      <HomeProductDetail product={product} />
      <Footer />
    </main>
  )
}