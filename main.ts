// ควบคุมมอเตอร์ 1 และ 2
//% blockId=DDMmotor12 block="Motor 1 %M1ControlPin Dir %M1ControlValue PWM %M1SpeedPin Spd %M1SpeedValue | Motor 2 %M2ControlPin Dir %M2ControlValue PWM %M2SpeedPin Spd %M2SpeedValue"
export function DDMmotor12(
    M1ControlPin: AnalogPin, M1ControlValue: number, M1SpeedPin: AnalogPin, M1SpeedValue: number,
    M2ControlPin: AnalogPin, M2ControlValue: number, M2SpeedPin: AnalogPin, M2SpeedValue: number
): void {
    pins.analogWritePin(M1ControlPin, M1ControlValue == 1 ? 1023 : 0)
    pins.analogWritePin(M1SpeedPin, pins.map(M1SpeedValue, 0, 255, 0, 1023))
    pins.analogWritePin(M2ControlPin, M2ControlValue == 1 ? 1023 : 0)
    pins.analogWritePin(M2SpeedPin, pins.map(M2SpeedValue, 0, 255, 0, 1023))
}

// ควบคุมมอเตอร์ 3 และ 4
//% blockId=DDMmotor34 block="Motor 3 %M3ControlPin Dir %M3ControlValue PWM %M3SpeedPin Spd %M3SpeedValue | Motor 4 %M4ControlPin Dir %M4ControlValue PWM %M4SpeedPin Spd %M4SpeedValue"
export function DDMmotor34(
    M3ControlPin: AnalogPin, M3ControlValue: number, M3SpeedPin: AnalogPin, M3SpeedValue: number,
    M4ControlPin: AnalogPin, M4ControlValue: number, M4SpeedPin: AnalogPin, M4SpeedValue: number
): void {
    pins.analogWritePin(M3ControlPin, M3ControlValue == 1 ? 1023 : 0)
    pins.analogWritePin(M3SpeedPin, pins.map(M3SpeedValue, 0, 255, 0, 1023))
    pins.analogWritePin(M4ControlPin, M4ControlValue == 1 ? 1023 : 0)
    pins.analogWritePin(M4SpeedPin, pins.map(M4SpeedValue, 0, 255, 0, 1023))
}
