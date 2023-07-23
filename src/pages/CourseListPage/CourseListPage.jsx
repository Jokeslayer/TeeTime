import { Link } from "react-router-dom";
import './CourseListPage.css'

export default function CourseListPage({ courses }) {
    return (
        <div className="course-display">
            {courses.map((course) => (
                <div key={course._id}>
                    <div>
                    <img style={{ maxWidth: '30vw' }} src="https://images.squarespace-cdn.com/content/v1/5dfa8eb7d89abc3b6a4300a1/e1f1bd03-f1fb-4997-9b02-0858db9d60a5/Pocono-Manor-Golf-3.jpg?format=2500w"></img>
                    <article>
                        <Link to={`/courses/${course._id}`}><h1>{course.name}</h1></Link>
                        <h3>{course.address}</h3>
                        <p>Is this thing on?</p>
                    </article>

                    </div>
                </div>
            ))}
        </div>
    );
}