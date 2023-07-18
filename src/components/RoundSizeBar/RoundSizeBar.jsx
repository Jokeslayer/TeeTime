import './RoundSizeBar.css';

export default function RoundSizeBar({ newReservation, handleChange }) {
    return (
        <div>
            <h1>Holes Selection</h1>
            <select>
              <option value="9">9</option>
              <option value="18">18</option>
              <option defaultValue={""}>--</option>
            </select>
        </div>
    );
}