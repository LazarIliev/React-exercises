// import { apiKey, abc as cba } from "./util.js";
// import api from "./util.js";
// import * as util from "./util.js"

// util.abc
// util.default

// console.log(apiKey)
// console.log(api)
// console.log(cba)
// --------------------------------------------------------------------------------------------------------------------------------------------------------

// function greet(userName, message = "Hello") {
//     console.log("Hello")
//     console.log(userName)
//     console.log(message)
//     // return "asdasdas"
// }

// greet("Lazar", "Greetings");


// const user = {
//     name: "Lazar",
//     age: 30,
//     greet(message) {
//         console.log("Hello!")
//         console.log(this.name)
//         console.log(message)
//     }
// }

// user.greet("message")

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hi!")
//         console.log(this.name)
//         console.log(this.age)
//     }
// }

// const user1 = new User("Peter", 45)

// user1.greet()



const hobbies = ["Sports", "Cooking", "Reading"]

hobbies.push("Working")

hobbies.findIndex((item) => item === "Sports");

const editedHobbies = hobbies.map((item) => item + "!")
const objectHobbies = hobbies.map((item) => ({ text:item + "!"}))

console.log(hobbies)

//destructuring
const userNameDate = ["Max", "Schwrzmuller"]

const [firstName, lastName] =  userNameDate

console.log(firstName)

const user = {
    name: "asd",
    age: 23
};

const {name: userName, age} = user

console.log(userName)
console.log(age)

// spread operator

const mergedHobbies = [...hobbies, ...editedHobbies]
const notMergedHobbies = [hobbies, editedHobbies]

const extendedUser = {
    isAdmin: true,
    ...user
}

//for loop

for(const hobby of hobbies) {

}

// const list = document.querySelector("ul")
// list.remove();

setTimeout(() => { console.log("Timed out!")}, 4000);

// Using function as a value

function handleTimeout() {
    console.log("Timed out function!")
}

const handleTimeout2 = () => { console.log("Timed out ...again") }

setTimeout(() => { console.log("Timed out!")}, 2000);
setTimeout(handleTimeout, 2000)
setTimeout(handleTimeout2, 2000)


// Reference vs Primitive value