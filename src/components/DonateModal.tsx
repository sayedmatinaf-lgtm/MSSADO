/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Heart, CheckCircle2, ShieldCheck, DollarSign } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCause?: string;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  defaultCause = 'Water Resources & Clean Drinking Water'
}) => {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCause, setSelectedCause] = useState<string>(defaultCause);
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      setAmount(num);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto border border-gray-100">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-amber-100 text-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You, {donorName || 'Generous Supporter'}!</h3>
            <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
              Your pledge of <strong className="text-gray-900">${amount} {frequency === 'monthly' ? '/ month' : ''}</strong> towards <em>{selectedCause}</em> creates immediate tangible change for vulnerable communities in Afghanistan.
            </p>
            <div className="bg-[#FBF9F5] p-4 rounded-xl border border-amber-100 text-left text-xs text-gray-600 mb-6 space-y-1.5">
              <p><span className="font-semibold text-gray-800">Confirmation Reference:</span> MSSADO-{(Date.now() % 1000000).toString().padStart(6, '0')}</p>
              <p><span className="font-semibold text-gray-800">Organization:</span> Mirab Social Services and Development Organization</p>
              <p><span className="font-semibold text-gray-800">Ministry of Economy Registration:</span> Reg #2022</p>
              <p><span className="font-semibold text-gray-800">Official Receipt:</span> A tax-exempt confirmation has been sent to {donorEmail || 'your email'}.</p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-[#123E30] hover:bg-[#0d2b22] text-white py-3 px-6 rounded-full font-semibold text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-amber-500/10 flex items-center justify-center text-[#F59E0B]">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  Make a Donation
                </h3>
                <p className="text-xs text-[#F59E0B] font-semibold tracking-wide uppercase">
                  Your Donation Means A Lot To Them
                </p>
              </div>
            </div>

            {/* Frequency Toggle */}
            <div className="flex bg-gray-100 p-1 rounded-full mb-5">
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  frequency === 'once' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Give Once
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  frequency === 'monthly' ? 'bg-[#123E30] text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly Gift
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Preset Amounts */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Select Donation Amount (USD)
                </label>
                <div className="grid grid-cols-5 gap-2 mb-2">
                  {presetAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleAmountClick(val)}
                      className={`py-2.5 text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                        amount === val && !customAmount
                          ? 'bg-[#F59E0B] text-white border-[#F59E0B] shadow-xs'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400'
                      }`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>
                {/* Custom Amount */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <input
                    type="number"
                    min="5"
                    step="5"
                    placeholder="Other Amount..."
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                  />
                </div>
              </div>

              {/* Select Program / Cause */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Direct My Contribution To
                </label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-hidden focus:border-[#F59E0B]"
                >
                  <option value="Water Resources & Clean Drinking Water">Water Resources & Clean Drinking Water (WASH)</option>
                  <option value="Community Flood Risk Reduction & Early Warning">Community Flood Risk Reduction</option>
                  <option value="Herat Seismic Safety & Psychosocial Support for Women">Women's Seismic Safety & Wellbeing</option>
                  <option value="Green Legacy & Afforestation Initiative">Green Legacy Campaign & Glaciers</option>
                  <option value="General Humanitarian Fund (Where Needed Most)">General Humanitarian Fund (Where Needed Most)</option>
                </select>
              </div>

              {/* Donor Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#F59E0B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email for Receipt
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-xl focus:outline-hidden focus:border-[#F59E0B]"
                  />
                </div>
              </div>

              {/* Security note */}
              <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Secure & Tax-Deductible Non-Profit Donation</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Donate ${amount} {frequency === 'monthly' ? '/ Month' : 'Now'}</span>
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
