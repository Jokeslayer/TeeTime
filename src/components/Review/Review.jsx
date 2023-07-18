import './Review.css';

export default function Review({review, handleDelete}) {

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