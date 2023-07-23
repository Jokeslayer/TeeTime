import './AccountPage.css';
import ReservationList from '../../components/ReservationList/ReservationList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as reservationsAPI from '../../utilities/reservations-api';



export default function AccountPage({ user, reservations }) {
    const [myReservations, setMyReservations] = useState(reservations);
    const { id } = useParams();

    useEffect(function () {
        async function getMyReservations() {
            const myReservations = await reservationsAPI.getDetails(id);
            setMyReservations(myReservations);
        }
        getMyReservations();
    }, [id])
    
    console.log("this is supposed to be only 1 user", myReservations);
    
    console.log("this is everybody", reservations);

    return (
        <div className='page'>
            <ReservationList reservations={reservations} user={user} setReservations={setMyReservations} />
        </div>
    );
}