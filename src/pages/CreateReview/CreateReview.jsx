import { useState, useEffect } from 'react';
import './CreateReview.css';
import { useNavigate } from 'react-router-dom';


export default function CreateReview({ courses, handleAddReview }) {
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState({
    content: ''
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    handleAddReview(newReview);
    setNewReview({
      content: "",
    });
    navigate('/CourseInfoPage/:_id');
  }

  async function handleChange(evt) {
    setNewReview({ [evt.target.content]: evt.target.value });
  }

  return (
    <div className='page'>
      <form id="add-note-form" onSubmit={handleSubmit}>
        <textarea name="content" value={newReview.content} onChange={handleChange}></textarea>
        <button>
          <input type="submit" value="Add Reservation" />
        </button>
      </form>
    </div>
  );
}