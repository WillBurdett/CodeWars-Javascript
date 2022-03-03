function getLargerNumbers(a, b) {
    const result = []
    for (let i = 0; i<a.length; i++)
    if (a[i] > b[i]){
        result.push(a[i])
    } else if (b[i] > a[i]){
        result.push(b[i])
    } else {
        result.push(a[i])
    }
    return result;
}