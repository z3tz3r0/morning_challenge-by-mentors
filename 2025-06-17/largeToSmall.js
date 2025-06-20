function mergeSort(arr) {
  const n = arr.length;
  if (n === 1) {
    return arr;
  }
  const mid = Math.floor(n / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid, n);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArray, rightArray) {
  const sortedArr = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] > rightArray[0]) {
      sortedArr.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArr.push(rightArray[0]);
      rightArray.shift();
    }
  }
  return sortedArr.concat(leftArray).concat(rightArray);
}

const arr = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];
console.log("Given array is", arr.join(" "));
const sorted = mergeSort(arr);
console.log("\nSorted array is", mergeSort(arr).join(" "));
