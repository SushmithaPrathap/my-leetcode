/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let prod = 1;
    const left = [], right = [], ans=[];

    //traverse from left to right 
    //put the cur prod value in left[i] and update the productby multiplying with nums[i]
    for(let i=0; i< nums.length; i++){
        left[i] = prod;
        prod *= nums[i]
    }
    
    prod=1; //reset prod

    //traverse from right to left
    //put the cur prod value in right[i] and update the productby multiplying with nums[i]
    for(let i=nums.length-1 ; i>-1; i--){
        right[i] = prod;
        prod *= nums[i]
    }

    //multiple each element of left and right
    for(let i=0; i< nums.length; i++){
        ans[i] = left[i] * right[i]
    }

    return ans;
};

//optimize:
var productExceptSelf = function(nums) {
    let prod = 1;
    const left = [], right = [], ans=[];

    for(let i=0; i< nums.length; i++){
        ans[i] = prod;
        prod *= nums[i]
    }
    
    prod=1;
    for(let i=nums.length-1 ; i>-1; i--){
        ans[i] = ans[i] * prod;
        prod *= nums[i]
    }

    return ans;
};