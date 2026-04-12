"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const navigation = [
  { name: "Нүүр", href: "/" },
  {
    name: "Шийдлүүд",
    href: "#solutions",
    children: [
      { name: "Гэрийн арчилгаа", href: "/solutions/home" },
      { name: "Мэргэжлийн шийдэл", href: "/solutions/professional" },
      { name: "Эмнэлгийн шийдэл", href: "/solutions/medical" },
    ],
  },
  {
    name: "Бүтээгдэхүүн",
    href: "#products",
    megaMenu: true,
    columns: [
      {
        title: "Ribeskin Pro",
        items: [
          { name: "Carboxy Therapy", href: "/products/carboxy" },
          { name: "GPeel", href: "/products/gpeel" },
          { name: "Deep Shoot", href: "/products/deep-shoot" },
        ],
      },
      {
        title: "Ribeskin Med",
        items: [
          { name: "Dr.MAL", href: "/products/dr-mal" },
        ],
      },
      {
        title: "Бүтээгдэхүүн",
        items: [
          { name: "Actan plus cream", href: "/products/home/actan-cream" },
          { name: "Actan plus serum", href: "/products/home/actan-serum" },
          { name: "Bruderm", href: "/products/home/bruderm" },
          { name: "Nicomed", href: "/products/home/nicomed" },
          { name: "EFI", href: "/products/home/EFI" },
        ],
      },
      {
        title: "Хэрэглэгдэхүүн",
        items: [
          { name: "Turtlepin", href: "/products/turtlepin" },
        ],
      },
    ],
  },
  { name: "Бидний тухай", href: "#about" },
  { name: "Сургалт", href: "#treatments" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)

    if (href.startsWith("#")) {
      router.push("/" + href)
      return
    }

    router.push(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
        >
          BEAUTYTECH
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() =>
                (item.children || item.megaMenu) &&
                setActiveDropdown(item.name)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {item.name}
                {(item.children || item.megaMenu) && (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>

              {/* Dropdown */}
              {item.children && activeDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card rounded-sm shadow-xl border border-border p-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <button
                        key={child.name}
                        onClick={() => handleNavigation(child.href)}
                        className="block w-full text-left px-4 py-2.5 text-sm hover:bg-muted rounded-sm"
                      >
                        {child.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Mega menu */}
              {item.megaMenu && activeDropdown === item.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="bg-card border shadow-xl p-6 grid grid-cols-4 gap-10 min-w-[900px]">
                    {item.columns.map((col) => (
                      <div key={col.title}>
                        <h4 className="text-xs font-semibold uppercase mb-3 text-muted-foreground">
                          {col.title}
                        </h4>

                        <div className="flex flex-col gap-2">
                          {col.items.map((sub) => (
                            <button
                              key={sub.name}
                              onClick={() => handleNavigation(sub.href)}
                              className="text-sm text-left hover:text-accent transition"
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleNavigation("#contact")}
          className={cn(
            "hidden lg:block px-6 py-2.5 text-sm font-medium uppercase border transition-all",
            isScrolled
              ? "border-primary text-primary hover:bg-primary hover:text-white"
              : "border-white text-white hover:bg-white hover:text-black"
          )}
        >
          Холбогдох
        </button>

        {/* Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2",
            isScrolled ? "text-foreground" : "text-white"
          )}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}