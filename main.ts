//% weight=0 color=#3CB371 icon="\uf2db" block="sensors"
namespace sensors {

    export enum Direction {
        //% block="forward"
        Forward = 1,
        //% block="reverse"
        Reverse = 0,
        //% block="stop"
        Stop = 2
    }

    //% blockId=DDMmultiMotor block="ควบคุมมอเตอร์ 4 ตัว | M1 Dir %m1Dir| M2 Dir %m2| M3 Dir %m3| M4 Dir %m4| ความเร็ว M1 %m1Speed| ความเร็ว M2 %m2Speed| ความเร็ว M3 %m3Speed| ความเร็ว M4 %m4Speed"
    //% m1Speed.min=0 m1Speed.max=255
    //% m2Speed.min=0 m2Speed.max=255
    //% m3Speed.min=0 m3Speed.max=255
    //% m4Speed.min=0 m4Speed.max=255
    export function DDMmultiMotor(
        m1Dir: Direction, m2Dir: Direction, m3Dir: Direction, m4Dir: Direction,
        m1Speed: number, m2Speed: number, m3Speed: number, m4Speed: number
    ): void {
        // กำหนดพินทิศทางตามคำขอ
        pins.digitalWritePin(DigitalPin.P1, m1Dir == Direction.Forward ? 1 : 0)
        pins.digitalWritePin(DigitalPin.P2, m2Dir == Direction.Forward ? 1 : 0)
        pins.digitalWritePin(DigitalPin.P13, m3Dir == Direction.Forward ? 1 : 0)
        pins.digitalWritePin(DigitalPin.P15, m4Dir == Direction.Forward ? 1 : 0)

        // กำหนดพินความเร็วโดย map ค่า 0-255 เป็น PWM 0-1023
        pins.analogWritePin(AnalogPin.P8, m1Dir == Direction.Stop ? 0 : pins.map(m1Speed, 0, 255, 0, 1023))
        pins.analogWritePin(AnalogPin.P12, m2Dir == Direction.Stop ? 0 : pins.map(m2Speed, 0, 255, 0, 1023))
        pins.analogWritePin(AnalogPin.P14, m3Dir == Direction.Stop ? 0 : pins.map(m3Speed, 0, 255, 0, 1023))
        pins.analogWritePin(AnalogPin.P16, m4Dir == Direction.Stop ? 0 : pins.map(m4Speed, 0, 255, 0, 1023))
    }
}
