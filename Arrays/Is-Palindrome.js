const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//---------Reverse and compare -----------//
    // let rev = "";
    // // generate a reverse string using a reverse for loop.
    // for(let i = s.length - 1; i >= 0; i--) {
    //     rev += s[i];
    // }

    // return rev === s;

//---------Two points from outside -----------//
    // // initialize left/right pointers at start and end of string respectively
    // let left = 0; right = s.length - 1;
    
    // // loop through string characters while comparing them, then move the pointers closer to the center
    // while(left < right) {
    //     if(s[left] !== s[right]) {
    //         return false
    //     }
        
    //     left++;
    //     right--;
    // }
    
    // return true;

//---------Two points from the center -----------//
    // initialize left/right pointers to point at the middle index of the string. 
    // Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
    let left = Math.floor(s.length / 2), right = left;

    // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
    if(s.length % 2 === 0) {
        left--;
    }

    // loop through the string while expanding pointers outwards comparing the characters.
    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) {
            return false
        }

        left--;
        right++;
    }

    return true;

};

console.log(isValidPalindrome(string));