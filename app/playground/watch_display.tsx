/*
These functions are copied from watch_private_display.c

I've split the watch_display_character in 2 parts for debug purposes but it
should still behave the same.
 */

function watch_display_character(character: string, position: number): string {
    if (character == '.') character = '-';
    else if (character == 'T' && position == 1) character = '.';
    else if (character == 'R' && position > 1 && position < 8) character = 'r'; // We can't display uppercase R in these positions
    else if (character == 'T' && position > 1) character = 't'; // lowercase t is the only option for these positions
    else if (character == 'B' && position > 1) character = '8';
    else if (character == 'I' && position > 0) character = '1';
    return character
}

const Character_Set = [
    0b00000000, // [space]
    0b01100000, // ! (L in the top half for positions 4 and 6)
    0b00100010, // "
    0b01100011, // # (degree symbol, hash mark doesn't fit)
    0b00101101, // $ (S without the center segment)
    0b00000000, // % (unused)
    0b01000100, // & ("lowercase 7" for positions 4 and 6)
    0b00100000, // '
    0b00111001, // (
    0b00001111, // )
    0b11000000, // * (The + sign for use in position 0)
    0b01110000, // + (segments E, F and G; looks like ┣╸)
    0b00000100, // ,
    0b01000000, // -
    0b10110001, // Г (. is unused, so this is taking over)
    0b00010010, // /
    0b00111111, // 0
    0b00000110, // 1
    0b01011011, // 2
    0b01001111, // 3
    0b01100110, // 4
    0b01101101, // 5
    0b01111101, // 6
    0b00100111, // 7
    0b01111111, // 8
    0b01101111, // 9
    0b01011101, // ö (: is unused, so this is taking over)
    0b00011101, // ü (; is unused, so this is taking over)
    0b01011000, // <
    0b01001000, // =
    0b01001100, // >
    0b01010011, // ?
    0b11111111, // @ (all segments on)
    0b01110111, // A
    0b01111111, // B
    0b00111001, // C
    0b00111111, // D
    0b01111001, // E
    0b01110001, // F
    0b00111101, // G
    0b01110110, // H
    0b10001001, // I (only works in position 0)
    0b00001110, // J
    0b01110101, // K
    0b00111000, // L
    0b10110111, // M (only works in position 0)
    0b00110111, // N
    0b00111111, // O
    0b01110011, // P
    0b01100111, // Q
    0b11110111, // R (only works in position 1)
    0b01101101, // S
    0b10000001, // T (only works in position 0; set (1, 12) to make it work in position 1)
    0b00111110, // U
    0b00111110, // V
    0b10111110, // W (only works in position 0)
    0b01111110, // X
    0b01101110, // Y
    0b00011011, // Z
    0b00111001, // [
    0b00100100, // backslash
    0b00001111, // ]
    0b00100011, // ^
    0b00001000, // _
    0b00000010, // `
    0b01011111, // a
    0b01111100, // b
    0b01011000, // c
    0b01011110, // d
    0b01111011, // e
    0b01110001, // f
    0b01101111, // g
    0b01110100, // h
    0b00010000, // i
    0b01000010, // j (appears as superscript to work in more positions)
    0b01110101, // k
    0b00110000, // l
    0b10110111, // m (only works in position 0)
    0b01010100, // n
    0b01011100, // o
    0b01110011, // p
    0b01100111, // q
    0b01010000, // r
    0b01101101, // s
    0b01111000, // t
    0b01100010, // u (appears in (u)pper half to work in more positions)
    0b00011100, // v (looks like u but in the lower half)
    0b10111110, // w (only works in position 0)
    0b01111110, // x
    0b01101110, // y
    0b00011011, // z
    0b00010110, // { (open brace doesn't really work; overriden to represent the two character ligature "il")
    0b00110110, // | (overriden to represent the two character ligature "ll")
    0b00110100, // } (overriden to represent the two character ligature "li")
    0b00000001, // ~
]

