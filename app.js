let age = +prompt("How old are you? e.g. 41")
while(isNaN(age) || ((age.length == 0))) {
    alert("Please enter a valid age. e.g. 30");
    age = +prompt("How old are you? e.g. 41");
}

let retAge = +prompt("Please write the age you want to retire. e.g. 65")
while(isNaN(retAge) || ((retAge.length == 0)) || (age > retAge)) {
    alert("Please enter a valid age. e.g. 30");
    retAge = +prompt("How old are you? e.g. 41");
}

let currentYear = new Date().getFullYear();

let retirementYear;
let leftYears;

function calcRet() {
    retirementYear = (retAge - age)  + currentYear
    leftYears = retirementYear - currentYear

    document.querySelector("#retYear").innerHTML = "Retirement year is " + retirementYear
    document.querySelector("#leftYear").innerHTML = "Remaining year for your retirement is " +  leftYears
}
calcRet();







// ALTERNATIVE WAY 
// let age = +prompt("How old are you? e.g. 41")
// let retAge = +prompt("Please write the age you want to retire. e.g. 65")
// let currentYear = new Date().getFullYear();

// let retirementYear;
// let leftYears;

// function calcRet() {
//     if(isNaN(age) || ((age.length == 0)) ) {
//         alert("Please enter a valid age. e.g. 30")
//     } else if(isNaN(retAge) || (retAge.length == 0)) {
//         alert("Please write the age you want to retire with the numbers. e.g. 65")
//     } else if (age > retAge) {
//         alert("Your retirement age should be greater than your current age.")
//     } else {
//         retirementYear = (retAge - age)  + currentYear
//         leftYears = retirementYear - currentYear

//         document.querySelector("#retYear").innerHTML = "Retirement year is " + retirementYear
//         document.querySelector("#leftYear").innerHTML = "Remaining year for your retirement is " +  leftYears
//     }
// }
// calcRet();