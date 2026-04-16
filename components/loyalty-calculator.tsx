
"use client"
 
import { useState, useCallback } from "react"
import { Gem, Medal, Star, Trophy, Award } from "lucide-react"
 
const TIERS = [
  {
    id: "bronze",
    name: "Хүрэл",
    label: "Bronze",
    Icon: Medal,
    min: 0,
    max: 999_999,
    disc: 0,
    range: "0 – 999,999₮",
    nextLabel: "Мөнгө",
    nextMin: 1_000_000,
  },
  {
    id: "silver",
    name: "Мөнгө",
    label: "Silver",
    Icon: Star,
    min: 1_000_000,
    max: 4_999_999,
    disc: 2,
    range: "1,000,000 – 4,999,999₮",
    nextLabel: "Алт",
    nextMin: 5_000_000,
  },
  {
    id: "gold",
    name: "Алт",
    label: "Gold",
    Icon: Trophy,
    min: 5_000_000,
    max: 9_999_999,
    disc: 3,
    range: "5,000,000 – 9,999,999₮",
    nextLabel: "Платинум",
    nextMin: 10_000_000,
  },
  {
    id: "platinum",
    name: "Платинум",
    label: "Platinum",
    Icon: Award,
    min: 10_000_000,
    max: 29_999_999,
    disc: 5,
    range: "10,000,000 – 29,999,999₮",
    nextLabel: "Алмаз",
    nextMin: 30_000_000,
  },
  {
    id: "diamond",
    name: "Алмаз",
    label: "Diamond",
    Icon: Gem,
    min: 30_000_000,
    max: Infinity,
    disc: 10,
    range: "30,000,000₮+",
    nextLabel: null,
    nextMin: null,
  },
]
 
type Tier = (typeof TIERS)[number]
 
const MAX_SLIDER = 40_000_000
 
const fmt = (n: number) => Math.round(n).toLocaleString("mn-MN")
 
function getTier(value: number): Tier {
  return TIERS.find((t) => value >= t.min && value <= t.max) ?? TIERS[0]
}
 
const TIER_STYLES: Record<
  string,
  { row: string; icon: string; badge: string }
> = {
  bronze:   { row: "border-[#A89880]/30 bg-[#FAF7F2]",  icon: "bg-[#EDE5D8] text-[#7A5C3A]", badge: "bg-[#EDE5D8] text-[#7A5C3A]" },
  silver:   { row: "border-[#7A9EBF]/30 bg-[#F0F5FA]",  icon: "bg-[#D8E8F4] text-[#2A4A65]", badge: "bg-[#D8E8F4] text-[#2A4A65]" },
  gold:     { row: "border-[#C9A84C]/40 bg-[#FDF9EE]",  icon: "bg-[#F5E8C0] text-[#7A5010]", badge: "bg-[#F5E8C0] text-[#7A5010]" },
  platinum: { row: "border-[#9B7ABF]/30 bg-[#F7F3FC]",  icon: "bg-[#EDE4F5] text-[#4A2A70]", badge: "bg-[#EDE4F5] text-[#4A2A70]" },
  diamond:  { row: "border-[#4A9E7A]/30 bg-[#EFF9F4]",  icon: "bg-[#D4EDE4] text-[#1A5A40]", badge: "bg-[#D4EDE4] text-[#1A5A40]" },
}
 
