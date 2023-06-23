var EmployeeDetails = [
    {
        empId : 1,
        empName : "Raju",
        empSalary : 50000,
        empEmailId : "raju@gmail.com",
        dept : "SE",
        is_active : 0
    },
    {
        empId : 2,
        empName : "Raju",
        empSalary : 50000,
        empEmailId : "raju@gmail.com",
        dept : "SE",
        is_active : 0
    },
    {
        empId : 3,
        empName : "Rakesh",
        empSalary : 70000,
        empEmailId : "rakesh@gmail.com",
        dept : "Tester",
        is_active : 1
    },
    {
        empId : 4,
        empName : "Ramesh",
        empSalary : 80000,
        empEmailId : "ramesh@gmail.com",
        dept : "Developer",
        is_active : 1
    },
    {
        empId : 10,
        empName : "Raju",
        empSalary : 50000,
        empEmailId : "raju@gmail.com",
        dept : "SE",
        is_active : 0
    },
    {
        empId : 5,
        empName : "adfds",
        empSalary : 90000,
        empEmailId : "ramesh@gmail.com",
        dept : "Developer",
        is_active : 1
    }
]
// console.log("All Employees Details");
// for(var i  = 0; i < EmployeeDetails.length;i++){
//     console.log(EmployeeDetails[i]);
// }

var deptname = [];
var deptsalary = [];
var dd = {};
var sal = 0;
var ind = 0;
EmployeeDetails.forEach(function (value,index){
    if(!deptname.includes(value.dept)){
        deptname.push(value.dept);
        deptsalary.push(value.empSalary);
        dd[value.dept] = value.empSalary;
    }else{
        var ind = deptname.findIndex(j => j == value.dept);
        deptsalary[ind] += value.empSalary;
        dd[value.dept] = deptsalary[ind];
    }
});
console.log(dd);