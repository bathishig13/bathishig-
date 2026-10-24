import React from 'react';
import { ArrowUp, Globe, Heart, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand & Bio */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-white tracking-tight">
              {portfolioData.name}
            </span>
          </div>
          <p className="text-xs text-white/50 max-w-sm">
            13 настай вэб бүтээгч. Суралцах, бүтээх, шинийг эрэлхийлэх тэмүүллээр хийгдсэн портфолио вэб хуудас.
          </p>
        </div>

        {/* Center: External Link to Main Site */}
        <div className="flex flex-col items-center gap-2">
          <a
            href={portfolioData.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-5 py-2 text-xs md:text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <span>Анхны Netlify сайт руу очих</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>
          <div className="text-[11px] text-white/40 flex items-center gap-1">
            <span>Сайтаа сэтгэл зүрхээрээ хийв</span>
            <Heart className="w-3 h-3 text-rose-500 fill-current inline" />
          </div>
        </div>

        {/* Right: Scroll to top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2 text-xs"
            aria-label="Дээш гарах"
          >
            <span>Дээш очих</span>
            <ArrowUp className="w-4 h-4" />
          </button>
          <span className="text-xs text-white/40 font-mono">
            © {new Date().getFullYear()} {portfolioData.name}. Бүх эрх хамгаалагдсан.
          </span>
        </div>
      </div>
    </footer>
  );
};
