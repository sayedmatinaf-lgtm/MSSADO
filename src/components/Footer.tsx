/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { NAV_ITEMS } from './Navbar';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenDonate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDonate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="contact-footer" className="w-full bg-[#0D241C] text-white pt-16 sm:pt-20 pb-10 border-t-4 border-[#F59E0B]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: About Charius/MSSADO Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/mirab/logo.png"
                alt="MSSADO Logo"
                className="w-12 h-12 object-contain bg-white/10 rounded-full p-1"
              />
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white block">
                  MSSADO
                </span>
                <span className="text-[10px] text-[#F59E0B] font-bold tracking-widest uppercase">
                  Charity & Development
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Mirab Social Services and Development Organization is an officially registered non-profit organization (Ministry of Economy 2022) dedicated to sustainable development, clean water, disaster risk reduction, and empowering vulnerable communities across Afghanistan.
            </p>

            {/* Social Icons with Amber Hover */}
            <div className="flex items-center space-x-3 text-gray-300">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-[#F59E0B]" />
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[#F59E0B] hover:translate-x-1 transition-all cursor-pointer text-left capitalize"
                  >
                    {item.name.toLowerCase()}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenDonate}
                  className="text-[#F59E0B] hover:underline cursor-pointer font-semibold"
                >
                  Donate now
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Areas (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase mb-5 relative inline-block">
              Our Focus Areas
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-[#F59E0B]" />
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('focus-drr')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left block"
                >
                  Disaster Risk Reduction (DRR)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('focus-wash')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left block"
                >
                  Water Resources & WASH Treatment
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('focus-climate')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left block"
                >
                  Climate Change & Glaciers Protection
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('focus-agriculture')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left block"
                >
                  Agriculture & Food Security
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('focus-research')}
                  className="hover:text-[#F59E0B] transition-colors cursor-pointer text-left block"
                >
                  Research, Policy & Awareness
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-base text-white tracking-wide uppercase mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-[#F59E0B]" />
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300 mb-5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Operational offices in Herat & Kabul, Afghanistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href="tel:+93796645685" className="hover:text-white transition-colors">
                  +93 796645685 / +93 790018557
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href="mailto:info@mssado.org" className="hover:text-white transition-colors">
                  info@mssado.org
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleNewsletterSubmit} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Enter your email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-hidden focus:border-[#F59E0B] pr-10"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-8 bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-[11px] text-[#F59E0B] flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Subscribed! Thank you for supporting our mission.</span>
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>© 2026 MSSADO - Mirab Social Services and Development Organization. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-400 text-xs">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
