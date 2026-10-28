import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LCD Contrast at Different Voltages — Jolt Blog',
  description: 'A practical, qualitative look at DW-5600 LCD contrast with Jolt at different voltages.',
}

export default function ContrastAndVoltagePost() {
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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Display · Hardware</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            LCD contrast at different voltages
          </h1>
          <time className="mt-3 block text-sm text-[#69776e]" dateTime="2026-10-28">Posted October 28, 2026</time>
          <p className="mt-5 text-lg leading-8 text-[#43564d]">
            The short version: a little more voltage can improve the display’s contrast, but the standard Jolt setup is readable in everyday conditions.
          </p>
        </header>

        <div className="mt-10 space-y-6 text-base leading-8 text-[#43564d]">
          <p>
            The stock DW-5600 LCD is designed to use roughly 4–4.5 V. Jolt’s microcontroller, however, cannot safely be driven above 3.6 V. That difference affects the display: at the standard board voltage, I notice somewhat lower contrast than on the stock setup.
          </p>

          <h2 className="pt-3 text-2xl font-black tracking-tight text-[#152b25]">What I see in normal use</h2>
          <p>
            The display can look dimmer at some viewing angles. In my experience, that is not a problem at the angles I use most or in ordinary room lighting. As with any LCD, the apparent contrast depends on the viewing angle and light around you.
          </p>

          <figure className="overflow-hidden rounded-2xl bg-[#e9e5d9]">
            <Image
              className="mx-auto max-h-[34rem] w-auto max-w-full object-contain"
              src="/jolt-hello.png"
              alt="Jolt watch displaying a custom Hello World message"
              width={440}
              height={390}
            />
            <figcaption className="px-4 py-3 text-center text-sm text-[#69776e]">
              Jolt display example · placeholder photo
            </figcaption>
          </figure>

          <h2 className="pt-3 text-2xl font-black tracking-tight text-[#152b25]">Trying a higher voltage</h2>
          <p>
            A hardware modification can provide a higher voltage to the display. I have used 3.8 V and 4 V configurations in my personal watch for almost a year without an issue. The higher-voltage setup improves the contrast compared with the standard configuration.
          </p>
          <p>
            These are my practical observations, not measurements from a controlled optical test. I’m not claiming a quantified contrast ratio or guaranteeing the same result for every watch. The higher-voltage option also requires a board modification; it is not the standard Jolt configuration.
          </p>

          <aside className="rounded-2xl border border-[#152b25]/10 bg-[#e9e5d9] p-5 text-sm leading-6">
            <p className="font-extrabold text-[#152b25]">Considering a preorder?</p>
            <p className="mt-2">
              The standard board runs within the microcontroller’s voltage limit. If you’re interested in the higher-voltage modification, <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="mailto:devolov@gmail.com?subject=Jolt%20higher-voltage%20modification">get in touch before ordering</a> to discuss your watch and the modification.
            </p>
          </aside>
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
