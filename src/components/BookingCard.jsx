"use client";
import { DateField, Label } from "@heroui/react";
import { Card, Button } from '@heroui/react';
import React from 'react';

const BookingCard = ({ tutor }) => {
    
 
    const price = tutor?.price;

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

            <Button className='w-full rounded-none bg-indigo-600 text-white font-semibold'>
                Book Now
            </Button>
        </Card>
    );
};

export default BookingCard;