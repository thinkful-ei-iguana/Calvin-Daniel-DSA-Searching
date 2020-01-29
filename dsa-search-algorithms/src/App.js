import React from "react";
import { useState } from "react";
// find index of

function App() {
  // state react hooks
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  function binarySearch(array, value, start, end, counter = 0) {
    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
      alert(counter);
      return index;
    } else if (item < value) {
      return binarySearch(array, value, index + 1, end, ++counter);
    } else if (item > value) {
      return binarySearch(array, value, start, index - 1, ++counter);
    }
  }

  const calculateBinary = () => {
    let arr = input
      .split(" ")
      .map(e => Number(e))
      .sort((a, b) => {
        return a - b;
      });
    const num = Number(search);
    binarySearch(arr, num, 0, arr.length - 1);
  };
  const calculateLinear = () => {
    const arr = input.split(" ");
    alert(arr.indexOf(search) + 1);
  };
  return (
    <>
      <input
        type="text"
        id="textInput"
        onChange={event => setSearch(event.target.value)}
        value={search}
      ></input>
      <textarea
        rows="4"
        cols="50"
        onChange={event => setInput(event.target.value)}
        value={input}
        id="textAreaOne"
      ></textarea>
      <button onClick={calculateBinary}>Calculate Binary!</button>
      <button onClick={calculateLinear}>Calculate Linear!</button>
    </>
    // 1) Linear search
    // Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
    // 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5

    // 2) Binary search
    // Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
  );
}

export default App;
