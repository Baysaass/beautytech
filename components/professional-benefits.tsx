import { Award, Users, Sparkles, Shield, GraduationCap, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Итгэмжлэгдсэн чанар",
    description:
      "RIBESKIN бүтээгдэхүүнүүд нь KFDA (Солонгосын Хүнс, Эмийн Газар) болон олон улсын стандартаар баталгаажсан.",
  },
  {
    icon: Users,
    title: "Мэргэжлийн дэмжлэг",
    description:
      "Манай баг таны салонд бүтээгдэхүүний хэрэглээ, маркетингийн талаар бүрэн дэмжлэг үзүүлнэ.",
  },
  {
    icon: GraduationCap,
    title: "Сургалт хөтөлбөр",
    description:
      "Мэргэжилтнүүдэд зориулсан гэрчилгээтэй сургалт, семинар, воркшоп тогтмол зохион байгуулна.",
  },
  {
    icon: Sparkles,
    title: "Шинэлэг технологи",
    description:
      "Солонгосын хамгийн сүүлийн үеийн арьс арчилгааны технологи, судалгааны үр дүнд суурилсан бүтээгдэхүүнүүд.",
  },
  {
    icon: Shield,
    title: "Баталгаат бүтээгдэхүүн",
    description:
      "100% жинхэнэ бүтээгдэхүүн, шууд импортлогч учир хуурамч бүтээгдэхүүний эрсдэлгүй.",
  },
  {
    icon: HeartHandshake,
    title: "Түншлэлийн хөтөлбөр",
    description:
      "Албан ёсны борлуулагч болж, онцгой үнэ, урамшуулал, маркетингийн материалаар хангагдана.",
  },
]

export function ProfessionalBenefits() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Яагаад биднийг сонгох вэ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light">
            Түншлэлийн <span className="italic font-medium">Давуу талууд</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Beautytech LLC-тэй хамтран ажилласнаар та олон давуу талыг эдэлнэ
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-card p-8 border border-border hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground font-medium mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card p-8 lg:p-12 border border-border max-w-2xl">
            <h3 className="font-serif text-2xl text-foreground font-light mb-4">
              Түнш болохыг хүсч байна уу?
            </h3>
            <p className="text-muted-foreground mb-6">
              Манай мэргэжлийн багтай холбогдож, таны салон, спа-д тохирох 
              бүтээгдэхүүний санал авна уу.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent"
            >
              Холбоо барих
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
