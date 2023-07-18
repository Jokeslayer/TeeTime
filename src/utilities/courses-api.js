import sendRequest from "./send-request";
const BASE_URL = '/api/courses';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function getCourse(id) {
    const myCourse = await sendRequest(`${BASE_URL}/${id}`)
    return myCourse;
}

export async function addReview(review,id) {
    return sendRequest(`${BASE_URL}/${id}/reviews`, 'POST', review);
}

export async function editReview(review) {
    return sendRequest(BASE_URL, 'PUT', review);
}

export async function deleteReview(review_id, course_id) {
    return sendRequest(`${BASE_URL}/${course_id}/reviews/${review_id}`, 'DELETE');
}