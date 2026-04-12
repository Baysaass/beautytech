import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProfessionalProducts } from "@/components/professional-products"
import { ProfessionalHero } from "@/components/professional-hero"
import { ProfessionalBenefits } from "@/components/professional-benefits"

export const metadata = {
  title: "Professional Cosmetic Solutions | Beautytech LLC",
  description: "Гоо сайхны салон, спа-д зориулсан мэргэжлийн косметикийн бүтээгдэхүүнүүд. RIBESKIN брэндийн Carboxy, Deep Shoot, G-Peel эмчилгээний шийдлүүд.",
}

export default function ProfessionalSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProfessionalHero />
      <ProfessionalProducts />
      <ProfessionalBenefits />
      <Footer />
    </main>
  )
}
