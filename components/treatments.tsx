"use client"

import { ArrowUpRight } from "lucide-react"

const trainings = [
  {
    number: "01",
    title: "Carboxy Therapy сургалт",
    description:
      "CO2 Carboxy Therapy-ийн Bohr effect дээр суурилсан физиологийн үйлчлэл, арьсны хүчилтөрөгчийн солилцоог идэвхжүүлэх механизм, мөн эмчилгээний өмнө ба дараах протоколуудыг практиктай хослуулан заана. Лазер, пилинг, мезотерапи зэрэг эмчилгээний үр дүнг нэмэгдүүлэх зөв хослолыг сурна.",
    duration: "1 өдөр",
    level: "Анхан шат",
  },
  {
    number: "02",
    title: "Deep Shoot сургалт",
    description:
      "Deep Shoot 32G hypodermic технологи, 19 микро зүү ашиглан идэвхт бодисыг арьсны гүн давхаргад хүргэх аргачлал,Hyaluronic Acid (HA) болон Anti-aging коктейль (AA)-ийн найрлага, хэрэглээний протоколуудыг эзэмшинэ. Арьсны төрөлд тохирсон treatment design хийх чадварт суралцана.",
    duration: "1 өдөр",
    level: "Дунд шат",
  },
  {
    number: "03",
    title: "Gwang Peel (G-Peel) сургалт",
    description:
      "Spicule + BHA хосолсон 72 цагийн нөхөн төлжилтийн механизм, батганд өртөмтгий арьсанд зориулсан пилингийн протокол, арьсны нөхөн төлжилтийг идэвхжүүлэх growth factor болон peptide системийн хэрэглээг онол, практиктай хослуулан заана.",
    duration: "1 өдөр",
    level: "Анхан шат",
  },
  {
    number: "04",
    title: "Dr. MAL (PDT) сургалт",
    description:
      "Photodynamic Therapy (PDT)-ийн суурь ойлголт, Methyl-ALA (MAL)-ийн арьсанд шингэх механизм, батга үүсгэгч бактерийг сонгомлоор устгах процесс, эмчилгээний аюулгүй байдал болон протоколыг гүнзгий түвшинд судална.",
    duration: "1 өдөр",
    level: "Ахисан шат",
  },
  {
    number: "05",
    title: "Skin Booster сургалт",
    description:
      "Гиалуроны хүчил, пептид, өсөлтийн фактор зэрэг идэвхт найрлагуудыг ашиглан арьсны гүн чийгшүүлэлт, нөхөн төлжилтийг дэмжих skin booster протоколуудыг сурна. Арьсны төрөл, асуудалд тохирсон treatment plan боловсруулах чадварыг эзэмшинэ.",
    duration: "1 өдөр",
    level: "Дунд шат",
  },
  {
    number: "06",
    title: "Master сургалт",
    description:
      "Carboxy Therapy, Deep Shoot, Gwang Peel, Dr. MAL зэрэг бүх технологийг уялдуулан ашиглах иж бүрэн протокол, олон төрлийн арьсны асуудалд personalized treatment хийх аргачлал, clinical-level шийдлүүдийг практиктай хослуулан заана. Амжилттай төгсөгчдөд сертификат олгоно.",
    duration: "2 өдөр",
    level: "Мэргэжлийн",
  }
]

export function Treatments() {
  return (
    <section id="treatments" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-4">
            Мэргэжлийн боловсрол
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
            Сургалтын <span className="italic font-medium">хөтөлбөр</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-primary-foreground/70 leading-relaxed">
            RIBESKIN бүтээгдэхүүнүүдийг мэргэжлийн түвшинд ашиглах сургалтууд
          </p>
        </div>

        {/* Trainings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trainings.map((training) => (
            <div
              key={training.number}
              className="group p-8 border border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-primary-foreground/5 transition-all cursor-pointer"
            >
              {/* Number */}
              <span className="text-primary-foreground/30 text-sm tracking-widest">
                {training.number}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl font-light mt-4 mb-4 group-hover:text-accent transition-colors">
                {training.title}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                {training.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-6 text-xs text-primary-foreground/50">
                <span>{training.duration}</span>
                <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
                <span>{training.level}</span>
              </div>

              {/* Arrow */}
              <div className="mt-6 flex justify-end">
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/30 group-hover:text-primary-foreground transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-primary-foreground text-primary text-sm font-medium tracking-wide uppercase transition-all hover:bg-accent hover:text-white"
          >
            Бүртгүүлэх
          </a>
        </div>
      </div>
    </section>
  )
}
