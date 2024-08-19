    const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add a new room
router.post('/', async (req, res) => {
    const { roomNumber, capacity } = req.body;

    try {
        let room = await Room.findOne({ roomNumber });
        if (room) {
            return res.status(400).json({ msg: 'Room already exists' });
        }

        room = new Room({ roomNumber, capacity });
        await room.save();
        res.json(room);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;