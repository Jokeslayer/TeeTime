import './CourseSelector.css';
import { useState, useEffect, useRef } from 'react';


export default function CourseSelector({courses}) {


    return (
        <div>
            <select required>
              <option value="" disabled selected>Pick your golf course</option>
              {courses.map((course)=>(
                <option key={course._id} value={course._id}>{course.name}</option>
              ))}
              
            </select>
        </div>
    );
}