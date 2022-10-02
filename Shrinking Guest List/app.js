// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let invitedGuest = ["Maaz", "Ahmer", "Salman", "Hammad"]

console.log(`\nInvitation List:`);
for (var i=0; i<invitedGuest.length; i++){
    console.log(`Hi ${invitedGuest[i]}! You are most cordially invited to be our guest at the dinner party we have arranged this Sunday. It will be great having you among us!`)
}

console.log(`\nIMPORTANT ANNOUNCEMENT!\n Due to his busy schedule, one of our important guest 'Mr ${invitedGuest[3]}' is unable to attend the event.\n`);

invitedGuest[3] = "Hamza"

console.log(`Updated Invitation List:`);
for (var i=0; i<invitedGuest.length; i++){
    console.log(`Hi ${invitedGuest[i]}! You are most cordially invited to be our guest at the dinner party we have arranged this Sunday. It will be great having you among us!`)
}

console.log(`\nIMPORTANT ANNOUNCEMENT!\n Luckily I found a bigger table for the dinner so, we will have 3 more guests.\n`);

invitedGuest.unshift("Mavia")
invitedGuest.push("Shaheryar")
invitedGuest.splice(3, 0,"Aniq")

console.log(`\nBigger Invitation List:`);
for (var i=0; i<invitedGuest.length; i++){
    console.log(`Hi ${invitedGuest[i]}! You are most cordially invited to be our guest at the dinner party we have arranged this Sunday. It will be great having you among us!`)
}

console.log(`\nIMPORTANT ANNOUNCEMENT!\n Unfortunately I am out of space and I can only entertain 2 guests.\n`);

console.log(`\nReducing Invitation List:`);
for (var i = invitedGuest.length - 1; i > 1; i--){
    console.log(`Hi ${invitedGuest[i]}! I am extremly sorry to inform you that due to lack of space, I am unable to invite you to the dinner.`)
    invitedGuest.pop()
}

console.log(`\n2 Person Invitation List:`);
for (var i = 0; i < invitedGuest.length; i++){
    console.log(`Hi ${invitedGuest[i]}! You are most cordially invited to be our guest at the dinner party we have arranged this Sunday. It will be great having you among us!`)
}

for (var i = 0; invitedGuest.length > 0; i++){
    invitedGuest.pop()
}

console.log(`\nEmpty List:`);
console.log(invitedGuest);
