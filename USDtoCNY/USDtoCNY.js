function usdcny(usd) {
  var double = parseFloat(usd * 6.75)
  return double.toFixed(2) + " Chinese Yuan"
}

console.log(usdcny(7812))