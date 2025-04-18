/**
 * @param {number[]} points
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
var minimumSumSubarray = function (points, min, max) {
    let minSum = Infinity;
    const n = points.length;

    for (let len = min; len <= max; len++) {
        let sum = 0;
        let left = 0;
        let right = 0;

        while (right < n) {
            sum += points[right++];

            if (right - left >= len) {
                if (sum > 0) minSum = Math.min(minSum, sum);
                sum -= points[left++];
            }
        }
    }
    return minSum === Infinity ? -1 : minSum;
};
