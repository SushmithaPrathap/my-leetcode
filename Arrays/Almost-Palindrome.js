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


     const ValidSubPalindrome =(s, l, r) =>{
        while(l<=r){
            if(t[l] !== t[r]){
                return false;
            }
            l++;
            r--;
        }
    
        return true;
     }
 
     while(l<=r){
         if(t[l] !== t[r]){
             return ValidSubPalindrome(s, l+1, r) || ValidSubPalindrome(s, l, r-1) //recursion - inclusion and exclusion
         }
         l++;
         r--;
     }
 
     return true;


     
 };