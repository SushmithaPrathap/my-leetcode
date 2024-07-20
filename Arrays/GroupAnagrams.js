/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const mp = new Map();
    const ans = [];

    const getKey = (s) => {
        let res = []
        let count = Array(26).fill(0)
        
        for(const c of s){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++ //updating the frequency of each letters
            /*
            For 'a': 97 - 97 = 0 --> at every occurence of a it will be increamneted
            For 'b': 98 - 97 = 1
            For 'c': 99 - 97 = 2
            */
        }

        for(let i=0; i< 26; i++){
            if(count[i] !== 0){ //checks if the character corresponding to the index i appears in the string s 
                res.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString())
                //converts the index i back to the corresponding character
                /*
                For i = 0: String.fromCharCode(0 + 97) = 'a'
                For i = 1: String.fromCharCode(1 + 97) = 'b'
                For i = 2: String.fromCharCode(2 + 97) = 'c'
                */
            }
        }

        return res.join('');

    }

    for(const s of strs){
        const ss = getKey(s); //frequency string
        // const ss = s.split('').sort().join('') //sorted string
        if(!mp.has(ss)){
            mp.set(ss, [])
        }

        mp.get(ss).push(s)
    }

    mp.forEach((item) => ans.push(item))

    // for (const str of strs) {
    //     const sortedStr = str.split('').sort().join('');
    //     if (mp.has(sortedStr)) {
    //         ans[mp.get(sortedStr)].push(str);
    //     } else {
    //         mp.set(sortedStr, ans.length);
    //         ans.push([str]);
    //     }
    // }

    return ans;

};