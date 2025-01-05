import React from 'react';
import { type Speaker } from '../types';

const speakers: Speaker[] = [
  {
    name: "Sandeep Jain",
    role: "Founder & CEO",
    company: "GeeksforGeeks",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQGGB6CT6NqFzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1618725077549?e=1741219200&v=beta&t=7z1jA2QBNOEXstBvUfh3hGt14kunprIZ9DYPRLs6m8s"
  },
  {
    name: "Prashant Subramanyam",
    role: "Head of Cloud Developer Advocay- India",
    company: "Google",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGkPU5xgpaJaQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708163309718?e=1741219200&v=beta&t=Q4d8Zdw7qtM8eeMHhOuIqiSgHmNsRekpQiB5g7jNPdI"
  },
  {
    name: "Mohit Sewak",
    role: "Head of AI Researcher and Developer Relations",
    company: "NVIDIA",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFXYXtlD9zrNw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727965634040?e=1741219200&v=beta&t=fcoR4JH53bw0NTro1iPUDgUuZ7ue98KYJflRIx2cSEc"
  },
  {
    name: "Prof. Abdul Quaiyum Ansari",
    role: "Chairperson",
    company: "IEEE Delhi Section",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQENMboQq-Y5ag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706797123417?e=1741219200&v=beta&t=1yCnbSkbhkgY1dYnujR64OWjRX8X1pgo3RESobqDHus"
  }
];

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Speakers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={speaker.imageUrl} 
                  alt={speaker.name}
                  className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{speaker.name}</h3>
              <p className="text-blue-400 mb-1">{speaker.role}</p>
              <p className="text-gray-400">{speaker.company}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white/10 rounded-lg font-semibold text-white hover:bg-white/20 transition-colors">
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
};