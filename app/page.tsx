import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Jolt — Sensor Watch PCB',
  description: 'Meet Jolt: a custom board that brings new life to the classic G-Shock DW-5600.',
}

const resourceGroups = [
  {
    title: 'Jolt',
    links: [
      ['Display playground', 'playground'],
      ['Watch simulator', 'simulator/index.html'],
      ['Firmware source', 'https://github.com/voloved/second-movement/tree/jolt'],
      ['Installation guide', 'https://youtu.be/S6SnwOAQ9PI?si=zYGschGaip3tW__y'],
      ['Tindie product page', 'https://www.tindie.com/products/devolov/jolt-a-custom-pcb-to-make-g-shock-hackable-2/'],
      ['Project Discord', 'https://discord.gg/n4RMYp8pT3'],
      ['Jolt firmware releases', 'https://github.com/voloved/second-movement/releases'],
    ],
  },
  {
    title: 'Sensor Watch projects',
    links: [
      ['Step Counter', 'https://github.com/joeycastillo/second-movement/pull/191'],
      ['Wordle', 'https://github.com/joeycastillo/Sensor-Watch/pull/436'],
      ['Endless Runner Game', 'https://github.com/joeycastillo/Sensor-Watch/pull/419'],
    ],
  },
  {
    title: 'ROM hacks',
    links: [
      ['Pokémon Emerald fork', 'https://github.com/voloved/pokeemerald_fork'],
      ['Pokémon Crystal GBA fork', 'https://github.com/voloved/crystaldust_fork'],
      ['Pokémon Red++ fork', 'https://github.com/voloved/rpp_v3_fork'],
      ['Unovared', 'https://github.com/voloved/unovared'],
      ['Cycle balls in the last-used menu', 'https://github.com/rh-hideout/pokeemerald-expansion/pull/3039'],
      ['Sort the bag in Pokémon Red', 'https://github.com/pret/pokered/wiki/Add-Item-Sorting-In-Bag'],
      ['Keep cut trees cleared in Pokémon Red', 'https://github.com/pret/pokered/wiki/All-Trees-Permanently-Get-Cut'],
      ['Add Thief Ball to Pokémon Emerald', 'https://github.com/pret/pokeemerald/wiki/Add-Thief-Ball'],
    ],
  },
]

