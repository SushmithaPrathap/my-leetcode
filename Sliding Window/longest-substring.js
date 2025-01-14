const string = "abccabb"

// Time: O(N^2);
// Space: O(N)

const lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    let longest = 0;
    
    for(let left = 0; left < s.length; left++) {
      let seenChars = {}, currentLength = 0;

      for(let right = left; right < s.length; right++) {
        const currentChar = s[right];

        if(!seenChars[currentChar]) { //undefined is also falsy
          currentLength++;
          seenChars[currentChar] = true; //add currentChar
          longest = Math.max(longest, currentLength); //update max
        } else {
          break;
        }
      }
    }
    
    return longest;
};

console.log(lengthOfLongestSubstring(string));