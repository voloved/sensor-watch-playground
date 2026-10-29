import type { Metadata } from 'next'
import Image from 'next/image'
import Countdown from './countdown'

export const metadata: Metadata = {
  title: 'Jolt — Sensor Watch PCB',
  description: 'Meet Jolt: a custom board that brings new life to the classic G-Shock DW-5600.',
}

const resourceGroups = [
  {
    title: 'Jolt',
    links: [
      ['Display playground', 'playground/'],
      ['Watch simulator', 'simulator/index.html'],
      ['Firmware source', 'https://github.com/voloved/second-movement/tree/jolt'],
      ['Installation guide', 'https://youtu.be/S6SnwOAQ9PI?si=zYGschGaip3tW__y'],
      ['Tindie product page', 'https://www.tindie.com/products/devolov/jolt-a-custom-pcb-to-make-g-shock-hackable-2/'],
      ['Project Discord', 'https://discord.gg/n4RMYp8pT3'],
      ['Jolt firmware releases', 'https://github.com/voloved/second-movement/releases'],
    ],
  },
]

const useCases = [
  {
    src: '/step_counter.png',
    alt: 'G-Shock worn outdoors on a wrist',
    title: 'Count Steps',
    description: 'Step Counter is showing I walked 259 steps today and the current time is 8:36.',
  },
  {
    src: '/music_festival.jpg',
    alt: 'Using the Music Festival face, the watch shows it\'s 7PM and Vince Staples is playing at the What stage of Bonnaroo.',
    title: 'See who\'s playing at a Music Festival',
    description: 'Using the Music Festival face, the watch shows it\'s 7PM and Vince Staples is playing at the What stage of Bonnaroo.',
  },
  {
    src: '/blackjack.png',
    alt: 'Watch playing blackjack.',
    title: 'Play a quick game of Blackjack.',
    description: 'Blackjack is one of the many games on this watch. others include Worlde, Simon, and Hi-Low.',
  },
  {
    src: '/endless_runner.webm',
    type: 'video',
    alt: 'Endless runner game.',
    title: 'Test your skill with an Endless Runner.',
    description: 'The game is simple: you have 30 liters of fuel and every time you jump, it takes a liter. When you\'re on the ground, you refuel. See how long you can avoid hitting the walls you\'re flying over.',
  },
  {
    src: '/sunrise.png',
    alt: 'Showing when the sunrise is.',
    title: 'Showing when the sunrise is.',
    description: 'Sunrise was around 7am this morning, and the watch shows it as as 7:08am.',
  },
  {
    src: '/step-count-on-clock.png',
    alt: 'Step coutn on clock.',
    title: 'See your current step count without ever leaving the main clock face.',
    description: 'We can display the steps instead of the current date on the main face with the press of a button. The top-right shows I walked 3.1K steps today.',
  }
]

const galleryImages = [
  { src: '/gallery/gal1.png' },
  { src: '/gallery/gal2.png' },
  { src: '/gallery/gal3.png' },
  { src: '/contrast_imgs/fig07.png' },
]

