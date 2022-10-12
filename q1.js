//Q1. Write a JavaScript program to:
let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }
]

    //a) filter employees according to department = IT
    var filterEmployeesDepartment = employees.filter((employee)=> employee.department == "IT");
    console.log("Employees according to department = IT " + JSON.stringify(filterEmployeesDepartment, null, 2));


    //b) filter employees who earn a salary < 65000
    var filterEmployeesSalary = employees.filter((employee)=> employee.Salary < 65000);
    console.log("Employees who earn a salary < 65000  " + JSON.stringify(filterEmployeesSalary, null, 2));