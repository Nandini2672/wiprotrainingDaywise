
interface Employee {
    empId: number;
    empName: string;
    salary: number;
}

let employees: Employee[] = [
    { empId: 101, empName: "Alice", salary: 50000 },
    { empId: 102, empName: "Bob", salary: 60000 },
    { empId: 103, empName: "Charlie", salary: 55000 }
];


function printEmployees(empList: Employee[]): number {
    console.log("Employee Details:");
    empList.forEach(emp => {
        console.log(`ID: ${emp.empId}, Name: ${emp.empName}, Salary: ${emp.salary}`);
    });
    return empList.length;
}


let count = printEmployees(employees);
console.log("Total Employees:", count);
