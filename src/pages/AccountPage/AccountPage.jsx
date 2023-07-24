import './AccountPage.css';
import ReservationList from '../../components/ReservationList/ReservationList';

export default function AccountPage({ user, myReservations, setMyReservations }) {
    return (
        <div className='page'>
            <ReservationList myReservations={myReservations} user={user} setMyReservations={setMyReservations} />
        </div>
    );
}