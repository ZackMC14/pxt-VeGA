//% color="#AA278D" weight=100 icon="\uf1b9"
//% block="ZenithM"
namespace sensors {

    //% blockId=DDMmultiMotor 
    //% block="Control 4 motors |Motor 1 Dir %M1ControlPin|Val %M1ControlValue|PWM %M1SpeedPin|Speed %M1SpeedValue 
    //|Motor 2 Dir %M2ControlPin|Val %M2ControlValue|PWM %M2SpeedPin|Speed %M2SpeedValue 
    //|Motor 3 Dir %M3ControlPin|Val %M3ControlValue|PWM %M3SpeedPin|Speed %M3SpeedValue 
    //|Motor 4 Dir %M4ControlPin|Val %M4ControlValue|PWM %M4SpeedPin|Speed %M4SpeedValue"
    //% blockExternalInputs=false
    //% M1ControlValue.min=0 M1ControlValue.max=1 
    //% M1SpeedValue.min=0 M1SpeedValue.max=255
    //% M2ControlValue.min=0 M2ControlValue.max=1 
    //% M2SpeedValue.min=0 M2SpeedValue.max=255
    //% M3ControlValue.min=0 M3ControlValue.max=1 
    //% M3SpeedValue.min=0 M3SpeedValue.max=255
    //% M4ControlValue.min=0 M4ControlValue.max=1 
    //% M4SpeedValue.min=0 M4SpeedValue.max=255
    export function DDMmultiMotor(
        M1ControlPin: AnalogPin, M1ControlValue: number, M1SpeedPin: AnalogPin, M1SpeedValue: number,
        M2ControlPin: AnalogPin, M2ControlValue: number, M2SpeedPin: AnalogPin, M2SpeedValue: number,
        M3ControlPin: AnalogPin, M3ControlValue: number, M3SpeedPin: AnalogPin, M3SpeedValue: number,
        M4ControlPin: AnalogPin, M4ControlValue: number, M4SpeedPin: AnalogPin, M4SpeedValue: number
    ): void {

        // จ่ายทิศทางและ PWM พร้อมกันทั้ง 4 ตัว
        pins.analogWritePin(M1ControlPin, M1ControlValue == 1 ? 1023 : 0);
        pins.analogWritePin(M1SpeedPin, pins.map(M1SpeedValue, 0, 255, 0, 1023));

        pins.analogWritePin(M2ControlPin, M2ControlValue == 1 ? 1023 : 0);
        pins.analogWritePin(M2SpeedPin, pins.map(M2SpeedValue, 0, 255, 0, 1023));

        pins.analogWritePin(M3ControlPin, M3ControlValue == 1 ? 1023 : 0);
        pins.analogWritePin(M3SpeedPin, pins.map(M3SpeedValue, 0, 255, 0, 1023));

        pins.analogWritePin(M4ControlPin, M4ControlValue == 1 ? 1023 : 0);
        pins.analogWritePin(M4SpeedPin, pins.map(M4SpeedValue, 0, 255, 0, 1023));
    }
}
