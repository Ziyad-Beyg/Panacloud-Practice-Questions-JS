// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// Tests for equality and inequality with strings started
car = 'subaru'

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'audi'? I predict False.")
console.log(car == 'audi')

console.log("\nIs car != 'subaru'? I predict False.")
console.log(car != 'subaru')

console.log("Is car != 'audi'? I predict True.")
console.log(car != 'audi')
// Tests for equality and inequality with strings ended


// Tests using the lower case function started
console.log("\nIs car == 'SUBARU'.lower()? I predict True.")
console.log(car == 'SUBARU'.toLowerCase())

console.log("Is car != 'SUBaRU'.lower()? I predict False.")
console.log(car != 'SUBaRU'.toLowerCase())
// Tests using the lower case function ended


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to started
num = 10

console.log("\nIs num == 10? I predict True.")
console.log(num == 10)

console.log("Is num != 10? I predict False.")
console.log(num != 10)

console.log("Is num > 1? I predict True.")
console.log(num > 1)

console.log("Is num < 10? I predict False.")
console.log(num < 10)

console.log("Is num <= 10? I predict True.")
console.log(num <= 10)

console.log("Is num >= 11? I predict False.")
console.log(num >= 11)
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to ended


// Tests using "and" and "or" operators started
console.log("\nIs num == 10 and car == 'subaru'? I predict True.")
console.log(num == 10 && car == 'subaru')

console.log("Is num != 10 and car == 'subaru'? I predict False.")
console.log(num != 10 && car == 'subaru')

console.log("Is num == 10 or car != 'subaru'? I predict True.")
console.log(num == 10 || car != 'subaru')

console.log("Is num != 10 or car != 'subaru'? I predict False.")
console.log(num != 10 || car != 'subaru')
// Tests using "and" and "or" operators ended


arr = [1,2,3,4,5]

// Test whether an item is in a array started
console.log("\nIs 1 in arr? I predict True.")
console.log(1 in arr)
// Test whether an item is in a array ended


// Test whether an item is not in a array started
console.log("Is 6 in arr? I predict True.")
console.log(6 in arr)
// Test whether an item is not in a array ended