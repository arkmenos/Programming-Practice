//Part 74
//fetch = function used for making HTTP requests to fetch resources.
//        (JSON style data, images, files)
//        Simplifies asynchronous data fetching in JS and used for 
//        interacting with APIs to retrieve and send data 
//        asynchronously over the web.
//        fetch(url, {options})


// fetchData();
// async function fetchData(){
//     try{

//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();


//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
//         if(!response.ok){
//             throw new Error("could not fetch resource");
//         }

//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonSprite");

//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
//     }
//     catch(error){
//         console.error(error);
//     }
// }



// fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(value => console.log(value))



//Part 73
//JSON = (JavaScript Object Notation) data-interchange format
//       Used for exchanging data between a server and a web application
//       JSON files {key:value} OR [value1, value2, value3]

//       JSON.stringify() = converts a JS object to a JSON string.
//       JSON.parse() = converts a JSON string to a JS object.

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value)))
//     .catch(error => console.error(error));

// const names = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const person = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["jellyfishing", "karate","cooking"]}`;
// const people = `[{"name": "Spongebob","age": 30,"isEmployed": true},
//                 {"name": "Patrick","age": 34,"isEmployed": false},
//                 {"name": "Squidward","age": 50,"isEmployed": true},
//                 {"name": "Sandy","age": 25,"isEmployed": false}]`;

// const jsonNames = JSON.stringify(names);
// const jsonPerson = JSON.stringify(person);
// const jsonPeople = JSON.stringify(people);

// const parsedNames = JSON.parse(names);
// const parsedPerson = JSON.parse(person);
// const parsedPeople = JSON.parse(people);

// console.log(names);
// console.log(jsonNames);
// console.log(parsedNames);
// console.log(person);
// console.log(jsonPerson);
// console.log(parsedPerson);
// console.log(people);
// console.log(jsonPeople);
// console.log(parsedPeople);


//Part 72
//Async/Await - Async = makes a function return a promise
//              Await = makes an async function wait for a promise

//              Allows you to write asynchronous code in a synchronous manner
//              Async doesn't have resolve or reject parameters
//              Everything after Await is placed in an event queue

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const dogWalked = true;
//             if(dogWalked){
//                 resolve("Dog Walked");
//             }
//             else{
//                 reject("Dog wasn't walked");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const cleaned = true;
//             if(cleaned){
//                 resolve("Kitchen cleaned");         
//             }
//             else{
//                 reject("Kitchen not cleaned");
//             }
//         }, 2500);    
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {       
//     setTimeout(()=> {
//             const trashOutside = true;
//             if(trashOutside){                
//                 resolve("Trash outside");
//             }
//             else{
//                 reject("Trash not outside");
//             }
//         }, 500);
//     });
// }

// async function doChores(){
//     try{
        
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);        
        
//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);
        
//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);
//         console.log("Chores done");
//     }
//     catch(error){
//         console.error(error);        
//     }
// }

// doChores();

//Part 71
//Promise = An Object that manages asynchronous operations.
//          Wrap a Promise around {asynchronous code}
//          "I promise to return a value"
//          PENDING -> RESOLVED or REJECTED
//          new Promise((resolve, reject) => {asynchronous code})

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const dogWalked = true;
//             if(dogWalked){
//                 resolve("Dog Walked");
//             }
//             else{
//                 reject("Dog wasn't walked");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const cleaned = false;
//             if(cleaned){
//                 resolve("Kitchen cleaned");         
//             }
//             else{
//                 reject("Kitchen not cleaned");
//             }
//         }, 2500);    
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {   
    
//     setTimeout(()=> {
//             const trashOutside = true;
//             if(trashOutside){                
//                 resolve("Trash outside");
//             }
//             else{
//                 reject("Trash not outside");
//             }
//         }, 500);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("chores Done!!")})
//          .catch(error => console.error(error));


// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("Dog Walked");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("Kitchen cleaned");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback){
//     setTimeout(()=> {
//         console.log("Trash outside");
//         callback();
//     }, 500);
// }

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=> console.log("Chores done!!"));
//     })
// });


//Part 70
//Callback Hell = Situation in JS where callbacks are nested within
//                other callbacks to the degree where the code is
//                difficult to read.
//                Old pattern to handle asynchronous functions.
//                User Promise + async/await to avoid Callback Hell

// function task1(callback){
//     setTimeout(()=>{
//         console.log('Task 1 Complete');
//         callback();
//     }, 2000);
// }

// function task2(callback){
//     setTimeout(()=>{
//         console.log('Task 2 Complete');
//         callback();
//     }, 1000);
// }

