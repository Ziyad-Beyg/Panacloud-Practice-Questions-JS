// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


let carInfo = (manufacturer, model, ...Options) => {

    let Car = {
        manufacturer,
        model
    }
    for(i in Options){
        for(x in Options[i]){
            Car[`${x}`] = Options[i][x]
        }
    }

    // return(`\n\nNew Car: ${Car}`)
    return Car
}

console.log("\n\nNew Car:", carInfo("Honda", "Civic", {color:'black', year:1999, headlights:'popup'}))

console.log("\n\nNew Car:", carInfo('subaru', 'outback', {color:'blue', tow_package: true}))
