'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido (mínimo 10 dígitos)'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Formulário enviado:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#45505b] mb-4 uppercase tracking-widest relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-[#0563af] font-raleway">
            Contato
          </h2>
          <p className="text-[#272829] mt-4 font-sans">
            Sinta-se à vontade para entrar em contato comigo para qualquer dúvida ou proposta de projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-8 shadow-[0_0_24px_0_rgba(0,0,0,0.12)] rounded-lg flex gap-4 group">
              <div className="w-11 h-11 rounded-full bg-[#f2f9ff] flex items-center justify-center text-[#0563af] group-hover:bg-[#0563af] group-hover:text-white transition-all duration-300 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#45505b] mb-1 font-raleway">Localização:</h4>
                <p className="text-[#272829] font-sans">Barras - PI, Brasil</p>
              </div>
            </div>

            <div className="bg-white p-8 shadow-[0_0_24px_0_rgba(0,0,0,0.12)] rounded-lg flex gap-4 group">
              <div className="w-11 h-11 rounded-full bg-[#f2f9ff] flex items-center justify-center text-[#0563af] group-hover:bg-[#0563af] group-hover:text-white transition-all duration-300 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#45505b] mb-1 font-raleway">E-mail:</h4>
                <p className="text-[#272829] font-sans">pedroneto66990@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-8 shadow-[0_0_24px_0_rgba(0,0,0,0.12)] rounded-lg flex gap-4 group">
              <div className="w-11 h-11 rounded-full bg-[#f2f9ff] flex items-center justify-center text-[#0563af] group-hover:bg-[#0563af] group-hover:text-white transition-all duration-300 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#45505b] mb-1 font-raleway">Telefone:</h4>
                <p className="text-[#272829] font-sans">+55 (86) 98141-9861</p>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 lg:p-10 shadow-[0_0_24px_0_rgba(0,0,0,0.12)] rounded-lg h-full">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-raleway">Mensagem Enviada!</h3>
                    <p className="text-[#272829] font-sans">
                      Obrigado pelo contato. Responderei o mais breve possível.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-8 py-2 bg-[#0563af] text-white rounded-full font-medium hover:bg-[#0678d0] transition-all font-sans"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#45505b] font-raleway">Seu Nome</label>
                        <input
                          {...register('name')}
                          className={cn(
                            "w-full px-4 py-2 rounded border border-[#ced4da] focus:outline-none focus:ring-1 focus:ring-[#0563af] focus:border-[#0563af] transition-all font-sans",
                            errors.name && "border-red-500 focus:ring-red-500 focus:border-red-500"
                          )}
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#45505b] font-raleway">Seu E-mail</label>
                        <input
                          {...register('email')}
                          className={cn(
                            "w-full px-4 py-2 rounded border border-[#ced4da] focus:outline-none focus:ring-1 focus:ring-[#0563af] focus:border-[#0563af] transition-all font-sans",
                            errors.email && "border-red-500 focus:ring-red-500 focus:border-red-500"
                          )}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#45505b] font-raleway">Telefone</label>
                      <input
                        {...register('phone')}
                        className={cn(
                          "w-full px-4 py-2 rounded border border-[#ced4da] focus:outline-none focus:ring-1 focus:ring-[#0563af] focus:border-[#0563af] transition-all font-sans",
                          errors.phone && "border-red-500 focus:ring-red-500 focus:border-red-500"
                        )}
                      />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#45505b] font-raleway">Mensagem</label>
                      <textarea
                        {...register('message')}
                        rows={6}
                        className={cn(
                          "w-full px-4 py-2 rounded border border-[#ced4da] focus:outline-none focus:ring-1 focus:ring-[#0563af] focus:border-[#0563af] transition-all resize-none font-sans",
                          errors.message && "border-red-500 focus:ring-red-500 focus:border-red-500"
                        )}
                      />
                      {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-10 py-3 bg-[#0563af] text-white rounded-full font-bold hover:bg-[#0678d0] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md font-sans"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                        ) : (
                          "Enviar Mensagem"
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
