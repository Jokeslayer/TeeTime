import { useState, useEffect, useRef } from 'react';
import './CourseInfoPage.css';
import ReviewList from '../../components/ReviewList/ReviewList';
import * as coursesAPI from '../../utilities/courses-api';

import { useParams } from 'react-router-dom';


export default function CourseInfoPage() {
    const [course, setCourse] = useState();
    let { id } = useParams();

    console.log("this is the use Params function", id)
    
    useEffect(function () {
        async function getCourseByID() {
            const course = await coursesAPI.getCourse(id);
            console.log("this is the use effect function", course)
            setCourse(course);
        }
        getCourseByID();
    }, [id])

    if(!course){
        return <div>Loading... Nope. Shit dont work</div>
    }
    return (
        <div className="course-display">
            <h1>what the fuck is wrong with my course info page</h1>
            <img src="https://images.squarespace-cdn.com/content/v1/5dfa8eb7d89abc3b6a4300a1/e1f1bd03-f1fb-4997-9b02-0858db9d60a5/Pocono-Manor-Golf-3.jpg?format=2500w"></img>
            <h1>{course.name}</h1>
            <h3>{course.address}</h3>
            <h3>{course.state}</h3>
            <h3>{course.price}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum laudantium dolore delectus doloribus incidunt vel, vitae commodi ipsa voluptate eos at. Optio debitis cumque, fugiat dolorem possimus facere praesentium excepturi.</p>

            <div className="review-section">
                <ReviewList course={course} />
            </div>
        </div>
    );
}