import React, { useState } from 'react';
import { Globe, ExternalLink, Menu, X, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative z-30 px-4 md:px-6 py-4 md:py-6">
      <div className="liquid-glass rounded-full max-w-5xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
        {/* Left: Brand Icon + Name + Nav Links */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="flex items-center gap-2.5 text-white group"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">
              {portfolioData.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 ml-10 text-sm font-medium text-white/80">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Миний тухай
            </button>
            <button
              onClick={() => scrollTo('purpose')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Зорилго
            </button>
            <button
              onClick={() => scrollTo('hobbies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Хобби
            </button>
            <button
              onClick={() => scrollTo('works')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Бүтээлүүд</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-white/10 rounded-full text-white/70">
                {portfolioData.projects.length}
              </span>
            </button>
          </div>
        </div>

        {/* Right: External main site & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={portfolioData.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
            title="Анхны Netlify сайт руу очих"
          >
            <span>Үндсэн сайт</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>

          <button
            onClick={() => scrollTo('works')}
            className="liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/80" />
            <span>Бүтээл үзэх</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/90 hover:text-white"
            aria-label="Цэс нээх"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-5xl mx-auto liquid-glass rounded-2xl p-5 flex flex-col gap-3">
          <button
            onClick={() => scrollTo('about')}
            className="text-left text-white/90 py-2 text-sm hover:text-white"
          >
            Миний тухай
          </button>
          <button
            onClick={() => scrollTo('purpose')}
            className="text-left text-white/90 py-2 text-sm hover:text-white"
          >
            Зорилго
          </button>
          <button
            onClick={() => scrollTo('hobbies')}
            className="text-left text-white/90 py-2 text-sm hover:text-white"
          >
            Хобби & Сонирхол
          </button>
          <button
            onClick={() => scrollTo('works')}
            className="text-left text-white/90 py-2 text-sm hover:text-white"
          >
            Миний бүтээлүүд ({portfolioData.projects.length})
          </button>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <a
              href={portfolioData.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xs flex items-center gap-1.5"
            >
              <span>Үндсэн сайт нээх</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => scrollTo('works')}
              className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white"
            >
              Бүтээлүүд
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
