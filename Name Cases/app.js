// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


var personName = "mIrZa ZiYaD aHmEd BaiG"

let titleCase = (str) => {
    str = str.toLowerCase().split(' ')
    for(var i =0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)

    }
    return str.join(' ')
}

// titleText = titleCase("I'm a little tea pot")

console.log(`${personName.toUpperCase()} (UPPERCASE)  \n${personName.toLowerCase()} (LOWERCASE)  \n${titleCase(personName)} (TITLECASE)`) // printed name in lowercase, uppercase and titlecase
