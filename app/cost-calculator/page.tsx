'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, DollarSign, Clock, CheckCircle2, Sparkles } from "lucide-react";

const services = [
  { id: "rev", name: "Rev.com (Human)", ratePerMin: 1.50, color: "#6b7280" },
  { id: "otter", name: "Otter.ai (AI)", ratePerMin: 0.17, color: "#6b7280" },
  { id: "scribie", name: "Scribie", ratePerMin: 0.10, color: "#6b7280" },
  { id: "manual", name: "In-house staff", ratePerMin: 0.83, color: "#6b7280" }, // ~$50/hr
  { id: "us", name: "Sermon Transcription", ratePerMin: 0.006, color: "#E8725A" },
];

function formatCurrency(val: number): string {
  if (val >= 1000) return `$${(val / 1000).toFixed(1)}k`;
  return `$${val.toFixed(2)}`;
}

export default function CostCalculator() {
  const [sermonsPerYear, setSermonsPerYear] = useState(52);
  const [avgLength, setAvgLength] = useState(45);
  const [currentService, setCurrentService] = useState("rev");

  const totalMinutes = sermonsPerYear * avgLength;
  const current = services.find(s => s.id === currentService)!;
  const us = services.find(s => s.id === "us")!;

  const currentAnnualCost = totalMinutes * current.ratePerMin;
  const ourAnnualCost = totalMinutes * us.ratePerMin;
  const annualSavings = currentAnnualCost - ourAnnualCost;
  const savingsPercent = Math.round((annualSavings / currentAnnualCost) * 100);
  const perSermonCurrent = avgLength * current.ratePerMin;
  const perSermonUs = avgLength * us.ratePerMin;

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <path d="M15 0h10v15h15v10h-15v15h-10v-15h-15v-10h15z" fill="#2D2D2D" />
                <path d="M18 16 L26 20 L18 24 Z" fill="#E8725A" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl text-[#2D2D2D] tracking-tight">Sermon</span>
              <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">Transcription</span>
            </div>
          </a>
          <Link href="/transcribe" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25">
            Start Free
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            <span>Sermon Transcription Cost Calculator</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-tight mb-4">
            How much is your church
            <span className="text-[#E8725A]"> overpaying</span> for transcription?
          </h1>
          <p className="text-lg text-[#5c5c5c] max-w-xl mx-auto">
            Enter your sermon schedule below and see your real annual cost — compared to what it could be.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Inputs */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8E4DC] shadow-sm">
              <h2 className="text-xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E8725A]" />
                Your Church's Schedule
              </h2>

              {/* Sermons per year */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Sermons per year: <span className="text-[#E8725A]">{sermonsPerYear}</span>
                </label>
                <input
                  type="range"
                  min={12}
                  max={260}
                  step={1}
                  value={sermonsPerYear}
                  onChange={e => setSermonsPerYear(Number(e.target.value))}
                  className="w-full accent-[#E8725A]"
                />
                <div className="flex justify-between text-xs text-[#5c5c5c] mt-1">
                  <span>12/yr (monthly)</span>
                  <span>52/yr (weekly)</span>
                  <span>260/yr (5x/wk)</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[12, 52, 104].map(n => (
                    <button
                      key={n}
                      onClick={() => setSermonsPerYear(n)}
                      className={`py-1.5 rounded-lg text-xs font-medium border transition-all ${sermonsPerYear === n ? 'bg-[#E8725A] text-white border-[#E8725A]' : 'bg-white text-[#5c5c5c] border-[#E8E4DC] hover:border-[#E8725A]'}`}
                    >
                      {n === 12 ? 'Monthly' : n === 52 ? 'Weekly' : 'Bi-weekly'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Average sermon length */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Average sermon length: <span className="text-[#E8725A]">{avgLength} min</span>
                </label>
                <input
                  type="range"
                  min={15}
                  max={120}
                  step={5}
                  value={avgLength}
                  onChange={e => setAvgLength(Number(e.target.value))}
                  className="w-full accent-[#E8725A]"
                />
                <div className="flex justify-between text-xs text-[#5c5c5c] mt-1">
                  <span>15 min</span>
                  <span>45 min</span>
                  <span>2 hours</span>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[20, 30, 45, 60].map(n => (
                    <button
                      key={n}
                      onClick={() => setAvgLength(n)}
                      className={`py-1.5 rounded-lg text-xs font-medium border transition-all ${avgLength === n ? 'bg-[#E8725A] text-white border-[#E8725A]' : 'bg-white text-[#5c5c5c] border-[#E8E4DC] hover:border-[#E8725A]'}`}
                    >
                      {n} min
                    </button>
                  ))}
                </div>
              </div>

              {/* Current service */}
              <div>
                <label className="block text-sm font-semibold text-[#2D2D2D] mb-3">
                  Current transcription method:
                </label>
                <div className="space-y-2">
                  {services.filter(s => s.id !== 'us').map(s => (
                    <button
                      key={s.id}
                      onClick={() => setCurrentService(s.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-sm transition-all ${currentService === s.id ? 'bg-[#2D2D2D] text-white border-[#2D2D2D]' : 'bg-white text-[#5c5c5c] border-[#E8E4DC] hover:border-[#2D2D2D]/30'}`}
                    >
                      <span className="font-medium">{s.name}</span>
                      <span className={currentService === s.id ? 'text-white/70' : 'text-[#5c5c5c]'}>
                        ${s.ratePerMin.toFixed(s.ratePerMin < 0.1 ? 3 : 2)}/min
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {/* Annual cost comparison */}
              <div className="bg-white rounded-3xl p-8 border border-[#E8E4DC] shadow-sm">
                <h2 className="text-lg font-bold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#E8725A]" />
                  Annual Cost Comparison
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#f5f0e8] border border-[#E8E4DC]">
                    <div>
                      <p className="text-sm text-[#5c5c5c]">{current.name}</p>
                      <p className="text-xs text-[#5c5c5c] mt-0.5">${perSermonCurrent.toFixed(2)}/sermon</p>
                    </div>
                    <p className="text-2xl font-bold text-[#5c5c5c] line-through">{formatCurrency(currentAnnualCost)}/yr</p>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#E8725A]/10 border-2 border-[#E8725A]">
                    <div>
                      <p className="text-sm font-semibold text-[#E8725A]">Sermon Transcription</p>
                      <p className="text-xs text-[#E8725A]/70 mt-0.5">${perSermonUs.toFixed(2)}/sermon</p>
                    </div>
                    <p className="text-2xl font-bold text-[#E8725A]">{formatCurrency(ourAnnualCost)}/yr</p>
                  </div>
                </div>

                <div className="bg-[#2D2D2D] rounded-2xl p-5 text-center">
                  <p className="text-white/60 text-sm mb-1">Your church saves</p>
                  <p className="text-4xl font-bold text-[#E8725A] mb-1">{formatCurrency(annualSavings)}/year</p>
                  <p className="text-white/60 text-sm">{savingsPercent}% savings on transcription costs</p>
                </div>
              </div>

              {/* Sermon stats */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E4DC] shadow-sm">
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E8725A]" />
                  Your Transcription Volume
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#f5f0e8]">
                    <p className="text-xl font-bold text-[#2D2D2D]">{sermonsPerYear}</p>
                    <p className="text-xs text-[#5c5c5c]">sermons/year</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f5f0e8]">
                    <p className="text-xl font-bold text-[#2D2D2D]">{avgLength}m</p>
                    <p className="text-xs text-[#5c5c5c]">avg. length</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f5f0e8]">
                    <p className="text-xl font-bold text-[#2D2D2D]">{Math.round(totalMinutes / 60)}h</p>
                    <p className="text-xs text-[#5c5c5c]">total audio/yr</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#E8725A] rounded-3xl p-6 text-center">
                <p className="text-white font-bold text-lg mb-1">Start saving {formatCurrency(annualSavings)}/year</p>
                <p className="text-white/80 text-sm mb-4">First 10 minutes free. No credit card required.</p>
                <Link
                  href="/transcribe"
                  className="w-full py-3 px-6 bg-white text-[#E8725A] rounded-full font-bold hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                >
                  Start Free Transcription
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why switch section */}
      <section className="py-16 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-10">Why churches switch to Sermon Transcription</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "250× cheaper than Rev.com", desc: "Same quality, fraction of the cost. AI transcription has caught up." },
              { title: "Results in under 5 minutes", desc: "No waiting days for a human transcriptionist. Upload, wait, download." },
              { title: "Accuracy churches trust", desc: "99.5% accuracy powered by OpenAI Whisper. Handles accents and church acoustics." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
                <CheckCircle2 className="w-6 h-6 text-[#E8725A] mb-3" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] text-center mb-8">Cost per sermon — all services compared</h2>
          <div className="bg-white rounded-2xl border border-[#E8E4DC] overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2D2D2D] text-white">
                  <th className="text-left py-4 px-6 font-semibold">Service</th>
                  <th className="text-right py-4 px-6 font-semibold">Rate</th>
                  <th className="text-right py-4 px-6 font-semibold">30-min sermon</th>
                  <th className="text-right py-4 px-6 font-semibold">45-min sermon</th>
                  <th className="text-right py-4 px-6 font-semibold">60-min sermon</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E8E4DC] text-[#5c5c5c]">
                  <td className="py-3 px-6">Rev.com (human)</td>
                  <td className="py-3 px-6 text-right">$1.50/min</td>
                  <td className="py-3 px-6 text-right">$45.00</td>
                  <td className="py-3 px-6 text-right">$67.50</td>
                  <td className="py-3 px-6 text-right">$90.00</td>
                </tr>
                <tr className="border-t border-[#E8E4DC] text-[#5c5c5c]">
                  <td className="py-3 px-6">In-house staff ($50/hr)</td>
                  <td className="py-3 px-6 text-right">~$0.83/min</td>
                  <td className="py-3 px-6 text-right">$25.00</td>
                  <td className="py-3 px-6 text-right">$37.50</td>
                  <td className="py-3 px-6 text-right">$50.00</td>
                </tr>
                <tr className="border-t border-[#E8E4DC] text-[#5c5c5c]">
                  <td className="py-3 px-6">Otter.ai</td>
                  <td className="py-3 px-6 text-right">$0.17/min</td>
                  <td className="py-3 px-6 text-right">$5.10</td>
                  <td className="py-3 px-6 text-right">$7.65</td>
                  <td className="py-3 px-6 text-right">$10.20</td>
                </tr>
                <tr className="border-t border-[#E8E4DC] text-[#5c5c5c]">
                  <td className="py-3 px-6">Scribie</td>
                  <td className="py-3 px-6 text-right">$0.10/min</td>
                  <td className="py-3 px-6 text-right">$3.00</td>
                  <td className="py-3 px-6 text-right">$4.50</td>
                  <td className="py-3 px-6 text-right">$6.00</td>
                </tr>
                <tr className="border-t-2 border-[#E8725A] bg-[#E8725A]/5">
                  <td className="py-3 px-6 font-bold text-[#E8725A]">Sermon Transcription ✓</td>
                  <td className="py-3 px-6 text-right font-bold text-[#E8725A]">$0.006/min</td>
                  <td className="py-3 px-6 text-right font-bold text-[#E8725A]">$0.18</td>
                  <td className="py-3 px-6 text-right font-bold text-[#E8725A]">$0.27</td>
                  <td className="py-3 px-6 text-right font-bold text-[#E8725A]">$0.36</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-[#5c5c5c] mt-3">
            Rates current as of 2026. In-house estimate based on 3× real-time transcription rate at $50/hr.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Ready to stop overpaying?</h2>
          <p className="text-[#5c5c5c] mb-8">First 10 minutes free. No credit card. Set up in under 60 seconds.</p>
          <Link
            href="/transcribe"
            className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2"
          >
            Start Free Transcription
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-[#5c5c5c] mt-4">
            Questions? <a href="mailto:hello@sermon-transcription.com" className="text-[#E8725A] hover:underline">hello@sermon-transcription.com</a>
          </p>
        </div>
      </section>

      <footer className="bg-[#2D2D2D] text-white/40 py-8 px-6 text-center text-sm">
        <p>&copy; 2026 Sermon Transcription. <a href="/" className="hover:text-white transition-colors">Home</a> · <a href="/transcribe" className="hover:text-white transition-colors">Start Transcribing</a> · <a href="/blog" className="hover:text-white transition-colors">Blog</a></p>
      </footer>
    </div>
  );
}
