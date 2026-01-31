//1
// Basic user types
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

//type which is either an instructor or an admin
type InstructorOrAdmin = Instructor | Admin;


//2
//given assignment type
type Assignment = { title: string; dueDate: Date; points: number; }
//an read only assignment type
type ReadOnlyAssignment = Readonly<Assignment>;


//3
//given type Learner stats
type LearnerStats = {
    quizzes: number;
    videos: number;
    assignments: number;
}

// type stats as string
type StatsAsStrings = {
    [K in keyof LearnerStats]:string;
};


//testing

const instructorUser: InstructorOrAdmin = {
    id: "I-101",
    coursesTaught: 3
};

const adminUser: InstructorOrAdmin = {
    id: "A-201",
    accessLevel: "super"
};

console.log("Instructor User:", instructorUser);
console.log("Admin User:", adminUser);

//
const assignment: ReadOnlyAssignment = {
    title: "TypeScript Basics",
    dueDate: new Date("2025-02-01"),
    points: 100
};

console.log("Assignment:", assignment);

//
const learnerStats: StatsAsStrings = {
    quizzes: "10",
    videos: "25",
    assignments: "5"
};

console.log("Learner Stats (as strings):", learnerStats);