const Course = require('../../models/course');

module.exports = {
    index,
    show,
    addReview,
    deleteReview
};

async function index(req, res) {
    const courses = await Course.find({});
    res.json(courses);
}

async function show(req, res) {
    const course = await Course.findById(req.params.id);

    res.json(course);
}

async function deleteReview(req, res) {
    try {
        const course = await Course.findById(req.params.courseID);
        course.reviews.remove(req.params.reviewID);
        // Save the updated book
        const updatedCourse = await course.save();
        res.json(updatedCourse);
    }
    catch (err) {
        console.log(err);
    }
}

async function addReview(req, res) {
    try {

        // Add the user-centric info to req.body (the new review)
        const course = await Course.findById(req.params.id);
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        // We can push (or unshift) subdocs into Mongoose arrays
        course.reviews.push(req.body);
        // Save any changes made to the reviews doc
        await course.save();
        res.json("success");

    } catch (err) {
        console.log(err);
    }
}


// async function edit(req, res) {
//     const reviews = await Reviews.findById(req.params.id);
//     res.render('reviews/edit', { title: 'Please be careful with my collection', genre, reviews });
// }
