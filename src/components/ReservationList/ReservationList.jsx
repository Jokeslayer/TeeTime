import './ReservationList.css';
import Reservation from '../Reservation/Reservation';

export default function ReservationList({ reservations, user }) {
    return (
        <div>
            <h1>ReservationList</h1>

            <table class="list">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Date</th>
                        <th>Time Slot</th>
                        <th>Size</th>
                        <th>Round Size</th>
                        <th>Price</th>
                        <th>Add Review</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        // if({user}==)
                        <Reservation reserve = {reservation} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}