const Segment_Map = [
    [
    // Positions 0 and 1 are the Weekday or Mode digits
        { "com" : 3, "seg" : 18 }, // 0A
        { "com" : 2, "seg" : 17 }, // 0B
        { "com" : 0, "seg" : 17 }, // 0C
        { "com" : 0, "seg" : 18 }, // 0D
        { "com" : 1, "seg" : 20 }, // 0E
        { "com" : 2, "seg" : 18 }, // 0F
        { "com" : 1, "seg" : 6 },  // 0G
        { "com" : 2, "seg" : 21 }, // 0H
        { "com" : null, "seg" : null }, // 0I
    ],
    [
        { "com" : 3, "seg" : 9 },  // 1A
        { "com" : 2, "seg" : 9 },  // 1B
        { "com" : 1, "seg" : 9 },  // 1C
        { "com" : 0, "seg" : 10 }, // 1D
        { "com" : 1, "seg" : 17 }, // 1E
        { "com" : 2, "seg" : 10 }, // 1F
        { "com" : 1, "seg" : 10 }, // 1G
        { "com" : null, "seg" : null }, // 1H
    ],
    // Positions 2 and 3 are the Day digits
    [
        { "com" : 3, "seg" : 3 },  // 2A
        { "com" : 3, "seg" : 2 },  // 2B
        { "com" : 1, "seg" : 2 },  // 2C
        { "com" : 1, "seg" : 3 },  // 2D
        { "com" : 2, "seg" : 5 },  // 2E
        { "com" : 3, "seg" : 5 },  // 2F
        { "com" : 2, "seg" : 3 },  // 2G
        { "com" : null, "seg" : null }, // 2H
    ],
    [
        { "com" : 3, "seg" : 0 },  // 3A
        { "com" : 2, "seg" : 0 },  // 3B
        { "com" : 1, "seg" : 0 },  // 3C
        { "com" : 1, "seg" : 1 },  // 3D
        { "com" : 2, "seg" : 2 },  // 3E
        { "com" : 3, "seg" : 1 },  // 3F
        { "com" : 2, "seg" : 1 },  // 3G
        { "com" : null, "seg" : null }, // 3H
    ],
    // Positions 4-9 are the Clock digits
    [
        { "com" : 0, "seg" : 19 }, // 4A
        { "com" : 1, "seg" : 21 }, // 4B
        { "com" : 3, "seg" : 19 }, // 4C
        { "com" : 3, "seg" : 20 }, // 4D
        { "com" : 2, "seg" : 20 }, // 4E
        { "com" : 1, "seg" : 19 }, // 4F
        { "com" : 2, "seg" : 19 }, // 4G
        { "com" : null, "seg" : null }, // 4H
    ],
    [
        { "com" : 1, "seg" : 26 }, // 5A
        { "com" : 1, "seg" : 23 }, // 5B
        { "com" : 3, "seg" : 26 }, // 5C
        { "com" : 3, "seg" : 23 }, // 5D
        { "com" : 3, "seg" : 21 }, // 5E
        { "com" : 2, "seg" : 22 }, // 5F
        { "com" : 2, "seg" : 26 }, // 5G
        { "com" : null, "seg" : null }, // 5H
    ],
    [
        { "com" : 0, "seg" : 16 }, // 6A
        { "com" : 1, "seg" : 15 }, // 6B
        { "com" : 2, "seg" : 15 }, // 6C
        { "com" : 3, "seg" : 15 }, // 6D
        { "com" : 3, "seg" : 16 }, // 6E
        { "com" : 1, "seg" : 16 }, // 6F
        { "com" : 2, "seg" : 16 }, // 6G
        { "com" : null, "seg" : null }, // 6H
    ],
    [
        { "com" : 1, "seg" : 13 }, // 7A
        { "com" : 1, "seg" : 14 }, // 7B
        { "com" : 3, "seg" : 25 }, // 7C
        { "com" : 3, "seg" : 13 }, // 7D
        { "com" : 3, "seg" : 14 }, // 7E
        { "com" : 2, "seg" : 13 }, // 7F
        { "com" : 2, "seg" : 14 }, // 7G
        { "com" : null, "seg" : null }, // 7H
    ],
    [
        { "com" : 0, "seg" : 24 }, // 8A
        { "com" : 1, "seg" : 24 }, // 8B
        { "com" : 2, "seg" : 24 }, // 8C
        { "com" : 3, "seg" : 24 }, // 8D
        { "com" : 2, "seg" : 25 }, // 8E
        { "com" : 0, "seg" : 25 }, // 8F
        { "com" : 1, "seg" : 25 }, // 8G
        { "com" : null, "seg" : null }, // 8H
    ],
    [
        { "com" : 0, "seg" : 11 }, // 9A
        { "com" : 1, "seg" : 11 }, // 9B
        { "com" : 2, "seg" : 11 }, // 9C
        { "com" : 3, "seg" : 11 }, // 9D
        { "com" : 3, "seg" : 12 }, // 9E
        { "com" : 1, "seg" : 12 }, // 9F
        { "com" : 2, "seg" : 12 }, // 9G
        { "com" : null, "seg" : null }, // 9H
    ],
    // Positions 10 and 11 are the Month digits
    [
        { "com" : 2, "seg" : 8 },  // 10A
        { "com" : 0, "seg" : 7 },  // 10B
        { "com" : 0, "seg" : 8 },  // 10C
        { "com" : 0, "seg" : 9 },  // 10D
        { "com" : 2, "seg" : 7 },  // 10E
        { "com" : null, "seg" : null }, // 10F
        { "com" : 1, "seg" : 22 }, // 10G
        { "com" : null, "seg" : null }, // 10H
    ],
    [
        { "com" : 3, "seg" : 10 }, // 11A
        { "com" : 3, "seg" : 7 },  // 11B
        { "com" : 1, "seg" : 4 },  // 11C
        { "com" : 1, "seg" : 8 },  // 11D
        { "com" : 1, "seg" : 7 },  // 11E
        { "com" : 3, "seg" : 8 },  // 11F
        { "com" : 2, "seg" : 6 },  // 11G
        { "com" : null, "seg" : null }, // 11H
    ]
]

