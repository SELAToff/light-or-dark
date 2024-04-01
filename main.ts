basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("look!")
        basic.pause(250)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
    } else {
        basic.showString("its dark here...")
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
    }
})
