import { useState, useEffect, useRef } from 'react';
import './SchedulerPage.css';
import Calendar from '../../components/Calendar/Calendar';
import CourseSelector from '../../components/CourseSelector/CourseSelector';
import PlayerNum from '../../components/PlayerNum/PlayerNum';
import RoundSizeBar from '../../components/RoundSizeBar/RoundSizeBar';
import TimeSlot from '../../components/TimeSlot/TimeSlot';

export default function SchedulerPage() {
    return (
        <div>
            <h1>SchedulerPage</h1>
            <div className='specs'>
                <CourseSelector />
                <Calendar />
                <PlayerNum />
                <RoundSizeBar />
            </div>
            <div>
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            </div>


        </div>
    );
}