// 1. ระบบนี้ task id เริ่มที่ id = 1
// 2. เพิ่ม task ใหม่ได้ โดยระบุ user id, description, due date (1-300 วัน) และ tags ได้ (มีมากกว่า 1 tag หรือ ไม่มี tag ได้) และตอบกลับว่าได้ task id อะไร
// 3. สามารถค้นหา task ที่ยังไม่เสร็จทั้งหมดของ user นั้นๆได้ โดยเรียงตาม due date ที่มาถึงก่อน
// 4. สามารถค้นหา task ที่ยังไม่เสร็จของ user นั้นๆด้วย tag ได้ โดยเรียงตาม due date ที่มาถึงก่อน
// 5. สามารถกำหนดว่า user ทำงาน task id เสร็จแล้วได้ ถ้า user หรือ task id ไม่ถูกต้องให้ return false
// 6. ข้อ 3,4 ถ้า user ยังไม่มี task ใดๆ ให้ return []
// 7. due date แต่ละงานจะไม่เท่ากัน

type Task = {
    taskId: number;
    description: string;
    dueDate: number;
    tags: string[];
    completed: boolean;
};

type User = Map<number, Task[]>;

class Todo {
    db: User;
    curentTaskId: number;

    constructor() {
        this.db = new Map();
        this.curentTaskId = 0;
    }

    addTask(
        userId: number,
        description: string,
        dueDate: number,
        tags: string[]
    ): number | false {
        if (dueDate < 1 || dueDate > 300) {
            console.error("Error: Due date must be between 1 and 300 days.");
            return false;
        }

        if (!this.db.has(userId)) {
            this.db.set(userId, []);
        }

        const tasks = this.db.get(userId);

        if (!tasks) {
            console.error("Error: Could not retrieve tasks for the user.");
            return false;
        }

        this.curentTaskId++;

        const newTask = {
            taskId: this.curentTaskId,
            description: description,
            dueDate: dueDate,
            tags: tags,
            completed: false,
        };

        tasks.push(newTask);

        return newTask.taskId;
    }

    searchIncompleteTasks(userId: number): Task[] {
        if (!this.isUserExisted(userId)) {
            console.error(`Error: This user doesn't existed`);
            return [];
        }

        const tasks = this.db.get(userId);

        if (!tasks) {
            console.error(`Error: Could not retrieve tasks for the user.`);
            return [];
        }

        const incompleteTasks = tasks
            .filter((task) => !task.completed)
            .sort((a, b) => a.dueDate - b.dueDate);

        return incompleteTasks;
    }

    searchIncompleteTasksByTag(userId: number, searchTags: string[]): Task[] {
        if (!this.isUserExisted(userId)) {
            console.error(`Error: This user doesn't existed`);
            return [];
        }

        const tasks = this.db.get(userId);

        if (!tasks) {
            console.error(`Error: Could not retrieve tasks for the user.`);
            return [];
        }

        const incompleteTasks = tasks
            .filter((task) => !task.completed)
            .filter((task) => task.tags.some((tag) => searchTags.includes(tag)))
            .sort((a, b) => a.dueDate - b.dueDate);

        return incompleteTasks;
    }

    isUserExisted(userId: number): boolean {
        return this.db.has(userId);
    }

    completeTask(userId: number, taskId: number) {
        if (!this.isUserExisted(userId)) {
            console.error(`Error: This user doesn't existed`);
            return false;
        }

        const tasks = this.db.get(userId);

        if (!tasks) {
            console.error(`Error: Could not retrieve tasks for the user.`);
            return false;
        }

        const taskIndex = tasks.findIndex((task) => task.taskId === taskId);

        if (taskIndex === -1) {
            console.error(`Error: This task doesn't existed`);
            return false;
        }

        tasks[taskIndex].completed = true;

        return true;
    }
}

// Example Task Data Objects (conforming to the Task type)

// --- How to use them with your class ---

// First, create an instance of your Todo class
// --- How to use them with your class ---

// First, create an instance of your Todo class
const myTodoList = new Todo();

console.log("Initial DB State:", myTodoList.db);

// --- Create a new user (e.g., userId 101) and add tasks ---

console.log("\n--- Adding tasks for User 101 ---");

// Task 1 for User 101
const taskId1 = myTodoList.addTask(101, "Submit project proposal", 5, [
    "work",
    "projectA",
]);
if (taskId1 !== false) {
    console.log(`Added task for User 101. Task ID: ${taskId1}`);
}

// Task 2 for User 101
const taskId2 = myTodoList.addTask(101, "Schedule team meeting", 2, [
    "work",
    "meeting",
]);
if (taskId2 !== false) {
    console.log(`Added task for User 101. Task ID: ${taskId2}`);
}

// Task 3 for User 101 (no tags)
const taskId3 = myTodoList.addTask(101, "Buy birthday gift", 10, []);
if (taskId3 !== false) {
    console.log(`Added task for User 101. Task ID: ${taskId3}`);
}

// Attempt to add task with duplicate due date for User 101 (should fail)
console.log(
    "\nAttempting to add task with duplicate due date (5 days) for User 101:"
);
const taskIdDuplicate = myTodoList.addTask(101, "Review proposal feedback", 5, [
    "work",
]);
if (taskIdDuplicate === false) {
    console.log("Failed to add task with duplicate due date, as expected.");
}

// Attempt to add task with invalid due date
console.log(
    "\nAttempting to add task with invalid due date (0 days) for User 101:"
);
const taskIdInvalidDate = myTodoList.addTask(101, "Invalid date task", 0, [
    "test",
]);
if (taskIdInvalidDate === false) {
    console.log("Failed to add task with invalid due date, as expected.");
}

// --- Create another new user (e.g., userId 205) and add tasks ---

console.log("\n--- Adding tasks for User 205 ---");

// Task 1 for User 205
const taskId4 = myTodoList.addTask(205, "Pay rent", 1, ["finance", "home"]);
if (taskId4 !== false) {
    console.log(`Added task for User 205. Task ID: ${taskId4}`);
}

// Task 2 for User 205
const taskId5 = myTodoList.addTask(205, "Go for a run", 3, [
    "health",
    "exercise",
]);
if (taskId5 !== false) {
    console.log(`Added task for User 205. Task ID: ${taskId5}`);
}

// search incomplete Task from user 101
const incompleteTasksUser101 = myTodoList.searchIncompleteTasks(101);
console.log("\n--- Searching for incomplete tasks for User 101 ---");
console.log(incompleteTasksUser101);

// set a task to be completed for user 101
myTodoList.completeTask(101, 20);

// --- Display final DB state ---
console.log("\n--- Final DB State ---");
console.log(myTodoList.db);
