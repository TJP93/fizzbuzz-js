

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i < 101; i++) {

        let bang = "Bang"
        let fizz = "Fizz"
        let buzz = "Buzz"
        

        let data = [];

        if (i % 3 == 0) {data.push(fizz)}

        if (i % 5 == 0) {data.push(buzz)}

        if (i % 7 == 0) {data.push(bang)}

        if (data.length == 0) 
        
        {console.log(i)}
        else (console.log(data.join('')))

    }
    
}

// Now we run the main function...
fizzbuzz();
