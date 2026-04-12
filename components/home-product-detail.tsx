"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, ChevronDown } from "lucide-react"

interface ProductSpec {
  label: string
  value: string
}

interface ProductIngredient {
  name: string
  benefit: string
}

interface ProductProps {
  product: {
    id: string
    name: string
    subtitle: string
    category: string
    description: string
    longDescription: string
    price: string
    image: string
    treatmentArea: string
    skinType: string
    format: string
    routine: string
    specs: ProductSpec[]
    howToUse: string[]
    ingredients: ProductIngredient[]
    benefits: string[]
  }
}

export function HomeProductDetail({ product }: ProductProps) {
  const [activeTab, setActiveTab] = useState<"description" | "ingredients" | "howto">("description")

  const tabs = [
    { id: "description" as const, label: "Тайлбар" },
    { id: "ingredients" as const, label: "Найрлага" },
    { id: "howto" as const, label: "Хэрэглэх заавар" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-24">
        <Link
          href="/solutions/home"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Бүх бүтээгдэхүүн
        </Link>
      </div>

      {/* Hero Section - Large Image + Info */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Product Image */}
            <div className="relative aspect-square bg-muted sticky top-24">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              {/* Category */}
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-4">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                {product.subtitle}
              </p>

              {/* Short Description */}
              <p className="text-foreground/80 leading-relaxed mb-10 text-lg">
                {product.description}
              </p>

              {/* Specifications Table */}
              <div className="border-t border-border">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-4 border-b border-border"
                  >
                    <span className="text-muted-foreground text-sm uppercase tracking-wide font-medium">
                      {spec.label}
                    </span>
                    <span className="text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-2xl font-medium text-foreground">
                  {product.price}
                </span>
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-foreground text-background text-sm font-medium tracking-widest uppercase transition-colors hover:bg-accent"
                >
                  Захиалга өгөх
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          {/* Tab Headers */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors ${
                  activeTab === tab.id
                    ? "bg-foreground text-background"
                    : "bg-card text-foreground hover:bg-accent hover:text-background"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="bg-card p-8 lg:p-12">
                <p className="text-foreground/80 leading-relaxed text-lg mb-8">
                  {product.longDescription}
                </p>
                
                <h3 className="font-serif text-xl text-foreground mb-6">
                  Үндсэн давуу талууд
                </h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ingredients Tab */}
            {activeTab === "ingredients" && (
              <div className="bg-card p-8 lg:p-12">
                <h3 className="font-serif text-xl text-foreground mb-8">
                  Үндсэн найрлага
                </h3>
                <div className="space-y-6">
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="border-b border-border pb-6 last:border-0">
                      <h4 className="font-medium text-foreground mb-2">
                        {ingredient.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {ingredient.benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How to Use Tab */}
            {activeTab === "howto" && (
              <div className="bg-card p-8 lg:p-12">
                <h3 className="font-serif text-xl text-foreground mb-8">
                  Хэрэглэх заавар
                </h3>
                <ol className="space-y-6">
                  {product.howToUse.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="w-8 h-8 bg-accent/10 flex items-center justify-center text-accent font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-foreground/80 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Accordion Alternative for Mobile */}
      <section className="py-16 lg:hidden">
        <div className="container mx-auto px-6">
          {tabs.map((tab) => (
            <div key={tab.id} className="border-b border-border">
              <button
                onClick={() => setActiveTab(activeTab === tab.id ? "description" : tab.id)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-medium text-foreground">{tab.label}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    activeTab === tab.id ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl text-foreground mb-4">
            Бусад бүтээгдэхүүнүүд
          </h3>
          <p className="text-muted-foreground mb-8">
            Арьс арчилгааны бүрэн цуглуулгатай танилцана уу
          </p>
          <Link
            href="/solutions/home"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent"
          >
            Бүх бүтээгдэхүүн үзэх
          </Link>
        </div>
      </section>
    </div>
  )
}