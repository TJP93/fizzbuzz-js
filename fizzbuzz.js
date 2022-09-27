

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i < 256; i++) {

        let bang = "Bang"
        let fizz = "Fizz"
        let buzz = "Buzz"
        let bong = "Bong"
        let fezz = "Fezz"

        let data = [];


        if (i % 3 == 0) {data.push(fizz)}

        if (i % 5 == 0) {data.push(buzz)}

        if (i % 7 == 0) {data.push(bang)}

        if (i % 11 == 0) {data = [bong]}

        if (i % 13 == 0 && data.includes(buzz || bang)) {data.splice(1, 0, fezz)}
       // if (i % 13 == 0 && data.includes(buzz || bang))
        else if (data.length !== 0 && data.includes(bong)) {data.unshift(fezz)}

        if (i % 17 == 0) {data.reverse()}

        if (data.length == 0) 
        
        {console.log(i)}
        else (console.log(data.join('')))

    }
    
}

// Now we run the main function...
fizzbuzz();
