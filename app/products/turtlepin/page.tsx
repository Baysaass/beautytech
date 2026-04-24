import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowUpRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "TURTLEPIN® | Beautytech LLC",
  description:
    "TURTLEPIN® — 32G nano-hypodermic needle applicator. Арьсны гүн давхаргад идэвхт бодисыг хамгийн бага өвдөлттэйгээр, тэгш жигд хүргэдэг мэргэжлийн хэрэглэгдэхүүн.",
}

const features = [
  {
    title: "32G Hypodermic Needles",
    description:
      "Accurate penetration and direct delivery of drugs",
  },
  {
    title: "Equal Needle Layout",
    description:
      "Equal diffusion of liquid drugs through equally positioned hypodermic needles",
  },
  {
    title: "Luer-lock",
    description:
      "Compatible with all types of syringe",
  },
  {
    title: "LANCET 2 × CUT",
    description:
      "Reduced pain and risk of injury",
  },
]

const superficialApps = {
  left: [
    "Skin Booster",
    "Hyaluronic Acid",
    "Growth Factor for face & hair loss",
  ],
  right: [
    "Alopecia",
    "Acne",
    "Intralesional injection",
    "PRP (Platelet Rich Plasma)",
    "Skin Booster",
    "PDRN, PN",
    "Hyaluronic Acid (Non-cross linked)",
    "Growth Factor for face & hair loss",
    "Steroid (T.A)",
  ],
}

const perpendicularApps = {
  left: [
    "Alopecia",
    "Acne",
    "Intralesional injection",
    "PRP (Platelet Rich Plasma)",
    "Skin Booster",
    "PDRN, PN",
    "Hyaluronic Acid (Non-cross linked)",
    "Growth Factor for face & hair loss",
    "Steroid (T.A)",
  ],
  right: [
    "Lipo-lysis injection",
    "CO2 carboxy injection",
    "Steroid (T.A)",
  ],
}

export default function TurtlepinPage() {
  return (
    <>
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pro/RIBESKIN PRO_DEEP SHOOT_HA w multineedle.png"
            alt="TURTLEPIN device"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-40">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-background/50 mb-12">
              <Link href="/" className="hover:text-background/80 transition-colors">Нүүр</Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-background/80 transition-colors">Бүтээгдэхүүн</Link>
              <span>/</span>
              <span className="text-background/80">Turtlepin</span>
            </nav>

            {/* Logo text */}
            <p className="text-accent text-sm tracking-[0.4em] uppercase mb-6">
              RIBESKIN — Хэрэглэгдэхүүн
            </p>

            <h1 className="font-serif text-6xl md:text-7xl lg:text-9xl text-background font-light tracking-tight mb-8">
              TURTLE<span className="italic font-medium">PIN</span>
              <sup className="text-2xl align-super">®</sup>
            </h1>

            <p className="text-background/70 text-xl md:text-2xl font-light leading-relaxed max-w-xl mb-12">
              32G nano-hypodermic needles that allow highly enhanced skin
              permeability in a minimally painful manner.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.ttpneedle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-medium tracking-widest uppercase hover:bg-accent hover:text-background transition-all"
              >
                Go to TURTLEPIN Website
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-background/30 text-background text-sm font-medium tracking-widest uppercase hover:bg-background/10 transition-all"
              >
                Захиалга өгөх
              </Link>
            </div>
          </div>
        </div>

        {/* Floating spec badge */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-2 text-background/40">
          <span className="font-serif text-7xl font-light text-background/20">32G</span>
          <span className="text-xs tracking-[0.3em] uppercase">Hypodermic</span>
        </div>
      </section>

      {/* ─── KEY FEATURES ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Онцлог шинжүүд
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
              Яагаад <span className="italic font-medium">TURTLEPIN®</span> сонгох вэ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-card border border-border hover:border-accent/40 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <span className="font-serif text-lg font-medium text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-medium text-foreground mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Product image */}
          <div className="mt-20 relative overflow-hidden bg-card border border-border">
            <Image
              src="/images/pro/RIBESKIN PRO_DEEP SHOOT_HA w multineedle.png"
              alt="TURTLEPIN needle applicator"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ─── SUPERFICIAL STIMULATOR ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3">
              Superficial Stimulator
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
              Wide & Immediate{" "}
              <span className="italic font-medium">Diffusion of Drugs</span>
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              Тэгш байрлуулсан зүүнүүдээр идэвхт бодисыг арьсны гадаргуу
              давхаргад өргөн хүрээнд, нэгэн зэрэг тархаан хүргэнэ.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left panel */}
            <div className="bg-background border border-border p-8 lg:p-10">
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <Image
                  src="/images/pro/RIBESKIN PRO_DEEP SHOOT_HA w multineedle.png"
                  alt="Superficial stimulator application"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-5">
                Хэрэглээ
              </h3>
              <ul className="space-y-3">
                {superficialApps.left.map((app, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right panel */}
            <div className="bg-background border border-border p-8 lg:p-10">
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <Image
                  src="/images/pro/RIBESKIN PRO_DEEP SHOOT_AA w multineedle.png"
                  alt="Superficial stimulator extended application"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-5">
                Өргөтгөсөн хэрэглээ
              </h3>
              <ul className="space-y-3">
                {superficialApps.right.map((app, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PERPENDICULAR INJECTOR ───────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/pro/딥슛-피부-침투-2048x1527.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-foreground/95" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Heading */}
          <div className="mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3">
              Perpendicular Injector
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background font-light">
              Accurate Multi-injection{" "}
              <span className="italic font-medium">at Once</span>
            </h2>
            <p className="mt-6 max-w-2xl text-background/60 leading-relaxed">
              Арьсанд перпендикуляр байдлаар нэгэн зэрэг олон цэгт нарийн
              чиглэлтэй тарилга хийж, тарааж нэвтрүүлэх нарийвчлалыг хангана.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left group */}
            <div className="bg-background/5 border border-background/10 p-8 lg:p-10">
              <h3 className="text-sm font-medium tracking-widest uppercase text-background/60 mb-6">
                Хэрэглээний заалтууд I
              </h3>
              <ul className="space-y-3">
                {perpendicularApps.left.map((app, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-background/70 text-sm">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right group */}
            <div className="bg-background/5 border border-background/10 p-8 lg:p-10">
              <h3 className="text-sm font-medium tracking-widest uppercase text-background/60 mb-6">
                Хэрэглээний заалтууд II
              </h3>
              <ul className="space-y-3">
                {perpendicularApps.right.map((app, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-background/70 text-sm">{app}</span>
                  </li>
                ))}
              </ul>

              {/* Product images */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden border border-background/10">
                  <Image
                    src="/images/pro/RIBESKIN PRO_DEEP SHOOT_AA_front box.png"
                    alt="TURTLEPIN product"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden border border-background/10">
                  <Image
                    src="/images/pro/RIBESKIN PRO_DEEP SHOOT_AA_inside box.png"
                    alt="TURTLEPIN product inside"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Дэлгэрэнгүй мэдээлэл
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light mb-6">
            TURTLEPIN® үндсэн{" "}
            <span className="italic font-medium">вэбсайт</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            TURTLEPIN®-ийн бүрэн техникийн мэдээлэл, бүтээгдэхүүний каталог,
            клиникийн судалгааг үндсэн вэбсайтаас үзнэ үү.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.ttpneedle.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-widest uppercase hover:bg-accent transition-all"
            >
              Go to TURTLEPIN Website
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-10 py-4 border border-border text-foreground text-sm font-medium tracking-widest uppercase hover:border-primary hover:text-primary transition-all"
            >
              Захиалга өгөх
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
