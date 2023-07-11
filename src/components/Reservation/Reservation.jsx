import './Reservation.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CreateReview from '../../pages/CreateReview/CreateReview.jsx'

export default function Reservation() {
    return (
        <div>
            <h1>Reservation</h1>

            <Routes>
            <Route path="/createReview" element={<CreateReview />} />

            </Routes>
            <button><Link to="/createReview">Write a Review</Link></button>

        </div>
    );
}