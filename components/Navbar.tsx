import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="glass-panel border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-0.5 group cursor-pointer select-none">
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900 uppercase">Subtle</span>
            <div className="text-[#E3F677] transform -rotate-12 mx-0.5 relative top-0.5">
                <Zap className="w-8 h-8 fill-current" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900 uppercase">Bolt</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a 
              href="https://calendly.com/amsaluzair/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black hover:bg-neutral-800 text-white font-medium px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;