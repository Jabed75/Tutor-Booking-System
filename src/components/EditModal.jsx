"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function EditModal({ tutor }) {
  const {
    _id,
    tutorName,
    location,
    subject,
    price,
    totalSlot,
    duration,
    day,
    institution,
    experience,
    teachingMode,
    departureDate,
    email,
    imageUrl,
  } = tutor || {};
console.log(_id)
  const onSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());
    console.log(updatedData)
     const res = await fetch(`http://localhost:5000/tutor/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData), 

      });

      const data = await res.json();
      console.log(data);
  };

  return (
    <Modal>
      <div className='flex justify-end'>
        <Button variant='outline' className={'rounded-none '}><BiEdit /></Button>
      </div>

      <Modal.Backdrop>
       
        <Modal.Container placement="auto" scrollBehavior="inside">
          <Modal.Dialog className="sm:max-w-xl max-h-[90vh]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Tutor</Modal.Heading>
            </Modal.Header>

           
            <Modal.Body className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <Surface variant="default">
               <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           
                           <div className="md:col-span-2">
                             <TextField defaultValue={tutorName} name="tutorName" >
                               <Label>Tutor Name</Label>
                               <Input placeholder="name" className="rounded-2xl" />
                               <FieldError />
                             </TextField>
                           </div>
               
                           {/* Location */}
                           <TextField defaultValue={location} name="location">
                             <Label>Location</Label>
                             <Input placeholder="Area/city" className="rounded-2xl" />
                             <FieldError />
                           </TextField>
               
                           
                           <div>
                             <Select defaultValue={subject}
                               name="subject"
                               
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
               
                           <TextField defaultValue={price} name="price" type="number">
                             <Label>Hourly fee</Label>
                             <Input type="number" placeholder="2000" className="rounded-2xl" />
                             <FieldError />
               
                           </TextField>
                           <TextField defaultValue={totalSlot}>
                        <Label>Total Slot</Label>
 
                        <Input name="totalSlot" type="number" placeholder="5" className="rounded-2xl" />
                       <FieldError />
                         </TextField>
               
                          <TextField defaultValue={duration} name="duration">
                                          <Label>AvailableTimeSlot</Label>
                                          <Input
                                            placeholder="12am-12pm"
                                            className="rounded-2xl"
                                          />
                                          <FieldError />
                                        </TextField>
                          
                          <TextField defaultValue={day} name="day">
                                          <Label>AvailableDay</Label>
                                          <Input
                                            placeholder="Sun-Thu"
                                            className="rounded-2xl"
                                          />
                                          <FieldError />
                                        </TextField>
                          
               
                           <TextField defaultValue={institution} name="institution">
                             <Label>Institution</Label>
                             <Input placeholder="University/year" className="rounded-2xl" />
                             <FieldError />
                           </TextField>
               
                           <TextField defaultValue={experience} name="experience">
                             <Label>Experience</Label>
                             <Input placeholder="year" className="rounded-2xl" />
                             <FieldError />
                           </TextField>
                           
                           <TextField defaultValue={teachingMode} name="teachingMode">
                             <Label>TeachingMode</Label>
                             <Input placeholder="online/offline" className="rounded-2xl" />
                             <FieldError />
                           </TextField>
               
                           <div className="md:col-span-2">
                             <TextField defaultValue={departureDate} name="departureDate" type="date">
                               <Label>SessionStartDate</Label>
                               <Input type="date" className="rounded-2xl" />
                               <FieldError />
                             </TextField>
                           </div>
                           <div className="md:col-span-2">
                             <TextField defaultValue={email} name="email" type="text">
                               <Label>Email</Label>
                              <Input type="text" placeholder="xxx@gmail.com" className="rounded-2xl" />
                               <FieldError />
                             </TextField>
                           </div>
               
                           <div className="md:col-span-2">
                             <TextField defaultValue={imageUrl} name="imageUrl">
                               <Label>Image URL</Label>
                               <Input type="url" placeholder="https://example.com/tutor.jpg" className="rounded-2xl" />
                               <FieldError />
                             </TextField>
                           </div>
               
                         
                         </div>
               
                         <Button type="submit" variant="outline" className="rounded-none w-full bg-cyan-500 text-white">
                           Edit Tutor
                         </Button>
                       </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}