/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Monitor, Smartphone, Star } from 'lucide-react';

const STEPS = [
  "Click \"Claim Now\"",
  "Enter your email and basic info",
  "Complete 4–5 sponsored deals",
  "Enjoy your $750 voucher!"
];

const FAQS = [
  {
    question: "How long do the deals take?",
    answer: "Most deals take just a few minutes to complete. You can finish them at your own pace with no time limit once you've registered."
  },
  {
    question: "What are deals?",
    answer: "Deals are sponsored offers from partner brands like free trials, discount sign-ups, or sample requests. They're how the voucher is funded."
  },
  {
    question: "How many deals do I have to do?",
    answer: "We recommend completing 4 to 5 deals to qualify. The more you complete, the higher your voucher value climbs \u2014 up to $750."
  },
  {
    question: "When will I receive my voucher?",
    answer: "Once your deals are verified, your Target voucher code will be delivered to your email within 24\u201348 hours."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-[10px] shadow-sm overflow-hidden mb-2.5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3.5 py-3 text-left focus:outline-none"
      >
        <span className="font-bold text-[13px] text-black pr-3">{question}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-black shrink-0" /> : <ChevronDown className="w-4 h-4 text-black shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-3.5 pb-3.5 text-[12px] text-gray-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Desktop Blocker */}
      <div className="hidden sm:flex min-h-screen bg-[#f8f8f5] items-center justify-center p-4">
        <div className="max-w-md w-full text-center flex flex-col items-center">
          <div className="flex gap-4 mb-6">
            <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
              <Monitor className="w-7 h-7" />
            </div>
            <div className="w-14 h-14 bg-transparent border-2 border-[#123624] rounded-xl flex items-center justify-center text-[#123624]">
              <Smartphone className="w-7 h-7" />
            </div>
          </div>
          <h2 className="text-[22px] font-extrabold text-black mb-3">Please Visit on Mobile</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            This site is optimized for mobile devices. Please visit this page on your phone for the best experience.
          </p>
        </div>
      </div>

      {/* Main App Container */}
      <div className="sm:hidden min-h-screen bg-[#f8f8f5] flex flex-col font-sans text-black">
      {/* Top Banner */}
      <div className="w-full bg-[#cc0000] text-white text-center py-2 text-[11px] font-bold tracking-widest uppercase">
        3,500+ People Already Claimed
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full max-w-[400px] mx-auto px-4 pt-6 pb-8">

        {/* Logo */}
        <div className="h-[56px] mb-5 mt-1 flex justify-center w-full">
          <svg
            className="h-full object-contain text-[#cc0000] fill-current"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M250,0C111.9,0,0,111.9,0,250s111.9,250,250,250s250-111.9,250-250S388.1,0,250,0z M250,416.7 c-92.1,0-166.7-74.6-166.7-166.7S157.9,83.3,250,83.3S416.7,157.9,416.7,250S342.1,416.7,250,416.7z M250,166.7 c-46,0-83.3,37.3-83.3,83.3s37.3,83.3,83.3,83.3s83.3-37.3,83.3-83.3S296,166.7,250,166.7z"/>
          </svg>
        </div>

        {/* Headers */}
        <h1 className="text-[20px] font-extrabold text-center mb-1 text-black">
           Target Voucher
        </h1>
        <p className="text-gray-600 text-center mb-6 text-[13px]">
          Claim your <span className="font-bold text-black">$750</span> Target voucher
        </p>

        {/* Steps */}
        <div className="w-full flex flex-col gap-2.5 mb-7">
          {STEPS.map((step, index) => (
             <div
              key={index}
              className="bg-white rounded-[10px] py-3 flex items-center shadow-sm border border-transparent"
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#cc0000] border-[1.5px] border-[#cc0000] flex items-center justify-center font-bold text-[13px] shrink-0 ml-3.5 mr-3.5">
                {index + 1}
              </div>
              <span className="font-bold text-[13px] pr-4 text-black">{step}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button 
           onClick={() => window.location.href = 'https://giftclick.org/aff_c?offer_id=1178&aff_id=144760'}
          className="w-full bg-[#cc0000] hover:bg-[#b30000] active:bg-[#990000] transition-colors text-white font-bold text-[15.5px] py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(204,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(204,0,0,0.23)] active:scale-[0.98] text-center block"
        >
          CLAIM NOW
        </button>

        {/* Footer */}
        <p className="text-[10px] text-gray-400 text-center mt-3.5 mb-7">
          Completion of sponsored deals is required to claim your voucher.
        </p>

        {/* FAQs */}
        <div className="w-full pb-6">
          <h2 className="text-[16px] font-bold text-black mb-3">Frequently Asked Questions</h2>
          <div className="flex flex-col">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-2">
            <span className="text-[#333] font-medium text-[15px]">Excellent</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-[#00b67a] p-[2px] rounded-sm">
                  <Star className="w-[14px] h-[14px] text-white fill-white" strokeWidth={1} />
                </div>
              ))}
            </div>
            <span className="text-[#666] text-[15px]">4.9 / 5</span>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
