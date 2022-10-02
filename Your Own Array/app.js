// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


let favTransport = ["Honda Civic", "Toyota Hilux", "Kia Sportage", "Jeep Wrangler"]

for(var i=0; i< favTransport.length; i++ ){
    console.log(`I would love to own a ${favTransport[i]}`)
}