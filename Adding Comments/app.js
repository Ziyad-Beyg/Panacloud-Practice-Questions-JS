// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


// PROGRAM 1 START

var personName = "mIrZa ZiYaD aHmEd BaiG" // person name
let titleCase = (str) => { // function scope start
    str = str.toLowerCase().split(' ') // string argument is converted into lowercase, and splited into array
    for(var i =0; i < str.length; i++){ // for loop scope start
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1) // logic 
    } // for loop scope end
    return str.join(' ') // array indexes are joined as a string
} // function scope start
console.log(`${personName.toUpperCase()} (UPPERCASE)  \n${personName.toLowerCase()} (LOWERCASE)  \n${titleCase(personName)} (TITLECASE)`) // printed name in lowercase, uppercase and titlecase

// PROGRAM 1 END


// PROGRAM 2 START

console.log(8 + 0) // addition operation
console.log(8 - 0) // subtraction operation
console.log(4 * 2) // multiply operation
console.log(32 / 4) // division operation

// PROGRAM 2 END