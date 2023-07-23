const Reservation = require('../../models/reservation');

module.exports = {
    create,
    show,
    delete: deleteReserve
};

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
  
    const reservation = await Reservation.create(req.body);
    const newRes = await Reservation.findById(reservation._id).populate('course');
    res.json(newRes);
}

async function show(req, res) {
    const reservations = await Reservation.find({user: req.user._id}).populate('course');
    res.json(reservations);
}

async function deleteReserve(req, res) {
    try{
        await Reservation.findOneAndDelete({_id: req.body._id});
        const reservations = await Reservation.find({user: req.user._id}).populate('course');
        res.json(reservations);
    }
    catch (err) {
        console.log(err);
    }
  }