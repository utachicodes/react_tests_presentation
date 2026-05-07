"use client"

export default function WhyTestSlide() {
  const reasons = [
    { title: "Catch Bugs Early", desc: "Find issues before they reach production. Cheaper to fix." },
    { title: "Refactor Safely", desc: "Change code without breaking existing functionality." },
    { title: "Documentation", desc: "Tests describe how your code should behave." },
    { title: "Better Design", desc: "Testable code often means better architecture." },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pb-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why Write Tests?
        </h2>
        <p className="text-white/50 text-lg mb-12">
          Testing is not optional in professional development
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((reason, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-white/50 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-12 border-l-2 border-emerald-500 pl-4">
          <p className="text-white/70 italic">
            &quot;Write a failing test that exposes the bug. When you fix it and the test passes, the bug is fixed forever.&quot;
          </p>
          <cite className="text-white/40 text-sm mt-2 block">React Native Docs</cite>
        </blockquote>
      </div>
    </div>
  )
}
