import './AccountPage.css';
import ReservationList from '../../components/ReservationList/ReservationList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as reservationsAPI from '../../utilities/reservations-api';

export default function AccountPage({ user, myReservations, setMyReservations }) {
    console.log("this is supposed to be only 1 user", myReservations);

    return (
        <div className='page'>
            <ReservationList reservations={myReservations} user={user} setReservations={setMyReservations} />
        </div>
    );
}