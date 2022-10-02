// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let invitedGuest = ["Maaz", "Ahmer", "Salman", "Hammad"]

console.log(`\nInvitation List:`);
for (var i=0; i<invitedGuest.length; i++){
    console.log(`Hi ${invitedGuest[i]}! You are most cordially invited to be our guest at the dinner party we have arranged this Sunday. It will be great having you among us!`)
}

console.log(`\nIMPORTANT ANNOUNCEMENT!\n Due to his busy schedule, one of our important guest 'Mr ${invitedGuest[3]}' is unable to attend the event.`);

invitedGuest[3] = "Hamza"

console.log(`\nUpdated Invitation List:`);
for (var i=0; i<invitedGuest.length; i++){
    console.log(`Hi ${invitedGuest[i]}! You are most cordially invited to be our guest at the dinner party we have arranged this Sunday. It will be great having you among us!`)
}

console.log(`\nIMPORTANT ANNOUNCEMENT!\n Luckily I found a bigger table for the dinner so, we will have 3 more guests.`);

invitedGuest.unshift("Mavia")
invitedGuest.push("Shaheryar")
invitedGuest.splice(3, 0,"Aniq")

console.log(`\Bigger Invitation List:`);
for (var i=0; i<invitedGuest.length; i++){
    console.log(`Hi ${invitedGuest[i]}! You are most cordially invited to be our guest at the dinner party we have arranged this Sunday. It will be great having you among us!`)
}