import './CourseSelector.css';

export default function CourseSelector({courses, newReservation, handleChange}) {

    return (
        <div className='selector'>
            <select name='course' value={newReservation.course} onChange={handleChange} required>
              <option disabled defaultValue={""}>Pick your golf course</option>
              {courses.map((course)=>(
                <option key={course._id} value={course._id}>{course.name}</option>
              ))}
            </select>
        </div>
    );
}