import { usePixels } from './pixels_reducer';

export function Display() {
  return <svg
    viewBox="0 0 1000 535"
    style={{ fill: "#262626" }}
  >
    <Frame />

    <Signal />
    <Bell />
    <PM />
    <I24H />

    <Split />
    <Auto />
    <Dash />
    <Sun />
    <Dot_Up />
    <Dot_Down />
    <Single_Quote />
    <Double_Quote />

    <Position0 />
    <Position1 />

    <Position2 />
    <Position3 />

    <Position4 />
    <Position5 />

    <Colon />

    <Position6 />
    <Position7 />

    <Position8 />
    <Position9 />

    <Position10 />
    <Position11 />
  </svg>
}

function Frame() {
  return <rect
    style={{ fill: "none", stroke: "#333", strokeWidth: 2 }}
    id="frame"
    width="998"
    height="533"
    x="1"
    y="1"
    rx="40"
    ry="40" />
}


function Bell() {
  return <Pixel pixel="0,16" mousebbox={true}>
    <path
      id="alarm"
      d="m119 122v6.3c-9 0-14.4 1.8-14.4 9v17.1c0 4.5-0.9 6.3-6.3 6.3v6.3h19.8c-3.6 4.5-0.9 12.6 4.5 12.6s8.1-8.1 4.5-12.6h19.8v-6.3c-5.4 0-6.3-1.8-6.3-6.3v-17.1c0-7.2-5.4-9-14.4-9v-6.3zm10.8 13.5s2.7 0 2.7 2.7l1.8 21.6h-23.4l1.8-21.6c0-2.7 2.7-2.7 2.7-2.7z"
    />
  </Pixel>
}

function Dash() {
  return <g id="dash" transform="matrix(1.36 0 0 1.36 -366 -691)">
    <Pixel pixel="1,16">
      <rect x="767" y="594" width="30.3" height="11"/>
    </Pixel>
  </g>
}

function Dot_Up() {
  return <g id="dot_up" transform="matrix(1.05 0 0 .922 130 -564)">
    <Pixel pixel="1,16">
      <rect x="536" y="707" width="19" height="19" rx="9.5"/>
    </Pixel>
  </g>
}

function Dot_Down() {
  return <g id="dot_down" transform="matrix(1.05 0 0 .922 130 -564)">
    <Pixel pixel="1,16">
      <rect x="532" y="773" width="19" height="19" rx="9.5"/>
    </Pixel>
  </g>
}

function Sun() {
  return <Pixel pixel="2,16" mousebbox={true}>
    <g id="sun" transform="matrix(1.36 0 0 1.36 -366 -691)">
      <path
        d="m846 699c1.79-1.18 20.7-1.71 22.1 0 1.2 1.44 1.3 15.7 0 17.3-1.07 1.28-20.3 1.7-21.7 0-1.63-1.91-2.66-15.7-0.372-17.3z"
        transform="translate(37.4 7.53)"
        id="sun_inner"
      />
      <path
        d="m850 715c0.0243-4.28 20-2.25 23.1-5.67 2.5-2.71-4.92-9.07-3.51-10.4 4.88-4.46 8.72 4.6 14.4 2.98 5.37-1.53 4.3-13.8 8.6-14 4.46-0.212 4.2 11.3 6.53 13.3 4.12 3.57 12.2-6.41 16.1-2.63 3.6 3.46-3.56 7.41-1.79 10.7 2.12 3.98 20.8 1.18 20.6 5.43-0.113 4.49-17.4 3.42-20.3 5.98-2.84 2.47 3.9 8.77 1.05 11.2-3.19 2.76-9.05-4.75-12.3-2.98-5.78 3.15-3.91 12-8.95 12.1-5.05 0.105-4.68-8.64-8.78-11.8-3.98-3.03-11.8 6.85-14.7 2.81-3.36-4.6 7.75-7.82 5.27-11.1-1.21-1.58-25.4-1.45-25.4-6.09z"
        fill="none"
        stroke="#333"
        stroke-width="2.43"
        id="sun_outer"
      />
    </g>
  </Pixel>
}


 <path id="quote_single" transform="matrix(1.36 0 0 1.2 -351 -519)" d="m534 658-3.38 7.69c-1.86 2.84-3.79 5.21-7.25 8.27-0.617 0.542-5.18 0.614-5.77-0.117 0 0-1.01-18.2 2.66-18.2l12.6-0.176c1.57-0.022 1.13 2.56 1.13 2.56z"/>

