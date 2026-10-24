import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FeaturedVideoSectionProps {
  onExploreWorks: () => void;
}

export const FeaturedVideoSection: React.FC<FeaturedVideoSectionProps> = ({ onExploreWorks }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="purpose" className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Animated Container: rounded-3xl aspect-video */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[16/9] border border-white/10 group shadow-2xl"
        >
          {/* Autoplaying Loop Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            {/* Left Card: Liquid Glass Card with Approach & Goal */}
            <div className="liquid-glass rounded-2xl p-5 md:p-8 max-w-md">
              <div className="text-white/50 text-xs tracking-widest uppercase mb-3 font-mono flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white/70" />
                <span>Сурч буй арга барил</span>
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Сониуч зан, шинийг бүтээх тэмүүлэл бол миний гол хөдөлгүүр. 
                {portfolioData.goal}
              </p>
            </div>

            {/* Right: Explore Works Button */}
            <motion.button
              onClick={onExploreWorks}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3.5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2.5 shrink-0 self-start md:self-end cursor-pointer"
            >
              <span>Миний төслүүдтэй танилцах</span>
              <ArrowRight className="w-4 h-4 text-white/80" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
