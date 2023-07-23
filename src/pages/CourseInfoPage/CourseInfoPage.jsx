import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from '../../components/ReviewList/ReviewList';
import * as coursesAPI from '../../utilities/courses-api';
import './CourseInfoPage.css';
import golf from '../../images/golf.jpg'; // Tell webpack this JS file uses this image



export default function CourseInfoPage( user) {
    const [course, setCourse] = useState();
    let { id } = useParams();
    useEffect(function () {
        async function getCourseByID() {
            const course = await coursesAPI.getCourse(id);
            setCourse(course);
        }
        getCourseByID();
    }, [id])

    async function handleDelete(review) {
        const updatedCourse = await coursesAPI.deleteReview(review._id, course._id);
        setCourse(updatedCourse);
    }

    if (!course) {
        return <div>Loading... Nope. Shit dont work</div>
    }
    return (
        <div className="course-display">
            <div>
                <img className='course-box' src={golf} alt='golf'></img>
                <h1>{course.name}</h1>
                <h3>{course.address}, {course.state}, ${course.price}</h3>

            </div>
            <div className="review-section">
                <ReviewList user={user} course={course} handleDelete={handleDelete} />
            </div>
        </div>
    );
}