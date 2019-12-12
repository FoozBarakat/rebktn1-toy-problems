/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the 
//others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of 
//the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(value) {
   this.value = value;
   this.left = this.right = null;
};

TreeNode.prototype.addChiled = function(value) {
	if (value < this.value) {
    if (this.left === null) {
      this.left = new TreeNode(value);
    } else {
      this.left.addChiled(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new TreeNode(value);
    } else {
      this.right.addChiled(value);
    }
  }
};

TreeNode.prototype.contains = function(value) {
	if (value === this.value) {
    return true;
  } else if (value < this.value) {
    return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
    return !!(this.right && this.right.contains(value));
  }
}

var mergeTrees = function(t1, t2) {
	// for the val
	if (t1.value && t2.value) {
		var newTree = new TreeNode(t1.value + t2.value);	
	} else if (t1.value) {
		var newTree = new TreeNode(t1.value + 0);
	} else if (t2.value) {
		var newTree = new TreeNode(t2.value + 0);
	}

	// for the left side
	if (t1.left && t2.left) {
		mergeTrees(t1.left, t2.left)
	} else if (t1.left) {
		mergeTrees(t1.left, 0);
	} else if (t2.left) {
		mergeTrees(0, t2.left)
	}

	// for the right side
	if (t1.right && t2.right) {
		mergeTrees(t1.right, t2.right)
	} else if (t1.right) {
		mergeTrees(t1.right, 0);
	} else if (t2.right) {
		mergeTrees(0, t2.right)
	}

	return newTree;	
};

var t1 = new TreeNode(1);
t1.addChiled(3);
t1.addChiled(2);
t1.addChiled(5);

var t2 = new TreeNode(2);
t2.addChiled(1);
t2.addChiled(3);
t2.addChiled(4);
t2.addChiled(7);