function isPalindrome(x) {
    let result = ""
    
    x = x.toString()

    for(let i = 0; i < x.length; i++) {
        result = x[i] + result
    }

    if(result === x) {
        return true
    } else {
        return false
    }
}