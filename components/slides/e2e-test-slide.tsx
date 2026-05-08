"use client"

import CodeBlock from "@/components/code-block"
import QRCodeCard from "@/components/qr-code-card"

const detoxCode = `// e2e/login.test.js (Detox)
describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should login successfully', async () => {
    // 1. Arrange & Act
    await element(by.id('email')).typeText('user@test.com');
    await element(by.id('password')).typeText('password123');
    await element(by.id('login-btn')).tap();
    
    // 2. Assert
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});`

const maestroCode = `# e2e/login.yaml (Maestro)
appId: com.myapp
---
- launchApp
# --- ARRANGE & ACT ---
- tapOn:
    id: "email"
- inputText: "user@test.com"
- tapOn:
    id: "password"  
- inputText: "password123"
- tapOn:
    id: "login-btn"
# --- ASSERT ---
- assertVisible:
    id: "welcome"`

export default function E2ETestSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          E2E Tests
        </h2>
        <p className="text-white/50 text-lg mb-8">
          Test the entire "Happy Path" as a real user would experience it.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded font-mono">Detox</span>
              <span className="text-white/40 text-sm">Gray-box testing</span>
            </div>
            <CodeBlock code={detoxCode} language="javascript" />
            <div className="mt-3 text-sm text-white/50 space-y-1">
              <p>+ Synchronizes with the app</p>
              <p>+ Faster than Appium</p>
              <p className="text-orange-400">- Setup can be complex</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded font-mono">Maestro</span>
              <span className="text-white/40 text-sm">Black-box testing</span>
            </div>
            <CodeBlock code={maestroCode} language="yaml" />
            <div className="mt-3 text-sm text-white/50 space-y-1">
              <p>+ Platform agnostic (iOS/Android)</p>
              <p>+ Human-readable YAML</p>
              <p className="text-emerald-400">Perfect for quick iterations</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
          <div className="flex-1">
            <p className="text-orange-400 font-medium mb-1">When to use E2E?</p>
            <p className="text-white/60 text-sm">
              Focus on critical flows: Login, Checkout, Onboarding. If these fail, your business stops. Don't test every edge case here!
            </p>
          </div>
          <QRCodeCard
            url="https://docs.expo.dev/eas/workflows/examples/e2e-tests/"
            label="Expo EAS E2E"
            sublabel="Run on CI with EAS"
            accentColor="#fb923c"
            bgColor="rgba(251,146,60,0.1)"
            borderColor="rgba(251,146,60,0.3)"
          />
        </div>
      </div>
    </div>
  )
}
