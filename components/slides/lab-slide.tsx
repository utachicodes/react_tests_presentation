"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import CodeBlock from "@/components/code-block"

const counterCode = `// components/Counter.tsx
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text testID="count-text" style={styles.count}>
        Count: {count}
      </Text>
      <TouchableOpacity
        testID="increment-btn"
        style={styles.button}
        onPress={() => setCount(c => c + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}`

const testCode = `// __tests__/Counter.test.tsx
import { render, fireEvent } from '@testing-library/react-native';
import { Counter } from '../components/Counter';

describe('Counter', () => {
  it('increments when button pressed', () => {
    const { getByTestId } = render(<Counter />);
    
    fireEvent.press(getByTestId('increment-btn'));
    
    expect(getByTestId('count-text')).toHaveTextContent('Count: 1');
  });
});`

const maestroFlow = `# .maestro/counter.yaml
appId: com.testinglab
---
- launchApp
- assertVisible: "Count: 0"
- tapOn:
    id: "increment-btn"
- assertVisible: "Count: 1"`

const steps = [
  { id: 1, title: "Create project", cmd: "npx create-expo-app@latest TestingLab --template blank-typescript" },
  { id: 2, title: "Install deps", cmd: "npm install --save-dev jest @testing-library/react-native" },
  { id: 3, title: "Create component", code: counterCode },
  { id: 4, title: "Write tests", code: testCode },
  { id: 5, title: "Maestro E2E", code: maestroFlow },
  { id: 6, title: "Run tests", cmd: "npm test" },
]

export default function LabSlide() {
  const [completed, setCompleted] = useState<number[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [activeStep, setActiveStep] = useState(1)

  const copy = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 1500)
  }

  const step = steps.find(s => s.id === activeStep)!

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Hands-On Lab
        </h2>
        <p className="text-white/50 text-lg mb-8">
          Build and test a Counter component
        </p>

        <div className="flex gap-2 mb-6 flex-wrap">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(s.id)}
              className={`px-3 py-1.5 rounded text-sm transition-all ${
                activeStep === s.id 
                  ? "bg-white text-black" 
                  : completed.includes(s.id)
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {s.id}. {s.title}
            </button>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">
              Step {step.id}: {step.title}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => copy(step.cmd || step.code || "", step.id)}
                className="p-2 bg-white/10 rounded hover:bg-white/20 transition-colors"
              >
                {copied === step.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-white/60" />}
              </button>
              <button
                onClick={() => {
                  if (!completed.includes(step.id)) {
                    setCompleted([...completed, step.id])
                  }
                  if (activeStep < steps.length) setActiveStep(activeStep + 1)
                }}
                className="px-4 py-2 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-500"
              >
                {activeStep === steps.length ? "Done" : "Next"}
              </button>
            </div>
          </div>

          {step.cmd ? (
            <div className="bg-[#0d1117] rounded-lg p-4 font-mono text-sm text-white">
              $ {step.cmd}
            </div>
          ) : step.code ? (
            <CodeBlock code={step.code} language="typescript" />
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-white/40">
            {completed.length}/{steps.length} completed
          </span>
          <div className="flex gap-4">
            <a href="https://reactnative.dev/docs/testing-overview" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
              RN Testing Docs
            </a>
            <a href="https://docs.maestro.dev" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
              Maestro Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
