import { useState, useEffect, useRef } from 'react';
import './SchedulerPage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CourseSelector from '../../components/CourseSelector/CourseSelector';
import PlayerNum from '../../components/PlayerNum/PlayerNum';
import RoundSizeBar from '../../components/RoundSizeBar/RoundSizeBar';
import TimeSlot from '../../components/TimeSlot/TimeSlot';
import * as reservationsAPI from '../../utilities/reservations-api';



export default function SchedulerPage({ courses, reservations, setReservations }) {
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

        const {name,value,type,checked} = evt.target
        const inputVal = type === 'checkbox'? checked : value;

        setNewReservation((prevReservation)=>({
            ...prevReservation,
            [name]:inputVal
        }));
    }

    //sends the post request adding the new reservation object to the db
    async function handleAddReservation(evt) {
        evt.preventDefault();
        const reservation = await reservationsAPI.create(newReservation);
        setReservations([...reservations, reservation]);
    }

    return (
        <div className='page'>
            <h1>SchedulerPage</h1>
            <form className='reserve' onSubmit={handleAddReservation}>
                <CourseSelector courses={courses} newReservation={newReservation} handleChange={handleChange} />
                <PlayerNum newReservation={newReservation} handleChange={handleChange} />
                <RoundSizeBar newReservation={newReservation} handleChange={handleChange} />
                <label>time :</label>
                {/* <input
                    name="timeSlot"
                    type="time"
                    value={newReservation.time}
                    onChange={handleChange}
                    placeholder="time"
                    required
                /> */}
                {/* <label>Date:</label>
                <input
                    name="date"
                    type="date"
                    value={newReservation.date}
                    onChange={handleChange}
                    required
                /> */}

                <label>Size</label>
                <input
                    name="size"
                    type="number"
                    value={newReservation.time}
                    onChange={handleChange}
                    placeholder="1"
                    required
                />

                <label>Length</label>
                <select name="length" value={newReservation.roundLength} onChange={handleChange}>
                    <option>9</option>
                    <option>18</option>
                </select>
                <label>cart:</label>
                <input
                    name="cart"
                    type="checkbox"
                    value={newReservation.cart}
                    onChange={handleChange}
                    required
                />
                <button>
                    <input type="submit" value="Add Reservation" />
                </button>

                {/* <Calendar onChange={onChange} value={value} /> */}
            </form>
            {/* <div>
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