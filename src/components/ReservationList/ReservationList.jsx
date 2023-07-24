import './ReservationList.css';
import Reservation from '../Reservation/Reservation';


export default function ReservationList({ user, myReservations, setMyReservations }) {
    console.log("I hope this works", myReservations)

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
                    {myReservations.map((reserve) => (
                        <Reservation key={reserve._id} reserve={reserve} setMyReservations={setMyReservations} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}