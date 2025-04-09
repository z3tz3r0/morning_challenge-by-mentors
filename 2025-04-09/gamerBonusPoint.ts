//input: points = [1,2,5,3,7,0,2,8,4,4], days = 3, min = 9, max = 10
// output: 2

function gamerBonusPoint(
    points: number[],
    days: number,
    min: number,
    max: number
): number {
    const n: number = points.length;
    if (n === 0) return 0;

    let bonus: number = 0;
    let sum: number = 0;

    for (let i = 0; i < days; i++) {
        sum += points[i];
    }

    if (sum < min) {
        bonus -= 1;
    }
    if (sum > max) {
        bonus += 1;
    }

    for (let i = days; i < n; i++) {
        sum -= points[i - days];
        sum += points[i];
        if (sum < min) {
            bonus -= 1;
        }
        if (sum > max) {
            bonus += 1;
        }
    }

    return bonus;
}

const points = [1, 2, 5, 3, 7, 0, 2, 8, 4, 4];
const days = 3;
const min = 9;
const max = 10;

console.log(gamerBonusPoint(points, days, min, max)); // Output: 2