function Single_Quote() {
  return <Pixel pixel="2,17" mousebbox={true}>
    <path
      id="singlequote"
      transform="matrix(1.36 0 0 1.2 -351 -519)"
      d="m534 658-3.38 7.69c-1.86 2.84-3.79 5.21-7.25 8.27-0.617 0.542-5.18 0.614-5.77-0.117 0 0-1.01-18.2 2.66-18.2l12.6-0.176c1.57-0.022 1.13 2.56 1.13 2.56z"
    />
  </Pixel>
}

function Double_Quote() {
  return <g id="doublequote" transform="matrix(1.36 0 0 1.2 -351 -519)">
    <Pixel pixel="1,16">
      <path
        id="quote_double_left"
        d="m807 658-3.38 7.69c-1.86 2.84-3.79 5.21-7.25 8.27-0.617 0.542-5.18 0.614-5.77-0.117 0 0-1.01-18.2 2.66-18.2l12.6-0.176c1.57-0.022 1.13 2.56 1.13 2.56z"
      />
      <path
        id="quote_double_right"
        d="m826 658-3.38 7.69c-1.86 2.84-3.79 5.21-7.25 8.27-0.617 0.542-5.18 0.614-5.77-0.117 0 0-1.01-18.2 2.66-18.2l12.6-0.176c1.57-0.022 1.13 2.56 1.13 2.56z"
      />
    </Pixel>
  </g>
}

function Signal() {
  return <Pixel pixel="0,17" mousebbox={true}>
    <g id="signal" transform="matrix(.797 0 0 .682 22 32.3)">
      <path
        id="signal_1"
        d="m 90,113 c 0,0 7,-9 7,-21 C 97,80 90,72 90,72 H 76 v 41 z"
      />
      <path
        id="signal_2"
        d="m 113,113 c 0,0 6,-8 6,-20 0,-12 -6,-21 -6,-21 h -12 c 0,0 6,9 6,21 0,12 -6,20 -6,20 z"
      />
      <path
        id="signal_3"
        d="m 136,113 c 0,0 4,-9 4,-20 0,-12 -4,-21 -4,-21 h -12 c 0,0 4,10 4,21 0,12 -4,20 -4,20 z"
      />
      <path
        id="signal_4"
        d="m 157,113 c 0,0 3,-8 3,-20 0,-12 -3,-21 -3,-21 h -10 c 0,0 3,9 3,21 0,13 -3,20 -3,20 z"
      />
      <path
        id="signal_5"
        d="m 178,113 c 0,0 3,-7 3,-20 0,-13 -3,-21 -3,-21 h -9 c 0,0 3,9 3,21 0,12 -3,20 -3,20 z"
      />
    </g>
  </Pixel>
}

function PM() {
  return <Pixel pixel="2,17" mousebbox={true}>
    <path
      id="pm"
      d="m89.2 253h9.61v-13.9h11.5s14.4 0 14.4-12.3c0-13.1-14.4-13.1-14.4-13.1h-21.1zm9.61-32.4h10.6s6.72 0 6.72 6.17-5.76 6.17-5.76 6.17h-11.5zm59.6 32.4 8.64-29.3v29.3h9.61v-39.3h-13.4l-8.64 30.8-8.64-30.8h-13.4v39.3h9.61v-29.3l8.64 29.3z"
    />
  </Pixel>
}

function I24H() {
  return <Pixel pixel="2,16" mousebbox={true}>
    <g id="timemode_24H" transform="matrix(1.14 0 0 1.09 -27.5 48.5)">
      <path
        d="m 227,190 h -27 v -6 c 0,-7 5,-9 10,-12 5,-3 11,-5 11,-9 0,-4 -1,-7 -7,-7 -6,0 -8,4 -8,9 h -6 c 0,-9 5,-15 14,-15 10,0 13,5 13,13 0,8 -8,11 -12,13 -4,2 -8,4 -8,8 h 20 z"
        id="timemode24_2"
      />
      <path
        d="m 257,176 h 4 v 6 h -4 v 8 h -6 v -8 h -19 v -9 l 16,-23 H 257 Z m -6,-20 -14,20 h 14 z"
        id="timemode24_4"
      />
      <path
        d="m 298,190 h -6 v -17 h -17 v 17 h -6 v -40 h 6 v 17 h 17 v -17 h 6 z"
        id="timemode24_h"
      />
    </g>
  </Pixel>
}

