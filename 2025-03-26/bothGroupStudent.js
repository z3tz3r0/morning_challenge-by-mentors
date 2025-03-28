"use strict";

function findCommonStudent(group1, group2) {
    const commonStudent = [];
    const map = {};

    for (const student1 of group1) {
        map[student1.id] = student1.name;
    }

    for (const student2 of group2) {
        if (map[student2.id]) {
            commonStudent.add(student2.name);
        }
    }
    return commonStudent;
}

// using Set is more efficient
function findCommonStudentSet(group1,group2) {
    const commonStudent = new Set();

    for (const student1 of group1) {
        commonStudent.add(student1.id);
    }

    const bothGroupStudent = [];
    for (const student2 of group2) {
        if (commonStudent.has(student2.id)) {
            bothGroupStudent.push(student2)
        }
    }
    return bothGroupStudent;
}

const students1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Hank' },
    { id: 9, name: 'Ivy' },
    { id: 10, name: 'Jack' },
];

const students2 = [
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
];

console.log(findCommonStudentSet(students1,students2));