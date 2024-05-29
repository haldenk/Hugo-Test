document.addEventListener("DOMContentLoaded", function () {
  const generateMealButton = document.getElementById("generate-meal");

  generateMealButton.addEventListener("click", function () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        const meal = data.meals[0];
        console.log(meal);
        const mealImg = document.getElementById("meal-img");
        const mealName = document.getElementById("meal-name");
        const mealCategory = document.getElementById("meal-category");
        const mealInstructions = document.getElementById("meal-instructions");
        mealName.textContent = meal.strMeal;
        mealImg.src = meal["strMealThumb"];
        mealCategory.textContent = meal.strCategory;
        mealInstructions.textContent = meal.strInstructions;
      })
      .catch((error) => {
        console.error("Error fetching meal:", error);
      });
  });
});
