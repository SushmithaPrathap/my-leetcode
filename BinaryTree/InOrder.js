/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {

    //inorder - l,n,r
    if(!root) return [];

    let ans = [];

    function helper(node){

    if(node === null){
        return
    }

    helper(node.left);
    ans.push(node.val);
    helper(node.right);
    }

    helper(root);

    return ans;

    
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {

    //inorder - l,n,r
    // if(!root) return [];

    const result = [];
    const stack = [];
    let curr = root;
    
    while (curr || stack.length > 0) {
        while (curr) { //go till the furthest left
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    
    return result;
};