import { useState, useEffect, useRef } from 'react';
import './SchedulerPage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CourseSelector from '../../components/CourseSelector/CourseSelector';
import PlayerNum from '../../components/PlayerNum/PlayerNum';
import RoundSizeBar from '../../components/RoundSizeBar/RoundSizeBar';
import TimeSlot from '../../components/TimeSlot/TimeSlot';
import * as coursesAPI from '../../utilities/courses-api';
import * as reservationsAPI from '../../utilities/reservations-api';

export default function SchedulerPage() {
    const [value, onChange] = useState(new Date());
    const [courses, setCourses] = useState([]);

    useEffect(function () {
        async function getCourses() {
            const courses = await coursesAPI.getAll();
            setCourses(courses);
        }
        getCourses();

    }, [])


    async function handleReserve(reservation) {
        await reservationsAPI.create(reservation);
    }
    
    return (
        <div>
            <h1>SchedulerPage</h1>
            <form className='reserve' onSubmit={handleReserve}>
                <CourseSelector courses={courses} /> 
                <PlayerNum />
                <RoundSizeBar />

            {/* <Calendar onChange={onChange} value={value} /> */}
            </form>
            {/* <div>
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
            </div> */}


        </div>
    );
}