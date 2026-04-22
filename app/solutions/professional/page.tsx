import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/home-hero"
import { HomeProducts } from "@/components/home-products"

export const metadata = {
  title: "Professional Cosmetic Solutions | Beautytech LLC",
  description: "Гоо сайхны салон, спа-д зориулсан мэргэжлийн косметикийн бүтээгдэхүүнүүд. RIBESKIN брэндийн Carboxy, Deep Shoot, G-Peel эмчилгээний шийдлүүд.",
}

export default function ProfessionalSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeHero />
      <HomeProducts />
      <Footer />
    </main>
  )
}
