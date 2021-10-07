namespace TextPrint {
    //% weight=100 color=#ff1100 icon="T"
    //% block
    //% i.shadow=screen_image_picker
    export function print(t: string, x: number, y: number, i: Image) {
        return i.print(t, x, y)
    }
}
