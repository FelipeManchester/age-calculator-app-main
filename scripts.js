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

const p = document.getElementsByTagName("p");

console.log(p[0]);
const calculateButton = document.getElementById("calculate");
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

  if (day > 31 || day < 1) {
    errors.push("Must be a valid day");
    p[0].classList.add("active");
    dayInput.classList.add("active");
  }

  if (month > 12 || month < 1) {
    errors.push("Must be a valid month");
    p[1].classList.add("active");
    dayInput.classList.add("active");
    monthInput.classList.add("active");
  }

  if (year > today.getFullYear()) {
    errors.push("Must be from the past");
    p[2].classList.add("active");
    dayInput.classList.add("active");
    yearInput.classList.add("active");
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
      p[0].classList.add("active");
      p[1].classList.add("active");
      p[2].classList.add("active");
      dayInput.classList.add("active");
      monthInput.classList.add("active");
      yearInput.classList.add("active");
    }
  }

  // Display all error messages if any errors were encountered
  if (errors.length > 0) {
    errorMessage.textContent = errors.join(". ");
    return;
  }

  // Remove "active" class from all parent divs if no errors were encountered
  p[0].classList.remove("active");
  p[1].classList.remove("active");
  p[2].classList.remove("active");
  dayInput.classList.remove("active");
  monthInput.classList.remove("active");
  yearInput.classList.remove("active");
  const ageInMilliseconds = today - new Date(year, month - 1, day);
  const ageDate = new Date(ageInMilliseconds);

  resultYear.textContent = Math.abs(ageDate.getUTCFullYear() - 1970);
  resultMonth.textContent = ageDate.getUTCMonth();
  resultDay.textContent = ageDate.getUTCDate();
}
