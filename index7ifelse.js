
// var grocerise =
// { daal : prompt("Enter daal in kg"), 
//  chawal : prompt('Enter chawal in kg'),
// }



 var grocerise = {
     daal : 2,
     chawal : 5,
}


var shops = {
    shop1:{daal:1, chawal:1},
    shops2:{daal:100, chawal:100}
}

if(shops["shop1"]["daal"] >= grocerise["daal"] && shops["shop1"]["chawal"]>= grocerise['chawal']){
    console.log("shop1 se kharida")
}
else if(shops["shops2"]["daal"] >= grocerise['daal'] && shops["shops2"]["chawal"]>=grocerise['chawal']){
    console.log("shops2 se kharida")

}
console.log(shops["shop1"]["daal"]>=grocerise["daal"]);
