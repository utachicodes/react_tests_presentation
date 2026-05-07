"use client"

export default function TitleSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="text-center max-w-3xl">
        <p className="text-emerald-400 font-mono text-sm mb-6 tracking-wider">
          MOBILE DEVELOPMENT CLASS
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Testing in React Native
        </h1>

        <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
          Unit Tests, Integration Tests, and E2E Testing with Jest, RNTL, and Maestro
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
            Unit Tests
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
            Integration Tests
          </span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
            E2E Tests
          </span>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-bold">A</div>
            <span className="text-white/70 text-sm">Adam Raphael Ndiaye</span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-xs font-bold">A</div>
            <span className="text-white/70 text-sm">Abdoullah Ndao</span>
          </div>
        </div>

        <p className="mt-8 text-white/40 text-sm">
          Press <kbd className="px-2 py-0.5 bg-white/10 rounded mx-1 font-mono">→</kbd> to start
        </p>
      </div>
    </div>
  )
}
