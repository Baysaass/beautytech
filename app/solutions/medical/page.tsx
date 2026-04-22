import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/home-hero"
import { HomeProducts } from "@/components/home-products"

export const metadata = {
  title: "Medical Solutions | Beautytech LLC",
  description: "Эмнэлгийн түвшний арьс засал, гоо сайхны эмчилгээний бүтээгдэхүүнүүд. RIBESKIN Dermal филлер, эмчилгээний шийдлүүд.",
}

export default function MedicalSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeHero />
      <HomeProducts />
      <Footer />
    </main>
  )
}
