const Reservation = require('../../models/reservation');

module.exports = {
    create,
    index,
    delete: deleteReserve
};

async function create(req, res) {
    //let price = 
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
  
    const reservation = await Reservation.create(req.body);
    res.json(reservation);
}

async function index(req, res) {
    const reservations = await Reservation.find({user: req.user._id}).populate('course');
    res.json(reservations);
}

async function deleteReserve(req, res) {
    await Reservation.findOneAndDelete({_id: req.body._id});
    const reservations = await Reservation.find({user: req.user._id}).populate('course');
    res.json(reservations);
  }