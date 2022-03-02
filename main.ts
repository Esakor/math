// 1+1/2
// 3/2 = 1 R 1
// 5/2 = 2 R 1
// 7/2 = 3 R 1
input.onButtonPressed(Button.A, function () {
    basic.showNumber(9 % 5)
})
// 2 to the power of 2 = 4
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(2 ** 2)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(num_1 - num_2)
})
// Round
// Ceiling
// Floor
// Truncate
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Math.round(26.99))
})
// assigning 
let num_2 = 0
let num_1 = 0
num_1 = 1
num_2 = 2
let num_3 = 3
basic.forever(function () {
	
})
