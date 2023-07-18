import { Link } from "react-router-dom";

import './CourseListPage.css'

export default function CourseListPage({courses}) {
    return (
        <div className="course-display">
            {courses.map((course) => (
                <div key={course._id}>
                <img style={{maxWidth: '30vw'}} src="https://images.squarespace-cdn.com/content/v1/5dfa8eb7d89abc3b6a4300a1/e1f1bd03-f1fb-4997-9b02-0858db9d60a5/Pocono-Manor-Golf-3.jpg?format=2500w"></img>
                <Link to ={`/courses/${course._id}`}><h1>{course.name}</h1></Link>
                    <h1>{course.address}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum laudantium dolore delectus doloribus incidunt vel, vitae commodi ipsa voluptate eos at. Optio debitis cumque, fugiat dolorem possimus facere praesentium excepturi.</p>
                </div>
            ))}
        </div>
    );
}