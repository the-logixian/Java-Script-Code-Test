var beer = [];
// var count = 99;

// function noOfBeer() {
//     while (count <= 99 && count >= 1) {
//         var bottleWord;

//         if (count === 1) {
//             bottleWord = "bottle"
//         } else {
//             bottleWord = "bottles"
//         }

//       console.log(count + " " + bottleWord + " of beer on the wall, " + count +   " " + bottleWord + " of beer. Take one down and pass it around, "); 
      
//         count--

//         if (count == 0) {
//              console.log( "No more bottles of beer on the wall");

//         } else {
//              console.log( (count) +  " " + bottleWord + " of beer on the wall.");
//         }

       
//     }

// }

function noOfBeer() {
    for(var count = 99; count >= 1; count--) {
        var bottleWord;

        if (count === 1) {
            bottleWord = "bottle"
        } else {
            bottleWord = "bottles"
        }

      console.log(count + " " + bottleWord + " of beer on the wall, " + count +   " " + bottleWord + " of beer. Take one down and pass it around, "); 
      
    

        if (count === 1) {
             console.log( "No more bottles of beer on the wall");

        } else {
             console.log( (count - 1) +  " " + bottleWord + " of beer on the wall.");
        }

       
    }

}

noOfBeer();