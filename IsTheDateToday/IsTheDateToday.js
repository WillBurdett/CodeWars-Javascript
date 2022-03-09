// Write a simple function that takes as a parameter a date object and 
// returns a boolean value representing whether the date is today or not.
function isToday(date) {
  const today = new Date(Date.now())
  return date.getDate() === today.getDate() && date.getYear() === today.getYear() ? true : false;
}

const date = new Date(Date.now())

console.log(isToday(date));

 