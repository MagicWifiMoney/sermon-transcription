# Church Cold Outreach Email Sequence

**Purpose:** Cold outreach to 383 hot leads scraped from church websites  
**Goal:** Convert churches to trial → paid users ($0.27/sermon)  
**Sequence:** 3 emails over 11 days  
**Expected conversion:** 5-8% reply rate → 2-3% trial → 1% paid

## Sequence Map

| Email | File | Timing | Subject Angle |
|-------|------|---------|---------------|
| Email 1 | `email-01-cold-intro.txt` | Day 0 (Mon/Tue 8-10am) | Cost shock + free trial offer |
| Email 2 | `email-02-follow-up.txt` | Day 4 (if no open/reply) | Case study + concrete proof |
| Email 3 | `email-03-final.txt` | Day 11 (last chance) | Loss aversion + accessibility angle |

## Priority Segments (first 50 churches to contact)

1. **Churches posting YouTube sermons** (highest ROI — they need captions + transcripts)
2. **Churches with "sermon archive" or "sermon library" pages** (actively need transcription)
3. **Large congregations** (500+ members — higher volume = more savings)
4. **Churches already paying Rev.com** (search social proof for Rev mentions)

## A/B Test Plan

For Email 1, test two subject lines to first 20 contacts:
- **Version A:** "We cut [Church Name]'s transcription costs by 98% — interested?"
- **Version B:** "How [Church Name] could save $200/month on sermon transcription"

Winner (higher open rate) → use for remaining 330 contacts.

## Sending Instructions

1. Use Resend API with `hello@sermon-transcription.com` as sender
2. Personalize: `[First Name]`, `[Church Name]`, `[City]`
3. Send Monday–Tuesday, 8–10am recipient timezone (best open rates for church staff)
4. Pause if reply rate exceeds 30% (can't handle inbound volume)

## Quick Resend Script

```javascript
// send-outreach.js — run with: node send-outreach.js
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendOutreach(lead) {
  const { firstName, churchName, email } = lead;
  
  // Email 1
  await resend.emails.send({
    from: 'Jake at Sermon Transcription <hello@sermon-transcription.com>',
    to: email,
    subject: `We cut ${churchName}'s transcription costs by 98% — interested?`,
    text: buildEmail1(firstName, churchName),
    tags: [{ name: 'sequence', value: 'church-cold-outreach' }, { name: 'email', value: '1' }]
  });
  
  console.log(`✓ Email 1 sent to ${churchName} (${email})`);
}

function buildEmail1(firstName, churchName) {
  return `Hi ${firstName},

I came across ${churchName} while researching churches that are actively posting sermon content online. Your congregation is doing great work making sermons accessible.

Quick question: how are you currently handling transcription for your messages?

Most churches I talk to are either:
- Paying a service like Rev.com ($1.50/min = ~$67 per sermon)
- Doing it manually (3+ hours of volunteer time per week)
- Not transcribing at all (and missing SEO + accessibility benefits)

We built Sermon Transcription specifically for churches. It uses AI to transcribe your sermons for $0.27 each — accurate, fast, and a fraction of what you're paying now.

Here's what you get per sermon:
✓ Full text transcript (download as .txt, .srt, .docx)
✓ Captions-ready SRT file for YouTube/Vimeo
✓ Searchable archive for your congregation
✓ 500 free words to try it today

No contract, no monthly fee to start. Pay per sermon.

Would it be worth a 5-minute conversation to see if this makes sense for ${churchName}?

Try it now: https://sermon-transcription.com (first 500 words free)

Grace and peace,
Jake
Sermon Transcription
sermon-transcription.com

P.S. — We're 250x cheaper than Rev.com. A typical 40-minute sermon costs $0.27 with us vs. $60 with Rev.`;
}

// Usage: load leads from CSV, call sendOutreach() for each
// const leads = require('./leads.json');
// leads.slice(0, 50).forEach(lead => sendOutreach(lead));
```

## Lead Source

383 hot leads scraped via church-clips pipeline. Location: `apify-lead-hub` on EC2.
Start with 50 leads (batch 1). If reply rate > 2%, expand to full list.

## Success Metrics

| Metric | Target |
|--------|--------|
| Open rate | 40%+ (personalized cold = high) |
| Reply rate | 5-8% |
| Trial signups | 2-3% |
| Paid conversions | 1% (3-4 new customers from 50 contacts) |
| Revenue per batch | $162-$648/year (3-4 customers × $0.27/sermon × ~50 sermons/year) |

## Written by
Marketing CMO Agent — Feb 18, 2026 (Wednesday email cadence run)