// function task3(callback){
//     setTimeout(()=>{
//         console.log('Task 3 Complete');
//         callback();
//     }, 3000);
// }

// function task4(callback){
//     setTimeout(()=>{
//         console.log('Task 4 Complete');
//         callback();
//     }, 1500);
// }

// task1();
// task2();
// task3();
// task4();

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(()=>console.log("All tasks completed"));
//         })
//     })
// })


//Part 69
//Image slider program

//Part 68
//Rock Paper Scissors


//Part 67
//classList = Element property in JS used to interact with an element's
//            list of classes(CSS classes).
//            Allows you to make reuseable classes for many elements
//            across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

// let buttons = document.querySelectorAll(".myButtons");
// buttons.forEach(button => {
//     button.classList.add("enabled");
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event =>{
//         event.target.classList.toggle("hover");
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event =>{
//         event.target.classList.toggle("hover");
//     })
// })

// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled")
// const button = document.getElementById("myButton");
// button.classList.add("enabled");
// button.classList.remove("enabled");
// button.classList.add("hover", "enabled");
// button.addEventListener("mouseover",event => {
//     event.target.classList.toggle("hover");
// });
// button.addEventListener("mouseout",event => {
//     event.target.classList.toggle("hover");
// });

// button.classList.add("enabled");
// button.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += ":O";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });



//Part 66
//NodeLists = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array has a forEach(), but no (map, filter, reduce methods)
//            Nodelists won't update to automatically reflect changes

// let buttons = document.querySelectorAll(".buttons");
// // console.log(buttons);
// buttons.forEach(button => {
//     button.addEventListener("click", event =>{
//         event.target.remove();
//         buttons = document.querySelectorAll(".buttons");
//         console.log(buttons);
//     })
// })

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "buttons";
// document.body.appendChild(newButton);

// console.log(buttons);
// console.log(document.querySelectorAll(".buttons"));

// buttons.forEach(button => {
//     // button.style.backgroundColor = "green";
//     // button.textContent += ":)";
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "tomato";
//     });

//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(204,100%,40%)";
//     });

//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(204,100%,60%)";
//     });

// });

//Part 65
//Hide/Show HTML

// const button = document.getElementById("myButton");
// const img = document.getElementById("myImg");

// button.addEventListener("click", event => {
//     if(img.style.visibility === "hidden"){
//         img.style.visibility = "visible";
//         button.textContent = "Hide";
//     }
//     else{
//         img.style.visibility="hidden";
//         button.textContent ="Show";
//     }
// });

//Part 64
//Key Events - keydown, keyup, keypress(not supported on all browsers)

// const box = document.getElementById("myBox");
// const moveAmount = 10;
// let x=0;
// let y=0;

// document.addEventListener("keydown", event =>{
//     box.textContent = ":o";
//     box.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event =>{
//     box.textContent = ";)";
//     box.style.backgroundColor = "lightblue";
// })

// document.addEventListener("keydown", event => {
//     event.preventDefault();
//    if(event.key.startsWith("Arrow")){
//         switch(event.key){
//             case "ArrowUp":
//                 y-= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y+=moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x-=moveAmount;
//                 break;
//             case "ArrowRight":
//                 x+=moveAmount;
//                 break;
//         }
//         box.style.top = `${y}px`;
//         box.style.left = `${x}px`;

//    }
// });

// document.addEventListener("keyup", event => {
    
// });



//Part 63
//eventListener = Listen for specific events to create interactive web pages
//                events: click, mouseover, mouseout
//                .addeventListener(event, callback);

// const myBox =document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// function changeColor(event){
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent = "Ouch!!";
// }

// myBox.addEventListener("click", changeColor);
// myButton.addEventListener("click", event => {
//     myBox.style.backgroundColor = "tomato";
//     myBox.textContent = "ouch!!"
// });

// myButton.addEventListener("mouseover", event => {
//     myBox.style.backgroundColor = "yellow";
//     myBox.textContent = "dont do it..."
// });

// myButton.addEventListener("mouseout", event => {
//     myBox.style.backgroundColor = "lightblue";
//     myBox.textContent="Click me";
// });



//Part 62
//Add and Change HTML

//Step 1 Create the element
// const newH1  = document.createElement("h1");

//Step 2 Add attributes/properties
// newH1.textContent = "HTML rulz dood";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

//Step 3 Append element to DOM
// document.body.prepend(newH1);
// document.getElementById("box1").append((newH1));

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

//Remove HTML element
// document.body.removeChild(boxes[1]);

// const newListItem = document.createElement("li");
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "green";

// document.getElementById("fruits").append(newListItem);
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);


//Part 61
//DOM Navigation= The process of navigating through the structure 
//                of an HTML document using JS
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";
// const  parent = element.parentElement;
// parent.style.backgroundColor ="lightblue";
// console.log(parent.children);

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(element => {
//     const firstChild  = element.lastElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })



//Part 60
//element selectors = Methods used to target and manipulate HTML elements
//                    They allow you to select one or multiple HTML elements
//                    from the DOM(Document Object Model)
// 1. document.getElementById()        //Element or null
// 2. document.getElementsClassName()  //HTML collection
// 3. document.getElementsByTagName()  //HTML collection
// 4. document.querySelector()         //Element or null
// 5. document.querySelectorAll()      //Nodelist 
//Typecast Html collection to Array for traversing

// const element = document.querySelector("li");
// element.style.backgroundColor = "yellow";

// const fruits = document.querySelectorAll(".fruits");
// fruits[1].style.backgroundColor = "yellow";
// fruits.forEach(food => {
//     food.style.backgroundColor = "yellow"
// })
// console.log(fruits);

// const myH1 = document.getElementById("myH1");
// myH1.style.backgroundColor = "yellow";
// myH1.style.textAlign = "center";

// const fruits = document.getElementsByClassName("fruits");
// fruits[0].style.backgroundColor = "yellow";
// for(let fruit of fruits){
//     fruit.style.backgroundColor =  "blue";
// }

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });
// console.log(fruits);

// const h4Elements = document.getElementsByTagName("h4");
// h4Elements[0].style.backgroundColor = "yellow"

// for(let element of h4Elements){
//     element.style.backgroundColor = "yellow";
// }

// const liElements = document.getElementsByTagName("li");

// for(let element of liElements){
//     element.style.backgroundColor = "lightgreen";
// }
// Array.from(liElements).forEach(element =>{
//     element.style.backgroundColor = "lightblue";
// })
// console.log(h4Elements);


//Part 59
//DOM = Document Object Model
//      Object{} that represents the page you see in the web browser
//      and provides you with an API to interact with it.
//      Web browser constructs the DOM when it loads an HTML document,
//      and structures all the elements in a tree-like representation.
//      JS can access the DOM to dynamically change the content,
//      structure and style of a web page.

// document.title= "My website";
// document.body.style.backgroundColor = "hsl(0,0%,15%)";
// console.log(document);
// console.dir(document); //list all properties of the object

// const username = "yoyoyo";
// const welcomeMsg = document.getElementById("myH1");

// welcomeMsg.textContent+= username === ""? `Guest` : username;

//Part 58
//Calculator Program



//Part 57
//Error = An Obeject that is created to represent a problem that occurs.
//        Occur often with user input or establishing a connection
//try { } = Encloses code that might potentially cause an eror
//catch { } = Catch and handle any thrown Errors from try { }
//finally { } = (optional) Always execute. Used mostly for clean up
//              ex: close files, close connections, release resources

// try{
//     const divident = window.prompt("Enter a divident: ");
//     const divisor = window.prompt("Enter a divisor: ");
    
//     if(divisor == 0){
//         throw new Error("you cant divide by zero");
//     }
//     if(isNaN(divident) || isNaN(divisor)){
//         throw new Error("must be a number");
//     }
//     const result = divident/divisor;
//     console.log(result)
// }
// catch(error){
//     console.error(error);
// }

// try{
//     console.log("Hello");
//     console.log(x);
// }
// catch(error){
//     console.error(error)
// }
// finally{
//     console.log("Always executes");
// }

// console.log("End");



//Part 56
//synchronous  = Execute line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.
//asynchronous = Allow multiple operations to be performed concurrently  
//               without waiting . Doesn't block the execution flow and 
//               allows the program to continue.
//               (I/O operations, network requests, fetching data)
//               Handled with: Callbacks, Promises, Async/Await

// function func1(callback){
//     setTimeout(()=> {console.log("Task 1");
//                         callback()}, 3000);
// }

// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");

// }

// func1(func2);


//Part 55
//ES6 Module = An external file that contains reusable code that can
//             be imported into other JS files. Reusable code
//             that can contain variales, classes, function and more
//             Introduced as par of ECMAScript 2015 update

// import {PI,getCircumference, getArea,getVolume} from './mathUtil.js';

// console.log(PI);
// console.log(getCircumference(2));

//Part 54
//Stopwatch Program


//Part 53
//Digital Clock Program


//Part 52
//setTimeout() = function in JS that allows you to schedule the 
//               execution of a function after an amount of time
//               (milliseconds). Times are approximate(varies based
//               on the workload of the JS runtime env.)
//               setTimeout(callback, delay);

// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000);
// const timeoutId = setTimeout(()=>window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

// let timeoutId;

// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//     console.log("Start");
// }

// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log("Clear");
// }



//Part 51
//closure = A function defined inside another function, the inner
//          function hass access to the variables and scope of the
//          outer function.
//          Allow for private variables and state maintenance
//          Used frequently in JS Frameworks: React, Vue, Angular

// function createGame(){

//     let score = 0; 
    
//     function increaseScore(points){
//         score += points;
//         console.log(`+${points} points`);
//     }
    
//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points} points`);
//     }
    
//     function getScore(){
//         return score;
//     }
//     return {increaseScore, decreaseScore, getScore};
// }

// const game = createGame();
// game.increaseScore(10);
// game.increaseScore(3);
// game.decreaseScore(6);

// console.log(game.getScore());

// function createCounter(){

//     let count =0;
    
//     function increment(){
//         count++;
//         console.log(`count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment, getCount}
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // no access
// counter.increment();

// function outer(){
//     let message = "hello";

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// outer();


//Part 50
//Date Objects = Objects that contain values that represent dates and
//               times. These date objects can be changed and formatted.

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");

// if(date2>date1){
//     console.log("some output")
// }
// const date = new Date();
// date.setFullYear(2023);
// date.setMonth(11);

// console.log(date);

// const date = new Date(2021,12,1,15,1,1);
// const date = new Date("2024-01-03T12:00:00Z");
// const date = new Date(1700000000000);
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const dayOfWeek = date.getDay();

// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(dayOfWeek);


//Part 49
//Shuffle an array

// const cards = ['A', 2,3,4,5,6,7,8,9,10,'J','Q','K'];

// console.log(cards);
// shuffle(cards);
// console.log(cards);

// //Fisher-yates algorithm
// function shuffle(array){
//     for(let i = array.length -1; i > 0; i --){
//         const random = Math.floor(Math.random() * (i));

//         [array[i], array[random]] = [array[random],array[i]];
//     }
// }


//Part 48
//sort() = method to sort elements of an array in place.
//         Sorts elements in lexicographic order, not alphabetical
//         lexicographical = (alphabet + numbers + symbols) as strings
// let fruits = ["apple", "oranges", "banana", "coconut"];
// fruits.sort();

// let numbers = [1,3,45,6,10,5,8,9];
// numbers.sort((a,b) => a - b);

// console.log(numbers);
// console.log(fruits);

// const people = [{name:"Spongebob", age:30 ,gpa:3.0},
//                 {name:"Patrick", age:35 ,gpa:2.0},
//                 {name:"Squidward", age:66 ,gpa:2.5},
//                 {name:"Sandy", age:26,gpa:4.0}];
                
// people.sort((a, b) => a.gpa - b.gpa); // -negative result means ascending order
// people.sort((a, b) => a.name.localeCompare(b.name)); //string somparisons
// people.sort((a, b) => b.name.localeCompare(a.name)); 
// console.log(people);


//Part 47
//Array of Objects

// const fruits = [{name:"apple", color: "red", calories: 95},
//                 {name:"orange", color: "orange", calories: 55},
//                 {name:"banana", color: "yellow", calories: 195},
//                 {name:"pineapple", color: "yellow", calories: 195}];

// fruits.push({name:"coconut", color: "white", calories: 125});
// // console.log(fruits[0].name);
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits.forEach(fruit => console.log(fruit.name));
// const fruitNames = fruits.map(fruit=>fruit.name);
// console.log(fruitNames);

// const yellowFruits = fruits.filter(fruit=> fruit.color === "yellow");
// console.log(yellowFruits);

// const highestCalorieFruit = fruits.reduce((max, fruit) => 
//                             fruit.calories > max.calories ?
//                                 fruit :max);

// console.log(highestCalorieFruit);

// fruits.splice(0,3);
// console.log(fruits);
// console.log(fruits.length);


//Part 46
//Nested Objects = Objects inside of other objects.
//                 Allows you to represent more complex data structures
//                 Child object is enclosed by a Parent Object
//                 Person{Address{}, ContactInfo{}}
//                 ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age =age;
//         this.address = new Address(...address);
//     }
// }
// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 30, "124 Conch St", "Bikini bottom", "Int. Waters", "sup");
// const person2 = new Person("Squidward", 30, "126 Conch St", "Bikini bottom", "Int. Waters");

// console.log(person1.address);

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: false,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//             street: "123 Const St",
//             city: "Bikini Bottom",
//             country: "Int. water",
//     }
// }

// console.log(person);
// console.log(person.fullName);
// console.log(person.hobbies[1]);
// console.log(person.address);

// for(const proterty in person.address){
//     console.log(` ${proterty}: ${person.address[proterty]}`);
// }

//Part 45
//destructuring = extract values from arrays and objects, then
//                assign them to variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring

//Example 1 - Swap values of 2 variables
// let a = 1;
// let b = 2;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

//Example 2 - Swap 2 elements in an array
// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

//Example 3 - Assign array elements to variables
// const colors = ["red", "green", "blue", "black", "white"];
// const[firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

//Example 4 - Extract values from objects
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: "30",
//     job: "fryer"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: "40",    
// }

// const {firstName, lastName, age, job ="Unemployed"} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//Example 5 - Destructure in function parameters

// function displayPerson({firstName, lastName, age, job}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job ${job}`);
// }

// displayPerson(person2);


//Part 44
//Getters and Setters
//getter = special method that makes a property readable
//setter = special method that makes a property writeable

//validate and modify a value when reading/writing a property

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName (newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0)
//         {
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error(`First name must be a non-empty string`);
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0)
//         {
//             this._lastName = newLastName;
//         }
//         else{
//             console.error(`Last name must be a non-empty`);
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge >0){
//             this._age = newAge;
//         }
//         else{
//             console.error("Age must be a non-negative number");
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }

