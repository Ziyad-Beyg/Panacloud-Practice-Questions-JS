// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magiciansArray = ['Harry Houdini', 'David Blaine', 'Teller Park']
console.log(magiciansArray) // Actual Array before adding the phrase "The Great"

let show_magicians = (magicianNames) => {
    for(i in magicianNames){
        make_great(i)
    }
}

let make_great = (index) => {
    magiciansArray[index] = `The Great ${magiciansArray[index]}`
    console.log(magiciansArray[i])
}

show_magicians(magiciansArray)
console.log(magiciansArray) // Actual Array after adding the phrase "The Great"