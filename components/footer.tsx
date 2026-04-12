"use client"

import Link from "next/link"
import { Instagram, Facebook, ChevronUp } from "lucide-react"

const footerLinks = {
  products: [
    { name: "Carboxy Therapy", href: "#carboxy" },
    { name: "Deep Shoot", href: "#deep-shoot" },
    { name: "G-Peel", href: "#gpeel" },
    { name: "Dermal", href: "#dermal" },
  ],
  company: [
    { name: "Бидний тухай", href: "#about" },
    { name: "Шийдэл", href: "#treatments" },
    { name: "Холбоо барих", href: "#contact" },
  ],
  support: [
    { name: "Түгээмэл асуулт", href: "#" },
    { name: "Үйлчилгээний нөхцөл", href: "#" },
    { name: "Нууцлалын бодлого", href: "#" },
    { name: "Сургалт", href: "#" },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-block font-serif text-3xl font-semibold tracking-wide mb-6">
              BEAUTYTECH
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Солонгосын RIBESKIN брэндийн Монгол улс дахь албан ёсны борлуулагч. 
              Мэргэжлийн арьс арчилгааны шийдлүүд.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">
              Бүтээгдэхүүн
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">
              Компани
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">
              Тусламж
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Beautytech LLC. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Дээш буцах
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Partner Logo */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-8 flex flex-col items-center justify-center gap-3">
          <p className="text-xs text-primary-foreground/40 tracking-widest uppercase">
            Албан ёсны түнш
          </p>
          <span className="font-serif text-xl tracking-wider text-primary-foreground/60">
            RIBESKIN
          </span>
        </div>
      </div>
    </footer>
  )
}
