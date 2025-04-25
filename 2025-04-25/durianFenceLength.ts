const fenceLengthPerTree: number = 40;

function durianFenceLength(area: string[][]): number {
  let maxY = area.length - 1;

  if (maxY < 0) return 0;

  let xLength = 0;
  let yLength = 0;

  for (let y = 0; y < area.length; y++) {
    let checkingX: number = 0;
    let yExisted: boolean = false;
    for (let x = 0; x < area[y].length; x++) {
      if (area[y][x] === "1") {
        checkingX = x + 1;
        yExisted = true;
      }
    }

    if (xLength < checkingX) {
      xLength = checkingX;
    }

    if (yExisted) {
      yLength++;
    }
  }

  return (xLength * 2 + yLength * 2) * fenceLengthPerTree;
}

const durianArea = [
  ["1", "0", "0", "0", "1"],
  ["0", "1", "0", "1", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "1", "0", "1", "0"],
  ["1", "0", "0", "0", "1"],
];

const durianArea2 = [[], []];

const durianArea3 = [[], ["1"]];

console.log(durianFenceLength(durianArea)); // expected: 800
console.log(durianFenceLength(durianArea2)); // expected: 0
console.log(durianFenceLength(durianArea3)); // expected: 160
