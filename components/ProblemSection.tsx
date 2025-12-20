import React from 'react';
import { AlertCircle, Flame, Users } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 font-heading">Let’s Be Honest…</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">You’re stuck playing the volume game</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Your team is sending thousands of emails, hoping something lands — instead of running a system that consistently creates real conversations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">You tried the “gurus” and recycled templates</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Open rates dropped. Replies slowed to a trickle. And your domain reputation took the hit for it.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Your SDRs are booking the wrong meetings</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              They promised pipeline — but delivered calls with people who were never a fit and were never going to buy.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
                "Every day you don’t have a working outbound system is <span className="bg-[#E3F677] px-2">money left on the table.</span>"
            </h3>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;