
///////Lesson 128
// prompt("What is your name?");
// prompt("what is the name of your favored person?")

// let n = Math.random();
// let m = Math.floor(n*100) + 1;
// console.log(m);

// alert(`Your chances are ${m}  percent`)


/////// Lesson 129

// prompt("Your weight?")
// prompt("Your height?")

// function bmiCalculator (weight, height) {
//     let bmi = Math.floor(weight / (height * height));
//     let expression;
    
//     if (bmi <= 18){
//        expression = `Your BMI is ${bmi}, so you are underweight.`
//    ; } else if (bmi >= 19 && bmi < 25) {
//         expression = `Your BMI is ${bmi}, so you have a normal weight.`;} else {
//         expression =  `Your BMI is ${bmi}, so you are overweight.` ; }
//     return expression;
//     }
// alert(bmiCalculator(75, 1.77));
    

///////lesson 129

// function isLeap(year) {
            
//     if (year%4 === 0 && year%100 !== 0) {
//        return ('Leap year.');
//     }  else if (year%4 === 0 && year%100 === 0 && year%400 === 0){return ('Leap year.');}
//     else {return ('Not leap year.');}

////////////second version

//         if (year % 4 === 0) {
//             if (year % 100 === 0){
//                 if(year % 400 === 0) {
//                     return 'Leap year.'
//                 } else {return 'Not leap year.'}
//             } else {return 'Leap year.'}
//         } else {return 'Not leap year.'}         
//     }
//  console.log(isLeap(1990));

//////Lesson 131

// function guest() {
// const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// let guestName = prompt("Your name?");

// if (guestList.includes(guestName)){return "You are welcom";
// } else { return "Sorry, you are not invited"}

// }

// alert(guest());

/////or 

// const guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

// let guestName = prompt("Your name?");

// if (guestList.includes(guestName)) { alert ("You are welcom");
// } else { alert ("Sorry, you are not invited");}

///////// Leson 132

// let output = []; 
// let count = 1; 

// function fizzBuzz() { 
   
//     if (count % 3 === 0 && count % 5 === 0){ 
//         output.push("FizzBuzz");
//     } 
//     else if (count % 3 === 0) { 
//         output.push("Fizz"); 
//     } 
//     else if (count % 5 === 0) { 
//         output.push("Buzz"); 
//     } 
//     else {output.push(count);
//     } 

//     count++;     
//     console.log(output); 
// }


/////// Leson 133

const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
    let name = names[Math.floor(Math.random() * (names.length + 1))];
    
    return (`${name} is going to buy lunch today!`)
    
    }
