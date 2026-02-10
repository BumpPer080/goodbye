
import React, { useState, useEffect, useRef } from 'react';
import { Profile } from '../types';

interface PinEntryProps {
  profile: Profile;
  onSuccess: () => void;
  onExit: () => void;
}

const PinEntry: React.FC<PinEntryProps> = ({ profile, onSuccess, onExit }) => {
  const [pin, setPin] = useState(['', '', '', '']);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }

    
    if (newPin.every(v => v !== '')) {
      
      setTimeout(() => onSuccess(), 500);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 relative min-h-screen bg-background-alt">
      <div className="max-w-md w-full flex flex-col items-center space-y-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-transparent hover:border-white/20 transition-all duration-300">
             <div className={`w-full h-full bg-gradient-to-br ${profile.color} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-white text-6xl opacity-80">{profile.icon}</span>
             </div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">โปรไฟล์นี้ถูกล็อคอยู่นะจ๊ะ.</h1>
            <p className="text-[#a3a3a3] text-lg font-normal">ใส่รหัสผ่านเพื่อเข้าสู่โปรไฟล์.</p>
          </div>
        </div>

        <form className="flex gap-4 md:gap-6 justify-center">
          {pin.map((digit, i) => (
            <input
              key={i}
              ref={el => inputsRef.current[i] = el}
              type="password"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              className="pin-input w-16 h-16 md:w-20 md:h-20 text-center text-3xl md:text-4xl font-bold rounded-lg bg-transparent border border-white/20 text-white focus:ring-0"
              autoFocus={i === 0}
            />
          ))}
        </form>

        <div className="flex flex-col items-center space-y-8">
          <button 
            onClick={onExit}
            className="px-8 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-bold transition-all text-sm uppercase tracking-wider"
          >
            กลับไปเลือกโปรไฟล์
          </button>
        </div>
      </div>

    </div>
  );
};

export default PinEntry;
