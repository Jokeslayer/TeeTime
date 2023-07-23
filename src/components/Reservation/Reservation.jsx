import './Reservation.css';
import * as reservationsAPI from '../../utilities/reservations-api'
import { Link } from 'react-router-dom';

export default function Reservation({ reserve, setReservations }) {

    async function handleDelete(reservation) {
        const updatedReserves = await reservationsAPI.deleteReserve(reservation);
        setReservations(updatedReserves);
    }

    const date = new Date(reserve.date)
    const teetime = date.toLocaleDateString();
    //console.log("this is the reservation component",reserve)
    return (
        <tr>
            <td>
                {reserve.course}
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
                <button><Link to={`/createReview/${reserve.course}`}>Write a Review</Link></button>
            </td>
            <td>
            <button className='delete' onClick={() => handleDelete(reserve)}>Delete</button>
            </td>
        </tr>
    );
}