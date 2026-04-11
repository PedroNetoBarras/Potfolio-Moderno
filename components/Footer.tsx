'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xl font-bold tracking-tighter mb-4">
          PEDRO<span className="text-indigo-600">.NETO</span>
        </div>
        <div className="text-zinc-400 text-sm">
          © {currentYear} <span className="font-bold text-zinc-900">Pedro Neto</span>. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
