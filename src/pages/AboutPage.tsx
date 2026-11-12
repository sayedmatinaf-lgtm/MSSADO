/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Linkedin, ArrowUpRight, Heart, Target, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
  onOpenDonate?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDonate }) => {
  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* 1. Page Header Banner */}
      <section className="w-full bg-[#0D241C] text-white py-16 lg:py-20 border-b-4 border-[#F59E0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
            About Our Organization
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Who We Are
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl">
            Mirab Social Services and Development Organization (MSSADO) — dedicated to reducing water, climate, and disaster risk for Afghanistan's most exposed communities.
          </p>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo on Left */}
          <div className="lg:col-span-5">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/assets/mirab/about_who_we_are.jpg"
                alt="Installation of Bio sand filter training initiative by MSSADO and TLO"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-xl text-xs font-bold text-[#123E30] shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                <span>Ministry of Economy Reg: #5366 (2022)</span>
              </div>
            </div>
          </div>

          {/* Text on Right */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest">
              Our Identity & Purpose
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#123E30] tracking-tight">
              Named for the person a community trusts with its water
            </h2>
            <p>
              "Mirab" is the traditional Afghan title for the person a community trusts to manage and share its water fairly. MSSADO was founded by a multidisciplinary team of specialists in civil and water engineering, environmental studies, medicine, social science, law, and political science.
            </p>
            <p>
              Our work centres on water, climate, and disaster risk, and on the people who carry the greatest exposure to all three: rural households, women, and children. By 2030, we aim to be Afghanistan's most technically credible national organization on water, climate, and disaster risk.
            </p>
            <p>
              We generate our own evidence through primary field data, combining consultancy depth with NGO reach. Through our technical partner, we integrate GIS, remote sensing, and hydrological modelling, anchored academically by our partnership with Jami University.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Director's Message Section */}
      <section className="w-full bg-[#FDFBF7] py-16 lg:py-24 border-y border-amber-100/60">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text on Left */}
            <div className="lg:col-span-8">
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                Leadership Statement
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#123E30] tracking-tight leading-tight mb-6">
                Director's Message
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
                "Afghanistan is living through a water and climate emergency. Drought is now the normal condition across much of the country, glaciers are retreating, groundwater is falling, and floods and earthquakes take lives every year. These are not separate problems, and they cannot be managed without evidence. Yet Afghanistan has very little current data of its own—much of what exists sits in reports written outside the country. MSSADO was founded to close that gap. We work where the risk is highest, with the communities carrying it, and we produce the evidence that good decisions need."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-1.5 h-12 bg-[#F59E0B] rounded-full" />
                <div>
                  <h3 className="font-heading font-extrabold text-gray-900 text-lg">
                    Eng. Sayed Abdul Baset Rahmani
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Founder & Chief Executive Officer, MSSADO (IRDR Young Scientist 2026-2029)
                  </p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Eng. Sayed Abdul Baset Rahmani LinkedIn"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0D9488] hover:text-[#123E30] font-semibold mt-1 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Photo on Right */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-[380px] overflow-hidden rounded-2xl shadow-lg border-4 border-white bg-gray-100">
                <img
                  src="/assets/mirab/about_director.jpg"
                  alt="Eng. Sayed Abdul Baset Rahmani"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Cards */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#123E30] tracking-tight mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              MSSADO works to reduce water, climate, and disaster risk for Afghanistan's most exposed communities. We deliver water, WASH, and climate adaptation programmes on the ground; build community-based early warning that reaches the household in time; generate applied research, geospatial analysis, and field evidence; and mobilize international technical and financial partnership. Women and children remain at the centre of our programming.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#123E30] flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#123E30] tracking-tight mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              An Afghanistan where every community exposed to drought, flood, and earthquake is warned in time and equipped to cope—and where decisions about water and climate are made on Afghan evidence, by Afghan institutions.
            </p>
          </div>
        </div>

        {/* 5. Team Inclusivity Callout with Donate CTA */}
        <div className="mt-16 bg-[#123E30] text-white p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-white">
              Strong Leadership, Dedicated Collaboration
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              Our multidisciplinary team spans civil and water engineering, environmental studies, medicine, social science, law, and political science, backed by senior advisors in Switzerland, the US, Canada, and the UN system.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenDonate}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer shrink-0 flex items-center gap-2 group"
          >
            <span>Partner With Us</span>
            <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};