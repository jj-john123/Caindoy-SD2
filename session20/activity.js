let friends = [];

function showFriends() { 
    if (friends.length <= 0) {
        console.log("You dont have friends.");
    } else {
        console.log(friends);
    }
}


// function addFriend(name) {
//     friends.push(name.toUpperCase());
// }

function addFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());

    if (checkFriend) {
        console.log(`${name.toUpperCase()} is already on your friend list.`); 
    } else {
        friends.push(name.toUpperCase()); 
        console.log(`you added ${name.toUpperCase()}.`); 
    }
}




// Activity remove specific friend -> using their name       used for each
function removeFriend(name) {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i] === name.toUpperCase()) {
            friends.splice(i, 1);
            console.log(`you removed ${name.toUpperCase()}.`);
            return;
        }
    }
    console.log(`${name.toUpperCase()} is not on your friend list.`);
}
    