//     get lastName(){
//         return this._lastName;
//     }

//     get age(){
//         return this._age;
//     }

//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }
// }

// const person1 = new Person("Elma", "Fudd", 59);
// console.log(person1.firstName);
// console.log(person1._lastName + " " + person1.age);
// console.log(person1.fullName);

// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("width must be a positive number")
//         }
//     }

//     set height(newheight){
//         if(newheight > 0){
//             this._height = newheight;
//         }
//         else{
//             console.error("height must be a positive number")
//         }
//     }

//     get width(){
//         return this._width.toFixed(1);
//     }

//     get height(){
//         return  this._height.toFixed(1);
//     }

//     get area(){
//         return (this._width * this._height).toFixed(1);
//     }
// }

// const rectangle = new Rectangle(7,9);
// rectangle.width = 3;
// rectangle.height = 5;

// console.log(rectangle);
// console.log(rectangle.area)
// console.log(rectangle.width);


//Part 43
//super = keyword is used in classes to call the constructor or 
//        access the properties and methods of a parent(superclass)
//        this = this object
//        super = the parent

// class Animal{
//     constructor(name, age){
//         this.name =name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`the ${this.name} moves at a speed of ${speed} mph`);
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`this ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Duck extends Animal{
//     constructor(name, age, waddleSpeed){
//         super(name, age);
//         this.waddleSpeed = waddleSpeed;
//     }

//     waddle(){
//         console.log(`this ${this.name} can waddle`);
//         super.move(this.waddleSpeed);
//     }
// }

// const bugsBunny = new Rabbit("Bugs Bunny", 24, 12);
// const daffy = new Duck("Daffy Duck", 29, 9);
// console.log(bugsBunny);
// bugsBunny.run();
// console.log(daffy);

//Part 42
//Inheritance = allows a new class to inherit properties and methods
//              from an existing class(parent -> child)
//              helps with code reusability

// class Animal {
//     alive =true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";

//     run(){
//         console.log(`this ${this.name} is running`);
//     }
// }

// class Fish extends Animal {
//     name = "hawk";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.run();


//Part 41
//static = keyword that defines properties or methods that belong to a
//         class itself rather than the objects created from that class
//         (class owns anything static, not the objects )

// class User {
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }
// }

// const user1 = new User("U1");
// const user2 = new User("Patrick");

// console.log(User.userCount);

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));


//Part 40
//class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions
//         ex static keyword, encapsulation, inheritance

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name} \nPrice: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const bike = new Product("bike", 300);
// bike.displayProduct();
// console.log(`Total is ${bike.calculateTotal(0.09)}`);

//Part 39
//Constructor = special method for defining the properties and
//               methods of objects

// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
//     this.drive = function(){console.log(`you drive a ${this.model}`)}
// }

// const car1 = new Car("Honda", "Civic", 2007, "white");
// const car2 = new Car("Honda", "Accord", 2020, "red");

// console.log(car1);
// console.log(car2);
// car1.drive();

//Part 38
//this = reference to the object where THIS is used
//       (the object depends on the immediate context)
//       person.name = this.name
//       DOESN'T WORK WITH ARROW FUNCTIONS
// const person = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log(`Hi I'm ${this.firstName}`)}
// }

