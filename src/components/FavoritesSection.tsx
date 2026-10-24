import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const FavoritesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-black py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="text-white/40 text-xs md:text-sm tracking-widest uppercase font-mono mb-2 inline-flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Сонирхол & Дурсамж</span>
          </div>
          <h2 className="text-3xl sm:text-5xl text-white tracking-tight font-serif-display mb-4">
            Миний дуртай зүйлс
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Хичээл болон код бичихээс гадна намайг хөгжөөж, урам зориг өгдөг зүйлс
          </p>
        </motion.div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.favorites.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="liquid-glass rounded-3xl p-5 group transition-all duration-300 hover:border-white/30 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/5 mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized box
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-xs font-mono text-white/90 liquid-glass rounded-full px-3 py-1">
                  {item.category}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs text-white/60 font-mono">Шилдэг сонголт</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-emerald-300 transition-colors">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-white/60 text-xs leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
