/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length!== t.length){
        return false
    }

    let cs = {};
    let ct = {};

    /*
    Count Character Occurrences:
Initialize empty dictionaries s_count and t_count to store the count of each character in strings s and t, respectively.
Loop through each character in the strings:
If the character is already in the dictionary, increment its count by 1.
If the character is not in the dictionary, set its count to 1.
    */

    for(let i=0; i< s.length; i++){
        cs[s[i]] = 1 + (cs[s[i]] || 0); // if its there add 1 if not 0+1=1
        ct[t[i]] = 1 + (ct[t[i]] || 0);
    }

    for(let i in cs){
        if(cs[i] !== ct[i]){
            return false;
        }
    }

    return true
};

/*
    const counter = new Map();

    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!counter.has(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, counter.get(char) - 1);
    }

    return true;    

    */


/*
Approach is very simple. First of all create array with length of 26, then iterate through s string. 
Every time we caulcuate subtraction with ASCII values.

ASCII value of current character - ASCII value of "a".
Why "a"?
That's because "a" is the smallest ASCII value and the ASCII values of all lowercase letters are sequential.
 
If we subtract ASCII value of "a" from ASCII value of current character, you should be able to retrieve the order of those alphabets.
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = Array(26).fill(0);

    for (let char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    for (let char of t) {
        if (count[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
            return false;
        }
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
    }

    return true;    
};
*/