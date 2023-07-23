const express = require('express');
const router = express.Router();
const reserveCtrl = require('../../controllers/api/reservations');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/reservations
router.get('/', reserveCtrl.index);

router.get('/:id', reserveCtrl.show);

// POST /api/reservations
router.post('/', ensureLoggedIn, reserveCtrl.create);

router.delete('/:id', ensureLoggedIn, reserveCtrl.delete);

module.exports = router;