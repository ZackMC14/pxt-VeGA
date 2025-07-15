namespace sensors {
    //% blockId=DDMmultiMotor block="Control 4 motors |Motor 1 Pin %M1ControlPin|Direction %M1ControlValue|Speed Pin %M1SpeedPin|Speed %M1SpeedValue |Motor 2 Pin %M2ControlPin|Direction %M2ControlValue|Speed Pin %M2SpeedPin|Speed %M2SpeedValue |Motor 3 Pin %M3ControlPin|Direction %M3ControlValue|Speed Pin %M3SpeedPin|Speed %M3SpeedValue |Motor 4 Pin %M4ControlPin|Direction %M4ControlValue|Speed Pin %M4SpeedPin|Speed %M4SpeedValue" blockExternalInputs=false
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
        // Control Motor 1
        pins.analogWritePin(M1ControlPin, pins.map(M1ControlValue, 0, 1, 0, 1023));
        pins.analogWritePin(M1SpeedPin, pins.map(M1SpeedValue, 0, 255, 0, 1023));

        // Control Motor 2
        pins.analogWritePin(M2ControlPin, pins.map(M2ControlValue, 0, 1, 0, 1023));
        pins.analogWritePin(M2SpeedPin, pins.map(M2SpeedValue, 0, 255, 0, 1023));

        // Control Motor 3
        pins.analogWritePin(M3ControlPin, pins.map(M3ControlValue, 0, 1, 0, 1023));
        pins.analogWritePin(M3SpeedPin, pins.map(M3SpeedValue, 0, 255, 0, 1023));

        // Control Motor 4
        pins.analogWritePin(M4ControlPin, pins.map(M4ControlValue, 0, 1, 0, 1023));
        pins.analogWritePin(M4SpeedPin, pins.map(M4SpeedValue, 0, 255, 0, 1023));
    }
}


