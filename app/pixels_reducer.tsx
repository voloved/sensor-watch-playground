import { Dispatch, createContext, useContext, useReducer } from "react"
import { computeActualDispString, computeAllPixels } from "./watch_display"

export const indicatorPixelDict = {
  "Signal"    : "3,17",
  "Bell"      : "0,22",
  "PM"        : "1,18",
  "24H"       : "0,20",
  "Split"     : "0,23",
  "Auto"      : "0,14",
  "Dash"      : "2,4",
  "Dot_Up"    : "3,4",
  "Dot_Dn"    : "1,5",
  "Sun"       : "0,0",
  "Quote"     : "0,15",
  "Dbl_Quote" : "0,1",
  "Colon"     : "2,23"
};

function currentTimeAsDispString(): string {
    const date = new Date()
    const pad = (num: number) => num < 10 ? ' ' + num : num
    const pad0 = (num: number) => num < 10 ? '0' + num : num
    const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"]

    const dayOfWeek = daysOfWeek[date.getDay()]
    const day = pad(date.getDate())
    const hours = pad(date.getHours())
    const minutes = pad0(date.getMinutes())
    const seconds = pad0(date.getSeconds())

    return `${dayOfWeek}${day}${hours}${minutes}${seconds}`
}

type pixelState = {
    on: Set<string>,
    hovered: string | null,
    dispStr: string,
}

const initialPixels: pixelState = {
    on: new Set<string>,
    hovered: null,
    dispStr: "",
}

const PixelsContext = createContext<[pixelState, Dispatch<PixelsAction>]>([
    initialPixels,
    (_) => { },
])

type PixelsAction = { type: "set", pixel: string, on: boolean }
    | { type: "disp_str", disp: string }
    | { type: "hover", pixel: string | null }
    | { type: "preset", preset: "positions" | "time" | "all_on" | "all_off" }

function pixelsReducer(pixels: pixelState, action: PixelsAction): pixelState {
    console.log("reducing action", action)

    switch (action.type) {
        case "set": {
            const cpy = {
                ...pixels,
                on: new Set(pixels.on),
            }
            if (action.on) {
                cpy.on.add(action.pixel)
            } else {
                cpy.on.delete(action.pixel)
            }
            return cpy
        }
        case "disp_str": {
            return {
                ...pixels,
                on: reduceDispString(pixels.on, action.disp),
                dispStr: action.disp,
            }
        }
        case "hover": {
            return {
                ...pixels,
                hovered: action.pixel,
            }
        }
        case "preset": {
            switch (action.preset) {
                case "positions": {
                    const dispStr = "012345678901"
                    return {
                        ...pixels,
                        on: reduceDispString(pixels.on, dispStr),
                        dispStr,
                    }
                }
                case "time": {
                    const dispStr = currentTimeAsDispString()
                    const on = reduceDispString(pixels.on, dispStr)
                    on.add(indicatorPixelDict["24H"])
                    on.add(indicatorPixelDict["Colon"])
                    on.delete(indicatorPixelDict["PM"])
                    on.delete(indicatorPixelDict["Split"])
                    return {
                        ...pixels,
                        on,
                        dispStr,
                    }
                }
                case "all_on": {
                    const dispStr = "@@@@@@@@@@@@"
                    const on = reduceDispString(pixels.on, dispStr)
                    for (const pixel of Object.values(indicatorPixelDict)) {
                        on.add(pixel)
                    }
                    return {
                        ...pixels,
                        on,
                        dispStr,
                    }
                }
                case "all_off": {
                    const dispStr = ""
                    const on = reduceDispString(pixels.on, dispStr)
                    for (const pixel of Object.values(indicatorPixelDict)) {
                        on.delete(pixel)
                    }
                    return {
                        ...pixels,
                        on,
                        dispStr,
                    }
                }
            }
            return pixels
        }
    }
}

function reduceDispString(pixels: Set<string>, dispStr: string): Set<string> {
    const pixelsCpy = new Set(pixels)
    const actualDispString = computeActualDispString(dispStr)
    const update = computeAllPixels(actualDispString)

    update.forEach((on, pix) => {
        if (on) {
            pixelsCpy.add(pix)
        } else {
            pixelsCpy.delete(pix)
        }
    })
    return pixelsCpy
}

export function PixelsProvider({ children }: { children: React.ReactNode }) {
    const reducer = useReducer(pixelsReducer, initialPixels)

    return (
        <PixelsContext.Provider value={reducer}>
            {children}
        </PixelsContext.Provider>
    )
}

export function usePixels() {
    return useContext(PixelsContext)
}
