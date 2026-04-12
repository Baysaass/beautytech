import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function HomeHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/home-solutions.jpg"
          alt="Home Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <nav className="flex items-center gap-2 text-sm text-card/70 mb-8">
          <Link href="/" className="hover:text-card transition-colors">
            Нүүр
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#solutions" className="hover:text-card transition-colors">
            Шийдлүүд
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-card">Home</span>
        </nav>

        <div className="max-w-2xl">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Home Solutions
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-light leading-tight">
            Гэрийн{" "}
            <span className="italic font-medium">Арчилгаа</span>
          </h1>
          <p className="mt-6 text-card/80 text-lg leading-relaxed max-w-xl">
            Өдөр тутмын арьс арчилгааны бүтээгдэхүүнүүд. RIBESKIN брэндийн 
            гэрийн нөхцөлд хэрэглэх чанартай арьс арчилгааны шийдлүүд.
          </p>
        </div>
      </div>
    </section>
  )
}
