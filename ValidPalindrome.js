/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {

    let t = s.replace(/[^a-z0-9]/gi,'')
         .toLowerCase()
         .split('')
 
     if(t.length <=1) return true
 
     let l = 0; r = t.length-1;
 
     while(l<=r){
         if(t[l] !== t[r]){
             return false;
         }
         l++;
         r--;
     }
 
     return true;
     
 };