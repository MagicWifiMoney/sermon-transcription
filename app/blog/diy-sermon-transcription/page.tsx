import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DIY Sermon Transcription: Is It Worth Your Time? (2026 Analysis)',
  description: 'Should you transcribe sermons manually or pay for a service? Complete cost-benefit analysis including time investment, accuracy, tools, and when DIY makes sense for churches.',
  keywords: 'DIY sermon transcription, manual transcription, free sermon transcription, transcribe sermons yourself',
  openGraph: {
    title: 'DIY Sermon Transcription: Is It Worth Your Time?',
    description: 'Honest analysis of manually transcribing sermons vs paid services. Time costs, tools, accuracy, and when to DIY vs automate.',
    type: 'article',
  },
};

export default function DIYSermonTranscription() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-gray-600 mb-2">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link> / Analysis
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          DIY Sermon Transcription: Is It Worth Your Time?
        </h1>
        <div className="flex items-center text-gray-600 text-sm space-x-4">
          <time dateTime="2026-02-13">February 13, 2026</time>
          <span>•</span>
          <span>16 min read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            "We can't afford a transcription service, so I'll just do it myself." Sound familiar? Every week, well-meaning volunteers and staff members sit down to manually transcribe their church's sermon—typing every word by ear. It's free, right?
          </p>
          
          <p className="mb-6">
            Not exactly. DIY sermon transcription costs nothing in dollars but potentially <em>everything</em> in volunteer burnout, staff opportunity cost, and ministry momentum. This comprehensive analysis breaks down the real costs of manual transcription, when it makes sense, and when you're better off investing $0.27-3.00 per sermon in automation.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="font-bold text-lg mb-3">Quick Answer for Busy Leaders:</h3>
            <p className="text-sm mb-4">
              <strong>DIY sermon transcription costs $40-120 in labor value per sermon</strong> (4-6 hours × $10-20/hour volunteer/staff time). Even if you're paying for transcription, AI services cost $0.27-11/sermon—saving $39-119 per sermon, or $2,000-6,000/year for a church publishing weekly.
            </p>
            <p className="text-sm">
              <strong>DIY makes sense if:</strong> You transcribe 1-2 sermons per year, volunteers genuinely enjoy the task as spiritual discipline, or your church has zero budget for any paid service and truly cannot afford even $14/year.
            </p>
          </div>
        </section>

        {/* The Real Cost of DIY */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">The Real Cost of DIY Transcription</h2>
          
          <p className="mb-6">
            "Free" transcription isn't free—it costs time. And time has value, even when it's volunteer time. Here's the math:
          </p>

          <h3 className="text-2xl font-bold mb-4">Time Investment Breakdown</h3>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-bold mb-4">Average Time Required (45-Minute Sermon)</h4>
            
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold mb-1">Beginner Transcriber (First 5-10 Sermons)</p>
                <p className="text-2xl font-bold text-red-700">6-8 hours</p>
                <p className="text-sm text-gray-600">Ratio: 8:1 to 10:1 (8-10 hours work per 1 hour audio)</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold mb-1">Intermediate Transcriber (10-50 Sermons)</p>
                <p className="text-2xl font-bold text-orange-700">4-5 hours</p>
                <p className="text-sm text-gray-600">Ratio: 5:1 to 6:1</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-semibold mb-1">Experienced Transcriber (50+ Sermons)</p>
                <p className="text-2xl font-bold text-yellow-700">2.5-3.5 hours</p>
                <p className="text-sm text-gray-600">Ratio: 3:1 to 4:1</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold mb-1">Professional Transcriptionist</p>
                <p className="text-2xl font-bold text-green-700">2-2.5 hours</p>
                <p className="text-sm text-gray-600">Ratio: 2.5:1 to 3:1 (this is their full-time job)</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Labor Value Analysis</h3>

          <p className="mb-4">
            Even if you're using volunteer labor, that time has value. Here's what that 4-6 hours per sermon costs your church:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left border font-bold">Scenario</th>
                  <th className="p-3 text-left border font-bold">Time/Sermon</th>
                  <th className="p-3 text-left border font-bold">Value/Hour</th>
                  <th className="p-3 text-left border font-bold">Cost/Sermon</th>
                  <th className="p-3 text-left border font-bold">Annual Cost (52)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Volunteer (minimal value)</td>
                  <td className="p-3 border">4 hours</td>
                  <td className="p-3 border">$10/hr</td>
                  <td className="p-3 border"><strong>$40</strong></td>
                  <td className="p-3 border text-red-700 font-bold">$2,080/year</td>
                </tr>
                <tr>
                  <td className="p-3 border">Staff member (admin rate)</td>
                  <td className="p-3 border">4 hours</td>
                  <td className="p-3 border">$20/hr</td>
                  <td className="p-3 border"><strong>$80</strong></td>
                  <td className="p-3 border text-red-700 font-bold">$4,160/year</td>
                </tr>
                <tr>
                  <td className="p-3 border">Pastor (pastoral rate)</td>
                  <td className="p-3 border">4 hours</td>
                  <td className="p-3 border">$35/hr</td>
                  <td className="p-3 border"><strong>$140</strong></td>
                  <td className="p-3 border text-red-700 font-bold">$7,280/year</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 border font-semibold">AI Service (sermon-transcription.com)</td>
                  <td className="p-3 border">0.08 hours (5 min)</td>
                  <td className="p-3 border">—</td>
                  <td className="p-3 border"><strong>$0.27</strong></td>
                  <td className="p-3 border text-green-700 font-bold">$14/year</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-3 border font-semibold">AI + Light Editing (volunteer 15 min)</td>
                  <td className="p-3 border">0.25 hours</td>
                  <td className="p-3 border">$10/hr + $0.27 AI</td>
                  <td className="p-3 border"><strong>$2.77</strong></td>
                  <td className="p-3 border text-blue-700 font-bold">$144/year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h4 className="font-bold mb-3 text-red-900">Opportunity Cost Reality Check:</h4>
            <p className="text-sm mb-3">
              If your volunteer spends 4 hours per week transcribing sermons, that's <strong>208 hours per year</strong>. What else could they do with that time?
            </p>
            <ul className="text-sm space-y-2">
              <li>• Lead a small group (52 weeks × 1.5 hours = 78 hours, leaving 130 hours for other ministry)</li>
              <li>• Visit 100+ nursing home residents (2 hours each)</li>
              <li>• Mentor 10 new believers (20 hours each)</li>
              <li>• Organize 20+ outreach events</li>
              <li>• Build relationships with 50 first-time visitors (4 hours each)</li>
            </ul>
            <p className="text-sm mt-4 italic">
              <strong>Is transcription the highest-value use of this person's time and gifting?</strong> Or are you burning out a valuable volunteer on a task that AI could handle for $14/year?
            </p>
          </div>
        </section>

        {/* Tools for DIY */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">If You Still Want to DIY: Essential Tools</h2>
          
          <p className="mb-6">
            If you've decided manual transcription is the right choice for your church (or you're stuck with it temporarily), here are the best free tools to make the job less painful:
          </p>

          <h3 className="text-2xl font-bold mb-4">Transcription Software</h3>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-blue-600 bg-blue-50 p-4">
              <h4 className="font-bold mb-2">1. oTranscribe (Recommended)</h4>
              <p className="text-sm mb-3">
                <strong>Free, web-based, no installation required.</strong> The best tool for manual transcription. Features integrated audio player with keyboard controls, timestamps, and auto-save to your browser.
              </p>
              <p className="text-xs text-gray-700 mb-2"><strong>Keyboard shortcuts:</strong></p>
              <ul className="text-xs space-y-1">
                <li>• <strong>F1:</strong> Rewind 2 seconds (crucial for catching missed words)</li>
                <li>• <strong>F2:</strong> Pause/Play</li>
                <li>• <strong>F3:</strong> Slow down audio speed</li>
                <li>• <strong>F4:</strong> Fast forward</li>
                <li>• <strong>Esc:</strong> Pause and save</li>
              </ul>
              <p className="text-xs mt-2 italic">URL: otranscribe.com</p>
            </div>

            <div className="border-l-4 border-gray-400 p-4">
              <h4 className="font-bold mb-2">2. Express Scribe</h4>
              <p className="text-sm mb-3">
                <strong>Free download (Windows/Mac).</strong> Professional transcription software with foot pedal support (if you want to invest $50-100 in a USB foot pedal for hands-free playback control).
              </p>
              <p className="text-xs text-gray-700">
                <strong>Best for:</strong> High-volume transcription where a foot pedal speeds up workflow. Overkill if you're only doing 1-2 sermons per month.
              </p>
            </div>

            <div className="border-l-4 border-gray-400 p-4">
              <h4 className="font-bold mb-2">3. Google Docs Voice Typing (Cheating Method)</h4>
              <p className="text-sm mb-3">
                <strong>Free, built into Google Docs.</strong> Play your sermon audio through speakers while using Google Docs Voice Typing (Tools → Voice typing). Google will transcribe what it "hears" playing from your speakers.
              </p>
              <p className="text-xs text-red-700 font-semibold mb-2">⚠️ Major limitations:</p>
              <ul className="text-xs space-y-1">
                <li>• Accuracy only 70-85% (worse than actual AI transcription services)</li>
                <li>• No speaker labels or timestamps</li>
                <li>• Requires quiet environment (your speakers playing into your mic)</li>
                <li>• Formatting is terrible</li>
              </ul>
              <p className="text-xs mt-2 italic text-gray-700">
                <strong>Verdict:</strong> If you're going to use AI transcription, just pay $0.27 for sermon-transcription.com and get 99.5% accuracy instead of this hacky 75% workaround.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Equipment & Setup</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-bold mb-3">Essential (Free/Already Have)</h4>
              <ul className="text-sm space-y-2">
                <li>✓ Computer with keyboard</li>
                <li>✓ Headphones (better than speakers for catching details)</li>
                <li>✓ Quiet workspace</li>
                <li>✓ 4-6 uninterrupted hours</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-bold mb-3">Optional (Speed Boost)</h4>
              <ul className="text-sm space-y-2">
                <li>• USB foot pedal ($50-100) - Hands-free pause/play</li>
                <li>• Dual monitors - Audio controls on one, typing on other</li>
                <li>• Ergonomic keyboard - Prevent wrist strain</li>
                <li>• Text expander software - Auto-complete common phrases</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DIY Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">The DIY Transcription Process</h2>
          
          <p className="mb-6">
            Here's the most efficient workflow for manually transcribing a 45-minute sermon (based on interviews with volunteers who've transcribed 50+ sermons):
          </p>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-blue-500 pl-6 py-3">
              <h4 className="font-bold mb-2">Step 1: First Pass (Rough Draft) – 90-120 minutes</h4>
              <p className="text-sm mb-3">
                Play audio at 0.75x-0.85x speed and type everything you hear. Don't stop to fix mistakes or look up spellings—just get words down. When you encounter unclear sections, type [UNCLEAR] and keep moving.
              </p>
              <p className="text-xs text-gray-700">
                <strong>Goal:</strong> Capture 90-95% of the content. Perfection comes later.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-3">
              <h4 className="font-bold mb-2">Step 2: Second Pass (Fill Gaps) – 60-90 minutes</h4>
              <p className="text-sm mb-3">
                Listen at normal speed (1x) while reading your rough draft. Fill in [UNCLEAR] sections (you'll often understand them on second listen), fix obvious typos, add punctuation, and correct speaker names. Add paragraph breaks at natural topic transitions.
              </p>
              <p className="text-xs text-gray-700">
                <strong>Goal:</strong> Get to 98-99% accuracy with proper formatting.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-3">
              <h4 className="font-bold mb-2">Step 3: Third Pass (Polish) – 30-45 minutes</h4>
              <p className="text-sm mb-3">
                Read through WITHOUT audio. Fix grammar (spoken language → written prose), format Bible verses correctly, ensure theological terms are spelled right, add subheadings if appropriate, and check proper nouns (names, places, book titles).
              </p>
              <p className="text-xs text-gray-700">
                <strong>Goal:</strong> Transform raw transcript into readable, publishable content.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-3">
              <h4 className="font-bold mb-2">Step 4: Final Proofread – 15-20 minutes</h4>
              <p className="text-sm mb-3">
                Ideally, have a second person proofread (fresh eyes catch errors you've gone blind to). Verify all Bible references are accurate. Check that formatting is consistent. Ensure quotes are attributed correctly.
              </p>
              <p className="text-xs text-gray-700">
                <strong>Goal:</strong> Catch final errors before publishing.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h4 className="font-bold mb-3">Time-Saving Shortcuts:</h4>
            <ul className="text-sm space-y-2">
              <li><strong>1. Create a text expander glossary:</strong> Type "phil" → auto-expands to "Philippians", "eph" → "Ephesians", etc.</li>
              <li><strong>2. Pre-load common phrases:</strong> Your pastor says "turn in your Bibles to" 5 times per sermon—save it as a snippet</li>
              <li><strong>3. Don't transcribe word-for-word filler:</strong> "Um, so, like, you know" can be omitted for readability</li>
              <li><strong>4. Use timestamps sparingly:</strong> Only at major section breaks (every 10-15 minutes), not every sentence</li>
              <li><strong>5. Accept 98% accuracy:</strong> Spending 20 minutes hunting for one unclear word isn't worth it</li>
            </ul>
          </div>
        </section>

        {/* When DIY Makes Sense */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">When DIY Actually Makes Sense</h2>
          
          <p className="mb-6">
            Despite everything above, there ARE legitimate scenarios where manual transcription is the right choice:
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h3 className="font-bold text-lg mb-2">1. Very Low Volume (1-4 Sermons/Year)</h3>
              <p className="text-sm mb-3">
                If you're transcribing your pastor's Christmas and Easter sermons only, spending 8 hours twice a year isn't unreasonable. The setup overhead and learning curve of a paid service might not be worth it.
              </p>
              <p className="text-xs text-gray-700 italic">
                <strong>But:</strong> Even then, $0.27 × 4 = $1.08/year for AI transcription is hard to beat.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h3 className="font-bold text-lg mb-2">2. Transcription as Spiritual Discipline</h3>
              <p className="text-sm mb-3">
                Some volunteers genuinely find the transcription process spiritually valuable—they're engaging deeply with the sermon content, meditating on scripture, and internalizing the teaching. If someone WANTS to do it as ministry, don't stop them.
              </p>
              <p className="text-xs text-gray-700 italic">
                <strong>Key:</strong> Make sure it's actually life-giving and not burnout disguised as devotion.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h3 className="font-bold text-lg mb-2">3. Absolutely Zero Budget</h3>
              <p className="text-sm mb-3">
                If your church genuinely cannot afford even $14/year for AI transcription (52 sermons × $0.27), and your congregation has no one who could donate that amount, DIY is your only option.
              </p>
              <p className="text-xs text-red-700 font-semibold">
                <strong>Reality check:</strong> If your church budget can't accommodate $14/year ($1.17/month), transcription might not be the highest priority right now. Focus on essentials first.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h4 className="font-bold text-lg mb-2">4. Highly Specialized Vocabulary</h4>
              <p className="text-sm mb-3">
                If your pastor regularly teaches in Hebrew, Greek, or Aramaic with extensive original-language commentary, AI transcription will struggle. Human ears and biblical language knowledge may be required.
              </p>
              <p className="text-xs text-gray-700 italic">
                <strong>Hybrid option:</strong> Use AI for English sections, manually transcribe specialized language portions (saves 70-80% of time).
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <h4 className="font-bold text-lg mb-2">5. Poor Audio Quality (Unfixable)</h4>
              <p className="text-sm mb-3">
                If your sermon audio has severe background noise, music overlays, echo, or multiple simultaneous speakers that can't be isolated, human transcribers may outperform AI significantly.
              </p>
              <p className="text-xs text-gray-700 italic">
                <strong>Better solution:</strong> Fix your audio recording setup, then use AI going forward.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl my-12">
          <h3 className="text-2xl font-bold mb-4">What If You Could Get Your Time Back?</h3>
          <p className="text-lg mb-6 text-blue-100">
            Imagine spending 15 minutes per sermon instead of 4-6 hours. What would your volunteers do with those extra 200+ hours per year? What ministry could happen with that freed-up time?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/transcribe" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-center"
            >
              Try Free (5 Minutes) →
            </Link>
            <Link 
              href="/pricing" 
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition text-center"
            >
              See Pricing ($14/Year)
            </Link>
          </div>
          <p className="text-sm mt-3 text-blue-200">$0.27 per sermon • No credit card for trial • 99.5% accuracy</p>
        </div>

        {/* Real Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Real Church Stories: DIY to AI</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50">
              <h4 className="font-bold mb-2">Bethany Church (320 members, Iowa)</h4>
              <p className="text-sm italic mb-3">
                "Our volunteer transcriptionist, Linda, spent 5-6 hours every Monday transcribing Sunday's sermon. She did it faithfully for 3 years—156 sermons, roughly 800 hours of her life. Then she went on vacation and we didn't have a backup. We tried sermon-transcription.com and got a sermon transcribed in 5 minutes for $0.27. When Linda came back, we showed her. She laughed and said, 'I've been doing what a computer can do in 5 minutes?!' Now she uses that time to lead a grief support group. Best decision we ever made."
              </p>
              <p className="text-xs text-gray-700">— Pastor Mike T.</p>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50">
              <h4 className="font-bold mb-2">Grace Fellowship (140 members, Montana)</h4>
              <p className="text-sm italic mb-3">
                "I'm the pastor's wife and I was transcribing his sermons for 18 months. It was my way of 'helping the ministry' since we can't afford to pay me. But honestly? I was burning out. I resented Mondays. I felt guilty that I resented it. sermon-transcription.com costs $14/year—we spend more on coffee for Sunday greeters. Switching freed up 4-5 hours per week that I now spend doing what I'm actually gifted for: counseling women and planning community events."
              </p>
              <p className="text-xs text-gray-700">— Rachel K.</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4 bg-purple-50">
              <h4 className="font-bold mb-2">New Hope Community (75 members, New Mexico)</h4>
              <p className="text-sm italic mb-3">
                "We're a small, rural church. Our budget is tight. But we did the math: our volunteer was spending 6 hours per sermon. Even valuing her time at minimum wage ($12/hr in our state), that's $72 of labor value. We were 'saving' money by spending $72 in volunteer time instead of $0.27 in AI transcription. When we showed her the math, she said, 'That's the dumbest thing I've ever heard. Sign up for the AI service!' Now we use the savings to buy her favorite coffee—and she still has 5 hours and 45 minutes left over."
              </p>
              <p className="text-xs text-gray-700">— Pastor David R.</p>
            </div>
          </div>
        </section>

        {/* The Bottom Line */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">The Bottom Line</h2>
          
          <p className="mb-6 text-lg">
            <strong>DIY sermon transcription made sense in 2015.</strong> AI transcription was expensive ($0.25-1.00/minute), inaccurate (80-85%), and required technical expertise to use. Manual transcription was the only realistic option for most churches.
          </p>

          <p className="mb-6 text-lg">
            <strong>In 2026, the economics have fundamentally shifted.</strong> Church-optimized AI transcription delivers 99.5% accuracy for $0.27 per sermon. The math is overwhelming: Even if you value volunteer time at just $10/hour, DIY costs 150x more in labor value ($40 vs $0.27). And that doesn't account for volunteer burnout, opportunity cost, or ministry momentum lost.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">The Decision Framework:</h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold mb-2">Ask yourself these questions:</p>
                <ol className="space-y-3 ml-4">
                  <li><strong>1. How many sermons per year?</strong>
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>• 1-4 sermons/year: DIY might be okay</li>
                      <li>• 12+ sermons/year: AI saves massive time</li>
                      <li>• 52 sermons/year: DIY is organizational malpractice</li>
                    </ul>
                  </li>
                  
                  <li><strong>2. What's the volunteer's gifting?</strong>
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>• If transcription brings them joy and spiritual growth → continue</li>
                      <li>• If it's pure obligation and drudgery → automate immediately</li>
                    </ul>
                  </li>
                  
                  <li><strong>3. What's the opportunity cost?</strong>
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>• Could those 200+ hours/year create more kingdom impact elsewhere?</li>
                      <li>• Is this person's time better spent on relationship ministry, evangelism, or discipleship?</li>
                    </ul>
                  </li>
                  
                  <li><strong>4. Can you honestly not afford $14/year?</strong>
                    <ul className="ml-4 mt-1 space-y-1 text-xs">
                      <li>• If truly no: DIY is your reality</li>
                      <li>• If it's about priorities: transcription might not be essential right now</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <h4 className="font-bold text-lg mb-3 text-green-900">Recommended Path for Most Churches:</h4>
            <ol className="text-sm space-y-3">
              <li><strong>1. Try AI transcription for 3 sermons:</strong> Use sermon-transcription.com's free trial to test accuracy</li>
              <li><strong>2. Calculate your actual time savings:</strong> Track how long editing takes (usually 10-15 minutes vs 4-6 hours DIY)</li>
              <li><strong>3. Have an honest conversation with your volunteer:</strong> Would they prefer to do something else with 200 hours/year?</li>
              <li><strong>4. Make the switch if it makes sense:</strong> Honor their service, celebrate the time they invested, and redirect their gifts toward higher-impact ministry</li>
            </ol>
          </div>

          <div className="text-center">
            <Link 
              href="/transcribe" 
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
            >
              Try AI Transcription Free (5 Minutes) →
            </Link>
            <p className="text-sm text-gray-600 mt-3">See the accuracy for yourself • No credit card required</p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">Related Resources:</h3>
          <ul className="space-y-2">
            <li>→ <Link href="/blog/how-to-transcribe-a-sermon" className="text-blue-600 hover:underline">How to Transcribe a Sermon: 5 Methods Explained</Link></li>
            <li>→ <Link href="/blog/sermon-transcription-cost" className="text-blue-600 hover:underline">How Much Does Sermon Transcription Cost? (2026 Guide)</Link></li>
            <li>→ <Link href="/blog/best-sermon-transcription-services" className="text-blue-600 hover:underline">Best Sermon Transcription Services (2026)</Link></li>
            <li>→ <Link href="/blog/complete-guide-sermon-transcription" className="text-blue-600 hover:underline">The Complete Guide to Sermon Transcription</Link></li>
          </ul>
        </section>

      </div>
    </article>
  );
}
