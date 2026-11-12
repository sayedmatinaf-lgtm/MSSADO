/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Facebook, Linkedin, Youtube, Menu, X, Phone, MapPin, Search, Heart ,SatelliteDish} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenDonate?: () => void;
}

export const NAV_ITEMS = [
  { name: 'HOME', id: 'home' },
  { name: 'ABOUT US', id: 'about' },
  { name: 'FOCUS AREA', id: 'focus-area' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'MEDIA', id: 'media' },
  { name: 'CONTACT', id: 'contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenDonate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('projects');
      setSearchOpen(false);
    }
  };

  // Determine active item
  const isItemActive = (id: string) => {
    if (currentPage === id) return true;
    if (currentPage.startsWith('focus-') && id === 'focus-area') return true;
    if (currentPage.startsWith('project-') && id === 'projects') return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-xs">
      {/* 1. Charius Dark Teal Announcement Bar */}
      <div className="bg-[#123E30] text-gray-200 text-xs py-2 px-6 lg:px-20 border-b border-white/10 hidden sm:block">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+93796645685"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>+93 796645685</span>
            </a>
            <div className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Herat & Kabul, Afghanistan</span>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-4 text-gray-300">
            <span className="text-[11px] text-gray-400">Follow Us:</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#F59E0B] transition-colors p-0.5"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#F59E0B] transition-colors p-0.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#F59E0B] transition-colors p-0.5"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-[88px] flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="flex items-center gap-3.5 focus:outline-hidden cursor-pointer group text-left"
            aria-label="MSSADO Homepage"
          >
            <img
              src="/assets/mirab/logo.png"
              alt="MSSADO Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-[#123E30] leading-none">
                MSSADO
              </span>
              <span className="text-[10px] text-[#F59E0B] font-bold tracking-wider uppercase mt-0.5">
                Charity & Development
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[13px] font-bold tracking-wider text-gray-700 uppercase">
          {NAV_ITEMS.map((link) => {
            const active = isItemActive(link.id);
            return (
              <button
                key={link.name}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`relative py-2 text-left transition-colors cursor-pointer hover:text-[#123E30] ${
                  active ? 'text-[#123E30] font-extrabold' : 'text-gray-600'
                }`}
              >
                <span>{link.name}</span>
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F59E0B] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Zone: Search + Donate Button */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Search Toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-[#123E30] hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Search causes"
            >
              <Search className="w-4 h-4" />
            </button>
            {searchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-0 top-11 bg-white shadow-xl rounded-xl p-2 border border-gray-100 flex items-center gap-2 w-64 z-50 animate-fade-in"
              >
                <input
                  type="text"
                  placeholder="Search causes & projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs px-3 py-1.5 border border-gray-200 rounded-lg focus:outline-hidden focus:border-[#F59E0B]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-[#123E30] text-white p-1.5 rounded-lg text-xs font-semibold cursor-pointer shrink-0"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Platform  */}
          <button
            type="button"
            onClick={() => window.open("https://chashma-490208.projects.earthengine.app/view/chashma-sar", "_blank", "noopener,noreferrer")}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer group"
          >
            <span>Platform</span>
            <SatelliteDish className="w-3.5 h-3.5  group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-black focus:outline-hidden cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-xl space-y-4 animate-fade-in">
          {NAV_ITEMS.map((link) => {
            const active = isItemActive(link.id);
            return (
              <button
                key={link.name}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`block w-full text-left py-2 text-sm font-bold tracking-wider cursor-pointer ${
                  active ? 'text-[#123E30] pl-3 border-l-4 border-[#F59E0B] bg-amber-50/50' : 'text-gray-700 hover:text-[#123E30]'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-gray-600">
            <span className="text-xs text-gray-500">Contact: +93 796645685</span>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
