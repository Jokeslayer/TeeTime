import './Reservation.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CreateReview from '../../pages/CreateReview/CreateReview.jsx'

export default function Reservation(reserve) {
    return (
        <div>

            <>
            <tr>
                <td>
                    {reserve.course}
                </td>
                <td>
                    {reserve.date}
                </td>
                <td>
                    {reserve.timeSlot}
                </td>
                <td>
                    {reserve.size}
                </td>
                <td>
                    {reserve.roundLength}
                </td>
                <td>
                    {reserve.price}
                </td>
                <td>
                 <button><Link to="/createReview">Write a Review</Link></button>
                </td>
            </tr>
            </>
        </div>
    );
}