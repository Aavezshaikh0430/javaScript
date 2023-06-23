//1st CountVowels

let str = 'Daynamic Coding with Aavez.';

let count =0;

const vowels = ['a','e','i','o','u'];

for(let s of str.toLowerCase()){
    if(vowels.includes(s)){
        count++;
    }
}
console.log(count);




// 2.problem

let a=10;
let b=20;

c=a;
a=b;
b=a;
b=c;



console.log('a='+a);
console.log('b='+b);

//or
// a=a+10;
// b=b-10;
// console.log("a="+a);
// console.log("b="+b);



//3.missing number

// let number=[1,2,4,5,6,8,11];
// let totalSum=(10/2)*(10+1);
// let sum=0;

// for(num of number){
//     sum+=num;
// }
// console.log((totalSum-sum));





let value = "MuskSum";

const revVlaue = ()=> {
    let myStrVal= value.toString().toLowerCase();
    let myRevVal = value.toString().split('').reverse().join('').toLowerCase();
    
   if(myStrVal==myRevVal){
    console.log('is Palindrome.');
   } else{
    console.log('Not a palindrome.')
   } 
    
};

revVlaue();







