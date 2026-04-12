import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/home-hero"
import { HomeProducts } from "@/components/home-products"

export const metadata = {
  title: "Home Solutions | Beautytech LLC",
  description: "Өдөр тутмын арьс арчилгааны бүтээгдэхүүнүүд. RIBESKIN брэндийн гэрийн нөхцөлд хэрэглэх арьс арчилгааны шийдлүүд.",
}

export default function HomeSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HomeHero />
      <HomeProducts />
      <Footer />
    </main>
  )
}
