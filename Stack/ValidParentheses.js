/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length === 0) return true;

    const parens = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    let stack = [];

    for(const c of s){
        if(c === '('){
            stack.push(')')
        }else if(c === '['){
            stack.push(']')
        }else if(c === '{'){
            stack.push('}')
        }else if( stack.length === 0 || stack.pop() !== c){ 
            //if encounter a closing bracket so we check the peek
            return false
            //if its equal move on to the next;
        }

        //Another Way!!

        // if(parens[c]){ //if seeing a open bracket 
        //     stack.push(c)
        // }else{
        //     const open = stack.pop() //last seen open bracket;
        //     const correctBracket = parens[open];
        //     if(correctBracket !== c){ // if the cuurent closing bracket !== to the correctBracket
        //         return false
        //     }
        // }
    }

    return stack.length === 0
};