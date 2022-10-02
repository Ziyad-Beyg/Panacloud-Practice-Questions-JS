// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


let makeShirt = (size="large", text="I Love JavaScript!") => {
    console.log(`\nThe size of shirt is ${size} and \n "${text}"\nwill be printed on the shirt\n`)
}

makeShirt()
makeShirt('medium')
makeShirt('small', "THE EYES CHICO.\n THEY NEVER LIE!")