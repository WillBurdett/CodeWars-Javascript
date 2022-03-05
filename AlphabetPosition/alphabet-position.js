function alphabetPosition(text) {
    var alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"]
    var inputArr = text.split("") 
    var numArr = []  
    for (i = 0; inputArr.length > i; i++){
        for (j = 0; alphaArr.length > j; j++){
            if (inputArr[i].toLowerCase() == alphaArr[j]){
                numArr.push(j + 1)
            } 
        }
    }
    var result = numArr.join(" ")
    return result
  }

  let test = "Hello World"
  console.log(alphabetPosition(test))

