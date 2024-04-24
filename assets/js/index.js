// function draw(){
//     console.log("Draw");
// }
// const circle = {
//     radius: 1,
//     x: 5,
//     y: 2,
//     z: draw()
// }
// console.log(circle)

// function createCircle(radius){
//     return {
//         radius: radius,
//         draw(){
//             console.log("Hello, World!")
//         },
//         area : 100
//     };
// }
// circle2 = createCircle(10);
// console.log(circle2.draw())

// const circle1 = createCircle(50);
// console.log(circle1.draw());

// function Circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log('draw')
//     },
//     this.area = 8
// }

// let circle1 = new Circle(6)
// let circle5 = new Circle(10)
// console.log(circle1.radius)
// console.log(circle5.radius)

// let x = {value: 10}
// function changeValue(x){
//     x.value++;
// }
// changeValue(x)
// console.log(x.value)

// const circle = {
//     radius: 19,
//     draw(){
//         console.log("Hello, world")
//     }
// }

// // for (let key in circle){
// //     console.log(key, circle[key])
// // }

// // for (let key of Object.keys(circle)){
// //     console.log(key , circle[key])
// // }

// // for (let entry of Object.entries(circle)){
// //     console.log(entry)
// // }

// const newObj = Object.assign(circle);
// console.log(newObj)


// // Adding an element
// const arr1 = [3,4]

// // Add element to the end
// arr1.push(5,6)

// // Add element to the beginning
// arr1.unshift(1,2)

// // Add element to the middle
// arr1.splice(0,2,1,2)

// console.log(arr1)

// const arr1 = [1,2,3,1,4];

// console.log(arr1.indexOf(1,2))
// console.log(arr1.lastIndexOf(1))
// console.log(arr1.includes(2))

// const arr1 = [
//     {id:1, name:"Hua"},
//     {id:2, name:"Hour"}
// ];

// const element = arr1.find(function(element){
//     return element.name === "Hour";
// });
// console.log(result);

// const arr1 = [
//     {id:1, name:"Hua"},
//     {id:2, name:"Hour"}
// ];

// const element = arr1.find(element => element.id === 1);
// console.log(element);

// const arr2 = [1,2,3];

// console.log(arr2.splice(1,1)) 

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const arra3 = [0, ...array1, ...array2]
// console.log(arra3)

// const array9 = [1,2,3,4,5,6,7,8,9];

// const result = array9.map(number =>{
//     return `${(number / 2) ** 3}`
// });

// console.log(result);

// let a = 1 , b= 4;
// console.log(a < b ? "Yes": "No");

// let str1 = "This is a batman";
// const result = str1.split(' ');
// const arr2 = result.join('-')
// console.log(arr2);

// const name99 = [
//     'Node.js',
//     'Javascript',
//     'C++',
//     'HTML'
// ]

// const result = name99.sort((a, b) => {
//     return (a === b)? 0 : a > b ? 1 : -1
//     }
// )
// console.log(result)

// const number1 = [1,2,3,-82];

// const somePositive = number1.some((value)=> value >= 1)
// console.log(somePositive);

// const array82 = [92,-381,18, 22,44]
// // const result82 = array82.filter(n => n > 3).sort().map(n => ({id: n / 2}));

// // console.log(result82);

// const numberResult = array82.reduce(((num1, num2) => num1 + num2),1000)
// console.log(numberResult);
// run()
// function run(){
//     console.log('run')
// }

// let walk = function(){
//     console.log("Walk");
// }

// walk()

// function addNum(...args){
//     let total = 0;
//     for(let i of args){
//         total += i;
//     }
//     return total;
// }

// console.log(addNum(1,2,3,4,5,6,7))

// function grocery(discount, ...price){
//     let payment = price.reduce((a, b) => a + b);
//     return payment * (1 - discount);
// }

// console.log(grocery(0.3, 50, 70, 90))

// function stock(amount, year=3){
//     return amount + amount * (0.2 * year)
// }
// console.log(stock(82))

// const student = {
//     id : '002',
//     fName : 'Sreang',
//     lName : 'Lyhour',
//     get info(){
//         return `${student.fName} ${student.lName} is the student with id: ${student.id}`
//     },
//     set info(info){
//         const name1 = info.split(' ');
//         this.id = name1[0]
//         this.fName = name1[1];
//         this.lName = name1[2];
//     }
// }
// student.info("003 Sreang Lyhour")
// console.log(student.info)
