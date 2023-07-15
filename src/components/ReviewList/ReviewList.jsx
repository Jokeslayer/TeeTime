import './ReviewList';
import Review from '../Review/Review';
import * as reviewsAPI from '../../utilities/reviews-api'


export default function ReviewList({ reviews, setReviews }) {

    async function handleDelete(review) {
        const trash = await reviewsAPI.deleteReview(review);
        const updatedReviews = reviews.filter((r) => r._id !== trash._id)
        setReviews(updatedReviews);
    }

    return (
        <div>
            {Array.isArray(reviews)
                ? reviews.map((review) => (
                    <div className='review'>
                        <p>{review.content}</p>
                        <button className='delete' onClick={() => handleDelete(review)}>Delete</button>
                    </div>
                ))
                :
                null}
        </div>
    );
}