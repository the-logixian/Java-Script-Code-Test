function askName() {
  var femaleName = prompt("Provide female name");
  var maleName = prompt("Provide male name");
}

// var tLength = femaleName.length + maleName.length;

var n = Math.floor(Math.random() * 100) + 1;

if (n > 70) {
    console.log("Your love percentage is " + n + "%, you are a match made in heaven");
} 

if ( n > 30 &&  n <= 70){
    console.log ( "Your love percentage is " + n + "%, You have to work on your love");
}

if (n <=30 ) {
    console.log ( "Your love percentage is " + n + "%, Find another love");
}

askName();