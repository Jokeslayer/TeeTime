const express = require('express');
const router = express.Router();
const reserveCtrl = require('../../controllers/api/reservations');

// GET /api/courses
router.get('/', reserveCtrl.index);

// POST /api/reservations
router.post('/', reserveCtrl.create);

router.delete('/:id', ensureLoggedIn, reserveCtrl.delete);

module.exports = router;