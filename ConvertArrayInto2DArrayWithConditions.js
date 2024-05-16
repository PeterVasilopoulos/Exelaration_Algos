var findMatrix = function(nums) {
    let result = []

    for(let i = 0; i < nums.length; i++) {
        let j = 0
        while(j >= 0) {
            if(!result[j]) {
                result[j] = []
            }
            
            if(result[j].includes(nums[i])) {
                j++
            } else {
                result[j].push(nums[i])
                break
            }
        }
    }

    return result
};