//Part 37
//Objects = A collection of related properties and/or methods
//          Can represent real world objects(people, products, places)
//          object = { key:value, function()}
// const person = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log(`Hi I'm ${this.firstName}`)}
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: () => { console.log(`Hello...`)}
// }
// console.log(person.firstName);
// console.log(person2.lastName);

// person.sayHello();
// person2.sayHello();

//Part 36
//arrow functions = a concise way to write function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code

// const numbers =[1,2,3,4,5,6];

// const squares = numbers.map((element)=> Math.pow(element,2));

// console.log(squares);

// setTimeout(() => console.log("Helllloooo"), 3000);

// const hello = (name, age) => { console.log(`Hello ${name}`);
//                             console.log(`Howdy ${age}` )};
// hello("yoyoyo",12);

//Part 35
//function expressions = a way to define functions as 
//         values or variables

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(square);
// const cubes = numbers.map(function(element){
//             return Math.pow(element,3);
//         });
// console.log(squares);
// console.log(cubes);

// function square(element){
//     return Math.pow(element,2);
// }

// const hello = function(){
//     console.log("Hello");
// }
// setTimeout(hello, 3000);
// setTimeout(function(){
//     console.log("HHeeellllooooo");
// }, 3000);


// hello();

//Part 34
// .reduce() = reduce the elements of an array to a single value

