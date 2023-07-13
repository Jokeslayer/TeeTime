const Course = require('../../models/course');

module.exports = {
    index,
};

async function index(req, res) {
    const courses = await Course.find({});

    res.json(courses);
}

// async function show(req, res) {
//     const item = await Item.findById(req.params.id);
//     res.json(item);
// }
