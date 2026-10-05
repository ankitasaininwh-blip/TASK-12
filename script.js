// Predefined variables
let P = 100000;       // Principal amount
let r = 0.05;         // Rate of interest (5%)
let n = 4;            // Number of times interest is compounded per year
let t = 2;            // Time in years

// Compound Interest Formula
let A = P * Math.pow((1 + r / n), (n * t));

// Calculate Compound Interest
let compoundInterest = A - P;

// Display result in console
console.log("Principal Amount:", P);
console.log("Rate of Interest:", r * 100 + "%");
console.log("Time:", t + " years");
console.log("Amount:", A.toFixed(2));
console.log("Compound Interest:", compoundInterest.toFixed(2));

// Display result on webpage
document.getElementById("result").innerHTML =
    "Compound Interest after " + t + " years is: ₹" +
    compoundInterest.toFixed(2);