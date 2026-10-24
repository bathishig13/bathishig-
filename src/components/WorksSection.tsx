import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const WorksSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="works"
      ref={ref}
      className="bg-black py-28 md:py-40 px-4 md:px-6 overflow-hidden relative"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/10 pb-6"
        >
          <div>
            <div className="text-white/40 text-xs md:text-sm tracking-widest uppercase font-mono mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-white/60" />
              <span>Миний хийсэн төслүүд</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-serif-display">
              Миний бүтээлүүд
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-white/50 text-sm font-medium">
            <span>Нийт: {portfolioData.projects.length} төсөл</span>
          </div>
        </motion.div>

        {/* 4-card grid (grid-cols-1 md:grid-cols-2 gap-6 md:gap-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="liquid-glass rounded-3xl overflow-hidden group block text-left transition-all duration-300 hover:border-white/30 cursor-pointer"
            >
              {/* Card video area */}
              <div className="relative aspect-video overflow-hidden bg-white/5">
                <video
                  src={project.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 liquid-glass rounded-full px-3.5 py-1 text-xs text-white/90 font-medium">
                  {project.badge}
                </div>

                <div className="absolute top-4 right-4 liquid-glass rounded-full p-2.5 text-white/90 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="uppercase tracking-widest text-white/40 text-xs font-mono">
                    {project.category}
                  </span>
                  <div className="liquid-glass rounded-full p-2 text-white/80 group-hover:text-white group-hover:bg-white/20 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/40 group-hover:text-white/70 transition-colors">
                  <span className="font-mono truncate max-w-[240px]">
                    {project.url.replace('https://', '')}
                  </span>
                  <span className="underline underline-offset-4 font-medium text-white/80">
                    Шинэ цонхонд үзэх →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
