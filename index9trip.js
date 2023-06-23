// var options1= "Plane";
// var options2= "Train";
// var option3= "Ferry";
// var option4= "Bus";

var option_name =['Plane','Train','Ferry','Bus'];


var option_details=[
{
    option: 'plane',
    distance:"554 km",
    duration: "1.4 hours",
    cost: "5000"
},

{
    option:'Train',
    distance:"554 km",
    duration: "8hours",
    cost: "1200"
},

{
    option:'Ferry',
    distance:"554 km",
    duration: "12 hours",
    cost: "800"
},

{
    option:'Bus',
    distance:"554 km",
    duration: "14 hours",
    cost: "600"
},
]

for(let value of option_details){
    console.log(value);

}

//max salary

var maxscost= option_details[0];

for(i=0;i<option_details.length;i++){
    if(option_details[i].cost<maxscost.cost){
        maxscost=option_details[i]
    }
}

console.log(maxscost.cost+" "+"is the most expensive cost in "+maxscost.option+". "+" ");