// const grades =[75,95,50.90,80,65,95];
// const highest = grades.reduce(getMax);
// console.log(highest);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// const prices = [12,45,124,24,12,1,10];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);
// function sum(accumulator, element){
//     return accumulator + element;
// }



//Part 33
//filter() = creates a new array by filtering out elements

// const ages =[16,17,18,18,20,60];
// let adults = ages.filter(isAdult);

// console.log(adults);
// function isAdult(element){
//     return element >= 18;
// }

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);

// console.log(evenNums);
// function isEven(element){
//     return element % 2 ===0;
// }


//Part 32
//.map() = accepts a callback and applies that function to 
//         each element of an array, then return a new array

// const dates= ["2024-1-10", "2025-1-10", "2024-1-11","2024-2-10"];
// const formatted = dates.map(formatDates);
// console.log(formatted);
// function formatDates(element){
//     const parts = element.split("-");
//     return`${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

// const newStudents = students.map(upperCase);
// console.log(newStudents);

// function upperCase(element){
//     return element.toUpperCase();
// }

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square);
// console.log(squares);
// console.log(numbers);

// function square(element){
//     return Math.pow(element, 2);
// }


//Part 31
//foreach() = method used to iterate over the elements of an array and
//            apply a specified function (callback) to each element.
//            array.foreach(callback)   

