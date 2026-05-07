"use client"

import QRCodeCard from "@/components/qr-code-card"

const qrLinks = [
  {
    url: "https://reactnative.dev/docs/testing-overview",
    label: "RN Testing Overview",
    sublabel: "reactnative.dev",
    accentColor: "#60a5fa",
    bgColor: "rgba(96,165,250,0.07)",
    borderColor: "rgba(96,165,250,0.25)",
  },
  {
    url: "https://docs.maestro.dev/get-started/what-is-maestro",
    label: "What is Maestro?",
    sublabel: "docs.maestro.dev",
    accentColor: "#34d399",
    bgColor: "rgba(52,211,153,0.07)",
    borderColor: "rgba(52,211,153,0.25)",
  },
  {
    url: "https://docs.maestro.dev/get-started/supported-platform/react-native",
    label: "Maestro + React Native",
    sublabel: "docs.maestro.dev",
    accentColor: "#a78bfa",
    bgColor: "rgba(167,139,250,0.07)",
    borderColor: "rgba(167,139,250,0.25)",
  },
  {
    url: "https://docs.expo.dev/eas/workflows/examples/e2e-tests/",
    label: "Expo EAS E2E Tests",
    sublabel: "docs.expo.dev",
    accentColor: "#fb923c",
    bgColor: "rgba(251,146,60,0.07)",
    borderColor: "rgba(251,146,60,0.25)",
  },
]

export default function ResourcesSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-5xl w-full">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-emerald-400 font-mono text-xs tracking-widest mb-3">RESOURCES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Scan & Learn
          </h2>
          <p className="text-white/40 text-lg">
            Point your camera at any QR code to open the docs
          </p>
        </div>

        {/* QR Codes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {qrLinks.map((item) => (
            <QRCodeCard key={item.url} {...item} />
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
            <p className="text-2xl font-bold text-emerald-400 mb-1">Unit</p>
            <p className="text-white/50 text-sm">Jest, Fast, Isolated</p>
          </div>
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center">
            <p className="text-2xl font-bold text-blue-400 mb-1">Integration</p>
            <p className="text-white/50 text-sm">RNTL, Components, Interactions</p>
          </div>
          <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl text-center">
            <p className="text-2xl font-bold text-orange-400 mb-1">E2E</p>
            <p className="text-white/50 text-sm">Maestro, Real device, Full flows</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
          <p className="text-2xl font-bold text-white mb-1">Any Questions?</p>
          <p className="text-white/40 text-sm mb-4">Thanks for attending!</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Unit Tests", "Integration", "E2E", "Maestro", "Jest", "RNTL"].map((t) => (
              <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/60">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
