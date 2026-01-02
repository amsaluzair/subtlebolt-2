import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Scarcity Indicator */}


        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
          Ready to Turn Cold Email Into a <span className="marker-highlight">Predictable Channel?</span>
        </h2>

        <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
          Book a strategy call. We’ll map your ICP, pressure-test your offer, and show you exactly how we’d book 30+ sales calls for your business.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href="https://calendly.com/amsaluzair/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-neutral-800 text-white text-lg font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2"
          >
            Book Your Strategy Call Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-slate-400 text-sm font-medium">
            If we’re not a fit — we’ll tell you.
          </p>
        </div>

        <div className="mt-32 pt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-0.5 opacity-80 hover:opacity-100 transition-opacity duration-300 select-none">
            <span className="font-extrabold text-xl tracking-tighter text-slate-900 uppercase">Subtle</span>
            <div className="text-[#E3F677] transform -rotate-12 mx-0.5 relative top-0.5">
              <Zap className="w-6 h-6 fill-current" strokeWidth={0} />
            </div>
            <span className="font-extrabold text-xl tracking-tighter text-slate-900 uppercase">Bolt</span>
          </div>
          <div className="text-sm text-slate-400">
            © 2026 Subtle Bolt. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;