const faqs = [
  {
    question: 'What is the Jolt?',
    answer: 'The Jolt is a custom circuit board that drops into the G-SHock DW5600UE to transform it into a watch that you can customize with open-source software and tons of ready-made watch faces.',
  },
  {
    question: 'What can the Jolt do?',
    answer: <>
      <ul className="list-disc space-y-1 pl-5">
        <li>Count steps.</li>
        <li>Play blackjack, Wordle, endless runner, and other games.</li>
        <li>Seei the moon phase, sunrise, and sunset.</li>
        <li>Measure temperature over time.</li>
        <li>Set multiple alarms.</li>
        <li>Keep all the features your G-Shock already has.</li>
        <li>Use an open-source codebase to create your own watch faces and make changes however you want.</li>
      </ul>
  </>,
  },
  {
    question: 'What G-Shocks does this work with?',
    answer: <>Jolt is designed for the <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="https://www.casio.com/intl/watches/gshock/product.DW-5600UE-1/" target="_blank" rel="noreferrer">G-Shock DW-5600UE</a>. It uses Casio module 3525, so Jolt should fit <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="https://shockbase.org/watches/modules_dyn.php?module=3525" target="_blank" rel="noreferrer">any of these watches</a>. If you’re in the U.S., I found that the <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="https://www.walmart.com/ip/Casio-Men-s-G-Shock-Watch-DW5600E-1V/297911752" target="_blank" rel="noreferrer">DW5600E-1V at Walmart</a> works.</>,
  },
  {
    question: 'How long does the battery last?',
    answer: 'This watch uses 4-6uA in normal cases. That is around 2 years off a CR2016 battery. I definitely expect at least one year of battery. The batterty life will drop if the step counter is used.',
  },
  {
    question: 'How is the screen contrast?',
    answer: 'The stock LCD uses 4-4.5V. The board\'s micro-controller can\'t safely do above 3.6V. But from my testing, Because of this, the contrast is a bit worse and you\'ll see it\'s dimmer in certain angles, but the it\'s not an issue in normal room brightness and at the most common viewing angles. If you are worried about the dimmer brightness, the board can be modified to be a higher voltage. I\'ve been using both 3.8V and 4V displays on my personal watch for almost a year without issue and I can make that modification for your watch.',
  },
  {
    question: 'How do I flash new code onto the watch?',
    answer: 'The top of the board has a cut-out for a micro-USB connector. Connect the watch to your computer, press the reset button twice quickly, and you should see a device called \'WATCHBOOT\'. If you don\'t see anything, press the reset button more quickly. Then, drag the UF2 file into the device, and it\'ll be updated.',
  },
  {
    question: 'Aside from the watch, do I need any other special items to use this watch?',
    answer: 'The circuit board connects to your computer for updating the software with a micro-USB connector. The board is 0.4mm in thickness, which is thinner than your standard micro-USB connector. To get the board to fit, squeeze that opening of a micro-USB connector you don\'t care about together a bit with pliers or side-cutters.',
  },
  {
    question: 'How can I try the display and firmware?',
    answer: 'Use the display playground and watch simulator from the Links menu to explore the project. The playground can show what kind of text you can display on the G-Shock. Thesimulator allows you to test out how the watch functions before you buy.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f0e8] text-[#152b25]">
      <header className="sticky top-0 z-10 border-b border-[#152b25]/10 bg-[#f3f0e8]/95 backdrop-blur">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 md:px-8">
          <a className="shrink-0 text-lg font-black tracking-[0.18em]" href="#top">JOLT<span className="text-[#d96943]">.</span></a>
          <div className="flex items-center gap-4 text-sm font-semibold md:gap-7">
            <a className="hidden transition-colors hover:text-[#d96943] sm:inline" href="#story">The project</a>
            <details className="group relative">
              <summary className="cursor-pointer list-none transition-colors hover:text-[#d96943]">
                Links <span aria-hidden="true" className="text-xs">⌄</span>
              </summary>
              <div className="absolute right-0 top-full z-20 mt-3 max-h-[70vh] w-[min(90vw,28rem)] overflow-y-auto rounded-2xl border border-[#152b25]/10 bg-[#f3f0e8] p-5 text-[#152b25] shadow-xl">
                <div className="mb-5 flex gap-5 border-b border-[#152b25]/10 pb-4 text-sm font-bold">
                  <a className="hover:text-[#bd5634]" href="#faq">FAQ</a>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {resourceGroups.map((group) => (
                    <div key={group.title}>
                      <h2 className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em]">{group.title}</h2>
                      <ul className="space-y-2">
                        {group.links.map(([label, href]) => (
                          <li key={label}>
                            <a className="text-sm text-[#43564d] underline decoration-[#152b25]/20 underline-offset-4 hover:text-[#bd5634] hover:decoration-[#bd5634]" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                              {label}{href.startsWith('http') && <span aria-hidden="true"> ↗</span>}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <a className="mt-5 inline-block text-sm font-bold text-[#bd5634] underline underline-offset-4" href="https://github.com/voloved/sensor-watch-playground" target="_blank" rel="noreferrer">Website source ↗</a>
              </div>
            </details>
            <a className="rounded-full bg-[#d96943] px-4 py-2 text-white transition-colors hover:bg-[#bd5634] md:px-5" href="#preorder">Preorder</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 pt-12 md:grid-cols-[1fr_1.05fr] md:px-8 md:pb-24 md:pt-20">
        <div className="relative z-[1]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">A new heartbeat for a classic</p>
          <h1 className="max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            Your G-Shock.<br />Your rules.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#43564d]">
            Jolt is a custom circuit board that makes the classic DW-5600 programmable. Keep the watch you love. Make it do more.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="rounded-full bg-[#152b25] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5" href="#preorder">
              Get on the preorder list <span aria-hidden="true">↗</span>
            </a>
            <a className="text-sm font-bold underline decoration-[#d96943] decoration-2 underline-offset-4 hover:text-[#bd5634]" href="#story">
              What is Jolt?
            </a>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#69776e]">
            Built for the Casio G-Shock DW-5600
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[400px]">
          <Image
            className="relative w-full"
            src="jolt-hello.png"
            alt="Jolt watch"
            width={440}
            height={390}
          />
          <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#69776e]">Jolt displaying Hello World</p>
        </div>
      </section>

      <section id="preorder" className="bg-[#152b25] text-[#f3f0e8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_auto] md:items-center md:px-8 md:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8b94f]">Help make the next run happen</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The goal: 20 preorders.</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/75">
              I’m gathering interest for a batch of Jolt boards. Choose a payment option to get in touch about a preorder.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#e8b94f]">$67</p>
          </div>
          <div className="grid min-w-56 gap-3 sm:grid-cols-3 md:grid-cols-1">
            <a className="rounded-full bg-[#e8b94f] px-6 py-3 text-center text-sm font-extrabold text-[#152b25] transition-colors hover:bg-[#f2ce75]" href="https://venmo.com/u/David-Volovskiy" target="_blank" rel="noreferrer">
              Venmo <span className="block text-xs font-medium opacity-75">@David-Volovskiy · verify 6694</span>
            </a>
            <a className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-extrabold transition-colors hover:border-white hover:bg-white/10" href="https://paypal.me/voloved" target="_blank" rel="noreferrer">
              PayPal <span className="block text-xs font-medium text-white/65">paypal.me/voloved</span>
            </a>
            <a className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-extrabold transition-colors hover:border-white hover:bg-white/10" href="mailto:devolov@gmail.com?subject=Jolt%20watch%20preorder">
              Zelle <span className="block text-xs font-medium text-white/65">devolov@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.8fr_1fr] md:px-8 md:py-24">
        <div className="order-2 md:order-1">
          <Image className="mx-auto w-full max-w-md" src="jolt-board.png" alt="Jolt custom circuit board" width={520} height={420} />
          <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#69776e]">The Jolt board</p>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Small board. Big possibilities.</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A familiar watch, with room to experiment.</h2>
          <p className="mt-5 leading-7 text-[#43564d]">
            Jolt replaces the original DW-5600 board with a programmable, ARM-based Sensor Watch board. Build new watch faces and features, then see them on the wrist you already know.
          </p>
          <p className="mt-4 leading-7 text-[#43564d]">
            I made the display playground and simulator to make developing for the watch easier—no firmware flash needed just to try an idea.
          </p>
          <a className="mt-6 inline-flex font-bold text-[#bd5634] underline decoration-2 underline-offset-4 hover:text-[#152b25]" href="https://github.com/voloved/second-movement/tree/jolt" target="_blank" rel="noreferrer">
            Explore the Jolt firmware <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>
      </section>

      <section className="border-y border-[#152b25]/10 bg-[#e9e5d9]">
        <div className="mx-auto grid max-w-6xl gap-px px-5 py-9 sm:grid-cols-3 md:px-8">
          <div className="py-3 sm:px-5">
            <p className="text-sm font-extrabold">Made for the DW-5600</p>
            <p className="mt-1 text-sm text-[#69776e]">A classic watch, ready for a new board.</p>
          </div>
          <div className="py-3 sm:border-x sm:border-[#152b25]/10 sm:px-8">
            <p className="text-sm font-extrabold">Open firmware</p>
            <p className="mt-1 text-sm text-[#69776e]">Explore the code and build your own features.</p>
          </div>
          <div className="py-3 sm:px-8">
            <p className="text-sm font-extrabold">Made for tinkering</p>
            <p className="mt-1 text-sm text-[#69776e]">Test ideas with the online simulator and display tools.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Good to know</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight">Frequently asked questions</h2>
        <div className="mt-7 divide-y divide-[#152b25]/15 border-y border-[#152b25]/15">
          {faqs.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {item.question}
                <span aria-hidden="true" className="text-xl text-[#bd5634] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-3xl pr-8 leading-7 text-[#69776e]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="links" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Keep exploring</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Project links</h2>
          </div>
          <a className="text-sm font-bold underline decoration-[#d96943] decoration-2 underline-offset-4 hover:text-[#bd5634]" href="https://github.com/voloved/sensor-watch-playground" target="_blank" rel="noreferrer">Website source ↗</a>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resourceGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.12em]">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a className="text-sm text-[#43564d] underline decoration-[#152b25]/20 underline-offset-4 transition-colors hover:text-[#bd5634] hover:decoration-[#bd5634]" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                      {label}{href.startsWith('http') && <span aria-hidden="true"> ↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#152b25] px-5 py-7 text-center text-sm text-white/60">
        Built with curiosity, for the classic G-Shock DW-5600.
      </footer>
    </main>
  )
}
