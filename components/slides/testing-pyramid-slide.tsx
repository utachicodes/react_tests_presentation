"use client"

import { useState } from "react"

const levels = [
  {
    id: "e2e",
    label: "E2E",
    sublabel: "End-to-End",
    widthClass: "w-36",
    color: "bg-orange-500",
    glowColor: "rgba(249,115,22,0.35)",
    borderColor: "border-orange-500/50",
    textColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    ratio: "~10%",
    tools: ["Maestro", "Detox"],
    details: {
      speed: "Slow (minutes)",
      cost: "High",
      coverage: "Full user journeys",
      quantity: "Few — critical flows only",
      example: "Login → Browse → Checkout",
    },
  },
  {
    id: "integration",
    label: "Integration",
    sublabel: "Component Tests",
    widthClass: "w-60",
    color: "bg-blue-500",
    glowColor: "rgba(59,130,246,0.35)",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    ratio: "~20%",
    tools: ["RNTL", "Jest"],
    details: {
      speed: "Medium (seconds)",
      cost: "Medium",
      coverage: "Component interactions",
      quantity: "Some — key user flows",
      example: "Form submit → shows error",
    },
  },
  {
    id: "unit",
    label: "Unit",
    sublabel: "Function Tests",
    widthClass: "w-80",
    color: "bg-emerald-500",
    glowColor: "rgba(16,185,129,0.35)",
    borderColor: "border-emerald-500/50",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    ratio: "~70%",
    tools: ["Jest"],
    details: {
      speed: "Fast (milliseconds)",
      cost: "Low",
      coverage: "Individual functions",
      quantity: "Many — all business logic",
      example: "colorForDueDate('2020') → 'red'",
    },
  },
]

export default function TestingPyramidSlide() {
  const [selected, setSelected] = useState<string | null>(null)
  const active = levels.find((l) => l.id === selected)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-5xl w-full">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          The Testing Pyramid
        </h2>
        <p className="text-white/50 text-lg mb-10">
          Balance speed, cost, and confidence — click a layer to explore
        </p>

        <div className="flex gap-8 items-start">

          {/* Left axis label */}
          <div className="hidden md:flex flex-col items-center justify-center self-center h-48 shrink-0">
            <span className="text-white/25 text-xs rotate-[-90deg] whitespace-nowrap tracking-widest">FEWER · SLOWER · EXPENSIVE</span>
          </div>

          {/* Pyramid */}
          <div className="flex-1 flex flex-col items-center gap-2">
            {levels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelected(selected === level.id ? null : level.id)}
                className={`
                  ${level.widthClass} h-14 ${level.color} rounded-xl
                  flex items-center justify-between px-4
                  text-white font-semibold transition-all duration-200
                  hover:brightness-110 hover:scale-105 active:scale-95
                  ${selected === level.id ? "ring-2 ring-white/60 ring-offset-2 ring-offset-[#0a0a0a] brightness-110" : ""}
                `}
                style={{
                  boxShadow: selected === level.id ? `0 0 24px ${level.glowColor}` : "none",
                }}
              >
                <span className="text-sm font-bold">{level.label}</span>
                <div className="flex items-center gap-1.5">
                  {level.tools.map((t) => (
                    <span key={t} className="px-1.5 py-0.5 bg-black/20 rounded text-xs font-mono">
                      {t}
                    </span>
                  ))}
                  <span className="ml-1 text-white/70 text-xs font-mono">{level.ratio}</span>
                </div>
              </button>
            ))}

            <p className="text-white/25 text-xs tracking-widest mt-2">MORE · FASTER · CHEAPER</p>
          </div>

          {/* Right axis label */}
          <div className="hidden md:flex flex-col items-center justify-center self-center h-48 shrink-0">
            <span className="text-white/25 text-xs rotate-90 whitespace-nowrap tracking-widest">MORE · FASTER · CHEAPER</span>
          </div>

        </div>

        {/* Detail panel */}
        <div
          className={`mt-6 overflow-hidden transition-all duration-300 ${active ? "opacity-100 max-h-64" : "opacity-0 max-h-0"}`}
        >
          {active && (
            <div className={`p-5 ${active.bgColor} border ${active.borderColor} rounded-2xl`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-lg font-bold ${active.textColor}`}>{active.label} Tests</span>
                <span className="text-white/40 text-sm">{active.sublabel}</span>
                <div className="ml-auto flex gap-2">
                  {active.tools.map((t) => (
                    <span key={t} className={`px-2 py-0.5 rounded-full text-xs font-mono border ${active.borderColor} ${active.textColor}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                {[
                  { label: "Speed", value: active.details.speed },
                  { label: "Cost", value: active.details.cost },
                  { label: "Coverage", value: active.details.coverage },
                  { label: "Quantity", value: active.details.quantity },
                  { label: "Example", value: active.details.example },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-black/20 rounded-lg p-3">
                    <p className="text-white/40 text-xs mb-1">{label}</p>
                    <p className="text-white font-medium text-xs leading-snug">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Ratio bar */}
        <div className="mt-6 flex rounded-xl overflow-hidden h-3">
          <div className="bg-emerald-500 flex-[70]" title="Unit 70%" />
          <div className="bg-blue-500 flex-[20]" title="Integration 20%" />
          <div className="bg-orange-500 flex-[10]" title="E2E 10%" />
        </div>
        <div className="flex justify-between mt-1.5 text-xs text-white/30">
          <span>Unit 70%</span>
          <span>Integration 20%</span>
          <span>E2E 10%</span>
        </div>

      </div>
    </div>
  )
}
