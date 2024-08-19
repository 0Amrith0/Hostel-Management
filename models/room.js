const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomNumber: { type: String, required: true, unique: true },
    capacity: { type: Number, required: true },
    occupied: { type: Number, default: 0 },
});

const Room = mongoose.model('Room', RoomSchema);
module.exports = Room;