// fruits = ["apple", "orange", "banana", "coconut"];
// fruits.forEach(capitalizeFirstLetter);
// fruits.forEach(display);

// function capitalizeFirstLetter(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// let numbers = [1,2,3,4,5];

// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function display(element){
//     console.log(element);
// }


//Part 30
//Callbacks - a function that is passed as an argument to another function
//              used to handle asynchronous operations:
//              1. Reading a file
//              2. Network requests
//              3. Interacting with databases
//               "Hey, when you ar done, call this next."

// sum(displayPage,1,2);
// function sum(callback,x,y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

// hello(wait);
// // goodbye();
// function hello(callback){
//     console.log("hello");
//     callback();
//     // setTimeout(function (){
//     //     console.log("hello");
//     // }, 3000);
// }

// function wait(){
//     console.log("Wait");
// }

// function goodbye(){
//     console.log("goodbye");
// }

// function leave(){
//     console.log("leave");
// }



//Part 29
//Random password generator
// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars ="~!@#$%^&*";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if(length <= 0){
//         return `password length must be at least 1`;
//     }
//     if(allowedChars.length === 0){
//         return `At least one set of character needs to be selected`;
//     }

//     for(let i=0; i <length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
    
//     return password;
// }

// const passwordLength = 6;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

// console.log(`Generated password: ${password}`);


//Part 28
//Dice Roller Program

//Part 27
//Rest parameters = (...rest) allow a function work a variable
//                  number of arguments by bundling them into an array

//                  spread = expands an array into seperate elements
//                  rest = bundles separate elements into an array

// function combineStrings(...strings){
//     return strings.join(" ");
// }
// const fullName = combineStrings("Mr.", "Spongebob", "SquarePants", "III");

