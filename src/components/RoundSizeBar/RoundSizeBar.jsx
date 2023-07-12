import './RoundSizeBar.css';

export default function RoundSizeBar() {
    return (
        <div>
            <h1>Holes Selection</h1>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="" selected>--</option>
            </select>
        </div>
    );
}