const faqs = [
  {
    question: 'What is the Jolt?',
    answer: 'The Jolt is a custom circuit board that drops into the G-Shock DW5600UE to transform it into a watch that you can customize with open-source software and tons of ready-made watch faces.',
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
    answer: <>The stock LCD uses 4–4.5 V. The board’s microcontroller can’t safely go above 3.6 V. In my testing, the contrast is a bit lower and the display looks dimmer at certain angles, but it’s not an issue in normal room brightness or at the most common viewing angles.<br /><br />If you’re concerned about the dimmer appearance, the board can be modified to use a higher voltage. I’ve used both 3.8 V and 4 V configurations in my personal watch for almost a year without issue, and I can make that modification for your watch. But it will be at your own risk.<br /><br />This is more discussed in my <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="blog/contrast/">blog post</a>.</>,
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
    question: 'Can I try out the watch\'s functions before I buy?',
    answer: <>Yes! <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="simulator/index.html">here is a link to the Simulator</a>. You can use the arrow keys to press the buttons.<br /><br />Also, if you want to see what the G-Shock screen can display, there's also a <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="playground/">Playground</a> that allows you to type in characters and see how the LCD will show them.</>,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f0e8] text-[#152b25]">
      <header className="sticky top-0 z-10 border-b border-[#152b25]/10 bg-[#f3f0e8]/95 backdrop-blur">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-5 sm:px-5 sm:py-4 md:px-8">
          <a className="shrink-0 text-base font-black tracking-[0.14em] sm:text-lg sm:tracking-[0.18em]" href="#top">JOLT<span className="text-[#d96943]">.</span></a>
          <div className="flex items-center gap-2 text-sm font-semibold sm:gap-4 md:gap-7">
            <a className="hidden transition-colors hover:text-[#d96943] sm:inline" href="blog/">Blog</a>
            <a className="hidden transition-colors hover:text-[#d96943] sm:inline" href="simulator/index.html">Simulator</a>
            <a className="hidden transition-colors hover:text-[#d96943] sm:inline" href="playground/">Playground</a>
            <details className="group relative">
              <summary className="inline-flex h-12 cursor-pointer list-none items-center rounded-full border border-[#152b25]/15 px-3 transition-colors hover:text-[#d96943]">
                Links <span aria-hidden="true" className="text-xs">⌄</span>
              </summary>
              <div className="fixed left-4 right-4 top-[4.25rem] z-20 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-2xl border border-[#152b25]/10 bg-[#f3f0e8] p-4 text-[#152b25] shadow-xl sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-3 sm:max-h-[70vh] sm:w-[min(90vw,28rem)] sm:p-5">
                <div className="mb-4 grid grid-cols-2 gap-2 border-b border-[#152b25]/10 pb-4 text-sm font-bold sm:flex sm:gap-5">
                  <a className="inline-flex min-h-11 items-center hover:text-[#bd5634]" href="#story">The project</a>
                  <a className="inline-flex min-h-11 items-center hover:text-[#bd5634]" href="blog/">Blog</a>
                  <a className="inline-flex min-h-11 items-center hover:text-[#bd5634]" href="#gallery">Customer photos</a>
                  <a className="inline-flex min-h-11 items-center hover:text-[#bd5634]" href="#faq">FAQ</a>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {resourceGroups.map((group) => (
                    <div key={group.title}>
                      <h2 className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em]">{group.title}</h2>
                      <ul className="space-y-2">
                        {group.links.map(([label, href]) => (
                          <li key={label}>
                            <a className="inline-flex min-h-11 items-center text-sm text-[#43564d] underline decoration-[#152b25]/20 underline-offset-4 hover:text-[#bd5634] hover:decoration-[#bd5634]" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                              {label}{href.startsWith('http') && <span aria-hidden="true"> ↗</span>}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </details>
            <a className="inline-flex h-12 items-center whitespace-nowrap rounded-full bg-[#d96943] px-3 text-xs text-white transition-colors hover:bg-[#bd5634] sm:px-4 sm:text-sm md:px-5" href="#preorder">Preorder</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 pt-12 md:grid-cols-[1fr_1.05fr] md:px-8 md:pb-24 md:pt-20">
        <div className="relative z-[1]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Making the classic a bit smarter</p>
          <h1 className="max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            Your G-Shock.<br />Made hackable.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#43564d]">
            Jolt is a custom circuit board that makes the classic DW-5600UE programmable. Write your own functions or install new ones through its USB port.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="rounded-full bg-[#152b25] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5" href="#preorder">
              Get a preorder for $67<span aria-hidden="true">↗</span>
            </a>
            <a className="text-sm font-bold underline decoration-[#d96943] decoration-2 underline-offset-4 hover:text-[#bd5634]" href="#story">
              What is Jolt?
            </a>
          </div>
          <Countdown />
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
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Preorders so far: 1 preorder.</h2>
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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Tinkerer's paradise in a sleeper watch.</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">About the Jolt.</h2>
          <p className="mt-5 leading-7 text-[#43564d]">
            Jolt is a circuit board that allows you to customize your G-Shock. It replaces the original DW-5600UE board with a programmable, ARM Cortex M0+ board. You can build new watch faces and features. Or use the built-in USB port to to install new functions made from others in the <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="https://github.com/voloved/second-movement/tree/jolt">open-source codebase</a>.
          </p>
          <p className="mt-5 leading-7 text-[#43564d]">
            Because the only thing that is being changed is the circuit board, you'll retain the drop and water resistance of your G-Shock. Making this the most indestructible device you'll own that can play Wordle.
          </p>
          <p className="mt-5 leading-7 text-[#43564d]">
            The first batch of the Jolt boards were sold in August 2026 to 20 customers. It sold out in a few months.
          </p>
          <p className="mt-4 leading-7 text-[#43564d]">
            Before you buy, try out the default features in the <a className="font-semibold text-[#bd5634] underline underline-offset-4" href="simulator/index.html">Simulator</a>.
          </p>
        </div>

        <div className="order-3 grid gap-5 sm:grid-cols-2 md:col-span-2 md:gap-6">
          {useCases.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl bg-white/70">
              {item.type === 'video' ? (
                <video
                  className="aspect-[4/3] w-full object-cover"
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline  
                  aria-label={item.alt}
                />
              ) : (
                <Image
                  className="aspect-[4/3] w-full object-cover"
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={480}
                />
              )}
              <div className="p-5">
                <h3 className="font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#69776e]">{item.description}</p>
              </div>
            </article>
          ))}
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
              <div className="mt-3 max-w-3xl pr-8 leading-7 text-[#69776e]">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-[#e9e5d9]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Show off your wrist shot</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Customer photos</h2>
            </div>
            <a className="text-sm font-bold underline decoration-[#d96943] decoration-2 underline-offset-4 hover:text-[#bd5634]" href="https://discord.gg/n4RMYp8pT3" target="_blank" rel="noreferrer">
              Share your Jolt photo ↗
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {galleryImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl bg-white/70">
                <Image
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  src={image.src}
                  alt="Customer Photo"
                  width={480}
                  height={500}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="links" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd5634]">Keep exploring</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Project links</h2>
          </div>
        </div>
        <div className="mt-8">
          {resourceGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.12em]">{group.title}</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
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
        Disclaimer: This webpage’s template was vibe-coded, but not much else in this project was. The circuit board and firmware were made, reviewed, and tested manually.
      </footer>
    </main>
  )
}
