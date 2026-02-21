type Course = {
    id: number;
    title: string;
    instructor: string;
};

const courses: Course[] = [
    { id: 1, title: "Introduction to Computer Science", instructor: "Dr. Smith" },
    { id: 2, title: "Data Structures and Algorithms", instructor: "Prof. Johnson" },
    { id: 3, title: "Web Development", instructor: "Ms. Lee" },
];

export default function Courses() {
    return (
        <section>
            <h1>Courses</h1>
            <ul>
                {courses.map((c) => (
                    <li key={c.id}>
                        {c.title} - <span>{c.instructor}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}