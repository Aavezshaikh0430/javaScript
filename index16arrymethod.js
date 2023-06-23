//array method

//1. to string method().
let bikes1 = ["Yamaha","Bajaj","Honda","Tvs"];
console.log(bikes1.toString());

//2.join method().
let bikes2 = ["Yamaha","Bajaj","Honda","Tvs"];
console.log(bikes2.join(""));
console.log(bikes2.join(" "));
console.log(bikes2.join("-"));
console.log(bikes2.join("_"));

//3.pop method();
let bikes3 = ["Yamaha","Bajaj","Honda","Tvs"];
console.log(bikes3.pop());
console.log(bikes3);

//4.push mehtod();
let bikes4 = ["Yamaha","Bajaj","Honda","Tvs"];
console.log(bikes4.push("Ducati","Royal Enfield"));
console.log(bikes4);

//5.delete(oprator)
let fruit = ["Banana","Apple","Grapes"];
delete fruit[1];
console.log(fruit);

//6.concat()
let arry1 = [1,2,3];
let arry2 = [23,43,53];
let arry3 = [111,12];

let arry_new = arry1.concat(arry2,arry3);
console.log(arry_new);

//7.sort() method
let ary=[11,23,9,34,2,12,7,1,];
console.log(ary);
console.log(ary.sort());


let ary2=['banana','apple','grapes','van','zebra'];
console.log(ary2);
console.log(ary2.sort());

//8.reverse()
ary2.reverse();
console.log(ary2);


//9.inlcudes();
const num = [1,2,3];
console.log(num.includes(6));

const str = ['cat','dog','bat'];
console.log(str.includes('cat'));

//10.forEach() method
//the forEach() method execute a provided function once for each array element and this method is not executed for empty elemnts


