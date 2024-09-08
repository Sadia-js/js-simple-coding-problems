/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month
 * 
 *  const employees = [
        { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
        { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
        { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
        { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
    ]; 
 */ 

    const employees = [
        { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
        { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
        { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
        { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
    ];

function calculateTotalSalary(salaries){
    let totalSalary = 0;
    for(const salary of salaries){
        const personExperience = salary.experience;
        const salaryInc = salary.increment;
        const perPersonStarting = salary.starting;

        const yearlyIncrement = personExperience * salaryInc; // yearly increment salary
        const yearlyTotal = yearlyIncrement + perPersonStarting;
        const monthlyTotal = yearlyTotal / 12;

        totalSalary = totalSalary + monthlyTotal;
    }
    const monthlyPayRoll = parseFloat(totalSalary.toFixed(2));
    return monthlyPayRoll;
}
const monthlyProvidedSalary = calculateTotalSalary(employees);
console.log('Company provided the salary per month', monthlyProvidedSalary,'tk');