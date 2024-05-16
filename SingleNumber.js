var singleNumber = function(nums) {
    let count = {}

    for(let i = 0; i < nums.length; i++) {
        if(count.hasOwnProperty(nums[i])) {
            count[nums[i]]++
        } else {
            count[nums[i]] = 1
        }
    }

    for(let property in count) {
        if(count[property] === 1) {
            return property
        }
    }
};