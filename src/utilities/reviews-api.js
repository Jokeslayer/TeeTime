import sendRequest from "./send-request";
const BASE_URL = '/api/reviews-api';

export async function create(review) {
    const newReview = await sendRequest(BASE_URL, 'POST', review);
    console.log(newReview, 'line 6 test')
    return newReview;
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function edit(review) {
    return sendRequest(BASE_URL, 'PUT', review);
}

export async function deleteReview(review) {
    return sendRequest(BASE_URL, 'DELETE', review);
}