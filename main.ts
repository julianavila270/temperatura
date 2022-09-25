input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("centigrados")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    kelvin = input.temperature() + 273.15
    basic.showNumber(kelvin)
    basic.showString("kelvin")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Fahrenheit = 1.8 * input.temperature() + 32
    basic.showNumber(Fahrenheit)
    basic.showString("Fahrenheit")
    basic.clearScreen()
})
let Fahrenheit = 0
let kelvin = 0
basic.showNumber(input.temperature())
while (input.temperature() > 30) {
    basic.showNumber(input.temperature())
    basic.showString("alerta")
    basic.showIcon(IconNames.Sad)
}
basic.clearScreen()
basic.showNumber(input.temperature())
while (input.temperature() < 29) {
    basic.showString("normal")
    basic.showIcon(IconNames.Happy)
}
basic.clearScreen()
