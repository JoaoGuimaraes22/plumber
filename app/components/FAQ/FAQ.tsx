"use client";

import { useState } from "react";

type FAQDict = {
  label: string;
  title: string;
  subtitle: string;
  q1: string;
  a1: string;
  q2: string;
  a2: string;
  q3: string;
  a3: string;
  q4: string;
  a4: string;
  q5: string;
  a5: string;
  q6: string;
  a6: string;
};

type Props = {
  dict: FAQDict;
};

export default function FAQ({ dict }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    { q: dict.q1, a: dict.a1 },
    { q: dict.q2, a: dict.a2 },
    { q: dict.q3, a: dict.a3 },
    { q: dict.q4, a: dict.a4 },
    { q: dict.q5, a: dict.a5 },
    { q: dict.q6, a: dict.a6 },
  ];

  return (
    <section
      id="faq"
      className="relative bg-navy-900 py-20 sm:py-28 px-5 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-3">
            {dict.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {dict.title}
          </h2>
          <p className="text-navy-300 text-base sm:text-lg leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-navy-700/50">
          {items.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-white font-semibold text-sm sm:text-base group-hover:text-blue-300 transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {item.q}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 text-blue-400 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-navy-300 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
