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

const BST = require("./BST");
const tree = new BST();
const arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
for (let num of arr) {
  tree.insert(num, num);
}

console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());

// Drill #6 Find the next commanding officer
// Suppose you have a tree representing a command structure of the Starship USS Enterprise.
//                Captain Picard
//              /                \
//     Commander Riker       Commander Data
//       /         \               \
//  Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
//  Worf        LaForge            Crusher
//    /                           /
// Lieutenant                  Lieutenant
// security-officer            Selar
// This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.
const starTrekArr = [
  "Captain Picard",
  "Commander Riker",
  "Commander Data",
  "Lt. Cmdr. Worf",
  "Lt. Cmdr. LaForge",
  "Crusher",
  "Security Officer",
  "Lieutenant Selar"
];
const starTrek = new BST();
for (let num of starTrekArr) starTrek.insert(num, num);

console.log(starTrek.preorder());

//  Drill # 7
// Max profit
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on any following day, write an algorithm to work out what the maximum profit you could make would be.

//
// Start at node 128, logic checks if has right target, if not then move down left chain one node and check right again. Find largest difference from current node to right target, return value.
// input of prices for function parameter
const profitTree = new BST();
profitTree.insert(128, 128);
profitTree.insert(97, 97);
profitTree.insert(121, 121);
profitTree.insert(123, 123);
profitTree.insert(98, 98);
profitTree.insert(97, 97);
profitTree.insert(105, 105);

// const variable set equal to a 'new' BST()
// variable name.insert() adds information as key and value paired
// first checks if there's a node, then logic checks through greater than/ lesser than

// const maxProfit = (profitTree, maxP, smallest) => {
//   if (profitTree.left === null && profitTree.right === null) {
//     return maxP;
//   }
//   if (this.right) {
//     // do comparison logic in this portion
//     if (this.value - smallest > maxP) {
//       maxP = this.value - smallest;
//     }
//     const current = maxProfit(this.right, maxP, smallest);
//     const next = maxProfit(this.right, maxP, this.value);
//     return current > next ? current : next;
//   }
//   if (this.left) {
//     const current = maxProfit(this.left, maxP, smallest);
//     const next = maxProfit(this.left, maxP, this.next.value);
//     return current > next ? current : next;
//   }
  // if logic to check right hand side
  // logic to check difference between current and target
  // call function recursively to perform it's calculation through each node
// };

console.log(profitTree);
function maxProfit(tree, maxP, current) {
  
  if (tree.right === null && tree.left === null) {
    if (tree.value - current > maxP) maxP = tree.value - current;
    return maxP;
  }

  if (tree.value - current > maxP) maxP = tree.value - current;
  
  if (tree.right) {
    const rCurrent =  maxProfit(tree.right, maxP, current);
    const rNext = maxProfit(tree.right, maxP, tree.right.value);
    return rCurrent > rNext ? rCurrent : rNext;
  }

  const lCurrent = maxProfit(tree.left, maxP, current);
  const lNext = maxProfit(tree.left, maxP, tree.left.value);
  return lCurrent > lNext ? lCurrent : lNext;

}
console.log(maxProfit(profitTree, 0, profitTree.value));