function Position0() {
  return <g id="pos0" transform="matrix(1.07 0 0 .994 -187 6.09)">
    <Pixel pixel="0,13">
      <path
        id="pos0_A"
        d="m416 83h-30l-11-14s-2-3 3-3h47z"
      />
    </Pixel>

    <Pixel pixel="1,13">
      <path
        id="pos0_B"
        d="m429 70c3-5 8 0 7 20-1 19 0 31-9 28-3-2-9-7-9-7l1-23z"
      />
    </Pixel>

    <Pixel pixel="2,13">
      <path
        id="pos0_C"
        d="m422 178c2 0 10-4 10-11l2-36c0-10-4-10-4-10l-13 10-1 28z"
      />
    </Pixel>

    <Pixel pixel="2,15">
      <path
        id="pos0_D"
        d="m383 161h28l6 18h-47c-14-6 2-11 13-18z"
      />
    </Pixel>

    <Pixel pixel="2,14">
      <path
        id="pos0_E"
        d="m363 168s0-26 1-38c2-9 6-6 6-6l11 8-1 27z"
      />
    </Pixel>

    <Pixel pixel="0,14">
      <path
        id="pos0_F"
        d="m370 70c-5 2-5 28-5 38 0 8 5 8 5 8l12-8v-25z"
      />
    </Pixel>

    <Pixel pixel="1,15">
      <path
        id="pos0_G"
        d="m382 128h7l8-4 9 4h6l11-8-10-7h-6l-8 5-8-5h-9l-11 7z"
      />
    </Pixel>

    <Pixel pixel="1,14">
      <path
        id="pos0_H"
        d="m392 86h16l-1 23-8 5-8-5z"
      />
      <path
        id="pos0_I"
        d="m405 159h-16l1-27 8-4 8 4z"
      />
    </Pixel>
  </g>
}

function Position1() {
  return <g id="pos1" transform="matrix(1.07 0 0 .994 -187 6.09)">
    <Pixel pixel="0,11">
      <path
        id="pos1_A"
        d="m521 83h-31l-12-14s0-3 5-3h47z"
      />
    </Pixel>

    <Pixel pixel="1,11">
      <path
        id="pos1_B"
        d="m534 70c3-5 8 0 7 20-1 19 0 31-9 28-3-2-9-7-9-7l1-23z"
      />
      <path
        id="pos1_C"
        d="m526 178c2 0 10-4 10-11l2-36c0-10-4-10-4-10l-13 10-1 28z"
      />
    </Pixel>

    <Pixel pixel="2,11">
      <path
        id="pos1_D"
        d="m488 161h28l6 18h-47c-14-6 2-11 13-18z"
      />
    </Pixel>

    <Pixel pixel="1,12">
      <path
        id="pos1_E"
        d="m466 168s0-26 1-38c2-9 6-6 6-6l11 8-1 27z"
      />
      <path
        id="pos1_F"
        d="m473 70c-5 2-5 28-5 38 0 8 5 8 5 8l12-8v-25z"
      />
    </Pixel>

    <Pixel pixel="2,12">
      <path
        id="pos1_G"
        d="m487 128h30l11-8-10-7h-31l-11 7z"
      />
    </Pixel>

    <Pixel pixel="0,12">
      <path
        id="pos1_H"
        d="m441 66h30s-5 0-5 17h-16"
      />
    </Pixel>
  </g>

}

