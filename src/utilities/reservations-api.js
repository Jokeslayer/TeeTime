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
    return sendRequest(BASE_URL, 'DELETE', reservation);
}
