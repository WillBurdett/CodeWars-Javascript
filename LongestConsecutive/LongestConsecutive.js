function longestConsec(strarr, k) {
    longest = "";
    current = "";
    
    for (i=0; i< strarr.length - k + 1; i++){

        j = 0;
        index = i;
        while(j < k){
            current+=strarr[index++]
            j++
        }
    
        if (current.length > longest.length){
            longest = current;
        }

        index = 0;
        current = "";
    }
    console.log(longest)
    return longest;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)