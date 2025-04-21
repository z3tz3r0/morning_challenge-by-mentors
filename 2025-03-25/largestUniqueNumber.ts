// function largestUniqueNumber(arrNum: number[]): number {
//   const uniqueMap: Map<number, number> = new Map();

//   for (const number of arrNum) {
//     uniqueMap.set(number, (uniqueMap.get(number) || 0) + 1);
//   }
//   let largestUnique = -1;
//   for (const [key, count] of uniqueMap.entries()) {
//     let currNum = key;
//     if (count === 1 && currNum > largestUnique) {
//       largestUnique = currNum;
//     }
//   }
//   return largestUnique;
// }

// const numsArr = [5, 5, 5, 7, 7, 3, 9, 9, 4, 4, 8, 8, 3, 1, 1];

// console.log(largestUniqueNumber(numsArr));

function largestUniqueWithoutAddMem(arrNum: number[]): number {
  arrNum.sort((a, b) => a - b);

  let i: number = arrNum.length - 1;

  while (i >= 0) {
    if (arrNum[i] === arrNum[i - 1]) {
      while (i >= 0 && arrNum[i] === arrNum[i - 1]) {
        i--;
      }
    } else {
      return numsArr[i];
    }
    i--;
  }
  return -1;
}

const numsArr = [5, 5, 5, 7, 7, 3, 9, 9, 4, 8, 8, 3, 1, 1];
console.log(largestUniqueWithoutAddMem(numsArr));
