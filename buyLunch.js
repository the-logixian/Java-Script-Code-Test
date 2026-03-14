

function whoPaying(names) {
     names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var randomNumber = Math.floor(Math.random() * names.length);
    var randomPayee = names[randomNumber];


    return(randomPayee + " is going to buy lunch today!");
}

console.log(whoPaying());

// const fruits = ["apple", "banana", "cherry", "date"];
// const randomIndex = Math.floor(Math.random() * fruits.length);
// const randomFruit = fruits[randomIndex];
// console.log(randomFruit); // Example output: banana

