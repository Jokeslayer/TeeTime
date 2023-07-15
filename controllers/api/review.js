const Review = require('../models/review');

module.exports = {
    create,
    edit,
    delete: deleteReview
};

async function deleteReview(req, res) {
    const trash = await Note.findOneAndDelete({ _id: req.body._id });
    res.json(trash);
}

async function create(req, res) {
    const reviews = await Review.findById(req.params.id);

    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log("this is the reviews controller create function: ", req.body);
    // We can push (or unshift) subdocs into Mongoose arrays
    reviews.reviews.push(req.body);
    try {
        // Save any changes made to the reviews doc
        await reviews.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/reviews/${reviews._id}`);
}


async function edit(req, res) {
    const reviews = await Reviews.findById(req.params.id);
    res.render('reviews/edit', { title: 'Please be careful with my collection', genre, reviews });
}