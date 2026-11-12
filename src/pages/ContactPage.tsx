/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4500);
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* 1. Header Banner */}
      <section className="w-full bg-[#0D241C] text-white py-16 lg:py-20 border-b-4 border-[#F59E0B]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Contact US
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl">
            We welcome inquiries, humanitarian partnerships, academic research collaborations, and donor support.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact details in modern Charius cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                Our Headquarters
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#123E30] tracking-tight mb-4">
                Operational Presence Across Afghanistan
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                MSSADO maintains key project hubs in Herat and Kabul to coordinate nationwide disaster risk reduction and WASH programs.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-amber-100 flex items-start gap-4 shadow-2xs">
                <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center text-[#F59E0B] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-gray-900">Phone & WhatsApp</h4>
                  <a href="tel:+93796645685" className="text-xs sm:text-sm text-gray-600 hover:text-[#F59E0B] block mt-0.5">
                    +93 796645685
                  </a>
                  <a href="tel:+93790018557" className="text-xs sm:text-sm text-gray-600 hover:text-[#F59E0B] block">
                    +93 790018557
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-amber-100 flex items-start gap-4 shadow-2xs">
                <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-[#123E30] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-gray-900">Official Email</h4>
                  <a href="mailto:info@mssado.org" className="text-xs sm:text-sm text-gray-600 hover:text-[#F59E0B] block mt-0.5">
                    info@mssado.org
                  </a>
                  <a href="mailto:mssado.afg@gmail.com" className="text-xs sm:text-sm text-gray-600 hover:text-[#F59E0B] block">
                    mssado.afg@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-amber-100 flex items-start gap-4 shadow-2xs">
                <div className="w-11 h-11 rounded-full bg-teal-100 flex items-center justify-center text-[#0D9488] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-gray-900">Locations & Centers</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                    Herat & Kabul Centers, Afghanistan
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                Connect With Our Team:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-colors text-gray-700"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-colors text-gray-700"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-colors text-gray-700"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-xl">
              <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
                Send A Message
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#123E30] tracking-tight mb-6">
                How Can We Collaborate?
              </h3>

              {formSubmitted ? (
                <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#F59E0B] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-gray-900 mb-1">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Thank you for reaching out to MSSADO. Our coordination office will review your message and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+93..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-hidden focus:border-[#F59E0B]"
                      >
                        <option value="">Select a topic...</option>
                        <option value="Partnership / Grant Funding">Partnership / Grant Funding</option>
                        <option value="Water & WASH Program Consultation">Water & WASH Program Consultation</option>
                        <option value="Research & Academic Collaboration">Research & Academic Collaboration</option>
                        <option value="Volunteer & Community Service">Volunteer & Community Service</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white py-3.5 px-6 rounded-full font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
