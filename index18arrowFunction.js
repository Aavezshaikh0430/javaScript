// single line arrow function

let squreNumber=(number)=> number+number;
console.log(squreNumber(10));


//multiline Arrow function.

const isEven = (number)=>{
    if(number %2===0){
        return `${number} is a prime number`;
    }
    return `${number} is not a prime number`;
}
const test =18;
console.log(isEven(test));



//spread oprator

const details ={
    skill: 'react js',
    location: 'Vikhroli'
};

const newDetails ={
    name: 'Aavez', ...details
};


console.log(details);
console.log(newDetails);



//resparameter function


function values(a,b,...c){
    console.log(a,b,c);
}

values(1,5,2,3,4,5);




//Of loop


const fruit =['Banana','Apple','Mango','Pinapple'];

for(let value of fruit){
    console.log(value);

}
printText();