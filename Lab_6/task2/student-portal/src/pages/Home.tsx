import { Link } from "react-router-dom";    

export default function Home() {
    return (
        <section>
            <h1>Welcome to the Student Portal</h1>
            <p>Access your courses, view your grades, and manage your profile all in one place.</p>

            <div style={{display: "flex", gap: "12px", marginTop: "12"}}>
                <Link to="/courses">Courses</Link>
                <Link to="/about">About</Link>
            </div>
        </section>
    );
}