/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // const s = new Set(nums); return s.size !== nums.length 

    // const map = {};

    // for (const num of nums) {
    //     if(map[num]) {

    //         return true;
    //     } else {

    //         map[num] = true;
    //     }
    // }

    // return false;


    const freq = new Set();
    for(let i=0;i<nums.length;i++){
        if(freq.has(nums[i])) return true

        freq.add(nums[i])
    }

    return false

};