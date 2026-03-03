"use client";

import { useEffect, useRef, useState } from "react";

type ReviewsDict = {
  label: string;
  title: string;
  subtitle: string;
  ratingScore: string;
  ratingCount: string;
  ratingPlatform: string;
  r1Name: string;
  r1Town: string;
  r1Text: string;
  r1Date: string;
  r2Name: string;
  r2Town: string;
  r2Text: string;
  r2Date: string;
  r3Name: string;
  r3Town: string;
  r3Text: string;
  r3Date: string;
  ctaText: string;
  ctaBtn: string;
};

type Props = {
  dict: ReviewsDict;
};

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.543 2.826c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({ dict }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setSettled(true), 1500);
    return () => clearTimeout(t);
  }, [visible]);

  const reviews = [
    { name: dict.r1Name, town: dict.r1Town, text: dict.r1Text, date: dict.r1Date },
    { name: dict.r2Name, town: dict.r2Town, text: dict.r2Text, date: dict.r2Date },
    { name: dict.r3Name, town: dict.r3Town, text: dict.r3Text, date: dict.r3Date },
  ];

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative bg-navy-900 py-20 sm:py-28 px-5 sm:px-6 overflow-hidden"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className={`text-center mb-12 sm:mb-14 ${
            visible
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-3">
            {dict.label}
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {dict.title}
          </h2>
          <p className="text-navy-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Google rating summary */}
        <div
          className={`flex flex-col items-center gap-2 mb-12 sm:mb-14 ${
            visible
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out delay-200"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-7 py-4 rounded-2xl bg-navy-800/60 border border-navy-700/50">
            {/* Google "G" badge */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-sm font-bold" style={{ color: "#4285F4" }}>G</span>
              </div>
              <span className="text-navy-300 text-sm font-medium">{dict.ratingPlatform}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-navy-700" />
            <div className="flex items-center gap-2">
              <span
                className="font-display text-3xl font-bold text-white leading-none"
              >
                {dict.ratingScore}
              </span>
              <Stars />
            </div>
            <div className="hidden sm:block w-px h-6 bg-navy-700" />
            <span className="text-navy-400 text-sm">{dict.ratingCount}</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-14">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`flex flex-col gap-4 p-6 rounded-2xl bg-navy-800 border border-navy-700/50 hover:border-blue-500/30 transition-card ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: settled ? "0ms" : visible ? `${300 + i * 120}ms` : "0ms" }}
            >
              {/* Quote icon */}
              <svg className="w-7 h-7 text-blue-500/40 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3a8.938 8.938 0 0 1 1.44-1.53c.31-.25.45-.59.37-.96-.08-.37-.35-.65-.7-.76-.36-.11-.72-.03-.98.22a11.1 11.1 0 0 0-2.13 2.4c-.73 1.17-1.1 2.4-1.1 3.67 0 1.07.27 1.99.83 2.75.56.75 1.32 1.13 2.28 1.13.87 0 1.6-.28 2.17-.83.57-.56.86-1.28.86-2.15Zm7.99 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3a8.938 8.938 0 0 1 1.44-1.53c.31-.25.45-.59.37-.96-.08-.37-.35-.65-.7-.76-.36-.11-.72-.03-.98.22a11.1 11.1 0 0 0-2.13 2.4c-.73 1.17-1.1 2.4-1.1 3.67 0 1.07.27 1.99.83 2.75.56.75 1.32 1.13 2.28 1.13.87 0 1.6-.28 2.17-.83.57-.56.86-1.28.86-2.15Z" />
              </svg>

              {/* Review text */}
              <p className="text-navy-200 text-sm leading-relaxed flex-1">"{r.text}"</p>

              {/* Footer */}
              <div className="flex items-end justify-between gap-3 pt-2 border-t border-navy-700/50">
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-navy-400 text-xs">{r.town}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Stars />
                  <span className="text-navy-400 text-xs">{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8 rounded-2xl bg-navy-800/50 border border-navy-700/50 ${
            visible
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out delay-300"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-navy-300 text-sm sm:text-base text-center sm:text-left">
            {dict.ctaText}
          </p>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-navy-600 hover:border-blue-500/50 hover:bg-blue-500/10 text-white font-semibold text-sm transition-colors"
          >
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <span className="text-[9px] font-bold" style={{ color: "#4285F4" }}>G</span>
            </div>
            {dict.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
