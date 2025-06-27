function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const genderElems = document.getElementsByName('gender');
  let category = '';
  let tips = '';
  let motivation = '';

  let selectedGender = null;
  for (const gender of genderElems) {
    if (gender.checked) {
      selectedGender = gender.value;
      break;
    }
  }

  if (!height || !weight || !selectedGender) {
    alert("Please enter height, weight, and choose a category.");
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  // Determine category and tips
  if (selectedGender === 'kid') {
    if (bmi < 14) {
      category = "Underweight";
      tips = "Eat energy-rich foods and ensure proper nutrition.";
      motivation = "You’re growing! Keep eating well and stay active.";
    } else if (bmi < 18) {
      category = "Normal";
      tips = "Keep up the balanced diet and play outside regularly.";
      motivation = "Healthy and strong—just the way to be!";
    } else {
      category = "Overweight";
      tips = "Reduce junk food and play more active games.";
      motivation = "You’ve got this! Every day is a fresh start.";
    }
  } else {
    if (bmi < 18.5) {
      category = "Underweight";
      tips = "Increase calorie intake with nutritious foods.";
      motivation = "Strength starts with nourishment. You can do it!";
    } else if (bmi < 25) {
      category = "Normal";
      tips = "Maintain your routine with healthy meals and activity.";
      motivation = "You’re doing great—keep it steady!";
    } else if (bmi < 30) {
      category = "Overweight";
      tips = "Try portion control and increase physical activity.";
      motivation = "Progress takes time. Stay motivated!";
    } else {
      category = "Obese";
      tips = "Consult a dietitian, stay active, and reduce sugars.";
      motivation = "You’ve taken the first step. Keep moving forward!";
    }
  }

  // Show the result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <p>Your BMI is <strong>${bmi}</strong></p>
    <p>Category: <strong>${category}</strong></p>
    <p>📝 <strong>Tips:</strong> ${tips}</p>
    <p>💪 <strong>Motivation:</strong> ${motivation}</p>
  `;

  // Color based on category
  resultDiv.style.color =
    category === "Underweight" ? "orange" :
    category === "Normal" ? "green" :
    category === "Overweight" ? "red" : "darkred";

  // 🔥 Animation trigger
  resultDiv.classList.remove("animate-result");
  void resultDiv.offsetWidth; // Force reflow
  resultDiv.classList.add("animate-result");
}
