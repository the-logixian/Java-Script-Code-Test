function fibonacciGenerator(n) {
    var fib = [0, 1];

    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log(fib);
}

fibonacciGenerator(10);

function fibonacciGenerator(n) {

    var fib = [];

        
    if (n === 1) {
            fib.push(0)
    } 
    else if (n === 2) {
            fib.push(0, 1)
    } 
    else {   
            fib.push(0, 1)

            for (var i = 2; i < n; i++) {
                 fib.push((fib[fib.length - 1]) + (fib[fib.length - 2])); 
            }
            
    }
    console.log(fib); 
        
}

    




fibonacciGenerator(9);






