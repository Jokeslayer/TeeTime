const Course = require('../../models/course');

module.exports = {
    index,
    show,
};

async function index(req, res) {
    const courses = await Course.find({});
    res.json(courses);
}

async function show(req, res) {
    const course = await Course.findById(req.params.id);

    res.json(course);
}
