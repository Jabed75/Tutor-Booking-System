import { Button, Link } from '@heroui/react';
import React from 'react';

const Tutorpage = async () => {
    
    const res = await fetch('http://localhost:5000/tutor', { cache: 'no-store' });
    const tutors = await res.json();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
           
                <header className="mb-16 text-center">
                    <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">
                        Premium Tutors
                    </span>
                    <h1 className="mt-3 text-4xl font-black text-gray-950 tracking-tight sm:text-5xl">
                        Find Expert Tutors
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
                        Dhaka-r shera professional shikkhokder khunje nin khub shojei.
                    </p>
                </header>

              
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tutors.map((tutor) => (
                        <div 
                            key={tutor._id} 
                            className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                        >
                            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 h-28 overflow-hidden">
                                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                               
                                <div className="absolute -right-10 -top-10 w-28 h-28 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                                
                              
                                <img
                                    src={tutor.imageUrl}
                                    alt={tutor.tutorName}
                                    className="absolute bottom-[-30px] left-6 w-20 h-20 rounded-2xl border-4 border-white object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                           
                            <div className="p-6 pt-12 flex-grow flex flex-col justify-between">
                                <div>
                                    
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h2 className="text-xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 truncate">
                                            {tutor.tutorName}
                                        </h2>
                                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-lg shrink-0">
                                            {tutor.subject}
                                        </span>
                                    </div>
                                    
                                  
                                    <p className="text-sm text-gray-500 flex items-center gap-1.5 font-medium">
                                        <span className="text-indigo-500">📍</span> {tutor.location}
                                    </p>

                                 
                                    <div className="grid grid-cols-2 gap-3 my-5 p-3.5 bg-gray-50/80 rounded-2xl border border-gray-100 text-sm">
                                        <div>
                                            <span className="block text-xs text-gray-400 font-semibold uppercase tracking-wider">Experience</span>
                                            <span className="font-bold text-gray-800">{tutor.experience}</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-gray-400 font-semibold uppercase tracking-wider">Mode</span>
                                            <span className="font-bold text-gray-800 capitalize">{tutor.teachingMode}</span>
                                        </div>
                                    </div>

                                   
                                    <div className="space-y-2.5 text-sm border-b border-gray-100 pb-5">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 font-medium flex items-center gap-2">📅 Days:</span>
                                            <span className="font-semibold text-gray-800 bg-gray-100 px-2.5 py-0.5 rounded-md text-xs">{tutor.day}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 font-medium flex items-center gap-2">⏰ Time:</span>
                                            <span className="font-semibold text-gray-800">
                                                {tutor.duration === '10am-111m' ? '10am - 11pm' : tutor.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                        
                                <div className="mt-5 pt-2 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider">HourlyFee</span>
                                        <div className="flex items-baseline">
                                            <span className="text-3xl font-black text-gray-950">${tutor.price}</span>
                                            <span className="text-xs font-bold text-gray-500 ml-1">/hr</span>
                                        </div>
                                    </div>
                                   {/* মেইন পেজের (Tutorpage) কার্ডের ভেতরের বাটন অংশ */}
<Link href={`/tutor/${tutor._id}`} prefetch={false}>
    <Button 
        className="px-5 py-3 bg-gray-950 hover:bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-sm transition-all duration-300"
    >
        Hire Tutor
    </Button>
</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Tutorpage;