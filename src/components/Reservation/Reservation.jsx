import './Reservation.css';
import * as reservationsAPI from '../../utilities/reservations-api'


import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CreateReview from '../../pages/CreateReview/CreateReview.jsx'

export default function Reservation({ reserve, setReservations  }) {
    const navigate = useNavigate();

    async function handleDelete(reservation) {
        const trash = await reservationsAPI.deleteReserve(reservation);
        setReservations(trash);
    }

    const date = new Date(reserve.date)
    const teetime = date.toLocaleDateString();
    
    return (
        <tr>
            <td>
                {reserve.course.name}
            </td>
            <td>
                {teetime}
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
            <td>
            <button className='delete' onClick={() => handleDelete(reserve)}>Delete</button>
            </td>
        </tr>
    );
}