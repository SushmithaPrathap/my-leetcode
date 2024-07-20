/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {

    if(k == nums.length) return nums
    let bucket = Array(nums.length + 1)
    let map = new Map();

    for(let n of nums){
        map.set(n, (map.get(n)||0) +1 );
    }

    for(let k of map.keys()){ //creating a list of buckets
        let freq = map.get(k);
        bucket[freq] = (bucket[freq] || []).concat(k);
    }

   let ans = [];
    // Iterate through the frequency array from the highest frequency to the lowest
    for (let j = bucket.length - 1; j >= 0; j--) {
        // If the current frequency array is not empty, add the elements to the ans array
        // and decrement k until k is 0 or the frequency array is empty
        if(bucket[j]){
        for (let i = 0; i < bucket[j].length && k > 0; i++) {
            ans.push(Number(bucket[j][i]));
            k--;
        }
        }
        
    }
    return ans;
};