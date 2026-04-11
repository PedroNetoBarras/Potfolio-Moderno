'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Login Python',
    category: 'Python / Backend',
    image: 'https://iili.io/BMmP5F4.png',
    description: 'Sistema de login desenvolvido em Python com foco em segurança e interface intuitiva.',
    github: 'https://github.com/PedroNetoBarras/login-system-python',
    link: 'https://github.com/PedroNetoBarras/login-system-python',
    fit: 'object-cover'
  },
  {
    title: 'Homenagem Moacy',
    category: 'Web / Tribute',
    image: 'https://iili.io/BV9IC41.png',
    description: 'Um projeto especial de homenagem desenvolvido com foco em design emocional e narrativa.',
    github: 'https://github.com/PedroNetoBarras/HOMENAGEM-MOACY',
    link: 'https://homenagem-moacy.vercel.app/',
    fit: 'object-cover'
  },
  {
    title: 'Cotação do Dólar',
    category: 'Python / Automation',
    image: 'https://iili.io/BMmp3b4.png',
    description: 'Ferramenta de automação que captura e exibe a cotação do dólar em tempo real.',
    github: 'https://github.com/PedroNetoBarras/cotacao_dolar',
    link: 'https://github.com/PedroNetoBarras/cotacao_dolar',
    fit: 'object-cover'
  },
  {
    title: 'Painel de Chamada',
    category: 'Web / Management',
    image: 'https://iili.io/BVdQips.png',
    description: 'Sistema desenvolvido para organizar e exibir chamadas de forma eficiente em painéis digitais.',
    github: 'https://github.com/PedroNetoBarras/Painel-de-Chamadas',
    link: 'https://painel-de-chamadas.vercel.app/',
    fit: 'object-contain'
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-[#f5f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#45505b] mb-4 uppercase tracking-widest relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#0563af] font-raleway">
            Projetos
          </h2>
          <p className="text-[#272829] mt-4 font-sans">
            Uma coleção de trabalhos que demonstram minha paixão por design e tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    "transition-transform duration-500 group-hover:scale-110",
                    project.fit || "object-cover"
                  )}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0563af]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-zinc-200 transition-colors"
                  >
                    <Github size={28} />
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-zinc-200 transition-colors"
                  >
                    <ExternalLink size={28} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#45505b] mb-1 font-raleway">
                  {project.title}
                </h3>
                <p className="text-sm text-[#0563af] font-medium uppercase tracking-wider mb-3 font-sans">
                  {project.category}
                </p>
                <p className="text-[#272829] text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

