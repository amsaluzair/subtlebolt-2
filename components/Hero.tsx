import React, { useState } from 'react';
import { ArrowRight, Play, X, Calendar, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decor - Centered Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E3F677]/10 rounded-full blur-[100px]"></div>
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Card Left (Profile) */}
      <div className="hidden lg:block absolute top-32 left-[10%] xl:left-[15%] z-30 float-slow">
        <div className="bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 -rotate-6 w-64">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">JD</div>
              <div>
                <div className="text-sm font-bold text-slate-900">John Doe</div>
                <div className="text-[10px] text-slate-400 font-medium">CEO @ TechFlow</div>
              </div>
            </div>
            <div className="bg-[#E3F677] px-2 py-0.5 rounded text-[10px] font-bold text-slate-900 tracking-tight">98% MATCH</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="text-[11px] font-medium text-slate-600">Series B Announced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span className="text-[11px] font-medium text-slate-600">Hiring 5+ SDRs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card Right (Calendar) */}
      <div className="hidden lg:block absolute bottom-40 right-[10%] xl:right-[15%] z-10 float-medium">
        <div className="bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 rotate-6 w-60">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Calendar</span>
            <span className="text-[10px] font-bold bg-[#E3F677] text-slate-900 px-2 py-0.5 rounded-full">New Lead</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-black">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Strategy Call</div>
              <div className="text-xs text-slate-500 font-medium">Tomorrow, 2:00 PM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E3F677] rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <span className="text-slate-900 text-xs font-bold tracking-wide">
            AI-Powered Cold Email System
          </span>
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
          How B2B Agencies Book <span className="marker-highlight">10 - 50+ Qualified Sales Calls</span> Every Month Using AI-Powered Cold Emails
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-12">
          Using AI-Powered Cold Email… Or You Don’t Pay A Dime.
        </p>

        {/* Video Embed */}
        <div className={`relative w-full max-w-4xl mx-auto aspect-video bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100 mb-16 overflow-hidden ${!isVideoPlaying ? 'group cursor-pointer transform transition-transform hover:scale-[1.01]' : ''}`}>
          {!isVideoPlaying ? (
            <div onClick={() => setIsVideoPlaying(true)} className="w-full h-full relative">
              {/* Thumbnail */}
              <img src="/video-thumbnail.png" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />


              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3qJz-ixXBjQ?si=e-CfdrGRHR_-mbTU&controls=0&autoplay=1&mute=0&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* How We Automate Section */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">How We Automate Your Outbound Revenue</h3>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-slate-700 font-semibold text-lg mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <X className="w-3.5 h-3.5" />
              </div>
              <span>No templates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <X className="w-3.5 h-3.5" />
              </div>
              <span>No guesswork</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <X className="w-3.5 h-3.5" />
              </div>
              <span>No “spray and pray”</span>
            </div>
          </div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Just a done-for-you outbound system that fills your pipeline with decision-makers who actually want to talk.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://calendly.com/amsaluzair/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black hover:bg-neutral-800 text-white text-lg font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
          >
            <Calendar className="w-5 h-5 text-[#E3F677]" />
            Book Your Strategy Call
          </a>

          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <div className="w-2 h-2 rounded-full bg-[#E3F677] border border-black/10"></div>
            <span>Limited to 5 new clients per month</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;