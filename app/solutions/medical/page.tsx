import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MedicalHero } from "@/components/medical-hero"
import { MedicalProducts } from "@/components/medical-products"

export const metadata = {
  title: "Medical Solutions | Beautytech LLC",
  description: "Эмнэлгийн түвшний арьс засал, гоо сайхны эмчилгээний бүтээгдэхүүнүүд. RIBESKIN Dermal филлер, эмчилгээний шийдлүүд.",
}

export default function MedicalSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <MedicalHero />
      <MedicalProducts />
      <Footer />
    </main>
  )
}
