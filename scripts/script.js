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


// function AreaOfCircle (radius) {
//     let result = 3.14 * radius * radius
//     return result

// }

// let r = prompt("Enter a value ");
// let AreaOfCircle1 = AreaOfCircle(radius).toFixed(2);
// alert(`The area of a circle with a radius ${radius} is ${AreaOfCircle1} `);

// let radiusParagraph = document.getElementById("#radius");
// radiusParagraph.textContent += r; 


let shoppingItems = ["cheese" , "bread", "green pepper"];

const shoppingItemElement = document.querySelector(".shopping");
function populateList(arr) {
    for (item of arr) {
        let listItem = document.createElement('li');
        listItem.textContent = item
        shoppingItemElement.appendChild(listItem);
    }
}

function changeListStyle (list) {
    shoppingItemElement.classList.remove("circleList");
    shoppingItemElement.classList.add("squareList");

}
populateList(shoppingItems);