export function LoyaltyCalculator() {
  const [value, setValue] = useState(10_000_000)
 
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value))
    },
    []
  )
 
  const tier = getTier(value)
  const styles = TIER_STYLES[tier.id]
  const discount = Math.round(value * tier.disc) / 100
  const final = value - discount
  const pct = Math.round((value / MAX_SLIDER) * 100)
 
  const nextNeeded =
    tier.nextMin !== null ? Math.max(0, tier.nextMin - value) : null
 
  return (
    <section id="loyalty" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
 
        {/* Section Header — matches News component pattern */}
        <div className="mb-12 lg:mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Үнэнч харилцагч
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light">
            Таны <span className="italic font-medium">хөнгөлөлт</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-md leading-relaxed">
            Нийт худалдан авалтын хэмжээгээр tier ахиж, дараагийн
            захиалгаас хөнгөлөлт эдэлнэ.
          </p>
        </div>
 
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
 
          {/* ── Left column: slider + tier ladder ── */}
          <div>
            {/* Amount */}
            <div className="mb-8">
              <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">
                Нийт худалдан авалт
              </p>
              <p className="font-serif text-5xl lg:text-6xl text-foreground font-light tracking-tight">
                {fmt(value)}
                <span className="text-2xl text-muted-foreground ml-2 font-sans font-light">
                  ₮
                </span>
              </p>
            </div>
 
            {/* Slider */}
            <div className="mb-10">
              <input
                type="range"
                min={0}
                max={MAX_SLIDER}
                step={500_000}
                value={value}
                onChange={handleChange}
                className="
                  w-full h-[3px] rounded-full appearance-none outline-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-foreground
                  [&::-webkit-slider-thumb]:border-2
                  [&::-webkit-slider-thumb]:border-background
                  [&::-webkit-slider-thumb]:shadow-md
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-110
                  [&::-moz-range-thumb]:w-5
                  [&::-moz-range-thumb]:h-5
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-foreground
                  [&::-moz-range-thumb]:border-2
                  [&::-moz-range-thumb]:border-background
                  [&::-moz-range-thumb]:cursor-pointer
                "
                style={{
                  background: `linear-gradient(to right, #111 ${pct}%, #e5e5e5 ${pct}%)`,
                }}
              />
              <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                <span>0₮</span>
                <span>10M₮</span>
                <span>20M₮</span>
                <span>30M₮</span>
                <span>40M₮</span>
              </div>
            </div>
 
            {/* Tier ladder */}
            <div className="space-y-1.5">
              {TIERS.map((t) => {
                const s = TIER_STYLES[t.id]
                const isActive = t.id === tier.id
                const TIcon = t.Icon
                return (
                  <div
                    key={t.id}
                    className={`
                      flex items-center gap-3 px-4 py-3 border rounded-sm
                      transition-all duration-300
                      ${
                        isActive
                          ? `${s.row} border opacity-100`
                          : "border-border/30 bg-transparent opacity-35"
                      }
                    `}
                  >
                    <span
                      className={`
                        w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0
                        ${s.icon}
                      `}
                    >
                      <TIcon className="w-3.5 h-3.5" />
                    </span>
 
                    <span className="text-sm font-medium text-foreground flex-1">
                      {t.name}
                    </span>
 
                    <span className="text-xs text-muted-foreground hidden sm:block">
                      {t.range}
                    </span>
 
                    <span
                      className={`
                        text-xs font-semibold px-2 py-0.5 rounded-sm flex-shrink-0
                        ${s.badge}
                      `}
                    >
                      {t.disc}%
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
 
          {/* ── Right column: result card ── */}
          <div className="lg:sticky lg:top-28">
            {/* Active tier badge */}
            <div
              className={`
                inline-flex items-center gap-2 px-4 py-2 border rounded-sm mb-8
                transition-all duration-300 ${styles.row} border
              `}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center ${styles.icon}`}
              >
                <tier.Icon className="w-3 h-3" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {tier.name} — {tier.label}
              </span>
            </div>
 
            {/* Big discount number */}
            <div className="mb-10">
              <p className="text-muted-foreground text-xs tracking-widest uppercase mb-3">
                Таны хөнгөлөлт
              </p>
              <p className="font-serif text-[96px] leading-none text-foreground font-light">
                {tier.disc}
                <span className="text-4xl text-muted-foreground">%</span>
              </p>
            </div>
 
            {/* Breakdown table */}
            <div className="border border-border/60 divide-y divide-border/60 mb-6">
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-sm text-muted-foreground">Нийт дүн</span>
                <span className="text-sm font-medium text-foreground">
                  {fmt(value)}₮
                </span>
              </div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-sm text-muted-foreground">
                  Хөнгөлөлт ({tier.disc}%)
                </span>
                <span className="text-sm font-medium text-foreground">
                  − {fmt(discount)}₮
                </span>
              </div>
              <div className="flex justify-between items-center px-5 py-4 bg-foreground">
                <span className="text-sm font-medium text-background">
                  Төлөх дүн
                </span>
                <span className="font-serif text-xl font-light text-background">
                  {fmt(final)}₮
                </span>
              </div>
            </div>
 
            {/* Next tier nudge */}
            {nextNeeded !== null && nextNeeded > 0 && (
              <p className="text-sm text-muted-foreground border-l-2 border-accent pl-4 leading-relaxed">
                <span className="text-foreground font-medium">
                  {fmt(nextNeeded)}₮
                </span>{" "}
                нэмж худалдан авбал{" "}
                <span className="text-foreground font-medium">
                  {tier.nextLabel}
                </span>{" "}
                tier-т шилжиж нэмэлт хөнгөлөлт эдэлнэ.
              </p>
            )}
 
            {tier.id === "diamond" && (
              <p className="text-sm text-muted-foreground border-l-2 border-accent pl-4 leading-relaxed">
                Та хамгийн дээд{" "}
                <span className="text-foreground font-medium">Алмаз</span>{" "}
                tier-т байна. Бүх худалдан авалтаас{" "}
                <span className="text-foreground font-medium">10%</span>{" "}
                хөнгөлөлт эдэлж байна.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}