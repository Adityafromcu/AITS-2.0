
import React from 'react';
import { Timer, Calendar, MapPin } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-40 pb-32 text-white">
        <div className="max-w-4xl">
          {/* Event Title */}
          <div className="space-y-4 mb-8 animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 tracking-tight">
              IEEE Chandigarh University Section Presents
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              IEEE All India Technology Summit 2025
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Innovating the Future of Technology
          </p>
          
          {/* Event Details */}
          <div className="flex flex-wrap gap-6 mb-12 text-lg">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-blue-400" />
              <span>March 15-17, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-400" />
              <span>Chandigarh University</span>
            </div>
            <div className="flex items-center">
              <Timer className="w-6 h-6 mr-2 text-blue-400" />
              <CountdownTimer targetDate="2025-03-15T09:00:00" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-white shadow-lg hover:opacity-90 transition-opacity">
              Register Now
            </button>
            <button className="px-8 py-3 bg-white/10 rounded-lg font-semibold text-white hover:bg-white/20 transition-colors shadow-lg">
              View Agenda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};