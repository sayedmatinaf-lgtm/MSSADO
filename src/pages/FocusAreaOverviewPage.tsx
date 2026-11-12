/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FOCUS_AREAS } from '../data/websiteData';

interface FocusAreaOverviewPageProps {
  onSelectFocus: (id: string) => void;
}

export const FocusAreaOverviewPage: React.FC<FocusAreaOverviewPageProps> = ({ onSelectFocus }) => {
  const drr = FOCUS_AREAS[0];
  const gridAreas = FOCUS_AREAS.slice(1);

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* 1. Page Header Banner */}
      <section className="w-full bg-[#0D241C] text-white py-16 lg:py-20 border-b-4 border-[#F59E0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
            What We Do
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our Focus Areas
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl">
            Targeted multi-sector initiatives addressing Afghanistan’s most acute challenges in disaster risk mitigation, clean water infrastructure, and climate adaptation.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
        {/* 1. Featured Marquee Focus Area */}
        <div
          onClick={() => onSelectFocus(drr.id)}
          className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Photo on Left */}
            <div className="lg:col-span-7 h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden bg-gray-100">
              <img
                src={drr.photo}
                alt={drr.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Title & Description on Right */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-3">
                Priority Program 01
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-gray-900 leading-tight group-hover:text-[#123E30] transition-colors mb-4">
                {drr.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {drr.description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-[#D97706]">
                <span>Explore Focus Area</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. 2x2 Grid of the other 4 Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {gridAreas.map((area, idx) => (
            <div
              key={area.id}
              onClick={() => onSelectFocus(area.id)}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="w-full h-[280px] sm:h-[340px] overflow-hidden bg-gray-100">
                <img
                  src={area.photo}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title and Arrow below */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#0D9488] uppercase tracking-wider block mb-2">
                    Program 0{idx + 2}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#123E30] transition-colors mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#F59E0B] group-hover:text-[#D97706]">
                  <span>View Details & Key Activities</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
