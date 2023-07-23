const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/api/reservations');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/reservations
router.get('/', reviewCtrl.index);

// POST /api/reservations
router.post('/', ensureLoggedIn, reviewCtrl.create);

router.delete('/:id', ensureLoggedIn, reviewCtrl.delete);

// router.put('/:id', ensureLoggedIn, reviewCtrl.edit);

module.exports = router;