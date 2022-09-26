

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i < 101; i++) {

        let bang = "Bang"
        let fizz = "Fizz"
        let buzz = "Buzz"

        if (i % 15 == 0) {console.log(fizz + buzz)}

        else if (i % 3 == 0) {console.log(fizz)}

        else if (i % 5 == 0) {console.log(buzz)}

        else if (i % 7 == 0) {console.log(bang)}

        else {console.log(i)}

    }
    
}

// Now we run the main function...
fizzbuzz();
