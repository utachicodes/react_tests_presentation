"use client"

import { QRCodeSVG } from "qrcode.react"

interface QRCodeCardProps {
  url: string
  label: string
  sublabel?: string
  accentColor?: string
  bgColor?: string
  borderColor?: string
}

export default function QRCodeCard({
  url,
  label,
  sublabel,
  accentColor = "#34d399",
  bgColor = "rgba(52,211,153,0.07)",
  borderColor = "rgba(52,211,153,0.25)",
}: QRCodeCardProps) {
  return (
    <div
      className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-transform hover:scale-105"
      style={{ background: bgColor, border: `1px solid ${borderColor}` }}
    >
      <div className="p-2.5 rounded-xl bg-white shadow-lg">
        <QRCodeSVG
          value={url}
          size={100}
          bgColor="#ffffff"
          fgColor="#0a0a0a"
          level="M"
          marginSize={0}
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold leading-tight" style={{ color: accentColor }}>
          {label}
        </p>
        {sublabel && (
          <p className="text-xs mt-0.5 text-white/40">{sublabel}</p>
        )}
      </div>
    </div>
  )
}
