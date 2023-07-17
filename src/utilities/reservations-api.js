import sendRequest from "./send-request";
const BASE_URL = '/api/reservations';

export async function create(reservation) {
    const reserveData = await sendRequest(BASE_URL, 'POST', reservation);
    console.log(reserveData, 'line 6 test')
    return reserveData;
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function deleteReserve(reservation) {
    const trash = await sendRequest(`${BASE_URL}/${reservation._id}`, 'DELETE', reservation);
    console.log(trash)
    return trash;
}