// console.log(fullName);

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return  result;
// }

// function average(...numbers){
//     return sum(...numbers)/numbers.length;
// }
// const total = sum(75,100,85,90,50);
// const avg = average(75,100,85,90,50);

// console.log(`Total is ${total}`);
// console.log(`Average is ${avg}`);


// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdogs";
// const food4 = "sushi";
// const food5 = "ramen";

// // openFridge(food1,food2,food3,food4, food5);
// const foods = getFood(food1, food2, food3);
// console.log(foods);


//Part 26
//Spread operator= ... allows an iterable such as an a
//                     array or string to be expanded 
//                     into seperate elements.
//                     (unpacks the elements).
// let numbers = [1,2,3,4,5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(numbers);
// console.log(max);
// console.log(min);

// let username = "yoyoyoyo";
// let letters = [...username].join("-");
// console.log(letters);

// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "celery", "potatoes"];
// let foods = [...fruits,"eggs",...vegetables, "milk"];

// let newFruits = [...fruits];
// let new2 = fruits;
// new2[2] = "peach";
// newFruits[1] ="watermelon";
// console.log(fruits);
// console.log(vegetables);
// console.log(foods);

// console.log(newFruits);
// console.log(new2);

//Part 25
//Arrays
// let fruits = ["apple", "orange", "banana"];
// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
// // fruits.shift();

// let numfruits = fruits.length;
// let index = fruits.indexOf("orange");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// fruits.sort().reverse();
// for(let fruit of fruits){
//     console.log(fruit);
// }
// console.log(fruits);
// console.log(fruits[1]);
// console.log(numfruits);
// console.log(index);


//Part 24
//Temperature Conversion Program

//Part 23
//Variable Scope
// func2();
// function func1(){
//     let x =1;
//     console.log(x);
// }
// function func2(){
//     let x =2;
//     console.log(x);
// }


//Part 22
//Functions
// function happyBirthday(username, age){
//     console.log("Happy Birthday to you!!!");
//     console.log(`JAJAJJA ${username}`);
//     console.log("Happy Birthday to you!!!");
//     console.log(`You are ${age} years old`);
// }
// happyBirthday("yoyoyo",21);


//Part 21
//Number Guessing Game
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(answer);
// let attempts =0;
// let guess;
// let running = true;

// while(running){
//     guess = Number(window.prompt(`Gues a numm between ${minNum} - ${maxNum}`));
//     console.log(typeof guess, guess);

//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if( guess < minNum || guess > maxNum){
//         window.alert('Enter a valid number');
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert(`Too low try again!!`);
//         }
//         else if(guess > answer){
//             window.alert('Too high Try again');
//         }
//         else{
//             window.alert(`Correct! It was ${answer}. It took ${attempts} attempts`);
//             running = false;
//         }
//     }

//Part 20
//For Loops
// for(let i=0; i<3; i++){
//     console.log(`Hello ${i}`);
// }
// for(let i= 1; i <= 20; i++){
//     if(i == 13){
//         continue;
//     }
//     console.log(i);
// }


//Part 19
//While Loop
// let username = "";
// while(username === "" || username === null){
//     username = window.prompt(`Enter your name: `);
// }
// console.log(username);

// do{
//     username = window.prompt(`Enter your name: `);
// }while(username === "" || username === null)
// console.log(username);

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`Enter your username: `);
//     password = window.prompt(`Enter your password: `);

//     if(username === "yoyo" && password === "yo"){
//         loggedIn = true;
//         console.log("You are logged in");
//     }
//     else{
//         console.log(`Not logged in`);
//     }
// }

//Part 18
//Strict Equality - compares if values & datatype are equal
// const PI = 3.14;

// if(PI === "3.14")
// {
//     console.log("Its PIE");
// }
// else{
//     console.log("NOT PIE");
// }


//Part 17
//Logical Operators
// const temp = 20;
// if(temp > 0 && temp <=30){
//     console.log("Weather is good");
// }
// else {
//    console.log("Weather is bad");
// }


//Part 16
//Method Chaining
// let username = "        yoyoymaMaMA   ";
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(1,username.Length);
// console.log(username);


//Part 15
//String Parsing

// let name = "yoyo yatoema";

// let firstName= name.slice(0,4);
// let lastName = name.slice(5,name.length);

// console.log(firstName);
// console.log(lastName);
// console.log(name.slice(0,1));
// console.log(name.slice(-4));


//Part 14
//string methods
// let userName = "Naynay   ";
// let phoneNumber = "123-456-7890";

