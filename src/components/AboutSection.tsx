import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Sparkles, Code2, Target, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-black pt-28 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden relative"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label: Animates opacity 0, y: 20 -> 1, 0 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-xs md:text-sm tracking-widest uppercase mb-4 font-mono"
        >
          Миний тухай
        </motion.div>

        {/* Heading in Instrument Serif */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15] tracking-tight mb-16 max-w-4xl"
        >
          Шинэ санаагаа{' '}
          <span className="italic text-white/60">код болгон хувиргаж</span>{' '}
          <br className="hidden md:inline" />
          суралцах тусам{' '}
          <span className="italic text-white/60">бүтээлч чадвар минь тэлж байна.</span>
        </motion.h2>

        {/* Profile Card & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Photo / Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 liquid-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-6 flex items-center justify-center">
              {!photoError ? (
                <img
                  src={portfolioData.photoUrl}
                  alt={portfolioData.name}
                  onError={() => setPhotoError(true)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                /* Resilient fallback when user's remote photo isn't deployed yet */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                  <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-white/80" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{portfolioData.name}</h3>
                  <p className="text-xs text-white/50">13 настай вэб суралцагч</p>
                </div>
              )}

              {/* Status pill on photo */}
              <div className="absolute bottom-3 left-3 liquid-glass rounded-full px-3 py-1 text-xs text-white/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Суралцаж, бүтээж байна</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{portfolioData.name}</h3>
                <span className="text-xs font-mono text-white/50 px-2.5 py-1 rounded-full bg-white/10">
                  {portfolioData.age} настай
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Сайн байна уу! Би программчлал, вэб дизайн, сонирхолтой тоглоом зохиох чиглэлээр суралцаж буй залуу хөгжүүлэгч юм.
              </p>
            </div>
          </motion.div>

          {/* Right: Key highlights & Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Box 1: Goal */}
            <div className="liquid-glass rounded-3xl p-6 md:p-8 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/40 tracking-wider uppercase font-mono block">
                    Суралцах эрмэлзэл
                  </span>
                  <h4 className="text-lg md:text-xl font-semibold text-white">
                    Миний сургалтанд сурч байгаа зорилго
                  </h4>
                </div>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {portfolioData.goal}
              </p>
            </div>

            {/* Box 2: Hobbies & Code Passion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="liquid-glass rounded-3xl p-6">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                  <Heart className="w-4 h-4" />
                </div>
                <h5 className="text-white font-semibold text-base mb-2">Чөлөөт цаг & Хобби</h5>
                <ul className="text-white/70 text-sm space-y-1.5">
                  {portfolioData.hobbies.map((hobby, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>{hobby}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="liquid-glass rounded-3xl p-6">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                  <Code2 className="w-4 h-4" />
                </div>
                <h5 className="text-white font-semibold text-base mb-2">Технологи & Код</h5>
                <p className="text-white/70 text-sm leading-relaxed">
                  HTML, CSS, JavaScript суурьтайгаар өөрийн гэсэн вэб хуудсууд болон тоглоомоо бүтээж байна.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
