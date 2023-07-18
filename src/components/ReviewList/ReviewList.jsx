import './ReviewList';
import Review from '../Review/Review';

export default function ReviewList({course}) {
    return (
        <div>
            <table class="list">
                <tbody>
                    {course.reviews.map((review) => (
                        <Review review={review}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}