/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar, Heart } from 'lucide-react';
import { PROJECTS } from '../data/websiteData';

interface ProjectsOverviewPageProps {
  onSelectProject: (id: string) => void;
  onOpenDonate?: () => void;
}

export const ProjectsOverviewPage: React.FC<ProjectsOverviewPageProps> = ({
  onSelectProject,
  onOpenDonate
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (filter === 'water') return p.title.toLowerCase().includes('water');
        if (filter === 'climate') return p.title.toLowerCase().includes('glacier') || p.title.toLowerCase().includes('legacy');
        if (filter === 'drr') return p.title.toLowerCase().includes('flood') || p.title.toLowerCase().includes('seismic');
        return true;
      });

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* 1. Header Banner */}
      <section className="w-full bg-[#0D241C] text-white py-16 lg:py-20 border-b-4 border-[#F59E0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
            Field Implementations
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our Projects & Impact
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl">
            Practical humanitarian and environmental solutions delivering clean drinking water, disaster risk reduction, and climate adaptation in Afghanistan.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
        {/* Top Narrative Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
              Integrated Action
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#123E30] tracking-tight mb-5">
              Empowering Rural Afghanistan Through Evidence-Based Projects
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Mirab Social Services and Development Organization (MSSADO) designs and implements integrated humanitarian and development projects that address Afghanistan's most pressing social, environmental, and water-security challenges.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Operating across multiple provinces including Herat, Kabul, and central river basins, MSSADO works in close partnership with communities, academic institutions, and international organizations to deliver durable solutions that save lives and strengthen resilience.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-gray-50">
              <img
                src="/assets/mirab/project_overview_top.jpg"
                alt="MSSADO field researcher consulting community elder"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          <div className="flex flex-wrap items-center gap-2 p-1 bg-gray-100 rounded-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('water')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filter === 'water' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Safe Water & WASH
            </button>
            <button
              type="button"
              onClick={() => setFilter('drr')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filter === 'drr' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Disaster Risk Reduction
            </button>
            <button
              type="button"
              onClick={() => setFilter('climate')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                filter === 'climate' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Climate & Glaciers
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenDonate}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B] hover:text-[#D97706] cursor-pointer"
          >
            <span>Support Project Implementation</span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>

        {/* 8 Project Cards Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
              <div
                onClick={() => onSelectProject(project.id)}
                className="w-full h-[280px] sm:h-[340px] overflow-hidden bg-gray-100 cursor-pointer relative"
              >
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#123E30] shadow-xs">
                  {project.location}
                </div>
              </div>

              {/* Title & Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectProject(project.id)}
                    className="font-heading text-xl sm:text-2xl font-bold text-gray-900 hover:text-[#123E30] transition-colors cursor-pointer leading-snug mb-3"
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-5">
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project.id)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123E30] hover:text-[#F59E0B] transition-colors cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
