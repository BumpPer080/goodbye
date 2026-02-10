
import React from 'react';
import { Profile } from '../types';

import ConfettiBackground from './ConfettiBackground';

interface WelcomeBackProps {
  profile: Profile;
  onStart: () => void;
  onSwitch: () => void;
}

const WelcomeBack: React.FC<WelcomeBackProps> = ({ profile, onStart, onSwitch }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imgs/chair.JPG" 
          alt="Chair Background" 
          className="w-full h-full object-cover brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Confetti Background */}
      <ConfettiBackground />

      {/* Greeting Card */}
      <main className="relative z-30 px-6 w-full max-w-[520px]">
        <div className="bg-[#2a1a1b] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center text-center p-10 md:p-14 animate-in fade-in zoom-in duration-500">
          <div className="mb-4">
            <div className={`size-16 rounded-full border-2 border-primary/30 p-1`}>
              <div className={`w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br ${profile.color}`}>
                 <span className="material-symbols-outlined text-white text-2xl opacity-70">
                  {profile.icon}
                 </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              ขอให้เป็นวันที่ดีสำหรับทุกคนนะครับ
            </h1>
            <p className="text-[#c89295] text-lg leading-relaxed max-w-sm">
              ยินดีต้อนรับเข้าสู่การ์ดแสดงความรู้สึกของบั๊มเอง
            </p>
          </div>

          <button 
            onClick={onStart}
            className="group relative w-full flex items-center justify-center gap-3 overflow-hidden rounded-lg h-14 bg-primary text-white text-lg font-semibold transition-all hover:bg-red-700 hover:shadow-xl hover:shadow-primary/20"
          >
            <span className="relative z-10">เริ่มรับชมเลย</span>
            <span className="material-symbols-outlined relative z-10 transition-transform group-hover:translate-x-1">play_circle</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          <button 
            onClick={onSwitch}
            className="mt-6 text-[#c89295] text-sm font-medium hover:text-white transition-colors"
          >
            อย่านะถ้าไม่ใช่โปรไฟล์ตัวเองน่ะ? กดสลับโปรไฟล์เลย
          </button>
        </div>
      </main>

    </div>
  );
};

export default WelcomeBack;
