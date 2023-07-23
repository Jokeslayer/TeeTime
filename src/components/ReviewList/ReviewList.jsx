import './ReviewList';
import Review from '../Review/Review';

export default function ReviewList({ user, course, handleDelete }) {
    return (
        <div>
            <table className="list">
                <thead>
                <tr>
                    <th>User name</th>
                    <th>Date</th>
                    <th>Review</th>
                </tr>
                </thead>
                <tbody>
                    {course.reviews.map((review) => (
                        <Review key={review._id} user={user} review={review} handleDelete={handleDelete} />
                    ))}

                </tbody>
            </table>
        </div>
    );
}