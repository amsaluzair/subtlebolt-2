import React from 'react';
import { ArrowRight, CheckCircle, Ban, Trash2, UserX } from 'lucide-react';

const AgitationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]">
                    The Cold Truth About Cold Email in 2025
                </h2>
                <p className="text-xl text-slate-500 mb-8 leading-relaxed font-medium">
                    The old playbook is dead. The companies winning today aren't sending <span className="text-slate-900 font-bold">more</span> emails. They're sending <span className="text-slate-900 font-bold">smarter</span> emails.
                </p>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-900 font-semibold">
                        <div className="w-6 h-6 rounded-full bg-[#E3F677] flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-black" />
                        </div>
                        <span>To the right people</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-900 font-semibold">
                        <div className="w-6 h-6 rounded-full bg-[#E3F677] flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-black" />
                        </div>
                        <span>At the right time</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-900 font-semibold">
                        <div className="w-6 h-6 rounded-full bg-[#E3F677] flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-black" />
                        </div>
                        <span>With the right message</span>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-slate-900 font-medium text-lg">
                        They treat outbound like a system, not a slot machine. And that’s exactly what we build for you.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">
                <div className="space-y-6">
                    {/* Item */}
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">Mass email blasts</span>
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 px-3 py-1 rounded-full">
                            <Trash2 className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wide">Spam folder</span>
                        </div>
                    </div>
                    
                    {/* Item */}
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">Generic templates</span>
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 px-3 py-1 rounded-full">
                            <UserX className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wide">Ignored</span>
                        </div>
                    </div>

                    {/* Item */}
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">Buying static lists</span>
                        <div className="flex items-center gap-2 text-red-500 bg-red-50 px-3 py-1 rounded-full">
                            <Ban className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wide">Blacklisted</span>
                        </div>
                    </div>

                     {/* Highlight Item */}
                     <div className="flex items-center justify-between pt-2">
                        <span className="text-slate-900 font-bold text-lg">AI Intent Signals</span>
                        <div className="flex items-center gap-2 text-slate-900 bg-[#E3F677] px-4 py-1.5 rounded-full shadow-sm">
                            <CheckCircle className="w-5 h-5 fill-slate-900 text-[#E3F677]" />
                            <span className="font-bold">30+ Calls</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;