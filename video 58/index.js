function nice(name) {
    console.log("hey" + name + " you are nice")
    console.log("hey" + name + " you are good")
    console.log("hey" + name + " your tshirt is nice")
    console.log("hey" + name + " your course is good too!")
}
function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}

result1 = sum(3, 7)
result2 = sum(3, 4)
result3 = sum(3, 3)
result4 = sum(7, 9)
console.log("the sum of these number is:", result1)
console.log("the sum of these number is:", result2)
console.log("the sum of these number is:", result3)
console.log("the sum of these number is:", result4)

const func1 = (x => {
    console.log("I am an arrow function", x)
})
func1(34)
func1(66)
func1(84)
