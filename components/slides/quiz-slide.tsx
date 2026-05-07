"use client"

import { useState } from "react"

const questions = [
  {
    q: "Which type of test is fastest to run?",
    options: ["E2E Tests", "Integration Tests", "Unit Tests"],
    answer: 2,
    why: "Unit tests are fastest because they test isolated code without dependencies.",
  },
  {
    q: "What library is used for component testing in React Native?",
    options: ["Enzyme", "React Native Testing Library", "Cypress"],
    answer: 1,
    why: "RNTL is designed specifically for testing React Native components.",
  },
  {
    q: "What is Maestro's main advantage?",
    options: ["Requires JS knowledge", "Uses human-readable YAML", "Only works on iOS"],
    answer: 1,
    why: "Maestro uses declarative YAML, making it accessible without programming.",
  },
  {
    q: "In the testing pyramid, which tests should you have MOST of?",
    options: ["E2E Tests", "Integration Tests", "Unit Tests"],
    answer: 2,
    why: "The pyramid suggests many unit tests (fast/cheap) and fewer E2E tests (slow/expensive).",
  },
  {
    q: "What prop targets elements for testing in React Native?",
    options: ["data-testid", "testID", "id"],
    answer: 1,
    why: "React Native uses testID prop, which Maestro and RNTL use for targeting.",
  },
  {
    q: "What does AAA stand for in testing?",
    options: ["Act, Assert, Analyze", "Arrange, Act, Assert", "Always Add Assertions"],
    answer: 1,
    why: "Arrange (setup), Act (execute), Assert (verify) is a common test structure.",
  },
]

export default function QuizSlide() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[current]

  const handleSelect = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (i === q.answer) setScore(score + 1)
  }

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  const reset = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
        <div className="max-w-md w-full text-center">
          <h2 className="text-5xl font-bold text-white mb-4">{score}/{questions.length}</h2>
          <p className="text-white/60 mb-8">
            {score === questions.length ? "Perfect score!" : score >= 4 ? "Great job!" : "Keep practicing!"}
          </p>
          <button onClick={reset} className="px-6 py-2 bg-white text-black rounded-lg hover:bg-white/90">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-xl w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Quiz</h2>
          <span className="text-white/50 text-sm">{current + 1} / {questions.length}</span>
        </div>

        <div className="h-1 bg-white/10 rounded-full mb-8">
          <div 
            className="h-full bg-emerald-500 rounded-full transition-all" 
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <p className="text-xl text-white mb-6">{q.q}</p>

        <div className="space-y-3 mb-6">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                selected === null
                  ? "bg-white/5 border border-white/10 hover:border-white/30 text-white"
                  : i === q.answer
                  ? "bg-emerald-500/20 border border-emerald-500 text-emerald-400"
                  : selected === i
                  ? "bg-red-500/20 border border-red-500 text-red-400"
                  : "bg-white/5 border border-white/10 text-white/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {selected !== null && (
          <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-lg">
            <p className="text-white/70 text-sm">{q.why}</p>
          </div>
        )}

        {selected !== null && (
          <button
            onClick={next}
            className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90"
          >
            {current < questions.length - 1 ? "Next Question" : "See Results"}
          </button>
        )}
      </div>
    </div>
  )
}