function Split() {
  return <Pixel pixel="1,10" mousebbox={true}>
    <g id="split" transform="matrix(1.08 0 0 .552 112 -6.77)">
      <path
        id="timemodesplit_s"
        d="m285 449v5.09q-2.97-1.42-5.61-2.12-2.64-0.698-5.09-0.698-4.27 0-6.59 1.66-2.3 1.65-2.3 4.71 0 2.56 1.53 3.88 1.55 1.29 5.84 2.09l3.15 0.646q5.84 1.11 8.61 3.93 2.79 2.79 2.79 7.5 0 5.61-3.78 8.51-3.75 2.9-11 2.9-2.74 0-5.84-0.621-3.08-0.621-6.39-1.84v-5.38q3.18 1.78 6.23 2.69 3.05 0.905 6 0.905 4.47 0 6.9-1.76t2.43-5.02q0-2.84-1.76-4.45-1.73-1.6-5.71-2.4l-3.18-0.621q-5.84-1.16-8.46-3.65t-2.61-6.9q0-5.12 3.59-8.07 3.62-2.95 9.96-2.95 2.72 0 5.53 0.491t5.77 1.47z"
      />
      <path
        id="timemodesplit_t"
        d="m367 448h32.7v4.4h-13.7v34.2h-5.25v-34.2h-13.7z"
      />
      <path
        id="timemodesplit_i"
        d="m356 448h5.22v38.6h-5.22z"
      />
        <path id="timemodesplit_l"
        d="m327 448h5.22v34.2h18.8v4.4h-24z"
      />
      <path
        id="timemodesplit_p"
        d="m295 448h11.8q6.49 0 9.8 2.95 3.34 2.92 3.34 8.58 0 5.71-3.34 8.64-3.31 2.92-9.8 2.92h-6.57v15.5h-5.22zm5.22 4.29v14.5h6.57q3.65 0 5.64-1.89 1.99-1.89 1.99-5.38 0-3.46-1.99-5.35t-5.64-1.89z"
      />
    </g>
  </Pixel>
}

function Auto() {
  return <Pixel pixel="1,10" mousebbox={true}>
    <g id="auto" transform="matrix(1.11 0 0 .616 413 -28.1)">
      <path
        id="timemodeauto_a"
        d="m139 435-14.7 38.6h5.51l3.52-9.91h17.4l3.51 9.91h5.43l-14.7-38.6zm2.95 5.15 7.11 19.2h-14.2z"
      />
      <path
        id="timemodeauto_u"
        d="m165 435h5.25v23.5q0 6.21 2.25 8.95 2.25 2.72 7.29 2.72 5.02 0 7.27-2.72 2.25-2.74 2.25-8.95v-23.5h5.25v24.1q0 7.55-3.75 11.4-3.72 3.85-11 3.85-7.32 0-11.1-3.85-3.72-3.85-3.72-11.4z"
      />
      <path
        id="timemodeauto_t"
        d="m199 435h32.7v4.4h-13.7v34.2h-5.25v-34.2h-13.7z"
      />
        <path id="timemodeauto_o"
        d="m252 434c-5.43 0-9.77 1.82-13 5.46-3.24 3.62-4.86 8.48-4.86 14.6 0 6.1 1.62 11 4.86 14.6 3.26 3.62 7.6 5.43 13 5.43 5.41 0 9.74-1.81 13-5.43 3.24-3.64 4.86-8.5 4.86-14.6 0-6.1-1.62-11-4.86-14.6-3.24-3.64-7.57-5.46-13-5.46zm0 4.24c3.79 0 6.79 1.42 9 4.24 2.22 2.83 3.34 6.68 3.34 11.6 0 4.86-1.11 8.7-3.34 11.5-2.21 2.83-5.21 4.24-9 4.24s-6.81-1.42-9.05-4.24c-2.22-2.83-3.34-6.67-3.34-11.5 0-4.88 1.11-8.73 3.34-11.6 2.24-2.83 5.26-4.24 9.05-4.24z"
      />
    </g>
  </Pixel>
}

function Position2() {
  return <g id="pos2" transform="matrix(.903 0 0 .854 -30.6 12.7)">
    <Pixel pixel="1,9">
      <path
        id="pos2_A"
        d="m919 87h-37l-13-16s0-4 5-4h56z"
      />
      <path
        id="pos2_B"
        d="m933 70c4-5 9 1 8 24s0 37-10 33c-4-3-11-8-11-8l1-26z"
      />
      <path
        id="pos2_C"
        d="m925 198s9 0 12-14l2-42c0-12-5-11-5-11l-15 11-1 32z"
      />
    </Pixel>

    <Pixel pixel="0,9">
      <path
        id="pos2_D"
        d="m878 178h35l7 21h-57c-17-8 1-13 15-21z"
      />
    </Pixel>

    <Pixel pixel="2,9">
      <path
        id="pos2_E"
        d="m855 187s0-30 2-45c2-10 7-7 7-7l13 9-1 31z"
      />
    </Pixel>

    <Pixel pixel="0,10">
      <path
        id="pos2_F"
        d="m864 72c-5 3-6 33-6 45 0 9 7 9 7 9l13-9v-30z"
      />
    </Pixel>

    <Pixel pixel="0,10">
      <path
        id="pos2_G"
        d="m877 139h39l13-9-13-9h-35l-14 10z"
      />
    </Pixel>
  </g>
}

