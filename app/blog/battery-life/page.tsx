import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Battery Life Calculations — Jolt Blog',
  description: 'A rough estimate of Jolt battery life and how usage affects it.',
}

function Figure({
  src,
  alt,
  caption,
  className = '',
}: {
  src: string
  alt: string
  caption: string
  className?: string
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl bg-[#e9e5d9] ${className}`}>
      <Image
        className="mx-auto max-h-[34rem] w-full object-contain"
        src={src}
        alt={alt}
        width={900}
        height={700}
      />
      <figcaption className="px-4 py-3 text-center text-sm leading-6 text-[#69776e]">
        {caption}
      </figcaption>
    </figure>
  )
}

function FigurePair({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>
}

export default function BatteryLifePost() {
  return (
    <main className="min-h-screen bg-[#f3f0e8] text-[#152b25]">
      <header className="border-b border-[#152b25]/10">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 md:px-8">
          <a className="text-lg font-black tracking-[0.18em]" href="../../">JOLT<span className="text-[#d96943]">.</span></a>
          <div className="flex items-center gap-4">
            <a className="text-sm font-semibold underline decoration-[#d96943] decoration-2 underline-offset-4 hover:text-[#bd5634]" href="../">
              All posts
            </a>
            <a className="text-sm font-semibold underline decoration-[#d96943] decoration-2 underline-offset-4 hover:text-[#bd5634]" href="../../">
              Back to project
            </a>
          </div>
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
          <time className="mt-3 block text-sm text-[#69776e]" dateTime="2026-10-30">Posted October 30, 2026</time>
        </header>

        <div className="mt-10 space-y-6 text-base leading-8 text-[#43564d] [&_p]:indent-8">
          <p>
            One of the large goals of the Jolt is a long battery life. Since it’s not a rechargeable unit, it would be wasteful and unfun to need to replace the battery often. The G-Shock comes stock with a Panasonic CR2016 battery, and the <a className="font-semibold text-[#bd5634] underline underline-offset-4 hover:text-[#152b25]" href="https://energy.panasonic.com/dam/master/pdf/en/datasheet/lithium/CR2016_Datasheet_EN.pdf" target="_blank" rel="noreferrer">datasheet</a> states it’s 90mAh, so calculations should be fairly easy to make if I know the average power draw of the Jolt.
          </p>
          <p>
            There are four ways the watch is used that heavily impact the battery: Normal, Sleep Mode, Counting Steps, and Tapping Enabled. I measured the power usage of each of these using a <a className="font-semibold text-[#bd5634] underline underline-offset-4 hover:text-[#152b25]" href="https://www.nordicsemi.com/Products/Development-hardware/Power-Profiler-Kit-2" target="_blank" rel="noreferrer">Nordic Power Profiler Kit II</a> . Below is an image of the setup and the results.
          </p>
          <Figure
            src="/battery-life/testbench-normal.png"
            alt="Setup"
            caption="Fig. 1. Setup."
          />
          <Figure
            src="/battery-life/external-withscreen.png"
            alt="Current draw on the clock face"
            caption="Fig. 2. Current draw on the clock face."
          />
          <Figure
            src="/battery-life/externalsleep-withscreen.png"
            alt="Current draw on the clock face in sleep mode"
            caption="Fig. 3. Current draw on the clock face in sleep mode."
          />
          <Figure
            src="/battery-life/externalstepcount-withscreen.png"
            alt="Current draw when counting steps"
            caption="Fig. 4. Current draw when counting steps."
          />
          <Figure
            src="/battery-life/externalblackjacknotapping-withscreen.png"
            alt="Current draw on blackjack face without me tapping the board"
            caption="Fig. 5. Current draw on blackjack face without me tapping the board."
          />
          <Figure
            src="/battery-life/externalblackjackalwaystapping-withscreen.png"
            alt="Current draw on blackjack face with me tapping the board"
            caption="Fig. 6. Current draw on blackjack face with me tapping the board."
          />
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#152b25]/20">
                  <th scope="col" className="px-3 py-3 font-extrabold">Function</th>
                  <th scope="col" className="px-3 py-3 font-extrabold">Current Draw (μA)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#152b25]/10">
                  <td className="px-3 py-3">Clock face</td>
                  <td className="px-3 py-3">6.36</td>
                </tr>
                <tr className="border-b border-[#152b25]/10">
                  <td className="px-3 py-3">Clock face in sleep mode</td>
                  <td className="px-3 py-3">3.03</td>
                </tr>
                <tr className="border-b border-[#152b25]/10">
                  <td className="px-3 py-3">Counting steps</td>
                  <td className="px-3 py-3">12.63</td>
                </tr>
                <tr className="border-b border-[#152b25]/10">
                  <td className="px-3 py-3">Blackjack face, tapping enabled, but not tapping the board</td>
                  <td className="px-3 py-3">19.25</td>
                </tr>
                <tr>
                  <td className="px-3 py-3">Blackjack face, tapping the board continuously</td>
                  <td className="px-3 py-3">29.35</td>
                </tr>
              </tbody>
            </table>
            <figcaption className="px-4 py-3 text-center text-sm leading-6 text-[#69776e]">
              Table taken from the screenshots showing the average power draw.
            </figcaption>
          </div>
          <p>
            From there, we can find the power draw based on the battery’s capacity. From the battery’s curves, we see that the battery dies near 2.2V and I tested the watch works fine at 2V, so we can assume we can use the total 90mAh of the CR2016 without any voltage cut-off issues.
          </p>
          <Figure
            src="/battery-life/cr2016-specs.png"
            alt="Battery specs"
            caption="Fig. 7. Battery specs."
          />
          <Figure
            src="/battery-life/cr2016-discharge.png"
            alt="Battery curve."
            caption="Fig. 8. Battery curve."
          />



          <p>
            Estimating that an average user is awake for 16 hours a day, never uses the sleep mode, is moving around 40% of their day, and plays a tapping game for 2 minutes daily, we get that the battery life should be about <strong>1 year and 3 months</strong> (466 days).
          </p>

          <p>
            Estimating for a user who has the watch in sleep mode 90% of the time, and never uses the step counter nor tapping games, that would be <strong>3 years</strong> (1,115 days).
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
