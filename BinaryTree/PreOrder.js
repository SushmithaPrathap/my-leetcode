// recursive:

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
var preorderTraversal = function(root) {
    //preorder - n,l,r
    let ans = []

    if(!root) return ans
    const helper = (root) =>{
        if( root == null){
            return
        }

        console.log(root.val);
        ans.push(root.val)
        helper(root.left);
        helper(root.right);
    }

    helper(root);

    return ans;
    
};

//iterative:

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
 var preorderTraversal = function(root) {
    //preorder - n,l,r
  if(!root) return [];
    let stack = [];
    let list = [];
    stack.push(root);
    while(stack.length){
        let node = stack.pop();
        list.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return list;
    
};