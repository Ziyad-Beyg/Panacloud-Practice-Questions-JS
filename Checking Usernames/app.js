// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let currentUsers = ['JOHN', 'ana', 'TOM', 'ali', 'JACOB']
let newUsers = ['jacob', 'ZARA', 'Tom', 'ANA', 'ziyad']

let lowerCaseCurrentUsers = []

for (user in currentUsers){
    lowerCaseCurrentUsers.push(currentUsers[user].toLowerCase())
}

for(user in newUsers){
    if (lowerCaseCurrentUsers.includes(newUsers[user].toLowerCase())) {
        console.log(`ERROR: \n The username "${newUsers[user]}" is already taken, Please enter a new username!`)
        
    }
    else{
        console.log(`The username "${newUsers[user]}" is available`)   
        
    }
}
