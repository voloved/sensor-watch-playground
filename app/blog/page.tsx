import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jolt Blog',
  description: 'Notes, experiments, and updates from the Jolt Sensor Watch project.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f3f0e8] text-[#152b25]">
      <header className="border-b border-[#152b25]/10">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 md:px-8">
          <a className="text-lg font-black tracking-[0.18em]" href="../">JOLT<span className="text-[#d96943]">.</span></a>
          <a className="text-sm font-semibold underline decoration-[#d96943] decoration-2 underline-offset-4 hover:text-[#bd5634]" href="../">Back to the project</a>
        </nav>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Notes from the workbench</p>
        <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-6xl">Jolt Blog</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#43564d]">
          Experiments, practical notes, and updates about making the classic DW-5600 programmable.
        </p>

        <div className="mt-12 border-t border-[#152b25]/15">
          <article className="border-b border-[#152b25]/15 py-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bd5634]">Display · Hardware</p>
            <time className="mt-2 block text-sm text-[#69776e]" dateTime="2026-10-28">October 28, 2026</time>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              <a className="hover:text-[#bd5634]" href="contrast/">LCD contrast at different voltages</a>
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#69776e]">
              What changes when the watch LCD runs at the board’s standard voltage versus a higher-voltage modification? A practical, qualitative comparison from my own watch.
            </p>
            <a className="mt-5 inline-flex font-bold text-[#bd5634] underline decoration-2 underline-offset-4 hover:text-[#152b25]" href="contrast/">
              Read the post <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </article>
        </div>

        <div className="mt-12 border-t border-[#152b25]/15">
          <article className="border-b border-[#152b25]/15 py-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#bd5634]">Power · Hardware</p>
            <time className="mt-2 block text-sm text-[#69776e]" dateTime="2026-10-28">October 28, 2026</time>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              <a className="hover:text-[#bd5634]" href="battery-life/">Battery life calculations</a>
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#69776e]">
              A back-of-the-envelope estimate of Jolt’s battery life, and how using the step counter may affect it.
            </p>
            <a className="mt-5 inline-flex font-bold text-[#bd5634] underline decoration-2 underline-offset-4 hover:text-[#152b25]" href="battery-life/">
              Read the post <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </article>
        </div>
      </section>
    </main>
  )
}
