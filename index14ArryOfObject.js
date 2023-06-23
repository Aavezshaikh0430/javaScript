
var employee_name=['Faisal','Mujahid','Farhan','Sufiyan']

var employee_details=[
    {
        emp_id: 1,
        name:'Faisal shaikh',
        email_id:'faisalshaikh123@gmail.com',
        salary: 12000,
        dept: 'Mechanical Department',
        is_active: 1,


    },
    {
        emp_id: 2,
        name:'Mujahid Pathaan',
        email_id:'Mujahidp213@gmail.com',
        salary: 16200,
        dept: 'IT Department',
        is_active: 1,
    },
    {
        emp_id: 6,
        name:'sufiyan shaikh',
        email_id:'farhanshaikh123@gmail.com',
        salary: 7500,
        dept: 'Sport Department',
        is_active: 0,
    },
    {
        emp_id: 5,
        name:'Farhan shaikh',
        email_id:'farhanshaikh123@gmail.com',
        salary: 7500,
        dept: 'IT Department',
        is_active: 0,
    },
   
    {
        emp_id: 6,
        name:'Rashid Ali',
        email_id:'rashidali593@gmail.com',
        salary: 7500,
        dept: 'Mechanical Department',
        is_active: 1,
    },

]





//list all current available empolyee

//list all department
 
//expense of department.

//get empolyee details by id  (use function);






//for(var i=0; i<employee_details.length;i++){


//     console.log(i+")"+" "+employee_details[i].name);


    
//     if(employee_details[i]["is_active"]===1){
//         console.log(i+")"+" "+employee_details[i].name);
//     }



//     console.log(i+")"+employee_details[i].name);

//     console.log(employee_details[i].dept);

//     console.log(employee_details[i].salary);

//     console.log(employee_details[i].email_id);
// }




//max salary

// var maxsalary= employee_details[0];

// for(i=1;i<employee_details.length;i++){
//     if(employee_details[i].salary>maxsalary.salary){
//         maxsalary=employee_details[i]
//     }
// }

// console.log(maxsalary.name+" salary is "+maxsalary.salary+" "+"is the most expensive salary in "+maxsalary.dept+". "+"");




//function

// function getemployee_details(name,is_active) {
//     for(var i=0;i<employee_details.length;i++){
//         if(employee_details[i].name===name&&employee_details[i].is_active===is_active){
//             console.log(employee_details[i]);
//             return employee_details[i];
//         }
//     }
    
// }
// getemployee_details('faisal');



//Unique department.
// var uniqueDept =[];
// employee_details.forEach(function(value){
//     var isNotunique =uniqueDept.includes(value.dept);
//     if(!isNotunique){
//         uniqueDept.push(value.dept);
//     }
// })

// console.log(uniqueDept);



//email print
// var uniqueEmail=[];

// employee_details.forEach(function(value,dept){
    
    
//     console.log(dept);
// });

// var uniquesalary =[];
// employee_details.forEach(function(value){
//     var isNotsalary =uniquesalary.includes(value.salary);
//     if(!isNotsalary){
//         uniquesalary.push(value.salary);
//     }
// })

// console.log(uniquesalary);

// var dept = [];
// var salary = [];
// var dd = {};
// var sal = 0;
// var ind = 0;
// employee_details.forEach(function (value,index){
//     if(!dept.includes(value.dept)){
//         dept.push(value.dept);
//         salary.push(value.salary);
//         dd[value.dept] = value.salary;
//     }else{
//         var ind = dept.findIndex(j => j == value.dept);
//         salary[ind] += value.salary;
//         dd[value.dept] = salary[ind];
//     }
// });
// console.log(dd);


  