function Position3() {
  return <g id="pos3" transform="matrix(.903 0 0 .854 66.4 13.6)">
    <Pixel pixel="0,7">
      <path
        id="pos3_A"
        d="m 919,87 h -37 l -13,-16 c 0,0 0,-4 5,-4 h 56 z"
      />
    </Pixel>

    <Pixel pixel="1,7">
      <path
        id="pos3_B"
        d="m 933,70 c 4,-5 9,1 8,24 -1,23 0,37 -10,33 -4,-3 -11,-8 -11,-8 l 1,-26 z"
      />
    </Pixel>

    <Pixel pixel="2,7">
      <path
        id="pos3_C"
        d="m 925,198 c 0,0 9,0 12,-14 l 2,-42 c 0,-12 -5,-11 -5,-11 l -15,11 -1,32 z"
      />
    </Pixel>

    <Pixel pixel="2,6">
      <path
        id="pos3_D"
        d="m 878,178 h 35 l 7,21 h -57 c -17,-8 1,-13 15,-21 z"
      />
    </Pixel>

    <Pixel pixel="2,8">
      <path
        id="pos3_E"
        d="m 855,187 c 0,0 -0,-30 2,-45 2,-10 7,-7 7,-7 l 13,9 -1,31 z"
      />
    </Pixel>

    <Pixel pixel="0,8">
      <path
        id="pos3_F"
        d="m 864,72 c -5,3 -6,33 -6,45 -0,9 7,9 7,9 l 13,-9 0,-30 z"
      />
    </Pixel>

    <Pixel pixel="1,8">
      <path
        id="pos3_G"
        d="m 877,139 h 39 l 13,-9 -13,-9 h -35 l -14,10 z"
      />
    </Pixel>
  </g>
}

function Position4() {
  return <g id="pos4" transform="matrix(.963 0 0 .812 16.3 89.3)">
    <Pixel pixel="1,18">
      <path
        id="pos4_A"
        d="m 142,275 h -26 l -26,-30 c 0,0 -3,-6 10,-6 h 62 z"
      />
    </Pixel>

    <Pixel pixel="2,19">
      <path
        id="pos4_B"
        d="m 169,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="0,19">
      <path
        id="pos4_C"
        d="m 156,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="1,18">
      <path
        id="pos4_D"
        d="m 108,438 h 26 l 13,38 h -65 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="0,18">
      <path
        id="pos4_E"
        d="m 64,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="2,18">
      <path
        id="pos4_F"
        d="m 80,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,19">
      <path
        id="pos4_G"
        d="m 103,368 h 37 l 21,-17 -20,-15 h -37 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position5() {
  return <g id="pos5" transform="matrix(.963 0 0 .812 16.3 89.3)">
    <Pixel pixel="2,20">
      <path
        id="pos5_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,21">
      <path
        id="pos5_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="1,21">
      <path
        id="pos5_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,21">
      <path
        id="pos5_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="0,20">
      <path
        id="pos5_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,17">
      <path
        id="pos5_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,20">
      <path
        id="pos5_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Colon() {
  return <g id="colon" transform="matrix(.813 0 0 .813 78 88.3)">
    <Pixel pixel="1,16">
      <circle cx="380" cy="306" r="17" />
      <circle cx="375" cy="408" r="17" />
    </Pixel>
  </g>
}

