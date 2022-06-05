
//Lesson 128
// prompt("What is your name?");
// prompt("what is the name of your favored person?")

// let n = Math.random();
// let m = Math.floor(n*100) + 1;
// console.log(m);

// alert(`Your chances are ${m}  percent`)


// Lesson 129

prompt("Your weight?")
prompt("Your height?")

function bmiCalculator (weight, height) {
    let bmi = Math.floor(weight / (height * height));
    let expression;
    
    if (bmi <= 18){
       expression = `Your BMI is ${bmi}, so you are underweight.`
   ; } else if (bmi >= 19 && bmi < 25) {
        expression = `Your BMI is ${bmi}, so you have a normal weight.`;} else {
        expression =  `Your BMI is ${bmi}, so you are overweight.` ; }
    return expression;
    }
alert(bmiCalculator(75, 1.77));
    