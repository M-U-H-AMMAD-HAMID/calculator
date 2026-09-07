function calculateBMI(){

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if(weight <= 0 || height <= 0){

        document.getElementById("result").innerHTML =
        "Please enter valid weight and height.";

        return;
    }

    // Height cm se meter mein convert
    height = height / 100;

    // BMI Formula
    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    let status = "";

    if(bmi < 18.5){
        status = "Underweight";
    }
    else if(bmi < 25){
        status = "Normal Weight";
    }
    else if(bmi < 30){
        status = "Overweight";
    }
    else{
        status = "Obese";
    }

    document.getElementById("result").innerHTML = `
        <p>Your BMI: <strong>${bmi}</strong></p>
        <p>Category: <strong>${status}</strong></p>
    `;
} 