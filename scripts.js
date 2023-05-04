const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const errorDay = document.getElementById("errorDay");
const errorMonth = document.getElementById("errorMonth");
const errorYear = document.getElementById("errorYear");
const errorMessage = document.getElementById("errorMessage");

const resultYear = document.getElementById("resultYear");
const resultMonth = document.getElementById("resultMonth");
const resultDay = document.getElementById("resultDay");

const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculateAge);

function calculateAge() {
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  const today = new Date();

  // Clear all error messages at the beginning of the function
  errorDay.textContent = "";
  errorMonth.textContent = "";
  errorYear.textContent = "";
  errorMessage.textContent = "";

  // Keep track of any errors encountered
  const errors = [];

  if (month > 12 || month < 1) {
    errors.push("Must be a valid month");
  }

  if (year > today.getFullYear()) {
    errors.push("Must be from the past");
  }

  if (day > 31 || day < 1) {
    errors.push("Must be a valid day");
  }

  // Check for validity of the date only if no other errors were encountered
  if (errors.length === 0) {
    const birthDate = new Date(year, month - 1, day);

    if (
      birthDate.getMonth() !== month - 1 ||
      birthDate.getFullYear() !== year ||
      birthDate.getDate() !== day
    ) {
      errors.push("Must be a valid date");
    }
  }

  // Display all error messages if any errors were encountered
  if (errors.length > 0) {
    errorMessage.textContent = errors.join(". ");
    return;
  }

  const ageInMilliseconds = today - new Date(year, month - 1, day);
  const ageDate = new Date(ageInMilliseconds);

  resultYear.textContent = Math.abs(ageDate.getUTCFullYear() - 1970);
  resultMonth.textContent = ageDate.getUTCMonth();
  resultDay.textContent = ageDate.getUTCDate();
}
