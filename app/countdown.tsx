'use client'

import { useEffect, useState } from 'react'

const campaignDeadline = new Date('2026-12-01T00:00:00')

type TimeRemaining = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeRemaining(): TimeRemaining {
  const totalSeconds = Math.max(0, Math.floor((campaignDeadline.getTime() - Date.now()) / 1000))

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  }
}

export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(getTimeRemaining)

  useEffect(() => {
    const updateCountdown = () => setTimeRemaining(getTimeRemaining())
    updateCountdown()
    const intervalId = window.setInterval(updateCountdown, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="mt-7" aria-label="Preorder campaign countdown">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#69776e]">
        Preorder campaign ends December 1, 2026
      </p>
      <div className="mt-2 flex gap-3 tabular-nums sm:gap-4" aria-live="off">
        {([
          ['Days', timeRemaining.days],
          ['Hours', timeRemaining.hours],
          ['Minutes', timeRemaining.minutes],
          ['Seconds', timeRemaining.seconds],
        ] as const).map(([label, value]) => (
          <div key={label} className="min-w-12 text-center">
            <span suppressHydrationWarning className="block text-2xl font-black tracking-tight text-[#bd5634] sm:text-3xl">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#69776e]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
