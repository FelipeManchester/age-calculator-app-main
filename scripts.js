function calculateAge(day, month, year) {
  // create date object with the input values and set the time to the current time
  const birthDate = new Date(
    year,
    month - 1,
    day,
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds(),
    new Date().getMilliseconds()
  );
  // get today's date
  const today = new Date();
  // calculate the difference between today's date and the birth date in days
  const diffTime = Math.abs(today - birthDate);
  // calculate age in years, months, and days
  let ageInYears = today.getFullYear() - birthDate.getFullYear();
  let ageInMonths = today.getMonth() - birthDate.getMonth();
  let ageInDays = today.getDate() - birthDate.getDate();
  if (ageInDays < 0) {
    ageInMonths--;
    ageInDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }
  // display the results
  const resultYear = document.getElementById("resultYear");
  resultYear.innerHTML = ageInYears;
  const resultMonth = document.getElementById("resultMonth");
  resultMonth.innerHTML = ageInMonths;
  const resultDay = document.getElementById("resultDay");
  resultDay.innerHTML = ageInDays;
}

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  calculateAge(day, month, year);
});
