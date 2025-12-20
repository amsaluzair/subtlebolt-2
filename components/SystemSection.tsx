import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const phases = [
  {
    id: 1,
    week: "Week 1",
    title: "Phase 1 — Discovery & Research",
    description: "Before sending a single email, we obsess over your market. Most agencies skip this. We spend an entire week on it because targeting is everything.",
    checks: [
      "Define ICP down to titles/pains",
      "Analyze messaging gaps",
      "Calculate addressable market",
      "Identify real intent signals"
    ]
  },
  {
    id: 2,
    week: "Week 1–2",
    title: "Phase 2 — Infrastructure Setup",
    description: "Emails don’t convert if they don’t land. We build the foundation most outbound fails to build.",
    checks: [
      "Multiple sending domains",
      "SPF, DKIM, DMARC Config",
      "Strategic inbox warm-up",
      "Bounce rate under 2%"
    ]
  },
  {
    id: 3,
    week: "Week 2–3",
    title: "Phase 3 — Lead Intelligence & Scoring",
    description: "We don’t chase random leads. Every lead is scored before outreach begins. If they’re not a buyer — they don’t get emailed.",
    checks: [
      "Firmographic fit",
      "Hiring/Funding signals",
      "Decision-maker validation"
    ]
  },
  {
    id: 4,
    week: "Week 3–4",
    title: "Phase 4 — Campaign Creation & Launch",
    description: "We write multiple campaign angles. No hype. No gimmicks. Just clean, effective outbound.",
    checks: [
      "Pain-driven messaging",
      "LinkedIn touchpoints",
      "Short, conversational sequences",
      "A/B testing copy & CTAs"
    ]
  },
  {
    id: 5,
    week: "Week 4–12",
    title: "Phase 5 — Optimization & Scale",
    description: "By day 90, you have a predictable outbound engine.",
    checks: [
      "Scale winning campaigns",
      "Kill underperforming angles",
      "Refine targeting",
      "Optimize for booked calls"
    ]
  }
];

const SystemSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(1);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 2; // Center of screen

      phaseRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // Check if the element is around the center of the screen
          if (rect.top < triggerPoint + 100 && rect.bottom > triggerPoint - 100) {
            setActivePhase(index + 1);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-none">
            The 5-Phase System Behind<br />
            <span className="marker-highlight">Your 30 Guaranteed Calls</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-100 ml-3 md:ml-6 space-y-16">
          {phases.map((phase, index) => {
            const isActive = activePhase === phase.id;
            
            return (
              <div 
                key={phase.id} 
                ref={el => { phaseRefs.current[index] = el }}
                className={`relative pl-8 md:pl-12 transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 scale-[1.01]' : 'opacity-40 grayscale-[0.5] scale-100'}`}
              >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[9px] md:-left-[11px] top-2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 transition-all duration-300 ${isActive ? 'border-white bg-[#E3F677] shadow-[0_0_15px_rgba(227,246,119,0.8)] scale-110' : 'border-white bg-slate-200'}`}></div>
                  
                  {/* Badge */}
                  <span className={`px-3 py-1 rounded-full font-bold text-xs tracking-wide uppercase mb-3 inline-block transition-colors duration-300 ${isActive ? 'bg-[#E3F677] text-slate-900 shadow-sm' : 'bg-slate-100 text-slate-500'}`}>
                    {phase.week}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 transition-colors duration-300">
                    {phase.title}
                  </h3>
                  
                  <p className="text-slate-500 text-lg mb-6 max-w-3xl font-medium">
                      {phase.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                      {phase.checks.map((check, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-[#E3F677] text-slate-900' : 'bg-slate-100 text-slate-400'}`}>
                                <Check className="w-3 h-3" />
                            </div>
                            <span>{check}</span>
                        </div>
                      ))}
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;