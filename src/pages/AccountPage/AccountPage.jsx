import './AccountPage.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ReservationList from '../../components/ReservationList/ReservationList';
import * as coursesAPI from '../../utilities/courses-api';
import * as reservationsAPI from '../../utilities/reservations-api';

export default function AccountPage({user, reservations, setReservations}) {


    // useEffect(function () {
    //     async function getCourses() {
    //         const courses = await coursesAPI.getAll();
    //         setCourses(courses);
    //     }
    //     getCourses();

    // }, [])

    return (
        <div className='page'>
            <h1>AccountPage</h1>
            <br/>
            <ReservationList reservations={reservations} user={user} setReservations={setReservations}/>
        </div>
    );
}