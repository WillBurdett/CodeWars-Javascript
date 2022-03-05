function ageInDays(year, month, day){
    const birth = new Date(year,month,day)
    const date = new Date()
    const today = new Date(date.getFullYear(), date.getMonth()+1, date.getDate());
    let days = (today - birth) / 86_400_000
    if (year < 2020){
        days+=1
    }
    return "You are " +  Math.floor(days) + " days old"
  }

  // other users solution!

  // const ageInDays = (y, m, d) => 'You are ' + (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 + ' days old';
  
  console.log(ageInDays(1995, 04, 26))