"use client"

import { UpdateUserModal } from '@/components/UpdateUserProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from "@heroui/react";
import React from 'react';

const ProfilePage = () => {
    
    const { data, isPending } = authClient.useSession();
    
    const user = data?.user;
    
    const fallbackLetter = user?.name ? user.name.charAt(0).toUpperCase() : "?";

    const validImageSrc = user?.image && user.image.trim() !== "" ? user.image : undefined;

    return (
        <div className="p-4">
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5 p-6 gap-4'>
                
                <Avatar 
                    src={validImageSrc} 
                    name={fallbackLetter}
                    
                    className='w-24 h-24 text-large ring-2 ring-primary ring-offset-2 bg-primary/10 text-primary font-semibold'
                    
                />

                <div className="text-center">
                    
                    <h2 className='text-xl font-bold'>
                        {isPending ? "Loading..." : (user?.name || "No Name")}
                    </h2>
                    <p className='text-default-500 text-sm'>
                        {isPending ? "Please wait..." : (user?.email || "No email available")}
                    </p>
                </div>

                <UpdateUserModal />

            </Card>
        </div>
    );
};

export default ProfilePage;