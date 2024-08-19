import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RoomsPage() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await axios.get('/api/rooms');
                setRooms(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchRooms();
    }, []);

    return (
        <div>
            <h1>Rooms</h1>
            <ul>
                {rooms.map(room => (
                    <li key={room._id}>
                        {room.roomNumber} - Capacity: {room.capacity} - Occupied: {room.occupied}