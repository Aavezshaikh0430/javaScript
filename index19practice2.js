// 1.Const Let And Var

// let h =12;
// if (true) {
    

//     var variable;
//     console.log(variable);
//     variable = 2;

//     let h = 45;

//     console.log(h)
// }
// console.log(h);


//2. Template Literals
// const name = 'Saad';
// const session = 'ReactJS';
// const text = `Hello ${name}, Welcome to ${session}`;

// console.log('Hello ' + name + ', Welcome to ' + session);
//or
// console.log(`Hello ${name}, Welcome to ${session}`);


// const printText = function () {
//     console.log(text);
// }
// printText();




// => Arrow Function

// const printLine = () => console.log(text)

// printLine();

//
// () => console



// Multiline
// () => {
//     return;
// }

// const printA = (a,b) => console.log(a)

// printA('A')

// console.log(name);

// console.log(name);
// let n;
// if (true) {
//     n = 1;
// }

// let temp = "hi";
// console.log(temp);
// function test() {
//     let temp = 'bye';
    // console.log(temp);
    // temp = 'no  bye';
//     console.log(temp);
// }

// test();
// console.log(test());
// let name1 = 'shivank'; //declare


// function printHello(name) {
//     return `Hello ${name}`
// }

//const value = printHello('Munaf')
// console.log(value);

// parameter, functionname, return

// Single Line
// (parameters) =>
//const squareOfNumber = number => number * number;

// Multiline
// const isEven = number => {
//     if (number % 2 === 0) {
//         return true;
//     }
//     return false;
// }
// const test = 10
// console.log(isEven(test))


//Spread Operator

// const details1 = { skill: 'reactjs', location: 'vikhroli' }

// const newDetails2 = { name: 'Munaf', ...details1 };

// console.log({details1, newDetails2});

// const details = { skill: 'reactjs', location: 'vikhroli' }

// const newDetails = { name: 'Munaf', ...details, a: 1 };

// console.log(details);
// console.log(newDetails);

// const details = {

//     skill: 'react js',
//     location: 'Vokhroli',
// }
// const details2={
//     name:'Aavez',
//     ...details
// }
// console.log(details2);

//spared oprator= 2 object ko add karta hai(concatination karta hai).

//rest parameter
// function values(a, b, ...c) {
//  console.log(a, b, c);
// }

// values(1, 5, 2, 3, 4, 5);

// function values(a,b,c,d,...e){
//     console.log(a,b,c,d,e)

// }
// values(1,2,3,4,1,2,3,4,5,6,7,7,8,8,9,)

//rest oprator ... 3dot akhir ke parameter lagate hai is se pure value ...c me array ke type me store hoge.  



//For/of

// const fruits = ["Banana", "Apple", "Watermelon"];

// for (let value of fruits) {
//     console.log(value);
// }



// const fruits =["Banana",'apple','Graps','Mango'];

// for(let value of fruits){
//     console.log(value);
// }

//for of loop for type ka loop ki tarha h sirf syntex alag hota hai



//--------------
//pending???????
// const date =[1,2,3,4,5,6,7,8,8];
// const list=[12,3,4,5,6,];
//for each
// const data=date.forEach(
//     (value)=> value*2
//     )
//     console.log(data);
//------------


// const list=[12,3,4,5,6,];
// const date2 = list.map(
//     (value)=>{
//         return `**${value}`
//     }
// )
// console.log(date2);


// const list =[1,2,3,4,5,6,7,8,6,];
// const date = list.map(
//     value=>{
//         return `&% ${value}`
//     }
// )
// console.log(date);


const filtered = data.filter( (v,i) => {
    return v%2 == 0
})

console.log(filtered);




