var resultArray = function(nums) {
    let arr1 = [nums[0]]
    let arr2 = [nums[1]]

    for(let i = 2; i < nums.length; i++) {
        if(arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1 = [...arr1, nums[i]]
        } else {
            arr2 = [...arr2, nums[i]]
        }
    }

    return [...arr1, ...arr2]
};