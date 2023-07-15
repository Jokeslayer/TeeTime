const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');

// GET /api/courses
router.get('/', coursesCtrl.index);

router.get('/:id', coursesCtrl.show);

module.exports = router;