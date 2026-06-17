"use client";

import { useState } from "react"; // React থেকে useState নেওয়া হলো
import { authClient } from "@/lib/auth-client";
import { 
  Button, 
  Input, 
  Modal,   
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  ModalContainer
} from "@heroui/react"; // useDisclosure এখান থেকে বাদ দেওয়া হয়েছে
import { BiEdit, BiUser } from "react-icons/bi";
import { useRouter } from "next/navigation"; 

export function UpdateUserModal() {
  //useDisclosure-এর বিকল্প হিসেবে React State
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); 

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    
    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });
      
      onClose(); // আপডেট সফল হলে মোডাল বন্ধ হবে
      router.refresh(); // পেজ রিফ্রেশ করে নতুন ডাটা দেখাবে
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <>
      {/* মোডাল ওপেন করার বাটন */}
      <Button onPress={onOpen} variant="flat" color="secondary" startContent={<BiEdit />}>
        Update Profile
      </Button>

      {/* মোডাল উইন্ডো */}
      <Modal isOpen={isOpen} onClose={onClose} placement="auto" backdrop="blur">
        <ModalContainer>
          <form onSubmit={onSubmit}>
            <ModalHeader className="flex gap-2 items-center border-b border-divider">
              <BiUser className="size-5 text-primary" />
              <span className="font-semibold">Update User Profile</span>
            </ModalHeader>
            
            <ModalBody className="flex flex-col gap-4 py-6">
              <Input 
                label="Name" 
                name="name" 
                placeholder="Enter your name" 
                variant="bordered" 
                labelPlacement="outside"
              />
              <Input 
                label="Image URL" 
                name="image" 
                placeholder="Paste image url" 
                variant="bordered" 
                type="url"
                labelPlacement="outside"
              />
            </ModalBody>
            
            <ModalFooter className="border-t border-divider">
              {/* ক্যানসেল বাটনে ক্লিক করলে মোডাল বন্ধ হবে */}
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save Changes
              </Button>
            </ModalFooter>
          </form>
        </ModalContainer>
      </Modal>
    </>
  );
}