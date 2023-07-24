import { useState } from 'react';
import './CourseSelector.css';

export default function CourseSelector({ courses, newReservation }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleChange(evt) {
    setSelectedIndex(evt.target.options.selectedIndex)

  }

  return (
    <div>
      <select name='course' value={newReservation.course} onChange={handleChange} required>
        {courses.map((course) => (
          <option key={course._id} value={course._id}>{course.name}</option>
        ))}
      </select>
    </div>
  );
}