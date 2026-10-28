import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Battery Life Calculations — Jolt Blog',
  description: 'A rough estimate of Jolt battery life and how usage affects it.',
}

export default function BatteryLifePost() {
  return (
    <main className="min-h-screen bg-[#f3f0e8] text-[#152b25]">
      <header className="border-b border-[#152b25]/10">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 md:px-8">
          <a className="text-lg font-black tracking-[0.18em]" href="../../">JOLT<span className="text-[#d96943]">.</span></a>
          <a className="text-sm font-semibold underline decoration-[#d96943] decoration-2 underline-offset-4 hover:text-[#bd5634]" href="../">
            All posts
          </a>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20">
        <a className="text-sm font-bold text-[#bd5634] underline underline-offset-4 hover:text-[#152b25]" href="../">
          ← Jolt Blog
        </a>
        <header className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Power · Hardware</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Battery life calculations
          </h1>
          <time className="mt-3 block text-sm text-[#69776e]" dateTime="2026-10-28">Posted October 28, 2026</time>
          <p className="mt-5 text-lg leading-8 text-[#43564d]">
            Jolt uses very little power in typical use. Here’s a rough estimate of what that could mean for a CR2016 battery.
          </p>
        </header>

        <div className="mt-10 space-y-6 text-base leading-8 text-[#43564d]">
          <p>
            In normal cases, the watch uses about 4–6 µA. Based on that current draw, a CR2016 battery could last around two years. This is an estimate, not a guaranteed runtime: actual battery life depends on the battery, the watch, and how its features are used.
          </p>

          <h2 className="pt-3 text-2xl font-black tracking-tight text-[#152b25]">What changes the estimate?</h2>
          <p>
            Features that are active more often can increase power use. In particular, using the step counter will reduce battery life compared with the typical-use estimate.
          </p>

          <div className="aspect-video overflow-hidden rounded-2xl bg-[#152b25]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/9atKHnqb4is"
              title="Battery life video"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <figure className="overflow-hidden rounded-2xl bg-[#e9e5d9]">
            <Image
              className="aspect-[4/3] w-full object-cover"
              src="/step-count-on-clock.png"
              alt="Jolt watch worn on a wrist"
              width={640}
              height={480}
            />
            <figcaption className="px-4 py-3 text-center text-sm text-[#69776e]">
              Jolt on wrist · placeholder photo
            </figcaption>
          </figure>

          <p>
            I expect at least one year of battery life under normal use, with the exact result depending on usage. The roughly two-year figure is a calculation based on typical current draw, not a promise or a result from a long-term battery test.
          </p>
        </div>

        <footer className="mt-12 border-t border-[#152b25]/15 pt-6">
          <a className="font-bold text-[#bd5634] underline decoration-2 underline-offset-4 hover:text-[#152b25]" href="../">
            More posts on the Jolt Blog
          </a>
        </footer>
      </article>
    </main>
  )
}
