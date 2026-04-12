import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Treatments } from "@/components/treatments"

import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Solutions />
      <Products />
      <About />
      <Treatments />
      <Contact />
      <Footer />
    </main>
  )
}
