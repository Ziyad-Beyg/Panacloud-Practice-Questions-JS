// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.


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