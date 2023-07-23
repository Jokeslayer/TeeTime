import './AccountPage.css';
import ReservationList from '../../components/ReservationList/ReservationList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as reservationsAPI from '../../utilities/reservations-api';



export default function AccountPage({ user }) {
    const [reservations, setReservations] = useState();
    const { id } = useParams();

    useEffect(function () {
        async function getReservations() {
            const myReservations = await reservationsAPI.getDetails(id);
            setReservations(myReservations);
        }
        getReservations();
    }, [id])
    
    console.log(reservations);
    return (
        <div className='page'>
            <ReservationList reservations={reservations} user={user} setReservations={setReservations} />
        </div>
    );
}