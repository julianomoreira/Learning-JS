var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    // var para = document.querySelector(".para");    
    for (var i = 0; i < contactsLength; i++) {
        //printPerson(contacts[i]);
        var listItems = document.createElement("li");
        listItems.innerHTML = contacts[i].firstName;
        document.getElementById("para").appendChild(listItems);
    }
}

function search(familyName) {
    var allPeople = contacts.length;
    for (var i = 0; i < allPeople; i++) {
        if (familyName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
}

function add(firstName,lastName,email,phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
}

add ("Nephi", "Henry", "nephismail@mail.mail", "(555)-555-5555");
add ("Juju", "Silva", "nephismail@mail.mail", "(555)-555-5555");

list();
