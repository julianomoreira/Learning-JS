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

//const printPerson = (person) => console.log(`${person.firstName} ${person.lastName}`);

// Old way
// function printPerson(person) {
//     console.log(person.firstName + " " + person.lastName);
// }

const list = () => {
  contacts.forEach((contact) => {
    let listItems = document.createElement("li");
    listItems.innerHTML = `${contact.firstName} ${contact.lastName}`;
    document.getElementById("para").appendChild(listItems);
  });
}


// Old way
// function list() {
//     var contactsLength = contacts.length;
//     // var para = document.querySelector(".para");
//     for (var i = 0; i < contactsLength; i++) {
//         //printPerson(contacts[i]);
//         var listItems = document.createElement("li");
//         listItems.innerHTML = contacts[i].firstName + " " + contacts[i].lastName;
//         document.getElementById("para").appendChild(listItems);
//     }
// }


const search = (familyName) => {
  contacts.forEach((contact) => {
    if (familyName === contact.lastName) {
      let fName = contact.firstName;
      //printPerson(fName);
      // console.log(`${contact.firstName} ${contact.lastName}`);
    }
  });
}

// function search(familyName) {
//     var allPeople = contacts.length;
//     for (var i = 0; i < allPeople; i++) {
//         if (familyName === contacts[i].lastName) {
//             printPerson(contacts[i]);
//         }
//     }
// }

function add(firstName,lastName,email,phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
}

add ("Nephi", "Henry", "nephismail@mail.mail", "(555)-555-5555");
add ("Juju", "Silva", "nephismail@mail.mail", "(555)-555-4444");

list();
