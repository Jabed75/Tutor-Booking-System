"use client";
import { Avatar, Button, Link } from '@heroui/react';
import Image from 'next/image'; 
import { authClient } from "@/lib/auth-client"; 
import React from 'react';

const Navbar = () => {
    
    
const { data: session } = authClient.useSession();

const user = session?.user;
console.log(user);

const handleSignout = async()=>{
    await authClient.signOut();
} ;
    return (
        <nav className='flex  justify-between items-center bg-white p-5 shadow-sm'>
           
            <ul className='flex gap-5 font-medium'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/tutor'>Tutor</Link>
                </li>
                <li>
                    <Link href='/my-tutor-booking'>My Tutor Booking</Link>
                </li>
                <li>
                    <Link href='/add-tutor'>Add Tutor</Link>
                </li>
                <li>
                    <Link href='/my-tutor'>My Tutor</Link>
                </li>
            </ul>
    
            
            <div>
                <Image 
                    src='/assets/wanderlast.png' 
                    height={150}
                    width={150}
                    alt="logo"
                />
            </div>

           
            <ul className='flex items-center gap-5 font-medium'>
                <li>
                    <Link href='/profile'>Profile</Link>
                </li>

              { user ? <>
              <li>
                <Avatar 
                                src={user?.image} 
                                name={user?.name ? user.name.charAt(0) : "U"} 
                                size="md"
                            />
              </li>
              <li>
                <Button onClick={handleSignout} variant='danger' className={'rounded-none'}>Logout</Button>
              </li>
              </> : <>
                
                <li>
                    <Link href='/login'>Login</Link>
                </li>
                <li>
                    <Link href='/register'>Register</Link>
                </li>
                </>}
            </ul>
        </nav>
    );
};

export default Navbar;