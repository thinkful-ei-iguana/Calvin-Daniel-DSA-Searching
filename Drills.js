// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

// 3,5,6,8,11,12,14,15,17,18

// Pt 1
// root = 11
// 11, 5, 6, 8

// Pt 2
// root = 11
// 16 is > 11
// 11, 15, 17 no 16;

// Pt 3
// Just implement a binary search.

// Pt 4
// 1) 14, 19, 90, 15, 27, 79, 91, 25, 89, 35
// 2) 5, 7, 6, 9, 11, 10, 8

const BST = require('./BST');
const tree = new BST();
const arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
for (let num of arr) {
  tree.insert(num, num);
}

console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());

