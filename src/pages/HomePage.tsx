/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Phone, Heart, Calendar, MapPin, CheckCircle, Clock, SquareChartGantt, ChevronRight, CalendarFold, Satellite, ExternalLink } from 'lucide-react';
import { PROJECTS, FOCUS_AREAS, PARTNERS_ROW1, PARTNERS_ROW2 } from '../data/websiteData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectFocus: (id: string) => void;
  onSelectProject: (id: string) => void;
  onOpenDonate?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectFocus,
  onSelectProject,
  onOpenDonate
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'water' | 'climate' | 'drr'>('all');

  // Featured Causes (Aligned with MSSADO Profile 2026 projects)
  const featuredCauses = [
    {
      id: 'safe-water',
      category: 'water',
      title: 'Community-Led Water Safety Initiative',
      subtitle: 'Baloch Village, Kang District, Nimruz',
      image: '/assets/mirab/project_safe_water_main.jpg',
      description: 'Installing household bio-sand filters, safe storage, and hands-on construction, use, and maintenance training for vulnerable rural households.'
    },
    {
      id: 'flood-reduction',
      category: 'drr',
      title: 'Community-Based Flood Early Warning',
      subtitle: 'Guzara District, Herat (AWEC / Just Future)',
      image: '/assets/mirab/project_flood_main.jpg',
      description: 'Setting up village early-warning systems, training 52 volunteer "human sensors" to read gauges, and passing flood warnings downstream.'
    },
    {
      id: 'green-legacy',
      category: 'climate',
      title: 'Green Legacy Campaign',
      subtitle: 'School Tree-Planting in Badghis',
      image: '/assets/mirab/project_green_legacy_main.jpg',
      description: 'Planting climate-resilient trees across multiple schools in Qala-e-Naw, Badghis, in collaboration with TLO and CECOP.'
    }
  ];

  const filteredCauses = activeTab === 'all'
    ? featuredCauses
    : featuredCauses.filter((c) => c.category === activeTab);

  // Upcoming Events & Key 2026 Milestones
  const upcomingEvents = [
    {
      date: '17',
      month: 'Aug',
      badgeColor: 'bg-[#F59E0B]',
      title: "Read Afghanistan's Climate Risk Yourself",
      time: 'August 17, 2026',
      location: 'Virtual Training (108 Registrants, 80+ Orgs)',
      image: '/assets/mirab/about_who_we_are.jpg',
      category: 'Platform Training'
    },
    {
      date: '17',
      month: 'Oct',
      badgeColor: 'bg-[#0D9488]',
      title: 'El Niño 2026-2027: Implications for Afghanistan',
      time: 'October 17, 2026',
      location: 'Online Webinar (80+ Participants)',
      image: '/assets/mirab/elnino.jpg',
      category: 'Featured Event'
    },
    {
      date: '26',
      month: 'Apr',
      badgeColor: 'bg-[#EF4444]',
      title: 'AWAP Water Resources Management Presentation',
      time: 'April 26, 2026',
      location: 'World Bank-chaired AWAP Sub-Group',
      image: '/assets/mirab/project_kabul_dialogue_main.jpg',
      category: 'Coordination'
    }
  ];

  // Bi-weekly Climate & Water Risk Bulletins Preview for Home Page
  const bulletinsPreview = [
    {
      issue: 'Issue #9',
      date: 'October 2026',
      title: 'El Niño Outlook & New Water Year Risk Assessment',
      desc: 'Confirmed strong El Niño outlook and recommended advance planning for drought and flash floods.',
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
      desc: 'Tracked 40-46°C heat in the south and flagged heavy rain and flash-flood risks.',
      url: 'https://chashma-sar.com/bulletins'
    }
  ];

  // Testimonials / Stakeholder Feedback
  const testimonials = [
    {
      quote: 'Thank you for your services - your data were so useful.',
      name: 'Civil Engineer Subscriber',
      role: 'Climate & Water Risk Bulletin Recipient',
      avatar: '/src/assets/images/charius_hope_child_1793386759958.jpg'
    },
    {
      quote: 'MSSADO empowers national institutions with credible primary field evidence and geospatial hazard intelligence.',
      name: 'Dr. Najibullah Loodin',
      role: 'Head of Research, MSSADO',
      avatar: '/src/assets/images/volunteer_team_1_1793386760194.jpg'
    },
    {
      quote: 'An extraordinary achievement for Afghanistan—providing open-access multi-hazard intelligence across all 34 provinces.',
      name: 'AWAP Water Resources Reviewer',
      role: 'World Bank-chaired Forum',
      avatar: '/src/assets/images/volunteer_team_2_1793386760618.jpg'
    }
  ];





  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* ---------------- 1. Hero Section ---------------- */}
      <section className="relative w-full bg-[#0D241C] text-white overflow-hidden">
        <div className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="/assets/mirab/hero_bg.jpg"
              alt="Water, climate and disaster resilience in Afghanistan"
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
            <div className="absolute inset-0 bg-[#0D241C]/40 mix-blend-multiply" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-28 z-10 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-[2px] bg-[#F59E0B]" />
                <span className="text-[#F59E0B] font-bold text-sm tracking-wider uppercase">
                  Afghan Evidence. Afghan Resilience.
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[62px] font-extrabold leading-[1.12] tracking-tight text-white mb-6">
                Water, Climate & Disaster Resilience For Afghanistan.
              </h1>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                Mirab Social Services and Development Organization (MSSADO) reduces water, climate, and disaster risk for Afghanistan's most exposed communities and produces the data decision-makers need.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center gap-2.5 group"
                >
                  <span>Our Projects</span>
                  <SquareChartGantt className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-xs font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-full border border-white/25 transition-all duration-200 cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. Welcome Section (MSSADO in One Minute) ---------------- */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px]">
                <div className="relative aspect-square w-full rounded-[45%_55%_65%_35%/50%_45%_55%_50%] overflow-hidden shadow-2xl border-4 border-amber-50">
                  <img
                    src="/public/assets/mirab/project_2.jpg"
                    alt="Community engagement in Herat"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3.5 max-w-[240px]">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#F59E0B] shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xl font-heading font-extrabold text-[#123E30] block">
                      MoEC #5366
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium leading-tight block">
                      Registered Afghan NGO since 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest">
                  Who We Are & What We Do
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#123E30] tracking-tight leading-tight mb-6">
                Named for the person a community trusts with its water
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                "Mirab" is the traditional Afghan title for the person a community trusts to manage and share its water fairly. MSSADO is a registered Afghan NGO that reduces water, climate, and disaster risk for exposed communities and produces the data decision-makers are missing.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                We deliver water, WASH, and climate adaptation programmes on the ground, build community-based early warning systems, generate applied research and geospatial analysis, and keep women and children at the centre of our programming.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Discover More
                </button>

                <a
                  href="tel:+93796645685"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Call Us:</span>
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#F59E0B] transition-colors">
                      +93 796 645 685
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. Verified Impact Counter Bar (MSSADO Profile 2026) ---------------- */}
      <section className="w-full bg-[#FDFBF7] py-14 border-y border-amber-100/60">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            <div>
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#123E30] block">
                1,000+
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mt-1 block">
                Bulletin Practitioners
              </span>
            </div>
            <div>
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F59E0B] block">
                387
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mt-1 block">
                Households Surveyed in Herat
              </span>
            </div>
            <div>
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#123E30] block">
                52
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mt-1 block">
                Flood Early-Warning Volunteers
              </span>
            </div>
            <div>
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0D9488] block">
                34
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mt-1 block">
                Provinces Mandated & Covered
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. Projects & Field Delivery Grid ---------------- */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
              Projects & Track Record 2022–2026
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#123E30] tracking-tight leading-tight">
              Our Field Delivery in Afghanistan
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              Practical community projects across Herat, Nimruz, Badghis, and Kabul.
            </p>

            <div className="inline-flex items-center gap-2 p-1.5 bg-gray-100 rounded-full mt-6">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'all' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Projects
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('water')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'water' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Water & WASH
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('drr')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'drr' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                DRR & Early Warning
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('climate')}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === 'climate' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Climate Action
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCauses.map((cause) => (
              <div
                key={cause.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-[#123E30] shadow-xs">
                    {cause.subtitle}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => onSelectProject(cause.id)}
                      className="font-heading text-xl font-bold text-gray-900 hover:text-[#123E30] transition-colors leading-snug cursor-pointer mb-2.5"
                    >
                      {cause.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 mb-6">
                      {cause.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate('projects')}
                    className="w-full bg-[#123E30] hover:bg-[#F59E0B] text-white py-2.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 5. Photo Strip ---------------- */}
      <section className="w-full py-2 bg-gray-50">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className="h-44 sm:h-52 overflow-hidden">
            <img src="/assets/mirab/project_overview_top.jpg" alt="Field activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="h-44 sm:h-52 overflow-hidden">
            <img src="/assets/mirab/project_safe_water_main.jpg" alt="Safe water" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="h-44 sm:h-52 overflow-hidden">
            <img src="/assets/mirab/about_who_we_are.jpg" alt="Filter training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="h-44 sm:h-52 overflow-hidden">
            <img src="/assets/mirab/project_green_legacy_main.jpg" alt="Tree planting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="h-44 sm:h-52 overflow-hidden col-span-2 sm:col-span-1">
            <img src="/assets/mirab/project_women_main.jpg" alt="Women safety training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* ---------------- 6. Climate & Water Risk Bulletins Preview Section ---------------- */}
      <section className="w-full py-20 lg:py-28 bg-[#FDFBF7] border-y border-amber-100/60">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                Early Warning Intelligence
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#123E30] tracking-tight">
                Latest Climate & Water Risk Bulletins
              </h2>
            </div>

            <a
              href="https://chashma-sar.com/bulletins"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F59E0B] hover:text-[#D97706] cursor-pointer"
            >
              <span>View All Bulletins</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bulletinsPreview.map((bulletin, idx) => (
              <a
                key={idx}
                href={bulletin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl border border-amber-100 hover:border-[#F59E0B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#123E30] text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {bulletin.issue}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{bulletin.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 group-hover:text-[#123E30] transition-colors mb-2">
                    {bulletin.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {bulletin.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#F59E0B] group-hover:text-[#D97706]">
                  <span>Read Full Bulletin</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7. Media & Key Events ---------------- */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#123E30] tracking-tight">
              Media & Publications 2026
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((evt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {evt.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-gray-900 group-hover:text-[#123E30] transition-colors leading-snug mb-3">
                      {evt.title}
                    </h3>
                    <div className="space-y-1.5 text-xs text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <CalendarFold className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>{evt.time}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate('media')}
                    className="w-full bg-gray-50 hover:bg-[#123E30] text-gray-800 hover:text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 9. Chashma-Sar Platform Banner ---------------- */}
      <section className="w-full bg-[#123E30] text-white py-16 px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-3">
            Joint MSSADO & Chashma-Sar Initiative
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Afghanistan's First Free Satellite-Based Multi-Hazard Intelligence Platform
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            34 provinces, 399 districts, 51 indicators, and 7 hazard categories. Providing district-level drought, flood, heat, and groundwater intelligence.
          </p>

          <button
            type="button"
            onClick={onOpenDonate}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-extrabold text-sm uppercase tracking-wider px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer inline-flex items-center gap-2 group"
          >
            <span>Explore Platform</span>
            <Satellite className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>

     

      {/* ---------------- 11. Partners & Alliances Strip ---------------- */}
      <section className="w-full py-12 bg-[#FDFBF7] border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
            Donors, Institutional Partners & Affiliations (AWEC, TLO, UNESCO Jakarta, Unisfere, AWAP)
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
            {PARTNERS_ROW1.concat(PARTNERS_ROW2.slice(0, 3)).map((p, i) => (
              <img
                key={i}
                src={p.img}
                alt={p.name}
                className="h-10 sm:h-12 w-auto object-contain max-w-[120px]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};