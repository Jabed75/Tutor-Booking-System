import { Button, FieldError, Input, Label, ListBox, TextArea, TextField,Select, Card } from '@heroui/react';
import React from 'react';

const MyTutor = () => {
    return (
        <div className='p-5 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold'>My Tutor</h1>
            <Card>
              <form
            className="p-10 space-y-8 w-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="md:col-span-2">
                <TextField name="destinationName" isRequired>
                  <Label>Tutor Name</Label>
                  <Input placeholder="name" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" isRequired>
                <Label>Location</Label>
                <Input placeholder="Area/city" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="subjecr"
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
                      <ListBox.Item id="Beach" textValue="Beach">
                        Mathmatics
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Physics
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="City">
                        English
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Chemistry
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        HigherMath
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        All-Subject
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

            
              <TextField name="price" type="number" isRequired>
                <Label>Hourly fee</Label>
                <Input
                  type="number"
                  placeholder="2000"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              <TextField name="duration" isRequired>
                <Label>Time-Slot</Label>
                <Input
                  placeholder="12am-12pm"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              <TextField name="duration" isRequired>
                <Label>Institution/Exprience</Label>
                <Input
                  placeholder="University/year"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
              <TextField name="duration" isRequired>
                <Label>Teachig Mode-drodown</Label>
                <Input
                  placeholder="online/ofline"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="departureDate" type="date" isRequired>
                  <Label>Departure Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

             
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
              Add Tutor
            </Button>
          </form>
            </Card>
        </div>
    );
};

export default MyTutor;