'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import Image from 'next/image';

export default function Hero() {
  const [text, setText] = React.useState('');
  const fullText = "Desenvolvedor, Professor, Empreendedor";
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
          alt="Background" 
          fill
          className="object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight font-raleway">
            Pedro Neto
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-10">
            <span className="text-2xl lg:text-4xl text-white font-light font-sans">Eu sou</span>
            <span className="text-2xl lg:text-4xl text-white font-medium border-b-2 border-[#0563af] pb-1 min-h-[1.5em] font-raleway">
              {text}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
