'use client';

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQ) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-[#E8E4DC] rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-[#E8E4DC]/30 transition-colors"
      >
        <span className="font-semibold text-[#2D2D2D] pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#E8725A] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#5c5c5c] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-[#5c5c5c] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
