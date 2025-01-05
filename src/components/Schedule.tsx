import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { type Event } from '../types';

const schedule: Event[] = [
  {
    title: "Opening Ceremony",
    description: "Welcome address and keynote speech",
    icon: "🎉",
    time: "09:00 AM",
    date: "March 15, 2025"
  },
  {
    title: "AI & Future of Technology",
    description: "Panel discussion with industry leaders",
    icon: "🤖",
    time: "10:30 AM",
    date: "March 15, 2025"
  },
  {
    title: "Hackathon Kickoff",
    description: "24-hour coding challenge begins",
    icon: "💻",
    time: "02:00 PM",
    date: "March 15, 2025"
  },
  {
    title: "Startup Pitch Competition",
    description: "Innovative ideas presentation",
    icon: "🚀",
    time: "10:00 AM",
    date: "March 16, 2025"
  }
];

export const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Event Schedule</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {schedule.map((event) => (
            <div key={event.title} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{event.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      {event.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity">
            Download Full Schedule
          </button>
        </div>
      </div>
    </section>
  );
};