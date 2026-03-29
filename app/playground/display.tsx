import { usePixels, indicatorPixelDict } from './pixels_reducer';

export function Display() {
  return <svg
    viewBox="0 0 1000 535"
    style={{ fill: "#262626" }}
  >
    <Frame />
    <Static_Box />

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

function Static_Box() {
  return <path 
    id="staticbox" 
    transform="matrix(1.36 0 0 1.36 -345 -653)" 
    d="m933 511a23.8 16.6 0 0 1 23.7 16.6v99.9a23.8 16.6 0 0 1-23.7 16.5h-327a23.8 16.6 0 0 1-23.8-16.5v-99.9a23.8 16.6 0 0 1 23.7-16.6h327m0-1.1h-327a25.3 17.6 0 0 0-25.3 17.7v99.9a25.3 17.6 0 0 0 25.3 17.6h327a25.3 17.6 0 0 0 25.3-17.6v-99.9a25.3 17.6 0 0 0-25.3-17.7z"
  />
}

function Bell() {
  return <Pixel pixel={indicatorPixelDict["Bell"]} mousebbox={true}>
    <path
      id="alarm"
      d="m119 122v6.3c-9 0-14.4 1.8-14.4 9v17.1c0 4.5-0.9 6.3-6.3 6.3v6.3h19.8c-3.6 4.5-0.9 12.6 4.5 12.6s8.1-8.1 4.5-12.6h19.8v-6.3c-5.4 0-6.3-1.8-6.3-6.3v-17.1c0-7.2-5.4-9-14.4-9v-6.3zm10.8 13.5s2.7 0 2.7 2.7l1.8 21.6h-23.4l1.8-21.6c0-2.7 2.7-2.7 2.7-2.7z"
    />
  </Pixel>
}

function Dash() {
  return <g id="dash" transform="matrix(1.36 0 0 1.36 -366 -691)">
    <Pixel pixel={indicatorPixelDict["Dash"]}>
      <rect x="767" y="594" width="30.3" height="11"/>
    </Pixel>
  </g>
}

function Dot_Up() {
  return <g id="dot_up" transform="matrix(1.05 0 0 .922 130 -564)">
    <Pixel pixel={indicatorPixelDict["Dot_Up"]}>
      <rect x="532" y="707" width="19" height="19" rx="9.5"/>
    </Pixel>
  </g>
}

function Dot_Down() {
  return <g id="dot_down" transform="matrix(1.05 0 0 .922 130 -564)">
    <Pixel pixel={indicatorPixelDict["Dot_Dn"]}>
      <rect x="532" y="773" width="19" height="19" rx="9.5"/>
    </Pixel>
  </g>
}

function Sun() {
  return <Pixel pixel={indicatorPixelDict["Sun"]}>
    <g id="sun" transform="matrix(1.36 0 0 1.36 -366 -691)">
      <path
        d="m846 699c1.79-1.18 20.7-1.71 22.1 0 1.2 1.44 1.3 15.7 0 17.3-1.07 1.28-20.3 1.7-21.7 0-1.63-1.91-2.66-15.7-0.372-17.3z"
        transform="translate(37.4 7.53)"
        id="sun_inner"
      />
      <path
        d="m893 687c-0.827 0.0394-1.59 0.405-2.15 0.916s-0.956 1.14-1.29 1.83c-0.671 1.38-1.1 3.02-1.57 4.66-0.468 1.64-0.964 3.26-1.6 4.47-0.639 1.21-1.34 1.95-2.26 2.21-1.1 0.312-2.06 0.128-3.13-0.354-1.07-0.481-2.2-1.28-3.37-2.05-1.17-0.772-2.4-1.54-3.85-1.79-1.46-0.252-3.1 0.182-4.53 1.49-0.555 0.507-0.631 1.32-0.521 1.85 0.109 0.524 0.328 0.96 0.586 1.42 0.516 0.923 1.24 1.92 1.9 2.94 0.664 1.02 1.26 2.05 1.52 2.84s0.217 1.1-0.0449 1.39c-0.314 0.341-2 1-4.23 1.35-2.24 0.346-5.01 0.549-7.72 0.777-2.7 0.229-5.33 0.477-7.4 0.977-1.03 0.25-1.93 0.551-2.69 1.04-0.634 0.412-1.12 1.11-1.29 1.91-0.0319 0.151-0.136 0.274-0.137 0.434-6e-3 1.11 0.734 1.98 1.57 2.54s1.88 0.963 3.09 1.31c2.42 0.703 5.52 1.17 8.65 1.54s6.28 0.652 8.69 0.932c1.21 0.14 2.23 0.282 2.95 0.426 0.345 0.0694 0.608 0.141 0.764 0.195 0.0243 0.0533 0.0756 0.119 0.0664 0.182-0.0153 0.105-0.111 0.347-0.357 0.666-0.492 0.638-1.5 1.49-2.55 2.4s-2.15 1.9-2.83 3.17-0.729 3.04 0.34 4.5c0.514 0.703 1.24 1.19 2.01 1.38 0.768 0.186 1.53 0.107 2.26-0.0801 1.46-0.375 2.87-1.19 4.29-1.98 1.41-0.796 2.82-1.58 3.97-1.96 1.15-0.377 1.86-0.366 2.45 0.084 1.6 1.22 2.56 3.95 3.64 6.59 0.54 1.32 1.12 2.6 2.03 3.65 0.906 1.04 2.26 1.81 3.87 1.77 1.62-0.0337 2.91-0.903 3.68-2.01 0.773-1.11 1.2-2.41 1.64-3.73 0.888-2.63 1.76-5.2 4.18-6.52 0.355-0.193 0.908-0.178 1.81 0.176 0.904 0.354 2.01 1.01 3.16 1.67 1.15 0.664 2.34 1.34 3.6 1.69 1.27 0.348 2.78 0.287 3.93-0.701 1.08-0.938 1.26-2.4 1.03-3.59-0.229-1.19-0.755-2.34-1.24-3.43-0.487-1.1-0.934-2.15-1.08-2.91-0.146-0.76-0.0988-1.01 0.238-1.31 0.261-0.227 1.82-0.779 3.79-1.1s4.4-0.569 6.78-0.879 4.67-0.672 6.52-1.3c0.921-0.314 1.74-0.688 2.41-1.24 0.669-0.556 1.2-1.39 1.22-2.34 0.0245-0.972-0.589-1.85-1.31-2.33s-1.56-0.751-2.52-0.967c-1.92-0.432-4.33-0.597-6.79-0.762-2.46-0.165-4.96-0.324-6.89-0.668-0.967-0.172-1.79-0.394-2.36-0.645-0.571-0.251-0.842-0.516-0.92-0.662-0.237-0.443-0.205-0.842 0.0899-1.56 0.295-0.718 0.876-1.6 1.46-2.55 0.579-0.951 1.18-1.98 1.36-3.2s-0.221-2.64-1.35-3.73c-1.33-1.27-3.15-1.39-4.74-0.982-1.59 0.403-3.15 1.23-4.66 2.02-1.52 0.789-2.99 1.54-4.19 1.86-1.2 0.321-1.93 0.27-2.6-0.311-0.143-0.124-0.645-1.07-1-2.37-0.355-1.3-0.681-2.92-1.08-4.51-0.401-1.59-0.864-3.15-1.62-4.43-0.757-1.28-2.04-2.38-3.68-2.3zm0.115 2.42c0.596-0.0283 0.952 0.231 1.47 1.11s0.974 2.28 1.36 3.79c0.381 1.51 0.706 3.13 1.1 4.55 0.39 1.42 0.728 2.67 1.75 3.56 1.39 1.2 3.22 1.25 4.82 0.82 1.6-0.429 3.17-1.27 4.68-2.05 1.51-0.788 2.98-1.52 4.14-1.82 1.16-0.295 1.82-0.237 2.46 0.379 0.672 0.646 0.721 1.02 0.631 1.62-0.0902 0.597-0.496 1.41-1.04 2.3s-1.19 1.83-1.63 2.89c-0.437 1.07-0.637 2.41 0.0137 3.62 0.453 0.848 1.23 1.37 2.09 1.74 0.854 0.375 1.83 0.619 2.91 0.811 2.15 0.383 4.71 0.537 7.16 0.701 2.45 0.164 4.81 0.345 6.42 0.707 0.805 0.181 1.41 0.421 1.7 0.615 0.289 0.194 0.237 0.162 0.234 0.252-4e-3 0.173-0.0408 0.282-0.348 0.537-0.307 0.255-0.879 0.555-1.64 0.812-1.51 0.516-3.73 0.887-6.05 1.19s-4.76 0.552-6.85 0.891c-2.09 0.339-3.79 0.612-5 1.66-1.08 0.941-1.26 2.4-1.03 3.6 0.23 1.19 0.757 2.34 1.24 3.43 0.487 1.1 0.933 2.15 1.08 2.9s0.0997 1.01-0.238 1.3c-0.452 0.391-0.863 0.426-1.7 0.197-0.832-0.229-1.91-0.8-3.03-1.45s-2.29-1.36-3.49-1.83c-1.2-0.471-2.6-0.734-3.86-0.0469-3.36 1.83-4.44 5.26-5.32 7.88-0.441 1.31-0.857 2.43-1.33 3.11s-0.839 0.958-1.74 0.977c-0.914 0.0191-1.41-0.273-1.99-0.936-0.574-0.662-1.1-1.74-1.61-2.98-1.02-2.49-1.92-5.69-4.42-7.6-1.4-1.07-3.16-0.957-4.68-0.461s-3 1.36-4.41 2.15-2.74 1.5-3.71 1.75c-0.481 0.124-0.844 0.128-1.08 0.0703-0.24-0.0582-0.401-0.144-0.625-0.451-0.613-0.838-0.536-1.21-0.154-1.93s1.27-1.61 2.28-2.48 2.09-1.73 2.88-2.75c0.394-0.51 0.732-1.09 0.836-1.8 0.104-0.71-0.113-1.51-0.586-2.13-0.374-0.488-0.705-0.564-1.04-0.684-0.336-0.12-0.701-0.208-1.12-0.293-0.845-0.17-1.91-0.314-3.15-0.457-2.47-0.286-5.6-0.562-8.68-0.932-3.08-0.369-6.11-0.839-8.26-1.46-1.08-0.313-1.93-0.676-2.42-1-0.485-0.324-0.496-0.462-0.496-0.514 3.5e-4 -0.0627-0.0351-0.089 0.32-0.32 0.355-0.231 1.04-0.502 1.93-0.717 1.78-0.43 4.35-0.691 7.03-0.918 2.68-0.227 5.49-0.427 7.88-0.797s4.39-0.735 5.65-2.1v-2e-3c0.987-1.07 0.96-2.57 0.57-3.78-0.389-1.2-1.09-2.35-1.79-3.42-0.702-1.07-1.41-2.08-1.81-2.79-0.137-0.244-0.173-0.363-0.225-0.5 0.818-0.643 1.45-0.806 2.16-0.682 0.814 0.141 1.82 0.697 2.93 1.43 1.11 0.733 2.32 1.62 3.71 2.24s3.04 0.968 4.79 0.473c1.77-0.502 2.94-1.88 3.75-3.41 0.805-1.53 1.32-3.28 1.79-4.94 0.473-1.66 0.914-3.22 1.42-4.26 0.253-0.519 0.521-0.894 0.748-1.1 0.227-0.208 0.375-0.271 0.623-0.283z"
        id="sun_outer"
      />
    </g>
  </Pixel>
}


 <path id="quote_single" transform="matrix(1.36 0 0 1.2 -351 -519)" d="m534 658-3.38 7.69c-1.86 2.84-3.79 5.21-7.25 8.27-0.617 0.542-5.18 0.614-5.77-0.117 0 0-1.01-18.2 2.66-18.2l12.6-0.176c1.57-0.022 1.13 2.56 1.13 2.56z"/>

function Single_Quote() {
  return <Pixel pixel={indicatorPixelDict["Quote"]} mousebbox={true}>
    <path
      id="singlequote"
      transform="matrix(1.36 0 0 1.2 -351 -519)"
      d="m534 658-3.38 7.69c-1.86 2.84-3.79 5.21-7.25 8.27-0.617 0.542-5.18 0.614-5.77-0.117 0 0-1.01-18.2 2.66-18.2l12.6-0.176c1.57-0.022 1.13 2.56 1.13 2.56z"
    />
  </Pixel>
}

function Double_Quote() {
  return <g id="doublequote" transform="matrix(1.36 0 0 1.2 -351 -519)">
    <Pixel pixel={indicatorPixelDict["Dbl_Quote"]}>
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
  return <Pixel pixel={indicatorPixelDict["Signal"]} mousebbox={true}>
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
  return <Pixel pixel={indicatorPixelDict["PM"]} mousebbox={true}>
    <path
      id="pm"
      d="m89.2 253h9.61v-13.9h11.5s14.4 0 14.4-12.3c0-13.1-14.4-13.1-14.4-13.1h-21.1zm9.61-32.4h10.6s6.72 0 6.72 6.17-5.76 6.17-5.76 6.17h-11.5zm59.6 32.4 8.64-29.3v29.3h9.61v-39.3h-13.4l-8.64 30.8-8.64-30.8h-13.4v39.3h9.61v-29.3l8.64 29.3z"
    />
  </Pixel>
}

function I24H() {
  return <Pixel pixel={indicatorPixelDict["24H"]} mousebbox={true}>
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
    <Pixel pixel="3,18">
      <path
        id="pos0_A"
        d="m416 83h-30l-11-14s-2-3 3-3h47z"
      />
    </Pixel>

    <Pixel pixel="2,17">
      <path
        id="pos0_B"
        d="m429 70c3-5 8 0 7 20-1 19 0 31-9 28-3-2-9-7-9-7l1-23z"
      />
    </Pixel>

    <Pixel pixel="0,17">
      <path
        id="pos0_C"
        d="m422 178c2 0 10-4 10-11l2-36c0-10-4-10-4-10l-13 10-1 28z"
      />
    </Pixel>

    <Pixel pixel="0,18">
      <path
        id="pos0_D"
        d="m383 161h28l6 18h-47c-14-6 2-11 13-18z"
      />
    </Pixel>

    <Pixel pixel="1,20">
      <path
        id="pos0_E"
        d="m363 168s0-26 1-38c2-9 6-6 6-6l11 8-1 27z"
      />
    </Pixel>

    <Pixel pixel="2,18">
      <path
        id="pos0_F"
        d="m370 70c-5 2-5 28-5 38 0 8 5 8 5 8l12-8v-25z"
      />
    </Pixel>

    <Pixel pixel="1,6">
      <path
        id="pos0_G"
        d="m382 128h7l8-4 9 4h6l11-8-10-7h-6l-8 5-8-5h-9l-11 7z"
      />
    </Pixel>

    <Pixel pixel="2,21">
      <path
        id="pos0_H"
        d="m392 86h16l-1 23-8 5-8-5z"
      />
    </Pixel>

    <Pixel pixel="0,21">
      <path
        id="pos0_I"
        d="m405 159h-16l1-27 8-4 8 4z"
      />
    </Pixel>
  </g>
}

function Position1() {
  return <g id="pos1" transform="matrix(1.07 0 0 .994 -187 6.09)">
    <Pixel pixel="3,9">
      <path
        id="pos1_A"
        d="m521 83h-31l-12-14s0-3 5-3h47z"
      />
    </Pixel>

    <Pixel pixel="2,9">
      <path
        id="pos1_B"
        d="m534 70c3-5 8 0 7 20-1 19 0 31-9 28-3-2-9-7-9-7l1-23z"
      />
    </Pixel>

    <Pixel pixel="1,9">
      <path
        id="pos1_C"
        d="m526 178c2 0 10-4 10-11l2-36c0-10-4-10-4-10l-13 10-1 28z"
      />
    </Pixel>

    <Pixel pixel="0,10">
      <path
        id="pos1_D"
        d="m488 161h28l6 18h-47c-14-6 2-11 13-18z"
      />
    </Pixel>

    <Pixel pixel="1,17">
      <path
        id="pos1_E"
        d="m466 168s0-26 1-38c2-9 6-6 6-6l11 8-1 27z"
      />
    </Pixel>

    <Pixel pixel="2,10">
      <path
        id="pos1_F"
        d="m473 70c-5 2-5 28-5 38 0 8 5 8 5 8l12-8v-25z"
      />
    </Pixel>

    <Pixel pixel="1,10">
      <path
        id="pos1_G"
        d="m487 128h30l11-8-10-7h-31l-11 7z"
      />
    </Pixel>

    <Pixel pixel="3,6">
      <path
        id="pos1_H"
        d="m441 66h30s-5 0-5 17h-16"
      />
    </Pixel>
  </g>

}

function Split() {
  return <Pixel pixel={indicatorPixelDict["Split"]} mousebbox={true}>
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
  return <Pixel pixel={indicatorPixelDict["Auto"]} mousebbox={true}>
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
    <Pixel pixel="3,3">
      <path
        id="pos2_A"
        d="m919 87h-37l-13-16s0-4 5-4h56z"
      />
    </Pixel>

    <Pixel pixel="3,2">
      <path
        id="pos2_B"
        d="m933 70c4-5 9 1 8 24s0 37-10 33c-4-3-11-8-11-8l1-26z"
      />
    </Pixel>

    <Pixel pixel="1,2">
      <path
        id="pos2_C"
        d="m925 198s9 0 12-14l2-42c0-12-5-11-5-11l-15 11-1 32z"
      />
    </Pixel>

    <Pixel pixel="1,3">
      <path
        id="pos2_D"
        d="m878 178h35l7 21h-57c-17-8 1-13 15-21z"
      />
    </Pixel>

    <Pixel pixel="2,5">
      <path
        id="pos2_E"
        d="m855 187s0-30 2-45c2-10 7-7 7-7l13 9-1 31z"
      />
    </Pixel>

    <Pixel pixel="3,5">
      <path
        id="pos2_F"
        d="m864 72c-5 3-6 33-6 45 0 9 7 9 7 9l13-9v-30z"
      />
    </Pixel>

    <Pixel pixel="2,3">
      <path
        id="pos2_G"
        d="m877 139h39l13-9-13-9h-35l-14 10z"
      />
    </Pixel>
  </g>
}

function Position3() {
  return <g id="pos3" transform="matrix(.903 0 0 .854 66.4 13.6)">
    <Pixel pixel="3,0">
      <path
        id="pos3_A"
        d="m 919,87 h -37 l -13,-16 c 0,0 0,-4 5,-4 h 56 z"
      />
    </Pixel>

    <Pixel pixel="2,0">
      <path
        id="pos3_B"
        d="m 933,70 c 4,-5 9,1 8,24 -1,23 0,37 -10,33 -4,-3 -11,-8 -11,-8 l 1,-26 z"
      />
    </Pixel>

    <Pixel pixel="1,0">
      <path
        id="pos3_C"
        d="m 925,198 c 0,0 9,0 12,-14 l 2,-42 c 0,-12 -5,-11 -5,-11 l -15,11 -1,32 z"
      />
    </Pixel>

    <Pixel pixel="1,1">
      <path
        id="pos3_D"
        d="m 878,178 h 35 l 7,21 h -57 c -17,-8 1,-13 15,-21 z"
      />
    </Pixel>

    <Pixel pixel="2,2">
      <path
        id="pos3_E"
        d="m 855,187 c 0,0 -0,-30 2,-45 2,-10 7,-7 7,-7 l 13,9 -1,31 z"
      />
    </Pixel>

    <Pixel pixel="3,1">
      <path
        id="pos3_F"
        d="m 864,72 c -5,3 -6,33 -6,45 -0,9 7,9 7,9 l 13,-9 0,-30 z"
      />
    </Pixel>

    <Pixel pixel="2,1">
      <path
        id="pos3_G"
        d="m 877,139 h 39 l 13,-9 -13,-9 h -35 l -14,10 z"
      />
    </Pixel>
  </g>
}

function Position4() {
  return <g id="pos4" transform="matrix(.963 0 0 .812 16.3 89.3)">
    <Pixel pixel="0,19">
      <path
        id="pos4_A"
        d="m 142,275 h -26 l -26,-30 c 0,0 -3,-6 10,-6 h 62 z"
      />
    </Pixel>

    <Pixel pixel="1,21">
      <path
        id="pos4_B"
        d="m 169,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="3,19">
      <path
        id="pos4_C"
        d="m 156,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="3,20">
      <path
        id="pos4_D"
        d="m 108,438 h 26 l 13,38 h -65 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="2,20">
      <path
        id="pos4_E"
        d="m 64,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,19">
      <path
        id="pos4_F"
        d="m 80,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="2,19">
      <path
        id="pos4_G"
        d="m 103,368 h 37 l 21,-17 -20,-15 h -37 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position5() {
  return <g id="pos5" transform="matrix(.963 0 0 .812 16.3 89.3)">
    <Pixel pixel="1,26">
      <path
        id="pos5_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="1,23">
      <path
        id="pos5_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="3,26">
      <path
        id="pos5_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="3,23">
      <path
        id="pos5_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="3,21">
      <path
        id="pos5_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="2,22">
      <path
        id="pos5_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="2,26">
      <path
        id="pos5_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Colon() {
  return <g id="colon" transform="matrix(.813 0 0 .813 78 88.3)">
    <Pixel pixel={indicatorPixelDict["Colon"]}>
      <circle cx="380" cy="306" r="17" />
      <circle cx="375" cy="408" r="17" />
    </Pixel>
  </g>
}

function Position6() {
  return <g id="pos6" transform="matrix(.964 0 0 .812 224 89.3)">
    <Pixel pixel="0,16">
      <path
        id="pos6_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="1,15">
      <path
        id="pos6_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="2,15">
      <path
        id="pos6_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="3,15">
      <path
        id="pos6_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="3,16">
      <path
        id="pos6_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,16">
      <path
        id="pos6_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="2,16">
      <path
        id="pos6_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position7() {
  return <g id="pos7" transform="matrix(.964 0 0 .812 374 89.3)">
    <Pixel pixel="1,13">
      <path
        id="pos7_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="1,14">
      <path
        id="pos7_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="3,25">
      <path
        id="pos7_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="3,13">
      <path
        id="pos7_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="3,14">
      <path
        id="pos7_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="2,13">
      <path
        id="pos7_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="2,14">
      <path
        id="pos7_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position8() {
  return <g id="pos8" transform="matrix(.719 0 0 .608 581 187)">
    <Pixel pixel="0,24">
      <path
        id="pos8_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="1,24">
      <path
        id="pos8_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="2,24">
      <path
        id="pos8_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="3,24">
      <path
        id="pos8_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="2,25">
      <path
        id="pos8_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="0,25">
      <path
        id="pos8_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="1,25">
      <path
        id="pos8_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position9() {
  return <g id="pos9" transform="matrix(.719 0 0 .626 693 178)">
    <Pixel pixel="0,11">
      <path
        id="pos9_A"
        d="m 299,275 h -33 l -25,-30 c 0,0 -4,-6 9,-6 h 69 z"
      />
    </Pixel>

    <Pixel pixel="1,11">
      <path
        id="pos9_B"
        d="m 325,244 c 7,-9 16,1 15,43 -2,42 0,66 -18,59 -7,-5 -20,-15 -20,-15 l 1,-46 z"
      />
    </Pixel>

    <Pixel pixel="2,11">
      <path
        id="pos9_C"
        d="m 312,473 c 0,0 16,-1 21,-24 l 3,-76 c 0,-21 -8,-19 -8,-19 l -28,20 -2,58 z"
      />
    </Pixel>

    <Pixel pixel="3,11">
      <path
        id="pos9_D"
        d="m 292,438 13,38 h -74 c -31,-14 3,-23 26,-38 z"
      />
    </Pixel>

    <Pixel pixel="3,12">
      <path
        id="pos9_E"
        d="m 216,454 c 0,0 -0,-55 3,-81 3,-18 13,-13 13,-13 l 24,17 -3,56 z"
      />
    </Pixel>

    <Pixel pixel="1,12">
      <path
        id="pos9_F"
        d="m 230,247 c -10,5 -11,59 -11,80 -0,17 12,16 12,16 l 24,-17 0,-53 z"
      />
    </Pixel>

    <Pixel pixel="2,12">
      <path
        id="pos9_G"
        d="m 254,368 h 43 l 21,-17 -20,-15 h -43 l -23,16 z"
      />
    </Pixel>
  </g>
}

function Position10() {
  return <g id="pos10" transform="matrix(.903 0 0 .854 -194 12.1)">
    <Pixel pixel="2,8">
      <path
        id="pos10_A"
        d="m816 87h-37l-13-16s0-4 5-4h56z"
      />
    </Pixel>

    <Pixel pixel="0,7">
      <path
        id="pos10_B"
        d="m830 70c4-5 9 1 8 24s0 37-10 33c-4-3-11-8-11-8l1-26z"
      />
    </Pixel>

    <Pixel pixel="0,8">
      <path
        id="pos10_C"
        d="m822 198s9 0 12-14l2-42c0-12-5-11-5-11l-15 11-1 32z"
      />
    </Pixel>

    <Pixel pixel="0,9">
      <path
        id="pos10_D"
        d="m775 178h35l7 21h-57c-17-8 1-13 15-21z"
      />
    </Pixel>

    <Pixel pixel="2,7">
      <path
        id="pos10_E"
        d="m752 187s0-30 2-45c2-10 7-7 7-7l13 9-1 31z"
      />
    </Pixel>

    <Pixel pixel="1,22">
      <path
        id="pos10_G"
        d="m774 139h39l13-9-13-9h-35l-14 10z"
      />
    </Pixel>
  </g>
}

function Position11() {
  return <g id="pos10" transform="matrix(.903 0 0 .854 -194 12.1)">
    <Pixel pixel="3,10">
      <path
        id="pos11_A"
        d="m919 87h-37l-13-16s0-4 5-4h56z"
      />
    </Pixel>

    <Pixel pixel="3,7">
      <path
        id="pos11_B"
        d="m933 70c4-5 9 1 8 24s0 37-10 33c-4-3-11-8-11-8l1-26z"
      />
    </Pixel>

    <Pixel pixel="1,4">
      <path
        id="pos11_C"
        d="m925 198s9 0 12-14l2-42c0-12-5-11-5-11l-15 11-1 32z"
      />
    </Pixel>

    <Pixel pixel="1,8">
      <path
        id="pos11_D"
        d="m878 178h35l7 21h-57c-17-8 1-13 15-21z"
      />
    </Pixel>

    <Pixel pixel="1,7">
      <path
        id="pos11_E"
        d="m855 187s0-30 2-45c2-10 7-7 7-7l13 9-1 31z"
      />
    </Pixel>

    <Pixel pixel="3,8">
      <path
        id="pos11_F"
        d="m864 72c-5 3-6 33-6 45 0 9 7 9 7 9l13-9v-30z"
      />
    </Pixel>

    <Pixel pixel="2,6">
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
