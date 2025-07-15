//% color="#AA278D" weight=100 icon="\uf1b9"
//% block="MultiMotor"
namespace sensors {

    //% blockId=multiMotor 
    //% block="Run 4 motors |M1 %M1ControlPin dir %M1ControlValue spd %M1SpeedValue |M2 %M2ControlPin dir %M2ControlValue spd %M2SpeedValue |M3 %M3ControlPin dir %M3ControlValue spd %M3SpeedValue |M4 %M4ControlPin dir %M4ControlValue spd %M4SpeedValue"
    //% M1ControlValue.min=0 M1ControlValue.max=1
    //% M1SpeedValue.min=0 M1SpeedValue.max=255
    //% M2ControlValue.min=0 M2ControlValue.max=1
    //% M2SpeedValue.min=0 M2SpeedValue.max=255
    //% M3ControlValue.min=0 M3ControlValue.max=1
    //% M3SpeedValue.min=0 M3SpeedValue.max=255
    //% M4ControlValue.min=0 M4ControlValue.max=1
    //% M4SpeedValue.min=0 M4SpeedValue.max=255
    export function multiMotor(
        M1ControlPin: AnalogPin, M1ControlValue: number, M1SpeedValue: number,
        M2ControlPin: AnalogPin, M2ControlValue: number, M2SpeedValue: number,
        M3ControlPin: AnalogPin, M3ControlValue: number, M3SpeedValue: number,
        M4ControlPin: AnalogPin, M4ControlValue: number, M4SpeedValue: number
    ): void {
        pins.analogWritePin(M1ControlPin, M1ControlValue ? 1023 : 0);
        pins.analogWritePin(M2ControlPin, M2ControlValue ? 1023 : 0);
        pins.analogWritePin(M3ControlPin, M3ControlValue ? 1023 : 0);
        pins.analogWritePin(M4ControlPin, M4ControlValue ? 1023 : 0);

        pins.analogWritePin(<AnalogPin>(M1ControlPin + 1), pins.map(M1SpeedValue, 0, 255, 0, 1023));
        pins.analogWritePin(<AnalogPin>(M2ControlPin + 1), pins.map(M2SpeedValue, 0, 255, 0, 1023));
        pins.analogWritePin(<AnalogPin>(M3ControlPin + 1), pins.map(M3SpeedValue, 0, 255, 0, 1023));
        pins.analogWritePin(<AnalogPin>(M4ControlPin + 1), pins.map(M4SpeedValue, 0, 255, 0, 1023));
    }
}
