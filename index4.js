var plane_duration = '2 hours';
var plane_cost = 4300;

var ferry_duration = '10 hours';
var ferry_cost = 700;

var train_duration = '8 hours';
var train_cost = 964;

var bus_duration = '16 hours';
var bus_cost = 840;

var lowest_duration;
var lowest_cost;
var best_option;

if( plane_duration >ferry_duration && plane_duration >train_duration && plane_duration >bus_cost){
    lowest_duration = plane_duration;
    lowest_cost = ferry_cost;
    best_option = "Plane";
}

else if (ferry_duration<plane_duration && ferry_duration<train_duration&& ferry_duration>bus_duration){
    lowest_duration=plane_duration;
    lowest_cost=ferry_cost;
    best_option="ferry";

}
else if(train_duration<plane_duration&& train_duration>ferry_duration&&train_duration>bus_duration){
    lowest_duration=plane_duration;
    lowest_cost=ferry_cost;
    best_option="train";
}
else if(bus_duration<plane_duration&&bus_duration<ferry_duration&&bus_duration<train_duration){
    lowest_duration=plane_duration;
    lowest_cost=ferry_duration;
    best_option="bus"

}
else{
    lowest_duration=plane_duration;
    lowest_cost=ferry_cost;
    best_option="ferry";
}

console.log("The best option for your Goa trip is by "+best_option);
console.log("For lowest duration you can use "+lowest_duration+ " to Airoplane.");
console.log("For lowest cost you can use Ferry. It cost is "+ lowest_cost+" rupes");




