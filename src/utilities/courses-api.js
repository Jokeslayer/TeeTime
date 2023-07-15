import sendRequest from "./send-request";
const BASE_URL = '/api/courses';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function getCourse(course) {
    const myCourse = await sendRequest(`${BASE_URL}/${course._id}`)
    return myCourse;
}
