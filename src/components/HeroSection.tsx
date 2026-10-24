import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Instagram, Youtube, Globe, CheckCircle2, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreWorks: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWorks }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeAnimId: number | null = null;

    const animateFade = (
      from: number,
      to: number,
      duration: number,
      onComplete?: () => void
    ) => {
      if (fadeAnimId) cancelAnimationFrame(fadeAnimId);
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity = from + (to - from) * progress;
        if (video) {
          video.style.opacity = currentOpacity.toString();
        }

        if (progress < 1) {
          fadeAnimId = requestAnimationFrame(step);
        } else {
          fadeAnimId = null;
          if (onComplete) onComplete();
        }
      };

      fadeAnimId = requestAnimationFrame(step);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      animateFade(0, 1, 500);
    };

    let isFadingOut = false;
    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.55 && !isFadingOut) {
        isFadingOut = true;
        const currentOp = parseFloat(video.style.opacity || '1');
        animateFade(currentOp, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      isFadingOut = false;
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        video.play().catch(() => {});
        animateFade(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (fadeAnimId) cancelAnimationFrame(fadeAnimId);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmailInput('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Background Video with Vanilla JS crossfade logic */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none transition-none"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
      />

      {/* Subtle overlay gradient to ensure high legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" />

      {/* Spacer for top nav */}
      <div className="h-10 md:h-16" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-8 md:py-12 text-center max-w-5xl mx-auto">
        {/* Age and Greeting Pill */}
        <div className="liquid-glass rounded-full px-5 py-1.5 mb-6 text-xs md:text-sm text-white/90 font-medium inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>13 настай вэб бүтээгч · {portfolioData.name}</span>
        </div>

        {/* Heading in Instrument Serif */}
        <h1 className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1.05] mb-6 drop-shadow-lg">
          Сайн байна уу, намайг <br className="hidden sm:inline" />
          <em className="italic font-normal text-white/90">Батхишиг</em> гэдэг.
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl px-4 mb-8">
          Би 13 настай, вэб сайт болон интерактив тоглоом хийж сурч байгаа. 
          Шинэ санаа, бүтээлч технологийн ертөнцөд сониуч сэтгэлээр аялж байна.
        </p>

        {/* Message / Contact Input */}
        <form onSubmit={handleSubmit} className="w-full max-w-md sm:max-w-xl mb-6">
          <div className="liquid-glass rounded-full pl-5 md:pl-6 pr-2 py-2 flex items-center gap-3 border border-white/10 hover:border-white/20 transition-all">
            <input
              type="text"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Сэтгэгдэл эсвэл санал хүсэлтээ бичнэ үү..."
              className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm md:text-base focus:outline-none"
              disabled={submitted}
            />
            <button
              type="submit"
              className="bg-white rounded-full p-2.5 md:p-3 text-black hover:bg-white/90 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Илгээх"
            >
              {submitted ? (
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
              ) : (
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </button>
          </div>
          {submitted && (
            <p className="text-xs text-emerald-300 mt-2 text-center animate-fade-in">
              Баярлалаа! Таны сэтгэгдлийг хүлээн авлаа.
            </p>
          )}
        </form>

        {/* Action Button: Explore projects */}
        <div className="flex items-center gap-4">
          <button
            onClick={onExploreWorks}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Миний бүтээлүүдтэй танилцах</span>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </div>

      {/* Social icons footer */}
      <div className="relative z-10 flex justify-center items-center gap-4 pb-8 md:pb-12">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-3.5 md:p-4 text-white/80 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
          title="Instagram"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-3.5 md:p-4 text-white/80 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
          title="YouTube"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5" />
        </a>
        <a
          href={portfolioData.mainSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-3.5 md:p-4 text-white/80 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
          title="Үндсэн Netlify сайт"
          aria-label="Үндсэн сайт"
        >
          <Globe className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
