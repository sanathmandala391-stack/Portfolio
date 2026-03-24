import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React,
            TypeScript & Supabase
          </p>
          <p className="text-slate-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
