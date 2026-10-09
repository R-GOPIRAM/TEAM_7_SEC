interface Employee {
    id: number;
    name: string;
}

let employees: Employee[] = [];
employees.push({ id: 1, name: "Divya" });
employees.push({ id: 2, name: "Anu" });

console.log("After Create:");
console.log(employees);

console.log("Read:");
console.log(employees);
employees[0].name = "Divyadharshiny";

console.log("After Update:");
console.log(employees);
employees = employees.filter(employee => employee.id !== 2);

console.log("After Delete:");
console.log(employees);