radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . # . # .
    . . . . .
    `)
basic.pause(2000)
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    radio.sendValue("acc", input.acceleration(Dimension.Y))
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("A", 1)
        led.plot(1, 2)
    } else {
        radio.sendValue("A", 0)
        led.unplot(1, 2)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("B", 1)
        led.plot(3, 2)
    } else {
        radio.sendValue("B", 0)
        led.unplot(3, 2)
    }
})
