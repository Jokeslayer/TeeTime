import { useState} from 'react';
import './CreateReview.css';
import { useNavigate, useParams } from 'react-router-dom';
import * as coursesAPI from '../../utilities/courses-api';


export default function CreateReview({ courses }) {
  const navigate=useNavigate();
  const [newReview, setNewReview] = useState({
    content: ''
  });

  const {id} = useParams();

  async function handleAddReview(evt) {
    evt.preventDefault();
    await coursesAPI.addReview(newReview,id);
    setNewReview({content: ''});
    navigate(`/courses/${id}`);
}

  async function handleChange(evt) {
    setNewReview({...newReview, [evt.target.name]: evt.target.value });
  }

  return (
    <div className='page'>
      <h1>How was the course?</h1>
      <form id="add-note-form" onSubmit={handleAddReview}>
        <textarea className='form-text' name="content" value={newReview.content} onChange={handleChange}></textarea>
        <button className='adder' type="submit">Add Review</button>
      </form>
    </div>
  );
}