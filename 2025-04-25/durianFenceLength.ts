const FENCE_LENGTH_PER_UNIT: number = 40;

function durianFenceLength(area: string[][]): number {
  const maxY = area.length;

  if (maxY === 0) return 0;

  let xLength = 0;
  let yLength = 0;

  for (let y = 0; y < maxY; y++) {
    let checkingX: number = 0;
    let yExisted: boolean = false;
    const maxX = area[y].length;

    for (let x = 0; x < maxX; x++) {
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

  return (xLength * 2 + yLength * 2) * FENCE_LENGTH_PER_UNIT;
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
