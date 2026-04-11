'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  const skills = [
    'React / Next.js', 'TypeScript', 'Tailwind CSS', 
    'Node.js', 'PostgreSQL', 'Python', 'UI/UX Design'
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#45505b] mb-4 uppercase tracking-widest relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#0563af] font-raleway">
            Sobre
          </h2>
          <p className="text-[#272829] mt-4 font-sans">
            Olá! Sou o Pedro Neto, estudante de Sistemas para Internet, formado em Administração, Professor Estadual do Curso Técnico em Administração, Servidor Público Municipal, Sócio proprietário da empresa Pntech, e um desenvolvedor apaixonado por criar produtos digitais que equilibram estética e funcionalidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://iili.io/BEDePqJ.png"
              alt="Pedro Neto"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#45505b] mb-4 font-raleway">Desenvolvedor</h3>
            <p className="italic text-[#272829] mb-6 font-sans">
              Minha abordagem é centrada no usuário, sempre buscando a melhor performance e acessibilidade. Acredito que o código deve ser tão limpo quanto a interface que ele sustenta.
            </p>
            
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-[#272829] font-sans">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#45505b]">Localidade:</span> Barras - PI, Brasil
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#45505b]">Status:</span> Disponível
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-bold text-[#45505b] mb-6 font-raleway uppercase tracking-wider border-b-2 border-[#0563af] inline-block pb-1">Habilidades</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded bg-[#f2f9ff] border border-[#0563af]/10 text-sm font-medium text-[#0563af] font-sans"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
