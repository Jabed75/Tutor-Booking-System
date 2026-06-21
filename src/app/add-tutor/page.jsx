"use client";
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Card } from '@heroui/react';
import React from 'react';

const AddTutor = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    
    const tutor = Object.fromEntries(formData.entries());
    

    // console.log(tutor); 

    const res = await fetch('http://localhost:5000/tutor', { 
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tutor)
    });

    const data = await res.json();
    // console.log(data);
  }; 

  return (
    <div className='p-5 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Add Tutor</h1>
      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="md:col-span-2">
              <TextField name="tutorName" isRequired>
                <Label>Tutor Name</Label>
                <Input placeholder="name" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Location */}
            <TextField name="location" isRequired>
              <Label>Location</Label>
              <Input placeholder="Area/city" className="rounded-2xl" />
              <FieldError />
            </TextField>

            
            <div>
              <Select
                name="subject"
                isRequired
                className="w-full"
                placeholder="Select subject"
              >
                <Label>Subject</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Mathematics" textValue="Mathematics">
                      Mathematics
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Physics" textValue="Physics">
                      Physics
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="English" textValue="English">
                      English
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Chemistry" textValue="Chemistry">
                      Chemistry
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Biology" textValue="Biology">
                      Biology
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="All-Subject" textValue="All-Subject">
                      All-Subject
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField name="price" type="number" isRequired>
              <Label>Hourly fee</Label>
              <Input type="number" placeholder="2000" className="rounded-2xl" />
              <FieldError />

            </TextField>
            <TextField name="price" type="number" isRequired>
              <Label>TotalSlot</Label>
              <Input type="number" placeholder="2000" className="rounded-2xl" />
              <FieldError />
            </TextField>

           <TextField name="duration" isRequired>
                           <Label>AvailableTimeSlot</Label>
                           <Input
                             placeholder="12am-12pm"
                             className="rounded-2xl"
                           />
                           <FieldError />
                         </TextField>
           
           <TextField name="day" isRequired>
                           <Label>AvailableDay</Label>
                           <Input
                             placeholder="Sun-Thu"
                             className="rounded-2xl"
                           />
                           <FieldError />
                         </TextField>
           

            <TextField name="experience" isRequired>
              <Label>Institution</Label>
              <Input placeholder="University/year" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <TextField name="experience" isRequired>
              <Label>Experience</Label>
              <Input placeholder="year" className="rounded-2xl" />
              <FieldError />
            </TextField>
            
            <TextField name="teachingMode" isRequired>
              <Label>TeachingMode</Label>
              <Input placeholder="online/offline" className="rounded-2xl" />
              <FieldError />
            </TextField>

            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>SessionStartDate</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>
            <div className="md:col-span-2">
              <TextField name="email" type="text" isRequired>
                <Label>Email</Label>
               <Input type="text" placeholder="xxx@gmail.com" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input type="url" placeholder="https://example.com/tutor.jpg" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

          
          </div>

          <Button type="submit" variant="outline" className="rounded-none w-full bg-cyan-500 text-white">
            Add Tutor
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddTutor;