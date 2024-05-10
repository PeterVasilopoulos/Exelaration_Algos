const nums1 = [4,2,5,7]

const nums2 = [2,3]

const nums3 = [1,3,4,2,5,7,8,6]

function sortArrayByParityII(nums) {
    // loop through nums
    for(let i = 0; i < nums.length; i++) {
        // check if i and nums[i] are different types
        if(i % 2 !== nums[i] % 2) {
            // loop through nums again
            for(let j = i + 1; j < nums.length; j++) {
                // search for a number that matches the type of i
                if(i % 2 === nums[j] % 2) {
                    // swap the numbers
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                }
            }
        }
    }

    return nums
}

console.log(sortArrayByParityII(nums1))
console.log(sortArrayByParityII(nums2))
console.log(sortArrayByParityII(nums3))