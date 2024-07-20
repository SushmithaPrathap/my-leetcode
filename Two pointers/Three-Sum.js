/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if(nums === null || nums.length < 3) return []

    let result = [];

    nums.sort((a,b) => a-b)
    // console.log("nums", nums)

    for(let i=0; i<nums.length-2; i++){ //we cant find the triplets from the last to elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;  // Skip the same element to avoid duplicate triplets

    let left = i+1;
    let right = nums.length-1;

    while(left< right){
        let sum = nums[i] + nums[left] + nums[right]

        if(sum === 0){
            result.push([nums[i], nums[left], nums[right]])
            left++;
            // right--;
            //Increment the j pointer to skip any duplicate elements
            while (nums[left] === nums[left-1] && left < right) {
                    left++;
                }
        }else if(sum<0){
            left++;
        }else{
            right--;
        }
    }
    }

    return result;
};