'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Check your email for confirmation!');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-6 rounded-2xl bg-white border border-[#E8E4DC] text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="font-bold text-[#2D2D2D] mb-2">You're on the list!</h3>
        <p className="text-sm text-[#5c5c5c]">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder-[#5c5c5c]/50 focus:outline-none focus:border-[#E8725A] focus:ring-2 focus:ring-[#E8725A]/20 transition-all"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-xl border border-[#E8E4DC] bg-white text-[#2D2D2D] placeholder-[#5c5c5c]/50 focus:outline-none focus:border-[#E8725A] focus:ring-2 focus:ring-[#E8725A]/20 transition-all"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-[#E8725A] hover:bg-[#d4654f] text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Joining...
            </>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600">{message}</p>
      )}
    </form>
  );
}
