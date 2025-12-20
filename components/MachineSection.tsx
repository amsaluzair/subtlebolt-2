import React from 'react';
import { Server, Bot, PenTool, Linkedin, Phone, Calendar, ArrowRight } from 'lucide-react';

const MachineSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                Your Done-For-You<br/>
                <span className="relative inline-block">
                    AI Cold Email Machine
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-[#E3F677] -z-10 opacity-60"></span>
                </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                We don’t just “send emails.” We engineer a complete outbound revenue system from scratch.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                    <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bulletproof Infrastructure</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    A fully built email setup that lands in primary inboxes — not spam.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                    <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Research</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    We identify prospects actively looking for what you sell using real buying signals.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                    <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Human-Sounding Copy</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Emails that feel personal, relevant, and worth replying to.
                </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                    <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Channel Warm-Up</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    LinkedIn touches that warm prospects before the first email ever lands.
                </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#E3F677] text-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">30+ Qualified Sales Calls</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Booked directly on your calendar with real decision-makers. Predictable revenue.
                </p>
            </div>

            {/* Card 6 CTA */}
            <a 
                href="https://calendly.com/amsaluzair/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black p-8 rounded-3xl border border-black hover:bg-neutral-800 transition-colors cursor-pointer group block"
            >
                <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Book Strategy Call</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Ready to fill your pipeline? Schedule a time to chat with our team.
                </p>
                <span className="text-[#E3F677] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Get Started <ArrowRight className="w-4 h-4"/></span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default MachineSection;