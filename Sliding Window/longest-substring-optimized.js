const string = "abccabb"

// Time: O(N);
// Space: O(N)

const lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    let max = 0, left= 0;
    // let seen = {}
    let seen = new Map()
    
  for(let right = left; right < s.length; right++) {
        const curr = s[right];
        // const prevSeen = seen[curr]; //give the index of the prev seen ele
        const prevSeen = seen.get(curr); //give the index of the prev seen ele

        if(prevSeen >= left){
            left = prevSeen + 1
        }
        // seen[curr] = right; //update the new index value (seen and new charaters)
        seen.set(curr, right) //update the new index value (seen and new charaters)
        max = Math.max(max, right - left +1); //length of the current substring(window) = r-l+1
        //compare both the longest we have seen the current substring
      }

    
    return max;
};
