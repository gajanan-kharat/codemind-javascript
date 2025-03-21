

const emp = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}
console.log(emp);
emp.pin = 411057;
console.log(emp);

// emp = {

// } Not allowed
console.log(`===== Object Freezing =========`);
const employee = {
    name: "Jenny",
    age: 22,
    city: "Pune"
}
console.log(employee);
Object.freeze(employee);
employee.city = "Mumbai";
employee.designation = "Developer";
console.log(employee);


