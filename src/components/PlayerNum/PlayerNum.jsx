import './PlayerNum.css';

export default function PlayerNum({ newReservation, handleChange }) {
    return (
        <div className='party'>
            <select name='size' value={newReservation.size} onChange={handleChange} required>
                <option disabled>How many people</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    );
}