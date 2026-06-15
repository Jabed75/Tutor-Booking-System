import { Link } from '@heroui/react';
import Image from 'next/image'; 
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-white p-5 shadow-sm'>
           
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

           
            <ul className='flex gap-5 font-medium'>
                <li>
                    <Link href='/profile'>Profile</Link>
                </li>
                <li>
                    <Link href='/login'>Login</Link>
                </li>
                <li>
                    <Link href='/signup'>Sign up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;