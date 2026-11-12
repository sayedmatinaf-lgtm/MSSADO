/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, Play, CheckCircle2, Heart, MapPin, Calendar, Building, X } from 'lucide-react';
import { ProjectDetail } from '../data/websiteData';

interface ProjectDetailPageProps {
  project: ProjectDetail;
  onBack: () => void;
  onOpenDonate?: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onOpenDonate
}) => {
  const [activeVideoUrl, setActiveVideoUrl] =
  useState<string | null>(null);

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
            <span>Back to Projects & Achievements</span>
          </button>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-14 lg:py-20">
        {/* Top Section: Photo on left, Description and Partner Logos on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 border-b border-gray-100">
          {/* Main Photo */}
          <div className="lg:col-span-7">
            <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gray-50">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Description & Partner Logos */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                Project Overview
              </span>
              <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-4 mb-6">
                <p>{project.fullDesc}</p>
              </div>

              {/* Location & Year Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>{project.location}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>{project.year}</span>
                </div>
              </div>

              
            </div>

            {/* Partner Logos */}
            {project.partnerLogos && project.partnerLogos.length > 0 && (
              <div className="pt-6 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-3">
                  Implementing & Funding Partners:
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  {project.partnerLogos.map((p, idx) => (
                    <div
                      key={idx}
                      className="h-12 px-3 py-1 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center"
                      title={p.name}
                    >
                      <img
                        src={p.img}
                        alt={p.name}
                        className="max-h-full max-w-[120px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Activities Section */}
        <div className="py-16 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                Operational Framework
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#123E30] tracking-tight">
                Key Activities:
              </h2>
            </div>

            <div className="lg:col-span-8">
              {project.keyActivitiesHeading && (
                <p className="font-semibold text-gray-800 text-sm sm:text-base mb-5">
                  {project.keyActivitiesHeading}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyActivities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-gray-100 bg-[#FDFBF7] flex items-start gap-3.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview Details & Info Box */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Title / Info Box on Left */}
            <div className="lg:col-span-5">
              <div className="bg-[#FDFBF7] border border-amber-100/80 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h3 className="font-heading text-xl font-bold text-[#123E30] mb-5 pb-3 border-b border-amber-200/50">
                  {project.infoBox.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                  {project.infoBox.grantOrg && (
                    <div>
                      <span className="text-xs text-gray-400 font-semibold block">Grant Organization:</span>
                      <span className="font-bold text-gray-900">{project.infoBox.grantOrg}</span>
                    </div>
                  )}

                  <div>
                    <span className="text-xs text-gray-400 font-semibold block">Location:</span>
                    <span className="font-bold text-gray-900">{project.infoBox.location}</span>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 font-semibold block">Duration / Year:</span>
                    <span className="font-bold text-gray-900">{project.infoBox.duration}</span>
                  </div>

                  {project.infoBox.partners && (
                    <div>
                      <span className="text-xs text-gray-400 font-semibold block">Partner Entities:</span>
                      <span className="font-bold text-gray-900">{project.infoBox.partners}</span>
                    </div>
                  )}

                  {project.infoBox.implementingOrg && (
                    <div>
                      <span className="text-xs text-gray-400 font-semibold block">Implementing Entity:</span>
                      <span className="font-bold text-gray-900">{project.infoBox.implementingOrg}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Visual Overview on Right */}
            <div className="lg:col-span-7">
              {project.overviewImages && project.overviewImages.length > 0 ? (
                <div className="space-y-6">
                  {project.overviewImages.map((imgItem, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-black group"
                    >
                      <img
                        src={imgItem.src}
                        alt={imgItem.alt}
                        className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 group-hover:scale-101 transition-all duration-300"
                      />
                      {imgItem.type === 'video' && imgItem.videoUrl && (
  <button
    type="button"
    onClick={() => setActiveVideoUrl(imgItem.videoUrl!)}
    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors cursor-pointer"
    aria-label="Play project video"
  >
    <div className="w-16 h-16 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
      <Play className="w-7 h-7 fill-white translate-x-0.5" />
    </div>
  </button>
)}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-gray-500 text-sm">
                  Field documentation and project media archive maintained under MSSADO registry.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      

{/* Video Modal */}
{activeVideoUrl && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={() => setActiveVideoUrl(null)}
  >
    <div
      className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setActiveVideoUrl(null)}
        className="absolute right-3 top-3 z-20 rounded-full bg-black/70 p-2 text-white hover:bg-black"
        aria-label="Close video"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative w-full aspect-video">
        <iframe
          src={`${activeVideoUrl}?autoplay=1`}
          title="Project Video"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
)}


    </div>
  );
};