export type pixels = Set<string> // each pixel is represented as a string "com,seg"

// used to update multiple pixels at a time
export type pixelUpdate = Map<string, boolean>

function computePixels(character: string, position: number): pixelUpdate {
    const upd = new Map<string, boolean>
    const watch_set_pixel = (com: number, seg: number) => {
        upd.set(`${com},${seg}`, true)
    }
    const watch_clear_pixel = (com: number, seg: number) => {
        upd.set(`${com},${seg}`, false)
    }

    let segmaps = Segment_Map[position];
    let segdata = Character_Set[character.charCodeAt(0) - 0x20];

    if (position == 1) watch_clear_pixel(3, 6); // clear funky ninth segment
    for (let i = 0; i < 8; i++) {
        const segmap = segmaps[i]
        const com = segmap.com

        if (com === null) {
            segdata = segdata >> 1;
            continue;
        }

        let seg = segmap.seg;

        if (segdata & 1) {
            watch_set_pixel(com, seg);
            if (com == 2 && seg == 21) watch_set_pixel(0, 21);
        } else {
            watch_clear_pixel(com, seg);
            if (com == 2 && seg == 21) watch_clear_pixel(0, 21);
        }

        segdata = segdata >> 1;
    }

    if (position == 1 && (character == 'B' || character == 'D' || character == '@' || character == '.')) watch_set_pixel(3, 6); // add funky ninth segment

    return upd
}

export function computeAllPixels(dispStr: string): pixelUpdate {
    const upd = new Map<string, boolean>

    for (let i = 0; i < 12; i++) {
        const c = dispStr.charAt(i)
        const u = computePixels(c, i)
        u.forEach((value, key) => {
            upd.set(key, value)
        })
    }

    return upd
}

export function computeActualDispString(s: string): string {
    let a = ""
    for (let i = 0; i < 12; i++) {
        const c = s.charAt(i)
        if (c == "") {
            a += " "
            continue
        }
        a += watch_display_character(c, i)
    }
    return a
}
