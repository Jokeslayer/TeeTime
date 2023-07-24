import './Reservation.css';
import { Link } from 'react-router-dom';
import * as reservationsAPI from '../../utilities/reservations-api'


export default function Reservation({ reserve, setMyReservations }) {


    async function handleDelete(reserve) {
        const updatedReserves = await reservationsAPI.deleteReserve(reserve);
        setMyReservations(updatedReserves);
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
                <button><Link to={`/createReview/${reserve.course._id}`}>Write a Review</Link></button>
            </td>
            <td>
            <button className='delete' onClick={() => handleDelete(reserve)}>Delete</button>
            </td>
        </tr>
    );
}