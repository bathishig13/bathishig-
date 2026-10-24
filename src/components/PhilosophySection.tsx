import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Flame } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="hobbies" ref={ref} className="bg-black py-24 md:py-36 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading in Instrument Serif */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight mb-12 md:mb-20 font-serif-display"
        >
          Хобби{' '}
          <span className="italic text-white/40 font-normal">болон</span>{' '}
          Сонирхол
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Video in rounded-3xl overflow-hidden aspect-[4/3] */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] relative border border-white/10 shadow-2xl group"
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 liquid-glass rounded-2xl p-4 flex items-center justify-between">
              <span className="text-xs text-white/70 uppercase tracking-widest font-mono">
                Идэвхтэй амьдрал & Эрч хүч
              </span>
              <span className="text-xs text-emerald-400 font-medium">13 Настай</span>
            </div>
          </motion.div>

          {/* Right: Two text blocks separated by a divider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8 justify-center"
          >
            {/* Block 1 */}
            <div className="liquid-glass rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase mb-4 font-mono">
                <Activity className="w-4 h-4 text-white/70" />
                <span>Спорт & Биеийн тамир</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Сагсан бөмбөг ба Усанд сэлэлт
              </h3>
              <p className="text-white/75 text-base md:text-lg leading-relaxed">
                Би чөлөөт цагаараа сагсан бөмбөг тоглох, усанд сэлэх дуртай. 
                Энэ нь намайг багийн тоглолт, эрч хүч, тэсвэр хатуужилд сургаж, шинэ код бичих үед төвлөрөхөд тусалдаг.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Block 2 */}
            <div className="liquid-glass rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 text-white/50 text-xs tracking-widest uppercase mb-4 font-mono">
                <Flame className="w-4 h-4 text-white/70" />
                <span>Дуртай кино, тоглоом & анимэ</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Marvel, CS2 & Jujutsu Kaisen
              </h3>
              <p className="text-white/75 text-base md:text-lg leading-relaxed">
                Marvel-ийн Avengers киногоор аялж, Jujutsu Kaisen анимэ үзэх, мөн Counter-Strike 2 тоглож тактик боловсруулах дуртай. 
                Эдгээр сонирхол маань намайг сонирхолтой тоглоомын төсөл хийхэд урам зориг өгдөг.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
