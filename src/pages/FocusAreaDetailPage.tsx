/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, CheckCircle2, Heart } from 'lucide-react';
import { FocusArea } from '../data/websiteData';

interface FocusAreaDetailPageProps {
  focusArea: FocusArea;
  onBack: () => void;
  onOpenDonate?: () => void;
}

export const FocusAreaDetailPage: React.FC<FocusAreaDetailPageProps> = ({
  focusArea,
  onBack,
  onOpenDonate
}) => {
  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* 1. Header Banner */}
      <section className="w-full bg-[#0D241C] text-white py-14 lg:py-18 border-b-4 border-[#F59E0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B] hover:text-white transition-colors cursor-pointer mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Focus Areas</span>
          </button>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {focusArea.title}
          </h1>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-14 lg:py-20">
        {/* Top Section: Photo on left, Description on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 border-b border-gray-100">
          {/* Photo */}
          <div className="lg:col-span-7">
            <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gray-50">
              <img
                src={focusArea.photo}
                alt={focusArea.title}
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Description & Action */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
              Strategic Focus
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#123E30] tracking-tight mb-4">
              Overview & Objectives
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              {focusArea.description}
            </p>

            
          </div>
        </div>

        {/* Key Activities Section */}
        <div className="pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                Program Delivery
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#123E30] tracking-tight">
                Key Activities & Outputs:
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusArea.keyActivities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-gray-100 bg-[#FDFBF7] flex items-start gap-3.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