// console.log(userName.charAt(0));
// console.log(userName.indexOf("a"));
// console.log(userName.length)
// console.log(userName.trim().toUpperCase());
// console.log(userName.repeat(5));
// console.log(userName.startsWith("N"));
// console.log(userName.trim().endsWith("y"));
// console.log(userName.includes("ay"));

// phoneNumber = phoneNumber.replaceAll("-","/");
// console.log(phoneNumber.padStart(15, "0"));
// console.log(phoneNumber.padEnd(15, "0"));


//Part 13
//Switches
// let day =3;

// switch (day){
//     case 1: 
//         console.log("Monday");
//         break;
//     case 2: 
//         console.log("Tuesay");
//         break;
//     case 3: 
//         console.log("Wednesdy");
//         break;
//     case 4: 
//         console.log("Thursday");
//         break;
//     case 5: 
//         console.log("friday");
//         break;
//     case 6: 
//         console.log("Saturday");
//         break;
//     case 7: 
//         console.log("Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);   
// }

//Part 12
//Ternary Operator
//let age =18;
//let message = age>=18? "Adult" :"Minor";


//Part 11
//Checked property
// const myCheckbox = document.getElementById("myCheckbox");
// const visaButton = document.getElementById("visa");
// const masterCardButton = document.getElementById("masterCard");
// const paypalButton = document.getElementById("paypal");
// const mySubmit = document.getElementById("mySubmit");
// const subResult =document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick= function(){
//     if(myCheckbox.checked){
//         subResult.textContent= `you are subbed!!`;
//     }
//     else{
//         subResult.textContent= `you are not subbed!`;
//     }

//     if(visaButton.checked){
//         paymentResult.textContent = `You are Visa`;
//     }
//     else if(masterCardButton.checked){
//         paymentResult.textContent = `You are Master Card user`;
//     }
//     else if(paypalButton.checked){
//         paymentResult.textContent = `You are pay pal user`;
//     }
//     else {
//         paymentResult.textContent = `select payment type`;
//     }
// }

//Part 10
//If statements
// let age = 13;

// if(age >= 18){
//     console.log("yoyoyoyo");
// }
// else{
//     console.log("jajajja")
// }

//Part 9 
//Random number generator

// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");
// const min = 1;
// const max = 6;
// let randomNumber1;
// let randomNumber2;
// let randomNumber3;

// myButton.onclick = function() {
//     randomNumber1 = Math.floor(Math.random() * max) + min;
//     randomNumber2 = Math.floor(Math.random() * max) + min;
//     randomNumber3 = Math.floor(Math.random() * max) + min;
//     myLabel1.textContent = randomNumber1;
//     myLabel2.textContent = randomNumber2;
//     myLabel3.textContent = randomNumber3;
// }

// const min = 50;
// const max = 100
// let randomNumber = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNumber);

//Part 8
//Math

// let x= 3.99;
// let y =2;
// let z =0;

// z = Math.round(x);
// z = Math.floor(x)
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z= Math.sqrt(81);
// z = Math.log(10);
// z= Math.sin(45);
// z = Math.abs(-2123.3);
// z = Math.sign(-3.21);
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);

// console.log(min);


//Part 7
//counter Program

//Part 6
//Constants

// const PI = 3.14159;
// let radius;
// let circumference;

// // pi = 420.69;
// // radius = window.prompt(`Enter te radius of a circle`);
// // radius = Number(radius);

// document.getElementById("mySubmit").onclick = function(){
//     radius =  Number(document.getElementById("myText").value);
//     circumference = 2 * PI * radius;   
//     document.getElementById("myH3").textContent = circumference;
// }


//Part 5
//Type Conversion

// let age =window.prompt("How old are you?");
// age = Number(age);
// age+=1;
// console.log(age, typeof age);


//Part 4
// User Input

// let username;
// username = window.prompt("What is your username?");

// console.log(username);

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }


//Part 3
//Arthmetic
// + - * % 
// ** - exponents


//Part 2
// let x;
// x = 123;
// let firstName = "John";

// console.log(`you are ${x}`);
// console.log(typeof x);
// console.log(typeof firstName);

// let online = true;
// console.log(`you are online - ${online}`);

// let fullName = "John smith";
// let age = 34;
// let inSchool = false;

// document.getElementById("p1").textContent = `Name is ${fullName}`;
// document.getElementById("p2").textContent = `Age is ${age}`;
// document.getElementById("p3").textContent = inSchool;


//Part 1
// console.log(`Hello`);
// console.log("I like pizza");

// window.alert("This is an alert!");
// window.alert("I like pizza!");

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I like pizza`;