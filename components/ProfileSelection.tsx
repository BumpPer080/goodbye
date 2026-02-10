
import React from 'react';
import { PROFILES } from '../constants';
import { Profile } from '../types';

interface ProfileSelectionProps {
  onSelect: (profile: Profile) => void;
}

const ProfileSelection: React.FC<ProfileSelectionProps> = ({ onSelect }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
      <header className="absolute top-0 left-0 w-full px-8 py-6 md:px-14 flex items-center gap-2 text-orange-500">
        <h2 className="text-2xl font-bold tracking-tight">🙏 Goodbye Bostech 👋</h2>
      </header>

      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-12 tracking-wide text-center">
        เลือกโปรไฟล์ของตัวเองได้เลยน๊าทุกคน
      </h1>

      <div className="max-w-6xl w-full flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 p-4">
        {PROFILES.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onSelect(profile)}
            className="group flex flex-col items-center gap-4 outline-none focus:ring-2 focus:ring-primary rounded-lg p-2 transition-transform active:scale-95"
          >
            <div className={`w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br ${profile.color} rounded-lg shadow-xl flex items-center justify-center text-4xl overflow-hidden border-3 border-transparent group-hover:border-white group-hover:scale-105 transition-all duration-300 relative shimmer-effect`}>
              <span className={`material-symbols-outlined text-6xl opacity-80 text-white ${
                profile.icon === 'person_heart' ? 'animate-pulse' :
                profile.icon === 'pregnant_woman' ? 'animate-wiggle' :
                profile.icon === 'flutter_dash' ? 'animate-bounce-custom' :
                profile.icon === 'face_2' ? 'animate-wiggle' :
                profile.icon === 'owl' ? 'animate-spin-slow' :
                profile.icon === 'taunt' ? 'animate-shake' :
                profile.icon === 'support_agent' ? 'animate-pulse' :
                profile.icon === 'sentiment_extremely_dissatisfied' ? 'animate-bounce-custom' : ''
              }`}>
                {profile.icon}
              </span>
              {profile.isLocked && (
                <div className="absolute bottom-2 right-2 bg-black/40 p-1 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-white/80">lock</span>
                </div>
              )}
            </div>
            <p className="text-gray-400 text-lg md:text-xl font-medium transition-colors group-hover:text-white">
              {profile.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
