import './PlayerNum.css';

export default function PlayerNum({ newReservation, handleChange }) {
    return (
        <div>
            <select name='size' value={newReservation.size} onChange={handleChange} required>
                <option disabled defaultValue={""}>How many people</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    );
}