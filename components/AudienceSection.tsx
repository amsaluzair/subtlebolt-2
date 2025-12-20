import React from 'react';
import { Check, X, CheckCircle, XCircle } from 'lucide-react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* For You */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 uppercase">
              <CheckCircle className="w-8 h-8 text-[#E3F677] fill-black" />
              This IS for you if:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-lg text-slate-600 font-medium">
                <Check className="w-6 h-6 text-black shrink-0 mt-0.5" />
                <span>You sell a proven B2B service or product</span>
              </li>
              <li className="flex items-start gap-4 text-lg text-slate-600 font-medium">
                <Check className="w-6 h-6 text-black shrink-0 mt-0.5" />
                <span>Your deal size is worth $3k+ per sale</span>
              </li>
              <li className="flex items-start gap-4 text-lg text-slate-600 font-medium">
                <Check className="w-6 h-6 text-black shrink-0 mt-0.5" />
                <span>You want predictable pipeline — not referrals</span>
              </li>
              <li className="flex items-start gap-4 text-lg text-slate-600 font-medium">
                <Check className="w-6 h-6 text-black shrink-0 mt-0.5" />
                <span>You value systems over hacks</span>
              </li>
            </ul>
          </div>

          {/* Not For You */}
          <div>
            <h3 className="text-2xl font-bold text-slate-400 mb-8 flex items-center gap-3 uppercase">
              <XCircle className="w-8 h-8 text-slate-300 fill-slate-100" />
              This is NOT for you if:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-lg text-slate-400 font-medium">
                <X className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>You’re brand new with no offer</span>
              </li>
              <li className="flex items-start gap-4 text-lg text-slate-400 font-medium">
                <X className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>You sell low-ticket products</span>
              </li>
              <li className="flex items-start gap-4 text-lg text-slate-400 font-medium">
                <X className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>You want instant results without setup</span>
              </li>
              <li className="flex items-start gap-4 text-lg text-slate-400 font-medium">
                <X className="w-6 h-6 text-slate-300 shrink-0 mt-0.5" />
                <span>You’re looking for “email blasts”</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;