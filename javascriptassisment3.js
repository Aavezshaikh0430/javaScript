let number=['0','1','2','3','4','5','6','7','8','9'];

let symbol=['~','!','@','#','$','%','^','&','*','(',')'];

let LowerAlpha =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let UpperAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let password ="";

for(let i=0;i<8;i++){

    let index = Math.floor(Math.random()*10);

    let luIndex = Math.floor(Math.random()*26);

    let pass = [number[index],symbol[index],LowerAlpha[luIndex],UpperAlpha[luIndex]];

    password += pass[Math.floor(Math.random()*4)];
}
console.log("password: "+password);