const Reservation = require('../../models/reservation');

module.exports = {
    create,
    index,
    delete: deleteReserve
};

async function create(req, res) {
    //let price = 

    const reservation = await Reservation.create(req.body);
    res.json(reservation);
}

async function index(req, res) {
    const reservations = await Reservation.find({});
    console.log(reservations)
    res.json(reservations);
}

function deleteReserve(req, res) {
    Reservation.deleteOne(req.params.id);
    res.redirect('/scheduler');
  }