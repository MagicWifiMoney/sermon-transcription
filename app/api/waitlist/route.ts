import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Sermon Transcription <hello@sermon-transcription.com>',
      to: email,
      subject: "You're on the waitlist! 🎉",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="color: #2D2D2D; font-size: 28px; margin: 0;">Sermon Transcription</h1>
            <p style="color: #E8725A; font-size: 14px; margin-top: 10px;">AI-powered sermon transcription</p>
          </div>
          
          <div style="background: #F5F1EB; border-radius: 16px; padding: 32px; margin-bottom: 32px;">
            <h2 style="color: #2D2D2D; font-size: 24px; margin: 0 0 16px 0;">Welcome to the waitlist!</h2>
            <p style="color: #5c5c5c; line-height: 1.6; margin: 0 0 16px 0;">
              ${name ? `Hi ${name},` : 'Hi there,'} thanks for signing up! You're on the list for early access to professional sermon transcription.
            </p>
            <p style="color: #5c5c5c; line-height: 1.6; margin: 0;">
              We'll let you know as soon as we launch. In the meantime, here's what you can expect:
            </p>
          </div>

          <div style="margin-bottom: 32px;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #2D2D2D; font-size: 16px; margin: 0 0 8px 0;">⚡️ Lightning Fast</h3>
              <p style="color: #5c5c5c; line-height: 1.6; margin: 0;">Most sermons transcribed in under 5 minutes</p>
            </div>
            <div style="margin-bottom: 20px;">
              <h3 style="color: #2D2D2D; font-size: 16px; margin: 0 0 8px 0;">🎯 99.5% Accurate</h3>
              <p style="color: #5c5c5c; line-height: 1.6; margin: 0;">Powered by OpenAI Whisper and ElevenLabs</p>
            </div>
            <div>
              <h3 style="color: #2D2D2D; font-size: 16px; margin: 0 0 8px 0;">📝 Multiple Formats</h3>
              <p style="color: #5c5c5c; line-height: 1.6; margin: 0;">Download as TXT, SRT, or VTT</p>
            </div>
          </div>

          <div style="text-align: center; padding-top: 32px; border-top: 1px solid #E8E4DC;">
            <p style="color: #888; font-size: 14px; margin: 0;">
              Questions? Reply to this email anytime.
            </p>
          </div>
        </div>
      `,
    });

    // Send notification to Jake
    await resend.emails.send({
      from: 'Sermon Transcription <hello@sermon-transcription.com>',
      to: 'jake.giebel@gmail.com',
      subject: '🎉 New waitlist signup',
      html: `
        <div style="font-family: monospace; padding: 20px;">
          <h2>New Waitlist Signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
