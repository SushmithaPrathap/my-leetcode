/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    if(prices.length <= 1){
        return 0;
    }

    let max = 0, l=0; r=l+1;

    while(r< prices.length){
        let curr = 0;
    
        if(prices[r] >= prices[l]){
            curr = prices[r] - prices[l]
            max = Math.max(max, curr)
        }else{
            l=r
        }
        r++
    }
    return max;
    
};