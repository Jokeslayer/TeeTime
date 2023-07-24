import sendRequest from "./send-request";
const BASE_URL = '/api/reservations';

export async function create(reservation) {
    const reserveData = await sendRequest(BASE_URL, 'POST', reservation);
    return reserveData;
}

export async function getDetails(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteReserve(reservation) {
    const trash = await sendRequest(`${BASE_URL}/${reservation._id}`, 'DELETE', reservation);
    return trash;
}
