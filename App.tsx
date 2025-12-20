import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import AgitationSection from './components/AgitationSection';
import MachineSection from './components/MachineSection';
import SystemSection from './components/SystemSection';
import GuaranteeSection from './components/GuaranteeSection';
import AudienceSection from './components/AudienceSection';
import FooterSection from './components/FooterSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <ProblemSection />
      <AgitationSection />
      <MachineSection />
      <SystemSection />
      <GuaranteeSection />
      <AudienceSection />
      <FooterSection />
    </div>
  );
};

export default App;