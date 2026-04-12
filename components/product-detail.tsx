"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Play, ChevronRight, Sparkles, Droplets, Shield, Zap } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface ProductDetailProps {
  product: {
    id: string
    name: string
    nameKr: string
    tagline: string
    description: string
    heroImage: string
    benefits: {
      title: string
      description: string
      icon: "sparkles" | "droplets" | "shield" | "zap"
    }[]
    clinicalResults: {
      percentage: string
      label: string
      description: string
    }[]
    applications: {
      title: string
      description: string
      image: string
    }[]
    steps: {
      step: number
      title: string
      description: string
    }[]
    gallery: string[]
  }
}

const iconMap = {
  sparkles: Sparkles,
  droplets: Droplets,
  shield: Shield,
  zap: Zap,
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Link */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">Бүтээгдэхүүн рүү буцах</span>
          </Link>

          <div className="max-w-2xl">
            <span className="text-background/60 text-sm tracking-widest uppercase">
              {product.nameKr}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-background font-light mt-4 mb-6">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-background/80 font-light mb-4">
              {product.tagline}
            </p>
            <p className="text-background/70 leading-relaxed max-w-xl mb-10">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent hover:text-background"
              >
                Захиалга өгөх
                <ChevronRight className="w-4 h-4" />
              </a>
              <button className="inline-flex items-center gap-2 px-8 py-4 border border-background/30 text-background text-sm font-medium tracking-wide uppercase transition-all hover:bg-background/10">
                <Play className="w-4 h-4" />
                Видео үзэх
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Давуу талууд
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
              Яагаад <span className="italic font-medium">{product.name}</span> сонгох вэ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon]
              return (
                <div
                  key={index}
                  className="group p-8 bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clinical Results */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-4">
              Клиникийн судалгаа
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
              Батлагдсан <span className="italic font-medium">үр дүн</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {product.clinicalResults.map((result, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-accent mb-4">
                  {result.percentage}
                </div>
                <h3 className="text-xl font-medium mb-2">{result.label}</h3>
                <p className="text-primary-foreground/60 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications / Use Cases */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Хэрэглээ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
              Хаана <span className="italic font-medium">хэрэглэх вэ?</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {product.applications.map((app, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-6 py-3 text-sm font-medium tracking-wide transition-all border",
                  activeTab === index
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-primary"
                )}
              >
                {app.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={product.applications[activeTab].image}
                alt={product.applications[activeTab].title}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>
            <div>
              <h3 className="font-serif text-3xl text-foreground mb-6">
                {product.applications[activeTab].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.applications[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Steps */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Эмчилгээний дараалал
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
              Хэрхэн <span className="italic font-medium">хэрэглэх вэ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.steps.map((step, index) => (
              <div key={index} className="relative">
                {index < product.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 bg-card p-8 border border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl mb-6">
                    {step.step}
                  </div>
                  <h3 className="font-medium text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Үр дүн
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
              Бодит <span className="italic font-medium">өөрчлөлтүүд</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
  {product.gallery.map((img, i) => (
    <div key={i}>
      <Image
        src={img}
        alt={`gallery-${i}`}
        width={1600}
        height={900}
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  ))}
</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            {product.name} бүтээгдэхүүнийг <span className="italic font-medium">захиалах</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Мэргэжлийн зөвлөгөө авч, таны салон эсвэл клиникт тохирсон бүтээгдэхүүнийг сонгоорой.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary-foreground text-primary text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent hover:text-primary-foreground"
            >
              Холбоо барих
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-10 py-4 border border-primary-foreground/30 text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-primary-foreground/10"
            >
              Бусад бүтээгдэхүүн
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}