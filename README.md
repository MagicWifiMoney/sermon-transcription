# Sermon Transcription

Professional AI-powered sermon transcription service built with Next.js 15, OpenAI Whisper, and ElevenLabs Audio Intelligence.

## Features

- **Standard Tier**: OpenAI Whisper ($0.006/min) - 99% accuracy, 90+ languages
- **Premium Tier**: ElevenLabs Audio Intelligence ($0.02/min) - 99.5% accuracy, speaker diarization, entity detection
- Multiple output formats: TXT, SRT, VTT
- Drag-and-drop file upload
- Real-time processing status
- Beautiful editorial design

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- OpenAI Whisper API
- ElevenLabs Audio Intelligence API
- Vercel deployment

## Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and add API keys:
   - `OPENAI_API_KEY` - Get from https://platform.openai.com
   - `ELEVENLABS_API_KEY` - Get from https://elevenlabs.io
4. Run dev server: `npm run dev`
5. Open http://localhost:3000

## Deployment

Deployed on Vercel with automatic deployments from `master` branch.

## Environment Variables

Required environment variables for production:
- `OPENAI_API_KEY` - OpenAI API key for Whisper transcription
- `ELEVENLABS_API_KEY` - ElevenLabs API key for premium transcription

## License

MIT
