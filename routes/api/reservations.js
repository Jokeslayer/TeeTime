const express = require('express');
const router = express.Router();
const reserveCtrl = require('../../controllers/api/reservations');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/reservations
router.get('/', reserveCtrl.index);

// POST /api/reservations
router.post('/', reserveCtrl.create);

router.delete('/:id', ensureLoggedIn, reserveCtrl.delete);

module.exports = router;