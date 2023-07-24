import { Link } from "react-router-dom";
import './CourseListPage.css'
import golf from '../../images/golf.jpg'; // Tell webpack this JS file uses this image


export default function CourseListPage({ courses }) {
    console.log('newReservation')

    return (
        <div className="course-display">
            {courses.map((course) => (
                <div key={course._id}>
                    <div>
                    <img style={{ maxWidth: '30vw' }} src={golf} alt="golf"></img>
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