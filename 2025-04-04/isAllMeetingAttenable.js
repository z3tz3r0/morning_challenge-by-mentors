"use strict";

/* function isAllMeetingAttenable2(meetingSchedules) {
    const tempSchedule = new Set();

    for (const [start, end] of meetingSchedules) {
        for (let i = start; i < end; i++) {
            if (!tempSchedule.has(i)) {
                tempSchedule.add(i);
            } else {
                return false;
            }
        }
    }
    return true;
} */

function isAllMeetingAttenable3(meetingSchedules) {
    meetingSchedules.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < meetingSchedules.length; i++) {
        const currentMeetingStart = meetingSchedules[i][0];
        const previousMeetingEnd = meetingSchedules[i - 1][1];

        if (currentMeetingStart < previousMeetingEnd) {
            return false;
        }
    }
    return true;
}

const intervals1 = [
    [7, 10],
    [2, 4],
];
const intervals2 = [
    [1, 5],
    [5, 10],
    [10, 15],
];
const intervals3 = [
    [5, 8],
    [1, 3],
    [4, 6],
    [10, 15],
];

console.log(isAllMeetingAttenable3(intervals1));
console.log(isAllMeetingAttenable3(intervals2));
console.log(isAllMeetingAttenable3(intervals3));

// console.log(isAllMeetingAttenable1(intervals1));
