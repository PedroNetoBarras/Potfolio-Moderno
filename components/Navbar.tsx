'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, Home, User, FileText, Briefcase, Mail, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio', icon: Home },
    { name: 'Sobre', href: '#sobre', icon: User },
    { name: 'Projetos', href: '#projetos', icon: Briefcase },
    { name: 'Contato', href: '#contato', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[60] w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center lg:hidden shadow-lg"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 h-full w-72 bg-[#040b14] z-50 transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-8">
          {/* Profile Header */}
          <div className="mb-8 text-center">
            <div className="w-32 h-32 rounded-full border-8 border-[#2c2f3f] overflow-hidden mx-auto mb-4 relative">
              <Image 
                src="https://iili.io/BEDePqJ.png" 
                alt="Pedro Neto" 
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white font-raleway">Pedro Neto</h1>
            <div className="flex justify-center gap-2 mt-4">
              <a 
                href="https://github.com/PedroNetoBarras" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#212431] flex items-center justify-center text-white hover:bg-[#0563af] transition-all"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex-1 space-y-6 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-2 py-1 text-[#a8a9b4] hover:text-[#0563af] transition-all group font-raleway"
              >
                <link.icon size={20} className="group-hover:text-[#0563af] transition-colors" />
                <span className="text-base font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Footer Info */}
          <div className="pt-8 text-center">
            <p className="text-xs text-[#a8a9b4]">
              © 2026 Pedro Neto
            </p>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
