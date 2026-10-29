import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'LCD Contrast at Different Voltages — Jolt Blog',
  description: 'Testing G-Shock LCD contrast with the Jolt board at different voltages.',
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

function VideoFigure() {
  return (
    <figure className="overflow-hidden rounded-2xl bg-[#e9e5d9]">
      <div className="aspect-video bg-[#152b25]">
        <iframe
          className="h-full w-full"
          src="https://www.youtube-nocookie.com/embed/k4HbFkJLKP4"
          title="G-Shock LCD contrast at different voltages"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption className="px-4 py-3 text-center text-sm leading-6 text-[#69776e]">
        Fig. 4. LCD at different voltages.
      </figcaption>
    </figure>
  )
}

function FigurePair({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>
}

export default function ContrastPost() {
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
        </header>

        <div className="mt-10 space-y-6 text-base leading-8 text-[#43564d] [&_p]:indent-8">
          <p>
            When making the Jolt, one of my largest goals was to offer compatibility with the Sensorwatch codebase, which was made for the SAML22 chipset. I know that the F91W only needs 3V for its LCD, and from Googling around, it seems that the G-Shock uses a display that needs 4 to 4.5V. The SAML22 has a max output of 3.4V. While that’s a distance from 4V, it’s still worth testing how the contrast may look on the G-Shock display. As a first attempt, I soldered a SEG and COM pins on the original Sensorwatch to a COM and SEG pin of the original G-Shock PCB. You can see the result in Fig. 1 and the waveform of the SEG in Fig. 2. That pixel was enough for me to be comfortable to keep going.
          </p>

          <Figure
            src="/contrast_imgs/fig01.png"
            alt="A G-Shock LCD pixel illuminated using Sensor Watch hardware"
            caption="Fig. 1. Turning on a G-Shock pixel with the Sensor Watch."
          />
          <Figure
            src="/contrast_imgs/fig02.png"
            alt="Oscilloscope capture of the Sensor Watch segment waveform"
            caption="Fig. 2. Waveform from the Sensor Watch."
          />

          <p>
            After developing an alpha board, I was finally able to get the LCD working to see how well the contrast would actually be. And it was more disappointing than what I expected from Fig 1. It turns out that while the F91W uses a ⅓ duty on the LCD waveform, the G-SHock uses a ¼ duty. That may lead to a lower RMS voltage on any of the pins, leading to a dimmer LCD segment. Fig 3. Shows what it looks like at 3.4V. Not great.
          </p>

          <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight">
            3.4 volts - The Failed First Attempt
          </h1>

          <Figure
            src="/contrast_imgs/fig03.png"
            alt="Fig 3. LCD at 3.4V"
            caption="Fig 3. LCD at 3.4V"
          />

          <p>
            Reading further into the datasheet, I saw that there is the capability to use an external voltage to power the LCD, but the max voltage is 3.6V. It’s not huge, but any little bit should help. I rigged up a test to see how the watch looks at different voltages in the video below (Fig 4). I found that 3.6V was workable, 3.8 V was great, and 4V was near ideal. I found a low-current convertor that can take the voltage from the battery and boost it to any one of those. I selected one that can have its output voltage changed with a resistor and found the voltage divider options so that it defaults to 3.6V, but if the right resistor is soldered onto another section of the board, 3.8, 4, 4.3, and even 4.5V are possible.
          </p>

          <VideoFigure />

          <p>
            Once I got the watch with 3.6V, I retested the contrast and it’s better. But I wanted to know if it could be pushed further.
          </p>

          <p>
            Once I had the watch running at 3.6 V, I retested the contrast and it was better. I still wanted to know whether it could be pushed further.
          </p>
          <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight">
            3.6 volts - What Will Come Stock 
          </h1>
          <FigurePair>
            <Figure
              src="/contrast_imgs/fig05.png"
              alt="G-Shock LCD at 3.6 volts, photographed at an oblique angle"
              caption="Fig. 5. LCD at 3.6 V, head-on"
            />
            <Figure
              src="/contrast_imgs/fig06.png"
              alt="G-Shock LCD at 3.6 volts from another viewing angle"
              caption="Fig. 6. LCD at 3.6 V, head-on."
            />
          </FigurePair>

          <p>
            To give an example of the difference in viewing angle, here&apos;s a picture of the watch at 3.6V from a member in the community. The poor contrast goes away at most angles aside from head-on.
          </p>
          <FigurePair>
            <Figure
              src="/contrast_imgs/fig07.png"
              alt="G-Shock LCD at 3.6 volts, photographed at an oblique angle"
              caption="Fig. 7. LCD at 3.6 V, side view."
            />
            <Figure
              src="/contrast_imgs/fig08.png"
              alt="G-Shock LCD at 3.6 volts from another viewing angle"
              caption="Fig. 8. LCD at 3.6 V, head-on."
            />
          </FigurePair>

          <p>
            I reached out to Microchip, the producer of the SAML22 and asked about driving the LCD to 4V. As expected, they said that it’s outside of the datasheet spec and they can’t provide feedback on running at a higher voltage without them characterizing it themselves (with a business qualification and fee). I have a background in transistor quality engineering in a previous role, so I asked if the root cause is related to gate-oxide breakdowns in the LCD circuitry. Microchip’s support stated it would be due to breaking down of protection diodes leading to several power domains shorting. Like gate-oxide breakdowns, this is a failure mechanism that causes the part to slowly break down over time, but also may never be an issue. They did suggest external voltage translation or level-shifting, but either of those would eat up board space I didn’t have and add heavily to the power budget. I also considered moving to a different chip altogether, such as the Nuvoton ML54 series, but there were too many trade-offs to leave the SAML22, such as the power consumption.
          </p>
          <p>
            I decided to just bite the bullet and run my personal board at 3.8V for four months. I saw no issues. After that, I boosted the voltage to 4V. That’s the voltage I am currently using on my own watch and still am not seeing issues. It can be possible to find the Mean Time To Failure (MTTF), but it would require many boards running at higher voltages and elevated temperatures.
          </p>

          <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight">
            3.8 volts
          </h1>

          <FigurePair>
            <Figure
              src="/contrast_imgs/fig09.png"
              alt="G-Shock LCD running at 3.8 volts"
              caption="Fig. 7. LCD at 3.8 V."
            />
            <Figure
              src="/contrast_imgs/fig10.png"
              alt="G-Shock LCD at 3.8 volts from another angle"
              caption="Fig. 8. LCD at 3.8 V"
            />
          </FigurePair>

          <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight">
            4.0 volts
          </h1>

          <FigurePair>
            <Figure
              src="/contrast_imgs/fig11.png"
              alt="G-Shock LCD running at 4 volts"
              caption="Fig. 9. LCD at 4 V"
            />
            <Figure
              src="/contrast_imgs/fig12.png"
              alt="G-Shock LCD at 4 volts from another angle"
              caption="Fig. 10. LCD at 4 V"
            />
          </FigurePair>

          <aside className="rounded-2xl border border-[#d96943]/30 bg-[#e9e5d9] p-5 text-sm leading-6">
            <p className="font-extrabold text-[#152b25]">Voltage and risk</p>
            <p className="mt-2">
              I am selling the boards at 3.6V, but for anyone who wants to take a small risk, I can up them to 3.8V or 4V. I can also provide the resistors for people who know how to solder and would like to choose to raise the voltage on their own.
            </p>
          </aside>
        </div>

        <section className="mt-12" aria-labelledby="lcd-voltage-heading">
          <h2 id="lcd-voltage-heading" className="text-2xl font-black leading-tight tracking-tight">
            How to change the LCD Voltage
          </h2>
          <div className="mt-5 space-y-6 text-base leading-8 text-[#43564d] [&_p]:indent-8">
            <p>
              For those of you who want to change the LCD voltage for a better contrast, you just need to solder an 0805 resistor on the R9 pad. Use the table below to find what resistor to use for each voltage. I have only went up to 4.0V for my daily wearer, and going to any voltage above 3.6V is a risk to the watch.
            </p>
            <Figure
              src="/contrast_imgs/fig13.png"
              alt="Location of R9 on the board"
              caption="Fig. 13. Location of R9 on the board."
            />
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#152b25]/20">
                  <th scope="col" className="px-3 py-3 font-extrabold">Voltage</th>
                  <th scope="col" className="px-3 py-3 font-extrabold">Resistor for R9</th>
                  <th scope="col" className="px-3 py-3 font-extrabold">Suggested part</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#152b25]/10">
                  <td className="px-3 py-3">3.6 V</td>
                  <td className="px-3 py-3">Don't populate</td>
                  <td className="px-3 py-3">-</td>
                </tr>
                <tr className="border-b border-[#152b25]/10">
                  <td className="px-3 py-3">3.8 V</td>
                  <td className="px-3 py-3">68K</td>
                  <td className="px-3 py-3">
                    <a className="underline decoration-[#152b25]/20 underline-offset-4 hover:text-[#bd5634] hover:decoration-[#bd5634]" href="https://www.digikey.com/en/products/detail/stackpole-electronics-inc/RMCF0805FT68K0/1760455" target="_blank" rel="noreferrer">RMCF0805FT68K0</a>
                  </td>
                </tr>
                <tr className="border-b border-[#152b25]/10">
                  <td className="px-3 py-3">4.0 V</td>
                  <td className="px-3 py-3">41.2K</td>
                  <td className="px-3 py-3">
                    <a className="underline decoration-[#152b25]/20 underline-offset-4 hover:text-[#bd5634] hover:decoration-[#bd5634]" href="https://www.digikey.com/en/products/detail/panasonic-industry/ERA-6AEB4122V/2025808" target="_blank" rel="noreferrer">ERA-6AEB4122V</a>
                  </td>
                </tr>
                <tr className="border-b border-[#152b25]/10">
                  <td className="px-3 py-3">4.3 V</td>
                  <td className="px-3 py-3">28.7K</td>
                  <td className="px-3 py-3">
                    <a className="underline decoration-[#152b25]/20 underline-offset-4 hover:text-[#bd5634] hover:decoration-[#bd5634]" href="https://www.digikey.com/en/products/detail/cal-chip-electronics-inc/RM10F2872CT/26902824" target="_blank" rel="noreferrer">RM10F2872CT</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-3">4.5 V</td>
                  <td className="px-3 py-3">16K</td>
                  <td className="px-3 py-3">
                    <a className="underline decoration-[#152b25]/20 underline-offset-4 hover:text-[#bd5634] hover:decoration-[#bd5634]" href="https://www.digikey.com/en/products/detail/cal-chip-electronics-inc/RM10F1602CT/26864142" target="_blank" rel="noreferrer">RM10F1602CT</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-12 border-t border-[#152b25]/15 pt-6">
          <a className="font-bold text-[#bd5634] underline decoration-2 underline-offset-4 hover:text-[#152b25]" href="../">
            More posts on the Jolt Blog
          </a>
        </footer>
      </article>
    </main>
  )
}
