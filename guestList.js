var guestList = ["Temi", "Eriife", "Tolu", "Tobi", "Tope", "Tomi", "Iyanu"];

function confirmList(name) {
    name = prompt("What is your name?");

    if (guestList.includes(name) === true) {
        return("Welcome to the party.")
    } else {
        return("You are not welcomed.")
    }
}

confirmList();