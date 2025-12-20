import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
             {/* Background Shield Opacity */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-50 opacity-80 pointer-events-none">
                 <ShieldCheck className="w-96 h-96" />
             </div>

             <div className="relative z-10">
                <div className="inline-block bg-slate-100 px-4 py-1 rounded-full mb-6">
                    <h3 className="text-slate-500 font-bold tracking-widest uppercase text-xs">Our Guarantee</h3>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-none">
                    30 Calls Or<br/> You Don’t Pay
                </h2>
                
                <p className="text-xl text-slate-500 mb-8 font-medium">
                    If we don’t book 30 qualified sales calls with your ICP within 90 days… <span className="marker-highlight">You don’t pay us a dime.</span>
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4 text-slate-600 font-semibold text-sm md:text-base">
                    <span>No excuses.</span>
                    <span className="text-slate-300">•</span>
                    <span>No fine print.</span>
                    <span className="text-slate-300">•</span>
                    <span>No “traffic quality” loopholes.</span>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;