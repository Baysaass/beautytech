"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Хаяг",
    details: ["Улаанбаатар хот", "Баянзүрх дүүрэг, 26-р хороо", "Хүннү гудамж","May seven hotel", "3 давхар 305 тоот"],
  },
  {
    icon: Phone,
    title: "Утас",
    details: ["+976 9000-6070", "+976 9000-6071"],
  },
  {
    icon: Mail,
    title: "И-мэйл",
    details: ["info@beautytech.mn", "sales@beautytech.mn"],
  },
  {
    icon: Clock,
    title: "Ажлын цаг",
    details: ["Даваа - Баасан: 10:00 - 18:00"],
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/send', {  // ← API дуудах
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),  // ← Маягтын өгөгдөл илгээх
    })

    if (!response.ok) throw new Error('Алдаа гарлаа')

    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  } catch (error) {
    alert('Илгээхэд алдаа гарлаа. Дахин оролдоно уу.')
  } finally {
    setIsSubmitting(false)
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Холбоо барих
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
            Бидэнтэй <span className="italic font-medium">холбогдох</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Бүтээгдэхүүн, үйлчилгээний талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл бидэнтэй холбогдоорой
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-card p-8 lg:p-12 shadow-sm border border-border">
            <h3 className="font-serif text-2xl text-foreground font-light mb-8">
              Хүсэлт илгээх
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2">
                  Баярлалаа!
                </h4>
                <p className="text-muted-foreground">
                  Таны хүсэлт амжилттай илгээгдлээ. Бид тантай удахгүй холбогдох болно.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Нэр *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Таны нэр"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      И-мэйл *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Утас
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="+976 9900 0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Байгууллага
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Байгууллагын нэр"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Мессеж *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Таны хүсэлт, асуултыг бичнэ үү..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Илгээж байна...
                    </>
                  ) : (
                    <>
                      Илгээх
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="group">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-foreground font-medium mb-2">{item.title}</h4>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="text-sm font-medium text-foreground tracking-wide uppercase mb-4">
                Биднийг дагах
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ribeskin_mongolia/"
                  className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/CO2Carboxy"
                  className="w-12 h-12 rounded-sm bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
<div className="mt-8 aspect-video overflow-hidden rounded-xl">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1786.6792970390945!2d106.93476956296094!3d47.90413392419391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96939018d06685%3A0xcfa7155a422244be!2sMay%20Seven%20Hotel!5e1!3m2!1sen!2smn!4v1775814219967!5m2!1sen!2smn"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
