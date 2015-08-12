var friends = new Object();

friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ["One Microsoft Way", "Home"]
    },
    
    steve: {
        firstName: "Steve",
        lastname: "Job",
        number: "(801) 456-6666",
        address: ["Apple.inc", "Home"]
    }
}

var list = function (contactObj) {
    for (var key in contactObj) {
        console.log(key);
    }
}

list(friends);

var search = function (firstName) {
    for (var key in friends) {
        if (key.firstName === firstName) {
            console.log(key.firstName);
            console.log(key.lastName);
            console.log(key.number);
            console.log(key.address);
            return friends.key;
        }
    }
}

search("Bill");