const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');

// GET /api/courses
router.get('/', coursesCtrl.index);

router.get('/:id', coursesCtrl.show);

router.post('/:id/reviews', coursesCtrl.addReview);

router.delete('/:courseID/reviews/:reviewID', coursesCtrl.deleteReview);

module.exports = router;