"use client"

import UpdateUserModal from '@/components/UpdateUserProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from "@heroui/react";
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    
    const cleanImage = user?.image ? user.image.trim() : undefined;
    
    
    const fallbackLetter = user?.name ? user.name.charAt(0).toUpperCase() : "?";
    console.log(cleanImage)

    return (
        <div className="p-4">
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5 p-6 gap-4'>
                
                <img src={cleanImage} alt="" />
            
                <div className="text-center">
                    <h2 className='text-xl font-bold'>{user?.name || "No Name"}</h2>
                    <p className='text-default-500 text-sm'>{user?.email || "No email available"}</p>
                </div>

                <UpdateUserModal />

            </Card>
        </div>
    );
};

export default ProfilePage;