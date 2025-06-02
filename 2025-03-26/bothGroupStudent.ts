interface studentGroup {
  id: number;
  name: string;
}

// using Set is more efficient
function bothGroupStudent(group1: studentGroup[], group2: studentGroup[]) {
  const commonStudent = new Set();

  for (const student of group1) {
    commonStudent.add(student.id);
  }

  const bothGroupStudent: studentGroup[] = [];

  for (const student of group2) {
    if (commonStudent.has(student.id)) {
      bothGroupStudent.push(student);
    }
  }
  return bothGroupStudent;
}

const studentsGroup1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Hank" },
  { id: 9, name: "Ivy" },
  { id: 10, name: "Jack" },
];

const studentsGroup2 = [
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

console.log(bothGroupStudent(studentsGroup1, studentsGroup2));
