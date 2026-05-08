"use client"

import { useState } from "react"
import CodeBlock from "@/components/code-block"

const componentCode = `// components/Greeting.tsx
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export function Greeting() {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  return (
    <View>
      <TextInput
        testID="name-input"
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
      />
      <Button testID="greet-btn" title="Greet" onPress={() => setShow(true)} />
      {show && <Text testID="greeting">Hello, {name}!</Text>}
    </View>
  );
}`

const testCode = `// __tests__/Greeting.test.tsx
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Greeting } from '../components/Greeting';

describe('Greeting', () => {
  it('shows greeting when button is pressed', () => {
    // 1. Arrange
    render(<Greeting />);
    
    // 2. Act
    fireEvent.changeText(screen.getByTestId('name-input'), 'Alice');
    fireEvent.press(screen.getByTestId('greet-btn'));
    
    // 3. Assert
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, Alice!');
  });
});`

export default function IntegrationTestSlide() {
  const [showTest, setShowTest] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Integration Tests
        </h2>
        <p className="text-white/50 text-lg mb-8">
          Verify how multiple units (components, hooks, state) work together.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-white/60 text-sm mb-2 font-mono">Component</p>
            <CodeBlock code={componentCode} language="tsx" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-white/60 text-sm font-mono">Test</p>
              {!showTest && (
                <button
                  onClick={() => setShowTest(true)}
                  className="text-sm text-emerald-400 hover:text-emerald-300"
                >
                  Reveal Test
                </button>
              )}
            </div>
            {showTest ? (
              <CodeBlock code={testCode} language="tsx" />
            ) : (
              <div 
                onClick={() => setShowTest(true)}
                className="h-[300px] bg-white/5 border border-white/10 border-dashed rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
              >
                <p className="text-white/40">Click to reveal test code</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-blue-400 font-medium mb-1">Testing Interactions</p>
            <p className="text-white/60 text-sm">
              We test if clicking a button updates the state and shows the correct UI. This gives us confidence in our UI logic.
            </p>
          </div>
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <p className="text-emerald-400 font-medium mb-1">Key Tool: testID</p>
            <p className="text-white/60 text-sm">
              Use <code className="bg-white/10 px-1.5 py-0.5 rounded">testID</code> to target elements reliably without relying on text content that might change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
