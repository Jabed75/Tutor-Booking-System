import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaChevronRight, 
  FaLocationDot, 
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa6';
import { FiBookOpen, FiActivity } from 'react-icons/fi';

export default function Footer() {
  const learningServices = [
    { name: 'Online Tutoring', href: '#' },
    { name: '1-on-1 Mentorship', href: '#' },
    { name: 'Group Classes', href: '#' },
    { name: 'Exam Preparation', href: '#' },
    { name: 'Skill Development', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
    { name: 'Instagram', href: '#', icon: FaInstagram },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 font-sans relative overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-slate-900">
          
      
          <div className="lg:col-span-5 flex flex-col space-y-5">
            <div className="flex items-center gap-3 group cursor-pointer w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <FiBookOpen className="text-xl" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Digitools<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Unlock your potential with premium mentorship and world-class learning structures designed to scale your technical capability.
            </p>
            
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <IconComponent className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

    
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5 flex items-center gap-2">
              <span>Learning Services</span>
              <FiActivity className="text-blue-500 animate-pulse" />
            </h3>
            <ul className="space-y-3.5">
              {learningServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2 group w-fit"
                  >
                    <FaChevronRight className="text-[10px] text-slate-600 group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3.5 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors shrink-0">
                  <FaLocationDot className="text-sm" />
                </div>
                <span className="text-slate-400 pt-1">
                  123 Education Way, Tech District, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors shrink-0">
                  <FaPhone className="text-xs" />
                </div>
                <a href="tel:+880123456789" className="text-slate-400 group-hover:text-white transition-colors">
                  +880 1234-567890
                </a>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors shrink-0">
                  <FaEnvelope className="text-sm" />
                </div>
                <a href="mailto:support@digitools.com" className="text-slate-400 group-hover:text-white transition-colors">
                  support@digitools.com
                </a>
              </li>
            </ul>
          </div>

        </div>

       
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 order-2 sm:order-1">
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-medium">Digitools</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 order-1 sm:order-2">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}