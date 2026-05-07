"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TitleSlide from "@/components/slides/title-slide"
import WhyTestSlide from "@/components/slides/why-test-slide"
import TestingPyramidSlide from "@/components/slides/testing-pyramid-slide"
import UnitTestSlide from "@/components/slides/unit-test-slide"
import IntegrationTestSlide from "@/components/slides/integration-test-slide"
import E2ETestSlide from "@/components/slides/e2e-test-slide"
import MaestroSlide from "@/components/slides/maestro-slide"
import QuizSlide from "@/components/slides/quiz-slide"
import LabSlide from "@/components/slides/lab-slide"
import ResourcesSlide from "@/components/slides/resources-slide"

const slides = [
  { id: 0, component: TitleSlide },
  { id: 1, component: WhyTestSlide },
  { id: 2, component: TestingPyramidSlide },
  { id: 3, component: UnitTestSlide },
  { id: 4, component: IntegrationTestSlide },
  { id: 5, component: E2ETestSlide },
  { id: 6, component: MaestroSlide },
  { id: 7, component: QuizSlide },
  { id: 8, component: LabSlide },
  { id: 9, component: ResourcesSlide },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0))

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <main className="flex-1 overflow-auto">
        <CurrentSlideComponent />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex items-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </nav>
    </div>
  )
}
