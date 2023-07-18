import './ReviewList';
import Review from '../Review/Review';

export default function ReviewList({course, handleDelete}) {
    return (
        <div>
            <table className="list">
                <tbody>
                    {course.reviews.map((review) => (
                        <Review key={review._id} review={review} handleDelete={handleDelete}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}