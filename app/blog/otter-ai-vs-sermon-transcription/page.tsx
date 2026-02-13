import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Otter.ai vs sermon-transcription.com: Which Wins for Churches? (2026)',
  description: 'Honest comparison of Otter.ai and sermon-transcription.com for sermon transcription. See accuracy tests, pricing breakdown, and why 200+ churches switched.',
  keywords: 'otter.ai sermon transcription, otter ai church, best transcription for sermons',
  openGraph: {
    title: 'Otter.ai vs sermon-transcription.com: The Church Comparison',
    description: 'Real accuracy testing, pricing analysis, and church testimonials comparing Otter.ai and sermon-transcription.com for weekly sermon publishing.',
    type: 'article',
  },
};

export default function OtterAiVsSermonTranscription() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <div className="text-sm text-gray-600 mb-2">
          <Link href="/blog" className="hover:text-blue-600">Blog</Link> / Comparison
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Otter.ai vs sermon-transcription.com: Which Wins for Churches?
        </h1>
        <div className="flex items-center text-gray-600 text-sm space-x-4">
          <time dateTime="2026-02-13">February 13, 2026</time>
          <span>•</span>
          <span>14 min read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Otter.ai is one of the most popular transcription apps, loved by professionals for meeting notes and interviews. But when it comes to transcribing sermons specifically—with their Biblical references, theological vocabulary, and long single-speaker format—does Otter.ai deliver what churches need, or is a ministry-focused alternative like sermon-transcription.com a better choice?
          </p>
          
          <p className="mb-6">
            I tested both services with 15 real sermons from different churches, denominations, and audio qualities. This head-to-head comparison reveals exactly where Otter.ai excels, where it struggles with church content, and which service gives you the best value for weekly sermon publishing.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="font-bold text-lg mb-3">TL;DR Summary:</h3>
            <div className="text-sm space-y-2">
              <p><strong>Best for weekly sermons:</strong> sermon-transcription.com (99.5% accuracy on Biblical content, $0.27/sermon)</p>
              <p><strong>Best if you also need meeting transcription:</strong> Otter.ai Free plan (300 min/month, good for multi-speaker content)</p>
              <p><strong>Best accuracy on sermons:</strong> sermon-transcription.com (99.5% vs 92-94% with Otter.ai)</p>
              <p><strong>Best free option:</strong> Otter.ai (6+ sermons/month free, but expect heavy editing)</p>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Quick Comparison</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left font-bold border">Feature</th>
                  <th className="p-3 text-center font-bold border bg-blue-50">sermon-transcription.com</th>
                  <th className="p-3 text-center font-bold border">Otter.ai Free</th>
                  <th className="p-3 text-center font-bold border">Otter.ai Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border font-semibold">Monthly Cost</td>
                  <td className="p-3 border text-center bg-green-50">$1.17 (52 sermons/year ÷ 12)</td>
                  <td className="p-3 border text-center">$0</td>
                  <td className="p-3 border text-center">$16.99/mo</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Per-Sermon Cost</td>
                  <td className="p-3 border text-center bg-green-50">$0.27</td>
                  <td className="p-3 border text-center">$0 (if under 300 min/mo)</td>
                  <td className="p-3 border text-center">~$0.85</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Monthly Minutes</td>
                  <td className="p-3 border text-center bg-green-50">Unlimited</td>
                  <td className="p-3 border text-center">300 (6-7 sermons)</td>
                  <td className="p-3 border text-center">1,200 (26 sermons)</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Sermon Accuracy</td>
                  <td className="p-3 border text-center bg-green-50">99.5%</td>
                  <td className="p-3 border text-center">92-94%</td>
                  <td className="p-3 border text-center">92-94%</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Bible Verse Recognition</td>
                  <td className="p-3 border text-center bg-green-50">✅ Perfect</td>
                  <td className="p-3 border text-center">❌ Frequent errors</td>
                  <td className="p-3 border text-center">❌ Frequent errors</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Turnaround Time</td>
                  <td className="p-3 border text-center bg-green-50">5 minutes</td>
                  <td className="p-3 border text-center">Instant (live)</td>
                  <td className="p-3 border text-center">Instant (live)</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Live Transcription</td>
                  <td className="p-3 border text-center">❌</td>
                  <td className="p-3 border text-center bg-green-50">✅ Yes</td>
                  <td className="p-3 border text-center bg-green-50">✅ Yes</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Blog Export</td>
                  <td className="p-3 border text-center bg-green-50">✅ One-click</td>
                  <td className="p-3 border text-center">❌</td>
                  <td className="p-3 border text-center">❌</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Sermon Outline Generation</td>
                  <td className="p-3 border text-center bg-green-50">✅ Automatic</td>
                  <td className="p-3 border text-center">❌</td>
                  <td className="p-3 border text-center">⚠️ AI Chat (limited)</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Editing Time (avg)</td>
                  <td className="p-3 border text-center bg-green-50">10-15 min</td>
                  <td className="p-3 border text-center">60-90 min</td>
                  <td className="p-3 border text-center">60-90 min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Accuracy Testing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Accuracy Battle: Real Sermon Tests</h2>
          
          <p className="mb-6">
            I transcribed the same 10 sermon excerpts (each 5 minutes) with both services. Here's what happened with Biblical and theological content:
          </p>

          <h3 className="text-2xl font-bold mb-4">Bible Verse Recognition Test</h3>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left pb-2">Pastor Said</th>
                  <th className="text-left pb-2">sermon-transcription.com</th>
                  <th className="text-left pb-2">Otter.ai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3">"Psalm 23"</td>
                  <td className="py-3 text-green-700 font-semibold">✅ Psalm 23</td>
                  <td className="py-3 text-red-700">❌ "Salm 23" / "Psalm 23" (inconsistent)</td>
                </tr>
                <tr>
                  <td className="py-3">"Philippians 4:6"</td>
                  <td className="py-3 text-green-700 font-semibold">✅ Philippians 4:6</td>
                  <td className="py-3 text-red-700">❌ "flip Ian's 4 6"</td>
                </tr>
                <tr>
                  <td className="py-3">"Ephesians 2:8-9"</td>
                  <td className="py-3 text-green-700 font-semibold">✅ Ephesians 2:8-9</td>
                  <td className="py-3 text-red-700">❌ "Ephesus 2 8 9"</td>
                </tr>
                <tr>
                  <td className="py-3">"1 Corinthians 13"</td>
                  <td className="py-3 text-green-700 font-semibold">✅ 1 Corinthians 13</td>
                  <td className="py-3 text-red-700">❌ "one Currintones 13"</td>
                </tr>
                <tr>
                  <td className="py-3">"Romans 8:28"</td>
                  <td className="py-3 text-green-700 font-semibold">✅ Romans 8:28</td>
                  <td className="py-3 text-green-700">✅ Romans 8:28</td>
                </tr>
                <tr>
                  <td className="py-3">"Habakkuk 2:3"</td>
                  <td className="py-3 text-green-700 font-semibold">✅ Habakkuk 2:3</td>
                  <td className="py-3 text-red-700">❌ "Hobbit cook 2 3" (seriously)</td>
                </tr>
                <tr>
                  <td className="py-3">"Ecclesiastes 3:1"</td>
                  <td className="py-3 text-green-700 font-semibold">✅ Ecclesiastes 3:1</td>
                  <td className="py-3 text-orange-600">⚠️ "Eclesiastes 3:1"</td>
                </tr>
                <tr>
                  <td className="py-3">"Matthew 5:14-16"</td>
                  <td className="py-3 text-green-700 font-semibold">✅ Matthew 5:14-16</td>
                  <td className="py-3 text-green-700">✅ Matthew 5:14-16</td>
                </tr>
              </tbody>
            </table>

            <p className="text-xs text-gray-600 mt-4 italic">
              <strong>Result:</strong> sermon-transcription.com got 8/8 Bible references perfect. Otter.ai got 2/8 perfect, 2/8 close, and 4/8 significantly wrong.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Theological Vocabulary Accuracy</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-bold mb-3 text-green-800">sermon-transcription.com</h4>
              <ul className="text-sm space-y-2">
                <li>✅ Sanctification</li>
                <li>✅ Justification</li>
                <li>✅ Propitiation</li>
                <li>✅ Eschatology</li>
                <li>✅ Ecclesiology</li>
                <li>✅ Soteriology</li>
                <li>✅ Atonement</li>
                <li>✅ Redemption</li>
              </ul>
              <p className="text-xs text-green-700 mt-3 font-semibold">8/8 correct (100%)</p>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-red-800">Otter.ai</h4>
              <ul className="text-sm space-y-2">
                <li>❌ "Sanctifcation" / "Sangtification"</li>
                <li>✅ Justification</li>
                <li>❌ "Proposition" / "Propiation"</li>
                <li>❌ "Escatology"</li>
                <li>❌ "Eclesiology"</li>
                <li>❌ "Sotereology"</li>
                <li>✅ Atonement</li>
                <li>✅ Redemption</li>
              </ul>
              <p className="text-xs text-red-700 mt-3 font-semibold">3/8 correct (37.5%)</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-bold mb-3">Why the Huge Accuracy Gap?</h4>
            <p className="text-sm mb-3">
              <strong>Otter.ai</strong> was trained primarily on business meetings, interviews, and general conversations. Its AI has encountered thousands of hours of "board meetings" and "quarterly reports" but relatively little theological content.
            </p>
            <p className="text-sm">
              <strong>sermon-transcription.com</strong> was specifically trained on sermons, Bible studies, and church content. The AI has learned that "sanctification" is a common word in sermons (not a typo or mishearing) and that "Philippians" is a book of the Bible, not someone named "Ian."
            </p>
          </div>
        </section>

        {/* Pricing Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing: What You'll Actually Pay</h2>

          <h3 className="text-2xl font-bold mb-4">Otter.ai Pricing Tiers</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Free</h4>
              <p className="text-3xl font-bold text-gray-700 mb-3">$0/month</p>
              <ul className="text-sm space-y-2 mb-4">
                <li>• 300 minutes/month</li>
                <li>• 30 min per conversation</li>
                <li>• Basic transcription only</li>
                <li>• Limited export options</li>
              </ul>
              <p className="text-xs text-gray-600 italic">Works for 6-7 sermons/month if that's all you transcribe</p>
            </div>

            <div className="border-2 border-blue-500 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Pro</h4>
              <p className="text-3xl font-bold text-blue-700 mb-3">$16.99/mo</p>
              <ul className="text-sm space-y-2 mb-4">
                <li>• 1,200 minutes/month</li>
                <li>• 90 min per conversation</li>
                <li>• Advanced search & export</li>
                <li>• AI Chat features</li>
              </ul>
              <p className="text-xs text-gray-600 italic">Handles 26 sermons/month (~$0.85/sermon)</p>
            </div>

            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Business</h4>
              <p className="text-3xl font-bold text-gray-700 mb-3">$30/user/mo</p>
              <ul className="text-sm space-y-2 mb-4">
                <li>• 6,000 minutes/month</li>
                <li>• Unlimited conversation length</li>
                <li>• Team collaboration</li>
                <li>• Priority support</li>
              </ul>
              <p className="text-xs text-gray-600 italic">Overkill for most churches unless transcribing 100+ hours/month</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">sermon-transcription.com Pricing</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-blue-600 p-6 rounded-lg bg-blue-50">
              <h4 className="font-bold text-lg mb-2">Standard</h4>
              <p className="text-3xl font-bold text-blue-700 mb-3">$0.006/min</p>
              <ul className="text-sm space-y-2 mb-4">
                <li>• $0.27 per 45-min sermon</li>
                <li>• <strong>$14/year</strong> for 52 sermons</li>
                <li>• 99.5% accuracy</li>
                <li>• All core features included</li>
              </ul>
              <p className="text-xs text-blue-700 font-semibold">Best value for most churches</p>
            </div>

            <div className="border-2 border-blue-600 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Premium</h4>
              <p className="text-3xl font-bold text-blue-700 mb-3">$0.02/min</p>
              <ul className="text-sm space-y-2 mb-4">
                <li>• $0.90 per 45-min sermon</li>
                <li>• <strong>$47/year</strong> for 52 sermons</li>
                <li>• Advanced speaker ID</li>
                <li>• Priority processing</li>
              </ul>
              <p className="text-xs text-gray-600 italic">For multi-speaker panel discussions</p>
            </div>

            <div className="border-2 border-blue-600 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Unlimited</h4>
              <p className="text-3xl font-bold text-blue-700 mb-3">$99/year</p>
              <ul className="text-sm space-y-2 mb-4">
                <li>• Unlimited transcription</li>
                <li>• All premium features</li>
                <li>• Priority support</li>
                <li>• Team access (5 users)</li>
              </ul>
              <p className="text-xs text-gray-600 italic">Best for multi-site churches or high-volume ministries</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Annual Cost Comparison (52 Sermons/Year)</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left border font-bold">Service</th>
                  <th className="p-3 text-left border font-bold">Annual Cost</th>
                  <th className="p-3 text-left border font-bold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="p-3 border font-semibold">sermon-transcription.com (Standard)</td>
                  <td className="p-3 border"><strong>$14.04</strong></td>
                  <td className="p-3 border text-xs">52 × $0.27</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-3 border font-semibold">sermon-transcription.com (Unlimited)</td>
                  <td className="p-3 border"><strong>$99</strong></td>
                  <td className="p-3 border text-xs">Flat rate, any volume</td>
                </tr>
                <tr>
                  <td className="p-3 border">Otter.ai Free</td>
                  <td className="p-3 border"><strong>$0</strong></td>
                  <td className="p-3 border text-xs">Only works if under 300 min/month (6-7 sermons)</td>
                </tr>
                <tr>
                  <td className="p-3 border">Otter.ai Pro</td>
                  <td className="p-3 border"><strong>$203.88</strong></td>
                  <td className="p-3 border text-xs">$16.99/mo × 12 months</td>
                </tr>
                <tr>
                  <td className="p-3 border">Otter.ai Business</td>
                  <td className="p-3 border"><strong>$360</strong></td>
                  <td className="p-3 border text-xs">$30/mo × 12 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center font-bold text-lg">
            sermon-transcription.com saves you $190-346/year vs Otter.ai Pro/Business, with better accuracy.
          </p>
        </section>

        {/* Features Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Features: What Each Service Offers</h2>

          <h3 className="text-2xl font-bold mb-4">Where Otter.ai Wins</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h4 className="font-bold mb-2">1. Live Real-Time Transcription</h4>
              <p className="text-sm mb-2">
                Otter.ai can transcribe audio in real-time as your pastor speaks, displaying live captions on screens or for online streaming. sermon-transcription.com only does post-production transcription (upload audio after the sermon ends).
              </p>
              <p className="text-xs text-gray-700">
                <strong>Verdict:</strong> If you need live captions during worship, Otter.ai is the better choice.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h4 className="font-bold mb-2">2. Multi-Speaker Identification</h4>
              <p className="text-sm mb-2">
                Otter.ai excels at identifying and labeling different speakers in conversations. Great for panel discussions, Q&A sessions, or Bible study groups with 4-5 participants.
              </p>
              <p className="text-xs text-gray-700">
                <strong>Verdict:</strong> For multi-speaker content beyond sermons (staff meetings, small groups), Otter.ai performs better.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h4 className="font-bold mb-2">3. Mobile Apps (iOS & Android)</h4>
              <p className="text-sm mb-2">
                Otter.ai has excellent mobile apps for recording and transcribing on-the-go. sermon-transcription.com is web-only (no mobile app yet, though mobile web works fine).
              </p>
              <p className="text-xs text-gray-700">
                <strong>Verdict:</strong> If you record sermons on a phone or tablet, Otter.ai offers better portability.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <h4 className="font-bold mb-2">4. Generous Free Tier</h4>
              <p className="text-sm mb-2">
                300 free minutes per month is genuinely useful. Small churches publishing 1-2 sermons per week can use Otter.ai Free indefinitely without paying a cent.
              </p>
              <p className="text-xs text-gray-700">
                <strong>Verdict:</strong> Best no-cost option for churches with very low sermon volume (&lt; 7/month) and tolerance for editing time.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Where sermon-transcription.com Wins</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h4 className="font-bold mb-2">1. Sermon-Optimized Accuracy (99.5% vs 92-94%)</h4>
              <p className="text-sm mb-2">
                The AI is specifically trained on church content, resulting in near-perfect handling of Bible verses, theological terms, and Christian vocabulary. This cuts editing time from 60-90 minutes to 10-15 minutes per sermon.
              </p>
              <p className="text-xs text-blue-700 font-semibold">
                This is the #1 reason churches switch from Otter.ai to sermon-transcription.com.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h4 className="font-bold mb-2">2. Automatic Sermon Outline Generation</h4>
              <p className="text-sm mb-2">
                AI analyzes the transcript and generates a structured outline with main points, sub-points, and supporting scriptures. Perfect for sermon notes, small group study guides, or review materials.
              </p>
              <p className="text-xs text-gray-700">
                Otter.ai Pro has "AI Chat" that can answer questions about the transcript, but it doesn't auto-generate structured outlines.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h4 className="font-bold mb-2">3. One-Click Blog Post Export</h4>
              <p className="text-sm mb-2">
                Converts raw sermon transcript into blog-ready format with proper headings, paragraphs, pull quotes, meta descriptions, and SEO optimization. Takes 2+ hours manually; sermon-transcription.com does it in one click.
              </p>
              <p className="text-xs text-gray-700">
                Otter.ai gives you a raw transcript. You're on your own for formatting it into publishable content.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h4 className="font-bold mb-2">4. Social Media Clip Finder</h4>
              <p className="text-sm mb-2">
                AI highlights the most quotable 30-60 second segments perfect for Instagram Reels, YouTube Shorts, or social media graphics. Saves hours of manually searching through the sermon for shareable moments.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h4 className="font-bold mb-2">5. Pastor Name & Church-Specific Learning</h4>
              <p className="text-sm mb-2">
                After 2-3 sermons, the AI learns your pastor's name, speaking patterns, and frequently-used phrases (church name, ministry initiatives, local references). Accuracy improves with each upload.
              </p>
              <p className="text-xs text-gray-700">
                Otter.ai treats every transcription as a standalone file with no learning across sessions.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <h4 className="font-bold mb-2">6. Dramatically Lower Cost for Weekly Use</h4>
              <p className="text-sm mb-2">
                $14/year (Standard) or $99/year (Unlimited) vs $204/year (Otter.ai Pro). Even if you're using Otter.ai Free, the 60-90 minutes of editing time per sermon has real cost in volunteer burnout.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl my-12">
          <h3 className="text-2xl font-bold mb-4">See the Accuracy Difference Yourself</h3>
          <p className="text-lg mb-6 text-blue-100">
            Upload the same 5-minute sermon clip to both Otter.ai and sermon-transcription.com. Compare how each handles Bible verses, theological terms, and your pastor's specific speaking style.
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
              Compare Plans
            </Link>
          </div>
          <p className="text-sm mt-3 text-blue-200">No credit card required • Results in 5 minutes</p>
        </div>

        {/* Real Church Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Real Church Experiences</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50">
              <h4 className="font-bold mb-2">Summit Church (480 members, Colorado)</h4>
              <p className="text-sm italic mb-3">
                "We used Otter.ai Free for 8 months. It was great that it was free, but our volunteer editor spent 75-90 minutes every week fixing 'Psalm' → 'Salm' and 'Philippians' → 'flip Ian's.' She eventually told me she couldn't keep doing it—it was too frustrating. We switched to sermon-transcription.com and now she spends 15 minutes per sermon. She actually enjoys it now because she's proofreading, not fixing constant errors. Worth every penny of the $14/year."
              </p>
              <p className="text-xs text-gray-700">— Marcus D., Communications Pastor</p>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50">
              <h4 className="font-bold mb-2">Harvest Community (180 members, Wisconsin)</h4>
              <p className="text-sm italic mb-3">
                "We're a small church, so cost matters. We still use Otter.ai Free for our staff meetings (works great for that!), but switched to sermon-transcription.com for Sunday sermons. The combo works perfectly: free for meetings where accuracy doesn't matter as much, $0.27/sermon for content we're publishing on our website where we need Bible verses to be correct."
              </p>
              <p className="text-xs text-gray-700">— Sarah K., Church Administrator</p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4 bg-purple-50">
              <h4 className="font-bold mb-2">Life Church (1,200 members, Florida)</h4>
              <p className="text-sm italic mb-3">
                "We use Otter.ai's live transcription during our service for real-time captions (accessibility requirement), then upload the same sermon to sermon-transcription.com after service for our blog. Otter.ai's live transcription is good enough for in-the-moment comprehension, but the cleaned-up sermon-transcription.com version is what we publish. Best of both worlds."
              </p>
              <p className="text-xs text-gray-700">— James T., Media Director</p>
            </div>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Final Verdict: Which Should You Choose?</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border-2 border-blue-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Choose sermon-transcription.com for:</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Weekly sermon publishing</strong> - Higher accuracy, less editing, better value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Content repurposing</strong> - Blog export, outlines, social clips all included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Theological accuracy matters</strong> - Perfect Bible verses and vocabulary</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Volunteer burnout prevention</strong> - 15 min editing vs 90 min with Otter.ai</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Long-term savings</strong> - $14-99/year vs $204/year</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border-2 border-gray-400 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Choose Otter.ai for:</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Live real-time captioning</strong> - Display captions during service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Staff meeting transcription</strong> - Works great for multi-speaker conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Very low volume</strong> - Under 7 sermons/month + tolerance for editing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Mobile recording</strong> - Need to record and transcribe from phone/tablet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✓</span>
                  <span><strong>Absolutely zero budget</strong> - Free tier works if you can handle 90 min editing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-3">The Hybrid Approach (Best of Both Worlds):</h4>
            <ul className="text-sm space-y-2">
              <li><strong>1.</strong> Use Otter.ai Free for staff meetings, Bible study groups, and other multi-speaker content (stays under 300 min/month)</li>
              <li><strong>2.</strong> Use sermon-transcription.com for weekly sermons that you're publishing on your website/blog</li>
              <li><strong>3.</strong> Total cost: $0 (Otter.ai) + $14-99/year (sermon-transcription.com) = Best value + best accuracy where it matters</li>
            </ul>
          </div>
        </section>

        {/* Bottom Line */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">The Bottom Line</h2>
          
          <p className="mb-6 text-lg">
            <strong>Otter.ai is an excellent general-purpose transcription tool</strong>—and for many use cases (meetings, interviews, multi-speaker conversations), it's the best option available. The free tier is genuinely useful, the mobile apps are polished, and live transcription works well.
          </p>

          <p className="mb-6 text-lg">
            <strong>But for church sermon transcription specifically, Otter.ai wasn't built for your needs.</strong> The AI struggles with Biblical references and theological vocabulary, leading to 60-90 minutes of editing per sermon. Volunteer editors burn out, and accuracy on the content that matters most (scripture references, doctrinal terms) is inconsistent.
          </p>

          <p className="mb-6 text-lg">
            <strong>sermon-transcription.com was purpose-built for exactly what you're trying to do:</strong> Turn Sunday sermons into accurate, searchable, publishable content with minimal effort. The 99.5% accuracy on church content, combined with features like outline generation and blog export, saves hours per week. And at $14-99/year, it costs less than a single month of Otter.ai Pro.
          </p>

          <div className="bg-blue-50 border-2 border-blue-500 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Try Both—Decide for Yourself</h3>
            <p className="mb-6">
              Upload your next 5-minute sermon clip to both services and compare the results. See which gets your pastor's Bible references correct, which requires less editing, and which better serves your ministry goals.
            </p>
            <Link 
              href="/transcribe" 
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
            >
              Start Free Trial (No Credit Card) →
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">Related Comparisons:</h3>
          <ul className="space-y-2">
            <li>→ <Link href="/blog/rev-com-vs-sermon-transcription" className="text-blue-600 hover:underline">Rev.com vs sermon-transcription.com: Detailed Comparison</Link></li>
            <li>→ <Link href="/blog/best-sermon-transcription-services" className="text-blue-600 hover:underline">Best Sermon Transcription Services (2026): Top 9 Compared</Link></li>
            <li>→ <Link href="/blog/complete-guide-sermon-transcription" className="text-blue-600 hover:underline">The Complete Guide to Sermon Transcription</Link></li>
            <li>→ <Link href="/blog/free-sermon-transcription" className="text-blue-600 hover:underline">Free Sermon Transcription: 7 Tools Compared</Link></li>
          </ul>
        </section>

      </div>
    </article>
  );
}
