// let name_input = prompt("Enter your name ")

// function user_greeting (user) {
//     console.log(`Greetings ${name_input}`)
// }

// user_greeting(name_input)

// let name_input = prompt("Enter your name ")

// const greet = function user_greeting (user, time = "day") {
//     console.log(`Good ${time} ${user}`);

// }

// greet("Joe", "night");

// greet();

// const greet = (user) => { 
//     console.log(`Greetings ${user}`);
// }

// greet(name_input);


function AreaOfCircle (radius) {
    let result = MATH.PI * radius * radius
    return result

}

let radius = prompt("Enter a value ");
let AreaOfCircle = AreaOfCircle(radius).toFixed(2);
alert(`The area of a circle with a radius ${radius} is ${AreaOfCircle} `)
