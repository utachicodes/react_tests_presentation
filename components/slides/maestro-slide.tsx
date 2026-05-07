"use client"

import CodeBlock from "@/components/code-block"
import QRCodeCard from "@/components/qr-code-card"

const installCode = `# Install Maestro CLI
curl -Ls "https://get.maestro.mobile.dev" | bash

# Verify installation
maestro --version

# Run a flow
maestro test flow.yaml`

const flowCode = `# flows/add-to-cart.yaml
appId: com.shop.app
---
- launchApp
- tapOn: "Products"
- tapOn:
    text: ".*Sneakers.*"   # Regex matching
- tapOn:
    id: "add-to-cart"
- assertVisible: "Added to cart"
- tapOn: "Cart"
- assertVisible:
    id: "cart-item-count"
    text: "1"`

export default function MaestroSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Maestro Deep Dive
        </h2>
        <p className="text-white/50 text-lg mb-8">
          The easiest way to write E2E tests for mobile
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-white/60 text-sm mb-3 font-mono">Installation</p>
            <CodeBlock code={installCode} language="bash" />
            
            <div className="mt-6 space-y-3">
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-white font-medium text-sm">Automatic Waiting</p>
                <p className="text-white/50 text-xs">No more sleep() or waitFor() hacks</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-white font-medium text-sm">Visual Reports</p>
                <p className="text-white/50 text-xs">Screenshots and videos of test runs</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-white font-medium text-sm">Cloud Testing</p>
                <p className="text-white/50 text-xs">Run on Maestro Cloud or EAS</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-white/60 text-sm mb-3 font-mono">Example Flow</p>
            <CodeBlock code={flowCode} language="yaml" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
          <div className="flex-1">
            <p className="text-emerald-400 font-medium mb-1">React Native Support</p>
            <p className="text-white/60 text-sm">
              Maestro works with both Expo and bare React Native apps. Use <code className="bg-white/10 px-1 rounded">testID</code> props for reliable element targeting.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <QRCodeCard
              url="https://docs.maestro.dev/get-started/what-is-maestro"
              label="What is Maestro?"
              sublabel="Get started"
              accentColor="#34d399"
              bgColor="rgba(52,211,153,0.1)"
              borderColor="rgba(52,211,153,0.3)"
            />
            <QRCodeCard
              url="https://docs.maestro.dev/get-started/supported-platform/react-native"
              label="Maestro + RN"
              sublabel="Platform guide"
              accentColor="#a78bfa"
              bgColor="rgba(167,139,250,0.1)"
              borderColor="rgba(167,139,250,0.3)"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
