"use client"

import { useState } from "react"

const levels = [
  {
    id: "e2e",
    label: "E2E",
    sublabel: "End-to-End",
    color: "bg-orange-500",
    glowColor: "rgba(249,115,22,0.3)",
    borderColor: "border-orange-500/40",
    textColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    ratio: "10%",
    tools: ["Maestro", "Detox"],
    stats: [
      { label: "Speed", value: "Slow" },
      { label: "Cost", value: "High" },
      { label: "Coverage", value: "Full user journeys" },
      { label: "Quantity", value: "Few, critical flows only" },
    ],
  },
  {
    id: "integration",
    label: "Integration",
    sublabel: "Component Tests",
    color: "bg-blue-500",
    glowColor: "rgba(59,130,246,0.3)",
    borderColor: "border-blue-500/40",
    textColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    ratio: "20%",
    tools: ["RNTL", "Jest"],
    stats: [
      { label: "Speed", value: "Medium" },
      { label: "Cost", value: "Medium" },
      { label: "Coverage", value: "Component interactions" },
      { label: "Quantity", value: "Some, key user flows" },
    ],
  },
  {
    id: "unit",
    label: "Unit",
    sublabel: "Function Tests",
    color: "bg-emerald-500",
    glowColor: "rgba(16,185,129,0.3)",
    borderColor: "border-emerald-500/40",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    ratio: "70%",
    tools: ["Jest"],
    stats: [
      { label: "Speed", value: "Fast" },
      { label: "Cost", value: "Low" },
      { label: "Coverage", value: "Individual functions" },
      { label: "Quantity", value: "Many, all business logic" },
    ],
  },
]

const widths = ["max-w-xs", "max-w-sm", "max-w-md"]

export default function TestingPyramidSlide() {
  const [selected, setSelected] = useState<string | null>(null)
  const active = levels.find((l) => l.id === selected)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-3xl w-full">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          The Testing Pyramid
        </h2>
        <p className="text-white/50 text-lg mb-10">
          Click each layer to explore
        </p>

        {/* Pyramid layers */}
        <div className="flex flex-col items-center gap-2 mb-6">
          {levels.map((level, i) => (
            <button
              key={level.id}
              onClick={() => setSelected(selected === level.id ? null : level.id)}
              className={`
                w-full ${widths[i]} h-14 ${level.color} rounded-xl
                flex items-center justify-between px-5
                text-white font-semibold
                transition-all duration-200 hover:brightness-110 hover:scale-105
                ${selected === level.id ? "ring-2 ring-white/50 ring-offset-2 ring-offset-[#0a0a0a] brightness-110" : ""}
              `}
              style={{ boxShadow: selected === level.id ? `0 0 28px ${level.glowColor}` : "none" }}
            >
              <span className="font-bold">{level.label}</span>
              <div className="flex items-center gap-2">
                {level.tools.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-black/25 rounded text-xs font-mono">
                    {t}
                  </span>
                ))}
                <span className="text-white/60 text-xs font-mono w-8 text-right">{level.ratio}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Ratio bar */}
        <div className="flex rounded-lg overflow-hidden h-2 mb-4">
          <div className="bg-emerald-500" style={{ flex: 70 }} />
          <div className="bg-blue-500" style={{ flex: 20 }} />
          <div className="bg-orange-500" style={{ flex: 10 }} />
        </div>
        <div className="flex justify-between text-xs text-white/30 mb-6">
          <span>Unit 70%</span>
          <span>Integration 20%</span>
          <span>E2E 10%</span>
        </div>

        {/* Detail panel */}
        {active && (
          <div className={`p-5 ${active.bgColor} border ${active.borderColor} rounded-2xl`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`font-bold text-base ${active.textColor}`}>{active.label} Tests</span>
              <span className="text-white/40 text-sm">{active.sublabel}</span>
              <div className="ml-auto flex gap-2">
                {active.tools.map((t) => (
                  <span key={t} className={`px-2 py-0.5 rounded-full text-xs font-mono border ${active.borderColor} ${active.textColor}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {active.stats.map(({ label, value }) => (
                <div key={label} className="bg-black/20 rounded-xl p-3">
                  <p className="text-white/40 text-xs mb-1">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
