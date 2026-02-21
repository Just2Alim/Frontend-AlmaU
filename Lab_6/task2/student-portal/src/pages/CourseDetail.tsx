import { useLoaderData, useParams } from "react-router-dom";
import type { Course } from "../data";

type LoaderData = {
  course: Course;
};

export default function CourseDetail() {
  const { id } = useParams();
  const { course } = useLoaderData() as LoaderData;
  
  return (
    <section>
      <h1>{course.title}</h1>
      <p>
        <b>Instructor:</b> {course.instructor}
      </p>
      <p>
        <b>Description:</b> {course.description}
      </p>

      <p style={{ marginTop: 12, color: "#6b7280"}}>
        Route ID parameter: {id}
      </p>
    </section>
  );
}