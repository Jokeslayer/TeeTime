import { useState, useEffect } from 'react';
import './CourseInfoPage.css';
import ReviewList from '../../components/ReviewList/ReviewList';
import * as coursesAPI from '../../utilities/courses-api';

import { useParams } from 'react-router-dom';


export default function CourseInfoPage() {
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
        const updatedCourse=await coursesAPI.deleteReview(review._id,course._id);
        setCourse(updatedCourse);
    }

    if(!course){
        return <div>Loading... Nope. Shit dont work</div>
    }
    return (
        <div className="course-display">
            <div>
            <img className='course-box' src="https://images.squarespace-cdn.com/content/v1/5dfa8eb7d89abc3b6a4300a1/e1f1bd03-f1fb-4997-9b02-0858db9d60a5/Pocono-Manor-Golf-3.jpg?format=2500w"></img>
            <h1>{course.name}</h1>
            <h3>{course.address}, {course.state}, ${course.price}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum laudantium dolore delectus doloribus incidunt vel, vitae commodi ipsa voluptate eos at. Optio debitis cumque, fugiat dolorem possimus facere praesentium excepturi.</p>

            </div>
            <div className="review-section">
                <ReviewList course={course} handleDelete={handleDelete} />
            </div>
        </div>
    );
}