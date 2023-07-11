import { useState, useEffect, useRef } from 'react';
import './CourseInfoPage.css';
import ReviewList from '../../components/ReviewList/ReviewList';
import CourseText from '../../components/CourseText/CourseText';

export default function CourseInfoPage() {
    return (
        <div className="course-display">
            <h1>CourseInfoPage</h1>
            <CourseText />
                <div className="cover"></div>
            <div className="review-section">
            <ReviewList />
            </div>
        </div>
    );
}