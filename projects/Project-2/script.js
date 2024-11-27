const form = document.getElementById("bmi-form");
const h1 = document.createElement("h1");
form.addEventListener("submit", calculateBMIIndex);
const HUNDRED = 100;

function calculateBMIIndex(e) {
  e.preventDefault();
  const weightInput = document.getElementById("weight");
  const weight = Number(weightInput.value);

  const heightInput = document.getElementById("height");
  const heightInMetres = Number(heightInput.value) / HUNDRED;

  const heightSquared = heightInMetres * heightInMetres;
  const BMI = parseFloat((weight / heightSquared).toFixed(2));

  heightInput.value = "";
  weightInput.value = "";

  const message = getBMICategory(BMI);
  h1.innerText = `BMI index is ${BMI}, ` + message;
  h1.style.fontWeight = 600;
  form.append(h1);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30.0 && bmi < 40) {
    return "Obese";
  }
  return "Severe obesity";
}
