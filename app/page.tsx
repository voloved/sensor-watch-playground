'use client'

import React, { useEffect } from 'react';

export default function Home() {
  return (
    <body className="flex justify-center">
      <main className="flex max-w-screen-md min-h-screen flex-col p-4 gap-2 md:p-12">
        <div className="text-gray-600 text-justify">
          <h2 className="font-bold">devolov’s homepage.</h2>
          <p>
            Welcome to my homepage. Currently, I am making am building of the Sensorwatch project to make a 
            {' '}<Link href="https://github.com/voloved/second-movement/tree/jolt">G-Shock varient</Link>. I’ve been calling this varient the <i>Jolt</i>.
          </p>
          <p>
            See the links below for options.
          </p>
          <p>
            I also used to romhack, so if you want to see context of those, they are there as well.
          </p>
          <h2 className="font-bold mt-4">Sensorwatch Jolt Links</h2>
          <ul className="list-disc list-inside">
            <li><Link href="playground">Display playground for G-Shock DW5600</Link></li>
            <li><Link href="simulator/index.html">Simulator of the G-Shock Sensorwatch</Link></li>
            <li><Link href="https://github.com/voloved/second-movement/tree/jolt">Source code of the Sensrwatch Jolt firmware</Link></li>
            <li><Link href="https://github.com/voloved/sensor-watch-playground">Source code of this page (GitHub)</Link></li>
          </ul>

          <h2 className="font-bold mt-4">Sensorwatch Links</h2>
          <ul className="list-disc list-inside">
            <li><Link href="https://github.com/voloved/second-movement/releases">Releases of my Sensorwatch code varient</Link></li>
            <li><Link href="https://github.com/joeycastillo/Sensor-Watch/pull/436">Step Counter</Link></li>
            <li><Link href="https://github.com/joeycastillo/Sensor-Watch/pull/436">Wordle</Link></li>
            <li><Link href="https://github.com/joeycastillo/Sensor-Watch/pull/419">Endless Runner Game</Link></li>
          </ul>

          <h2 className="font-bold mt-4">Romhack Links</h2>
          <ul className="list-disc list-inside">
            <li><Link href="https://github.com/voloved/pokeemerald_fork">My Pokemon Emerald Romhack (C)</Link></li>
            <li><Link href="https://github.com/voloved/crystaldust_fork">My Pokemon Crystal GBA Romhack (C)</Link></li>
            <li><Link href="https://github.com/voloved/rpp_v3_fork">My Pokemon Red++ Romhack (Assembly)</Link></li>
            <li><Link href="https://github.com/voloved/unovared">My Pokemon Unovared Romhack (Assembly)</Link></li>
            <li><Link href="https://github.com/rh-hideout/pokeemerald-expansion/pull/3039">Allow Cycling Through Balls in the Last Ball Used Menu in Emerald (C)</Link></li>
            <li><Link href="https://github.com/pret/pokered/wiki/Add-Item-Sorting-In-Bag">Sort bag in Red (Assembly)</Link></li>
            <li><Link href="https://github.com/pret/pokered/wiki/All-Trees-Permanently-Get-Cut">Perminanently cut trees in Red (Assembly)</Link></li>
            <li><Link href="https://github.com/pret/pokeemerald/wiki/Add-Thief-Ball">Add thief ball into Emerald (C)</Link></li>
          </ul>
        </div>
      </main>
    </body>
  )
}


type LinkProps = {
  href: string
  children: React.ReactNode
}

function Link(props: LinkProps) {
  return <a
    className="underline"
    href={props.href}
  >
    {props.children}
  </a>
}
