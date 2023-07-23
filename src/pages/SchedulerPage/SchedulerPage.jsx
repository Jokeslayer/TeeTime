import { useState, useEffect, useRef } from 'react';
import './SchedulerPage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CourseSelector from '../../components/CourseSelector/CourseSelector';
import PlayerNum from '../../components/PlayerNum/PlayerNum';
import RoundSizeBar from '../../components/RoundSizeBar/RoundSizeBar';
import TimeSlot from '../../components/TimeSlot/TimeSlot';
import * as reservationsAPI from '../../utilities/reservations-api';
import { useNavigate } from 'react-router-dom';



export default function SchedulerPage({ user, courses, reservations, setReservations }) {
    const navigate = useNavigate();
    const [newReservation, setNewReservation] = useState({
        timeSlot: "",
        date: "",
        cart: false,
        size: 1,
        roundLength: 18,
    });

    //update the state of properties of the new reservation object submitted by form
    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property

        const { name, value, type, checked } = evt.target
        const inputVal = type === 'checkbox' ? checked : value;

        setNewReservation((prevReservation) => ({
            ...prevReservation,
            [name]: inputVal
        }));
    }

    //sends the post request adding the new reservation object to the db
    async function handleAddReservation(evt) {
        evt.preventDefault();
        const reservation = await reservationsAPI.create(newReservation);
        setReservations([...reservations, reservation]);
        navigate(`/account/${user._id}`)
    }

    return (
        <div className='scheduler'>
            {/* <h1>SchedulerPage</h1> */}

            <div className='planner'>
                <form className='form-style' onSubmit={handleAddReservation}>
                    <div>
                        Please select a course
                        <CourseSelector courses={courses} newReservation={newReservation} handleChange={handleChange} />
                    </div>
                        <br />
                    <div>
                        how many guests will you be bringing?
                        <PlayerNum newReservation={newReservation} handleChange={handleChange} />
                    </div>
                        <br />
                    <div>
                        Full/Half round
                        <RoundSizeBar newReservation={newReservation} handleChange={handleChange} />
                    </div>
                        <br />
                    <div>
                        <label>Timeslot:</label>
                        <input
                            name="timeSlot"
                            type="time"
                            value={newReservation.timeSlot}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <br />
                    <div>
                        <label>Date:</label>
                        <input
                            name="date"
                            type="date"
                            value={newReservation.date}
                            onChange={handleChange}
                            required
                        />

                    </div>
                    <br />
                    <div>
                        Would you like a cart?
                        <br/>
                    <input
                        className="checker"
                        name="cart"
                        type="checkbox"
                        value={newReservation.cart}
                        onChange={handleChange}
                    />
                    </div>
                    <br />
                    <button>
                        <input type="submit" value="Add Reservation" />
                    </button>

                    {/* <Calendar onChange={onChange} value={value} /> */}
                </form>
            </div>
            {/* <div className='times'>
                
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
            </div> */}
        </div>
    );
}