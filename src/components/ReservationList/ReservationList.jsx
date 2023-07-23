import './ReservationList.css';
import Reservation from '../Reservation/Reservation';

export default function ReservationList({ myReservations, setReservations}) {
    //console.log("this is supposed to be only 1 user", myReservations);

    return (
        <div>
            <table className="list">
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
                    {myReservations.map((reservation) => (
                        <Reservation key={reservation._id} reserve={reservation} setReservations={setReservations} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}