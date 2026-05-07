"use client"

import { useState } from "react"
import CodeBlock from "@/components/code-block"

const sourceCode = `// utils/colorForDueDate.ts
export function colorForDueDate(dueDate: string): string {
  const due = new Date(dueDate);
  const now = new Date();
  
  if (due < now) return 'red';
  if (due.getTime() - now.getTime() < 86400000) return 'orange';
  return 'green';
}`

const testCode = `// __tests__/colorForDueDate.test.ts
import { colorForDueDate } from '../utils/colorForDueDate';

describe('colorForDueDate', () => {
  it('returns red for past dates', () => {
    expect(colorForDueDate('2020-01-01')).toBe('red');
  });

  it('returns orange for dates within 24h', () => {
    const soon = new Date();
    soon.setHours(soon.getHours() + 12);
    expect(colorForDueDate(soon.toISOString())).toBe('orange');
  });

  it('returns green for future dates', () => {
    expect(colorForDueDate('2030-01-01')).toBe('green');
  });
});`

export default function UnitTestSlide() {
  const [tab, setTab] = useState<"source" | "test">("source")
  const [ran, setRan] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Unit Tests
        </h2>
        <p className="text-white/50 text-lg mb-8">
          Test individual functions in isolation with Jest
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1 space-y-3">
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-emerald-400 font-medium">Fast</p>
              <p className="text-white/50 text-sm">Run in milliseconds</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-emerald-400 font-medium">Isolated</p>
              <p className="text-white/50 text-sm">No external deps</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-emerald-400 font-medium">Deterministic</p>
              <p className="text-white/50 text-sm">Same input = same output</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setTab("source")}
                className={`px-3 py-1.5 rounded text-sm ${tab === "source" ? "bg-white text-black" : "bg-white/10 text-white/70"}`}
              >
                Source
              </button>
              <button
                onClick={() => setTab("test")}
                className={`px-3 py-1.5 rounded text-sm ${tab === "test" ? "bg-white text-black" : "bg-white/10 text-white/70"}`}
              >
                Test
              </button>
              <button
                onClick={() => setRan(true)}
                className="ml-auto px-3 py-1.5 rounded text-sm bg-emerald-600 text-white hover:bg-emerald-500"
              >
                Run Tests
              </button>
            </div>
            <CodeBlock code={tab === "source" ? sourceCode : testCode} language="typescript" />
            
            {ran && (
              <div className="mt-3 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-sm font-mono">
                <p className="text-emerald-400">PASS __tests__/colorForDueDate.test.ts</p>
                <p className="text-white/60 mt-1">Tests: 3 passed | Time: 0.042s</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
