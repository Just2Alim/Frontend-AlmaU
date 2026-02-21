export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    {
        id: 101,
        title: "Introduction to Computer Science",
        instructor: "Dr. Smith",
        description: "Learn the basics of computer science, including programming, algorithms, and data structures."
    },
    {
        id: 102,
        title: "Data Structures and Algorithms",
        instructor: "Prof. Johnson",
        description: "Explore advanced data structures and algorithms to solve complex problems efficiently."
    },
    {
        id: 103,
        title: "Web Development",
        instructor: "Ms. Lee",
        description: "Build modern web applications using HTML, CSS, JavaScript, and popular frameworks."
    },
    {
        id: 104,
        title: "Database Systems",
        instructor: "Dr. Brown",
        description: "Understand the principles of database design, SQL, and data management."
    }
];  

export function getCourseById(id: number): Course | undefined {
    return courses.find(course => course.id === id);
}
