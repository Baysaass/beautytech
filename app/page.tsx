import { PopupModal } from "@/components/popup-modal"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Treatments } from "@/components/treatments"
// import { LoyaltyCalculator } from "@/components/loyalty-calculator"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <PopupModal />
      <Header />
      <Hero />
      <Solutions />
      <Products />
      <About />
      <Treatments />
{/* <LoyaltyCalculator /> */}
      <Contact />
      <Footer />
    </main>
  )
}
