import React from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params;

    
    const res = await fetch(`http://localhost:5000/tutor/${id}`, { cache: 'no-store' });
    const tutor = await res.json(); 

    
    if (!tutor || tutor.message) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Tutor Details Not Found!</h2>
                <Link href="/tutor">
                    <Button className="bg-indigo-600 text-white font-bold rounded-xl">
                        ← Back to All Tutors
                    </Button>
                </Link>
            </div>
        );
    }

    
    const { 
        imageUrl, 
        tutorName, 
        duration, 
        subject, 
        location, 
        price, 
        experience, 
        teachingMode, 
        day, 
        email 
    } = tutor;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                
                
                <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 h-48 sm:h-64 w-full">
                    <div className="absolute inset-0 bg-black/10"></div>
                  
                    <Link href="/tutor" className="absolute top-6 left-6 z-10">
                        <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 font-semibold rounded-xl">
                            ← Back
                        </Button>
                    </Link>
                </div>

              
                <div className="relative px-6 sm:px-12 pb-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 gap-6 border-b border-gray-100 pb-8">
                        <img
                            src={imageUrl}
                            alt={tutorName}
                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl border-4 border-white object-cover shadow-2xl bg-white"
                        />
                        <div className="flex-grow pt-2">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                                    {tutorName}
                                </h1>
                                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-lg">
                                    {subject || "N/A"}
                                </span>
                            </div>
                            <p className="text-gray-500 font-medium mt-2 flex items-center gap-1.5 text-base">
                                <span className="text-indigo-500">📍</span> {location || "Dhaka"}
                            </p>
                        </div>
                        <div className="shrink-0 bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center sm:text-right">
                            <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider">Hourlyfee</span>
                            <div className="flex items-baseline justify-center sm:justify-end">
                                <span className="text-4xl font-black text-indigo-600">${price}</span>
                                <span className="text-sm font-bold text-gray-500 ml-1">/hr</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                      
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Professional Overview</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
                                        <span className="block text-xs text-gray-400 font-bold uppercase">Experience</span>
                                        <span className="text-lg font-extrabold text-gray-800">{experience || "N/A"}</span>
                                    </div>
                                    <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
                                        <span className="block text-xs text-gray-400 font-bold uppercase">Teaching Mode</span>
                                        <span className="text-lg font-extrabold text-gray-800 capitalize">{teachingMode || "N/A"}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Availability Schedule</h3>
                                <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-4 space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 font-medium">📅 Available Days:</span>
                                        <span className="font-bold text-gray-800 bg-white px-3 py-1 rounded-lg border border-gray-100 shadow-sm text-xs">{day || "N/A"}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 font-medium">⏰ Class Timing:</span>
                                        <span className="font-bold text-gray-800">
                                            {duration === '10am-111m' ? '10am - 11pm' : duration || "N/A"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                        <div className="flex flex-col justify-between bg-indigo-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl"></div>
                            
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-indigo-200">Want to hire {tutorName}?</h3>
                                <p className="text-sm text-indigo-100/80 leading-relaxed mb-6">
                                    সরাসরি বুকিং বা টিউশনি কনফার্ম করার জন্য নিচের বাটনে ক্লিক করে ইমেইল করুন।
                                </p>
                                
                                <div className="space-y-2 text-sm border-t border-indigo-900 pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-indigo-300">Official Email:</span>
                                        <span className="font-medium select-all">{email || "N/A"}</span>
                                    </div>
                                </div>
                            </div>

                           
                            <a href={`mailto:${email}?subject=Hiring Inquiry for ${subject || 'Tuition'}`}>
                                <Button className="w-full mt-6 py-4 bg-white hover:bg-indigo-50 text-indigo-950 font-black rounded-xl shadow-md transition-all duration-300 text-center text-base">
                                    Bokking Now
                                </Button>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default TutorDetailsPage;