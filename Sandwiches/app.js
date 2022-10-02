// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


let sandwichItems = (...items) => {
    console.log("\n\n\tNEW ORDER!\n")
    console.log("According To Your Order!\n")
    for(i in items){
        console.log(`- adding ${items[i]} to your sandwich!`)
    }
    console.log('\nYour sandwich is ready to be served!\n Enjoy Your Meal!')
}

sandwichItems('roast beef', 'cheddar cheese', 'lettuce', 'honey dijon')
sandwichItems('turkey', 'apple slices', 'honey mustard')
sandwichItems('peanut butter', 'strawberry jam')