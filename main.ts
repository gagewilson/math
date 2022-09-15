input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
input.onGesture(Gesture.Shake, function () {
    Billy_Bob = randint(0, 10)
    basic.showNumber(Billy_Bob)
    Joe = num + 5
    basic.showNumber(Joe)
    Leonard = num * 7
    basic.showNumber(Leonard)
    Carlisle = num ** 2
    basic.showNumber(Carlisle)
})
let Carlisle = 0
let Leonard = 0
let Joe = 0
let Billy_Bob = 0
let num = 0
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . # . # .
    # . # . #
    `)
num = 0
basic.showNumber(num)
