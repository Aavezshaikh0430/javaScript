
console.log('The prime number between 1 to 10 is : ');


number=10;

for (var i=2; i<=number; i++){
    
    for (var j=2; j<=i;j++){
         if(i%j==0){
            
            break;
        }
    }
    if(i == j){
        console.log(i);

    }
}










