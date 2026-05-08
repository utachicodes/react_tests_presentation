"use client"

import CodeBlock from "@/components/code-block"

const aaaCode = `it('should add item to cart', () => {
  // 1. ARRANGE
  const cart = new Cart();
  const item = { id: 1, name: 'React Book' };

  // 2. ACT
  cart.addItem(item);

  // 3. ASSERT
  expect(cart.items).toContain(item);
  expect(cart.total).toBe(1);
});`

export default function AAAPatternSlide() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          The AAA Pattern
        </h2>
        <p className="text-white/50 text-lg mb-8">
          The industry standard for structuring clean, readable tests.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold mb-4 group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Arrange</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Set up the test conditions. Initialize objects, mock data, or prepare the environment.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold mb-4 group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Act</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Execute the specific action or function you want to test. Keep this part as brief as possible.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold mb-4 group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Assert</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Verify that the outcome matches your expectations. This is where the <code className="text-purple-300">expect()</code> statements live.
            </p>
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-4">
          <p className="text-white/40 text-xs font-mono mb-3 uppercase tracking-widest">Example Structure</p>
          <CodeBlock code={aaaCode} language="typescript" />
        </div>
      </div>
    </div>
  )
}
