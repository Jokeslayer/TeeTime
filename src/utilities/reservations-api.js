import sendRequest from "./send-request";
const BASE_URL = '/api/reservations';

export async function create(reservation) {
    return sendRequest(BASE_URL, 'POST', reservation);
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function deleteReserve(reservation) {
    return sendRequest(BASE_URL, 'DELETE', reservation);
}
