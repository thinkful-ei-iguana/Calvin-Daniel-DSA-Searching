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
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.
