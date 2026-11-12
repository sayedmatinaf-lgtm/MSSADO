/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, FileText, Download, ExternalLink } from 'lucide-react';

interface MediaPageProps {
  onNavigate?: (page: string) => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate }) => {
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  const handleDownload = (docName: string) => {
    setDownloadedDoc(docName);
    setTimeout(() => setDownloadedDoc(null), 3000);
  };

  // Media cards matched to MSSADO Profile 2026 events and milestones
  const mediaCards = [
    {
      date: 'October 2026',
      category: 'Featured Event',
      title: 'El Niño 2026-2027: Implications for Afghanistan',
      desc: 'Online webinar co-organized with AWEP Net bringing 80+ practitioners together to prepare early for winter and spring flood and drought hazards.',
      img: '/assets/mirab/elnino.jpg'
    },
    {
      date: '2026',
      category: 'Applied Research',
      title: 'Herat Urban Drinking-Water Survey',
      desc: 'Community-based assessment surveying 387 households across four urban districts with Jami University, featuring a live interactive monitoring dashboard.',
      img: '/assets/mirab/project_glaciers_main.jpg'
    },
    {
      date: 'August 2026',
      category: 'Platform Training',
      title: 'Read Afghanistan\'s Climate Risk Yourself',
      desc: 'Free online training session on the Chashma-Sar Multi-Hazard Intelligence Platform, drawing 108 registrants across 80+ organizations.',
      img: '/assets/mirab/about_who_we_are.jpg'
    }
  ];

  // Bi-weekly Climate & Water Risk Bulletins (No images, direct links)
  const bulletins = [
    {
      issue: 'Issue #9',
      date: 'October 2026',
      title: 'El Niño Outlook & New Water Year Risk Assessment',
      desc: 'Confirmed strong El Niño outlook (83% chance strongest since 1950) and recommended advance planning for drought and flash floods.',
      url: 'https://chashma-sar.com/bulletins'
    },
    {
      issue: 'Issue #8',
      date: 'September 2026',
      title: 'Summer Rain Deficit & Basin Water Balances',
      desc: 'Detailed breakdown of severe-to-extreme summer rain deficits across 8 eastern provinces.',
      url: 'https://chashma-sar.com/bulletins'
    },
    {
      issue: 'Issue #6 & #7',
      date: 'July 2026',
      title: 'Mid-Year Heatwave & Flash-Flood Risk Warnings',
      desc: 'Tracked 40-46°C heat in the south and flagged heavy rain and flash-flood risks for Kunar, Nangarhar, and Khost.',
      url: 'https://chashma-sar.com/bulletins'
    },
    {
      issue: 'Issue #5',
      date: 'June 2026',
      title: 'Agricultural Drought & Dust Season Analysis',
      desc: 'Mapped drought conditions across 30 provinces at harvest time and the onset of dust storm seasons in 7 south-western provinces.',
      url: 'https://chashma-sar.com/bulletins'
    },
    {
      issue: 'Issue #2 to #4',
      date: 'April – May 2026',
      title: 'Spring Rain-on-Snow Floods & Crop Stress Reports',
      desc: 'Warned of north-eastern rain-on-snow floods and stressed wheat harvests in Badghis, Faryab, Herat, and Kunduz.',
      url: 'https://chashma-sar.com/bulletins'
    }
  ];

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* 1. Header Banner */}
      <section className="w-full bg-[#0D241C] text-white py-16 lg:py-20 border-b-4 border-[#F59E0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
            Knowledge & Advocacy
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Media & Publications
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl">
            Documenting field insights, research reports, technical webinars, bi-weekly risk bulletins, and public awareness campaigns across Afghanistan.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
        {/* 3 Top Cards Grid (Featured Events / Recent Milestones) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 lg:mb-28">
          {mediaCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="w-full aspect-[406/240] overflow-hidden bg-gray-100">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0D9488] mb-2">
                    <span>{card.category}</span>
                    <span>·</span>
                    <span className="text-gray-400">{card.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#123E30] transition-colors leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#F59E0B] group-hover:text-[#D97706]">
                  <span>Explore Report</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Climate & Water Risk Bulletins Section (No images, direct links) */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
              Early Warning Intelligence
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#123E30] tracking-tight">
              Climate & Water Risk Bulletins (2026)
            </h2>
            <p className="text-gray-600 text-sm mt-3">
              Plain-language risk updates reaching 1,000+ practitioners across 200+ organizations every two weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bulletins.map((bulletin, index) => (
              <a
                key={index}
                href={bulletin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FDFBF7] p-6 rounded-2xl border border-amber-100 hover:border-[#F59E0B] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#123E30] text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {bulletin.issue}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{bulletin.date}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-gray-900 group-hover:text-[#123E30] transition-colors mb-2">
                    {bulletin.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {bulletin.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-amber-100/60 flex items-center justify-between text-xs font-bold text-[#F59E0B] group-hover:text-[#D97706]">
                  <span>Read Full Bulletin</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Publications & Research Section */}
        <div className="pt-10 pb-16 lg:pb-24 border-t border-gray-100">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
              Applied Research
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#123E30] tracking-tight">
              Publications & Scientific Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Photo on Left */}
            <div className="lg:col-span-5">
              <div className="w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-gray-50">
                <img
                  src="/assets/mirab/media_pub_left.jpg"
                  alt="MSSADO field research team evaluating water and soil indicators"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content on Right */}
            <div className="lg:col-span-7 space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-[17px] leading-relaxed text-gray-700">
                MSSADO produces and supports research, publications, and technical knowledge to inform policy, strengthen community resilience, and promote sustainable development in Afghanistan.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-amber-100 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <BookOpen className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 text-sm sm:text-base">
                        University Research Fellowship Program (with Unisfere)
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Joint academic initiative growing to 100+ fellows (52% women) conducting field studies on water resources, climate change, and disaster risk reduction.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownload('fellowship_brief')}
                    className="p-2 text-[#123E30] hover:text-[#F59E0B] rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Download executive brief"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-amber-100 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <FileText className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-gray-900 text-sm sm:text-base">
                        Transboundary Water & Hydrology Assessment Papers
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Published studies in ACS ES&T Water, Springer, and Environmental Management on the Helmand River Basin, Herat urban drinking-water security, and regional water cooperation.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownload('hydrology_papers')}
                    className="p-2 text-[#123E30] hover:text-[#F59E0B] rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Download assessment paper"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                {downloadedDoc && (
                  <p className="text-xs text-[#0D9488] font-bold">
                    Document brief downloaded successfully.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};