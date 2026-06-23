"use client";
import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import { Card, Button } from '@heroui/react';
import React, { useState } from 'react';
import toast from "react-hot-toast";

const BookingCard = ({ tutor }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    console.log(user);
    const [departureDate, setDepartureDate] = useState(null);

    const { price, _id, tutorName, imageUrl, subject, location } = tutor || {};
    const hangleBooking = async () => {
        // if (!user) {
        //     alert("Please log in to booking a tutor.");
        //     return;
        // }

        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            tutorId: _id,
            tutorName,
            price,
            imageUrl,
            location,
            subject,
            departureDate: departureDate ? new Date(departureDate.year, departureDate.month - 1, departureDate.day) : null
        };

        try {
            const res = await fetch('http://localhost:5000/booking', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error("Booking failed:", error);
        }
        toast.success("You booked successfully")
    };

    return (
        <Card className='rounded-none border mt-5 p-5 shadow-sm'>
            <p className='text-sm text-gray-500'>Starting From</p>

            <h1 className='text-3xl font-bold'>${price || 0}</h1>
            <p className='text-sm text-gray-500 mb-4'>per Student</p>

            <DateField className="w-full mb-4" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                </DateField.Group>
            </DateField>

            <Button onClick={hangleBooking} className='w-full rounded-none bg-indigo-600 text-white font-semibold'>
                Book Now
            </Button>
        </Card>
    );
};

export default BookingCard;