function Position6() {
  return <g id="pos6" transform="matrix(.964 0 0 .812 224 89.3)">
    <Pixel pixel="0,22">
      <path
        id="pos6_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,23">
      <path
        id="pos6_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="0,23">
      <path
        id="pos6_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,22">
      <path
        id="pos6_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="1,22">
      <path
        id="pos6_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="2,22">
      <path
        id="pos6_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,23">
      <path
        id="pos6_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position7() {
  return <g id="pos7" transform="matrix(.964 0 0 .812 374 89.3)">
    <Pixel pixel="2,1">
      <path
        id="pos7_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,10">
      <path
        id="pos7_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="0,1">
      <path
        id="pos7_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,0">
      <path
        id="pos7_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="1,0">
      <path
        id="pos7_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="2,0">
      <path
        id="pos7_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,1">
      <path
        id="pos7_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position8() {
  return <g id="pos8" transform="matrix(.719 0 0 .608 581 187)">
    <Pixel pixel="2,2">
      <path
        id="pos8_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,3">
      <path
        id="pos8_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="0,4">
      <path
        id="pos8_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,3">
      <path
        id="pos8_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="0,2">
      <path
        id="pos8_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,2">
      <path
        id="pos8_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,3">
      <path
        id="pos8_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position9() {
  return <g id="pos9" transform="matrix(.719 0 0 .626 693 178)">
    <Pixel pixel="2,4">
      <path
        id="pos9_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="2,5">
      <path
        id="pos9_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="1,6">
      <path
        id="pos9_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="0,6">
      <path
        id="pos9_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="0,5">
      <path
        id="pos9_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,4">
      <path
        id="pos9_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,5">
      <path
        id="pos9_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position10() {
  return <g id="pos10" transform="matrix(.903 0 0 .854 -194 12.1)">
    <Pixel pixel="2,4">
      <path
        id="pos10_A"
        d="m816 87h-37l-13-16s0-4 5-4h56z"
      />
    </Pixel>

    <Pixel pixel="0,6">
      <path
        id="pos10_B"
        d="m830 70c4-5 9 1 8 24s0 37-10 33c-4-3-11-8-11-8l1-26z"
      />
    </Pixel>

    <Pixel pixel="0,5">
      <path
        id="pos10_C"
        d="m822 198s9 0 12-14l2-42c0-12-5-11-5-11l-15 11-1 32z"
      />
    </Pixel>

    <Pixel pixel="2,5">
      <path
        id="pos10_D"
        d="m775 178h35l7 21h-57c-17-8 1-13 15-21z"
      />
    </Pixel>

    <Pixel pixel="1,4">
      <path
        id="pos10_E"
        d="m752 187s0-30 2-45c2-10 7-7 7-7l13 9-1 31z"
      />
    </Pixel>

    <Pixel pixel="1,6">
      <path
        id="pos10_G"
        d="m774 139h39l13-9-13-9h-35l-14 10z"
      />
    </Pixel>
  </g>
}

function Position11() {
  return <g id="pos10" transform="matrix(.903 0 0 .854 -194 12.1)">
    <Pixel pixel="2,4">
      <path
        id="pos11_A"
        d="m919 87h-37l-13-16s0-4 5-4h56z"
      />
    </Pixel>

    <Pixel pixel="0,6">
      <path
        id="pos11_B"
        d="m933 70c4-5 9 1 8 24s0 37-10 33c-4-3-11-8-11-8l1-26z"
      />
    </Pixel>

    <Pixel pixel="0,5">
      <path
        id="pos11_C"
        d="m925 198s9 0 12-14l2-42c0-12-5-11-5-11l-15 11-1 32z"
      />
    </Pixel>

    <Pixel pixel="2,5">
      <path
        id="pos11_D"
        d="m878 178h35l7 21h-57c-17-8 1-13 15-21z"
      />
    </Pixel>

    <Pixel pixel="1,4">
      <path
        id="pos11_E"
        d="m855 187s0-30 2-45c2-10 7-7 7-7l13 9-1 31z"
      />
    </Pixel>

    <Pixel pixel="1,4">
      <path
        id="pos11_F"
        d="m864 72c-5 3-6 33-6 45 0 9 7 9 7 9l13-9v-30z"
      />
    </Pixel>

    <Pixel pixel="1,6">
      <path
        id="pos10_G"
        d="m877 139h39l13-9-13-9h-35l-14 10z"
      />
    </Pixel>
  </g>
}

type PixelProps = {
  pixel: string
  children: React.ReactNode
  // use the bounding box to set the hovering status, useful for indicators
  // that have thin strokes/letters and "gaps" between them; but this can't be
  // the default as it would behave weirdly on digit positions
  mousebbox?: boolean
}

function Pixel(props: PixelProps) {
  const [pixels, dispatch] = usePixels()

  const onMouseEnter = () => { dispatch({ type: "hover", pixel: props.pixel }) }
  const onMouseLeave = () => { dispatch({ type: "hover", pixel: null }) }

  const isHovered = pixels.hovered == props.pixel
  const isOn = pixels.on.has(props.pixel)

  let style: any = {}
  if (isHovered) {
    style = { fill: "#d97706" }
  }

  if (isHovered || isOn) {
    return <g
      pointerEvents={props.mousebbox ? "bounding-box" : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {props.children}
    </g>
  }
}
