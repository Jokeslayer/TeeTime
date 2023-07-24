import './Review.css';

export default function Review({ user, review, handleDelete}) {

    if(user._id === review.user){
        return (
            <tr>
                <td>
                    {review.userName}
                </td>
                <td>
                    {review.createdAt}
                </td>
                <td>
                    {review.content}
                </td>
                <td>
                    <button className='delete' onClick={() => handleDelete(review)}>Delete</button>
                </td>
            </tr>
        );
    }
    return (
        <tr>
            <td>
                {review.userName}
            </td>
            <td>
                {review.createdAt}
            </td>
            <td>
                {review.content}
            </td>
        </tr>
    );
}