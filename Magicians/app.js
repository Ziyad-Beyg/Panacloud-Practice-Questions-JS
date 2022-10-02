// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magiciansArray = ['Harry Houdini', 'David Blaine', 'Teller Park']

let show_magicians = (magicianNames) => {
    for(i in magicianNames){
        console.log(magicianNames[i])
    }
}

show_magicians(magiciansArray)