input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
})
basic.showNumber(7)
basic.pause(300)
basic.showNumber(909)
basic.pause(2000)
basic.showLeds(`
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.showString("Hola")
basic.forever(function () {
    basic.showNumber(7)
    basic.pause(300)
    basic.showNumber(909)
    basic.pause(2000)
    basic.showLeds(`
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showString("Hola")
})
