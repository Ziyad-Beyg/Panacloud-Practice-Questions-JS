// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magiciansArray = ['Harry Houdini', 'David Blaine', 'Teller Park']
let greatMagiciansArray = []

let show_magicians = (magicianNames) => {
    for(i in magicianNames){
        make_great(i)
    }
}

let make_great = (index) => {
    greatMagiciansArray.push(`The Great ${magiciansArray[index]}`)
    console.log(greatMagiciansArray[i])
}

show_magicians(magiciansArray)
console.log("Actual Array:", magiciansArray) // Actual Array 
console.log('Second Array with phrase "The Great":', greatMagiciansArray) // Second Array with phrase "The Great"