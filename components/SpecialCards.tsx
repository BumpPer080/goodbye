
import React, { useState } from 'react';
import { SpecialCard } from '../types';
import SnowBackground from './SnowBackground';

interface SpecialCardsProps {
  cards: SpecialCard[];
  onBack: () => void;
}

const SpecialCards: React.FC<SpecialCardsProps> = ({ cards, onBack }) => {
  const [likedCards, setLikedCards] = useState<Set<string>>(new Set());
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; cardId: string }[]>([]);

  const toggleLike = (id: string) => {
    setLikedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        // Add floating hearts effect
        const heartCount = 5;
        for (let i = 0; i < heartCount; i++) {
          const heartId = Date.now() + i;
          setFloatingHearts(prev => [...prev, { id: heartId, cardId: id }]);
          setTimeout(() => {
            setFloatingHearts(prev => prev.filter(h => h.id !== heartId));
          }, 1000);
        }
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f1] dark:bg-background-alt text-gray-900 dark:text-white transition-colors duration-300">
      <header className="p-8 fixed top-0 w-full z-20">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-500 dark:text-white/70 hover:text-primary dark:hover:text-white transition-colors group"
        >
          <span className="material-symbols-outlined text-3xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="text-sm font-medium tracking-wide">ย้อนกลับไปเลือกโปรไฟล์ทางนี้จ้า</span>
        </button>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-4 pt-32 pb-12 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img 
            alt="background texture" 
            className="w-full h-full object-cover" 
            src="/imgs/ceoroom.JPG"
          />
        </div>
        <SnowBackground />

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">It's not goodbye, it's see you later</h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full animate-in slide-in-from-bottom duration-700">
            {cards.map((card, idx) => (
              <div key={card.id} className="flex-1 max-w-sm w-full group">
                <div className={`${card.bgColor} shadow-2xl h-full p-8 rounded-lg flex flex-col border border-black/5 transition-transform duration-300 hover:-translate-y-2`}>
                  <div className="flex-grow flex flex-col">
                    {card.type === 'illustration' ? (
                      <div className="flex-grow flex flex-col items-center justify-center py-8">
                        <img 
                          alt={card.title} 
                          className="max-w-full h-auto drop-shadow-md" 
                          src={card.imageUrl} 
                        />
                        <div className="mt-12 text-center">
                          <h3 className="font-serif text-gray-700 text-3xl opacity-80">{card.title}</h3>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-grow flex flex-col">
                        <div className="rounded overflow-hidden shadow-inner mb-8">
                          <img 
                            alt="Card Memory" 
                            className="w-full h-48 object-cover" 
                            src={card.imageUrl} 
                          />
                        </div>
                        <div className="text-center px-4 space-y-4">
                          <p className="text-gray-800 font-medium">{card.recipient},</p>
                          <p className="text-gray-600 leading-relaxed text-sm italic">
                            {card.message}
                          </p>
                          <p className="text-gray-900 font-bold pt-4">{card.author}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-auto border-t border-black/5 pt-4 flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">BumpPer: {card.series}</span>
                    <button 
                      onClick={() => toggleLike(card.id)}
                      className="focus:outline-none transition-transform active:scale-125 relative"
                    >
                      <span className={`material-symbols-outlined text-xl transition-colors duration-300 ${likedCards.has(card.id) ? 'text-red-500 fill-current' : 'text-gray-300 hover:text-red-300'}`}>
                        favorite
                      </span>
                      {floatingHearts.filter(h => h.cardId === card.id).map((h, i) => (
                        <span
                          key={h.id}
                          className="material-symbols-outlined absolute text-red-500 pointer-events-none animate-float-up"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%)`,
                            animationDelay: `${i * 0.1}s`,
                            fontSize: `${Math.random() * 20 + 10}px`
                          }}
                        >
                          favorite
                        </span>
                      ))}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>


      {/* Theme Toggle Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
          onClick={() => document.documentElement.classList.toggle('dark')}
        >
          <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
          <span className="material-symbols-outlined hidden dark:block">light_mode</span>
        </button>
      </div>
    </div>
  );
};

export default SpecialCards;
