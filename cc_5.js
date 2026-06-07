console.log("Payroll toolkit connected");

// Step 2
const employees = [
    {
        name: "Leonardo",
        hourlyRate: 20,
        hoursWorked: 38
    },
    {
        name: "Michelangelo",
        hourlyRate: 25,
        hoursWorked: 45
    },
    {
        name: "Donatello",
        hourlyRate: 18,
        hoursWorked: 42
    },
    {
        name: "Raphael",
        hourlyRate: 22,
        hoursWorked: 40
    }
];

// Step 3
function calculateBasePay (rate,hours) {
    return rate * Math.min(hours, 40);
}
// Step 4
function calculateOvertimePay (rate,hours) {
    if (hours > 40) {
        return (hours - 40) * rate * 1.5;
    }
    return 0;
} 
// Step 4 Part 2: Running a Quick test
console.log(calculateOvertimePay(20, 38)); // 0
console.log(calculateOvertimePay(20, 45)); // 150
//Step 5: 
function calculateTaxes (grossPay) {
    return grossPay * 0.15;

}
// Step 5: Running a quick test
console.log(calculateTaxes(1000)); // 150

//Step 6
function processPayroll (employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let netPay = grossPay - calculateTaxes(grossPay);

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}
Step 6: Part 2: Running a quick test
console.log(processPayroll(employees[0]));

// Step 7
employees.forEach(employee => {
    console.log(processPayroll(employee));
});

Completed Challenge 5: Payroll Toolkit!


