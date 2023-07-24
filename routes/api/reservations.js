const express = require('express');
const router = express.Router();
const reserveCtrl = require('../../controllers/api/reservations');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/:id', reserveCtrl.index);

// POST /api/reservations
router.post('/', ensureLoggedIn, reserveCtrl.create);

router.delete('/:id', ensureLoggedIn, reserveCtrl.delete);

module.exports = router;