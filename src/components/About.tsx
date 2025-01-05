import React from 'react';
import { Code2, Users2, Lightbulb, PenTool } from 'lucide-react';

const activities = [
  {
    icon: Code2,
    title: 'Hackathons',
    description: '24-hour coding challenges with exciting prizes'
  },
  {
    icon: Users2,
    title: 'Workshops',
    description: 'Hands-on sessions with industry experts'
  },
  {
    icon: Lightbulb,
    title: 'Startup Pitches',
    description: 'Platform for innovators to showcase ideas'
  },
  {
    icon: PenTool,
    title: 'Expert Talks',
    description: 'Insights from technology leaders'
  }
];

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-6">About the Summit</h2>
        <p className="text-gray-300 text-lg mb-12 max-w-3xl">
          Join us for three days of innovation, learning, and networking at the IEEE All India Technology Summit 2025. 
          This premier tech event brings together industry leaders, researchers, and students to explore cutting-edge 
          technologies and shape the future of innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <div key={activity.title} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
              <activity.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
              <p className="text-gray-400">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};