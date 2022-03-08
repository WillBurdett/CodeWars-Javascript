// Write a simple function that takes as a parameter a date object and 
// returns a boolean value representing whether the date is today or not.
function isToday(date) {
  console.log(date)
  const today = new Date(Date.now())
  return date.getDate() === today.getDate() ? true : false;
  }

  const date = Date.now()

 isToday(date)