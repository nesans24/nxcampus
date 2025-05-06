'use client';

import { useEffect } from 'react';

export default function TockifyCalendar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-tockify-script', 'embed');
    script.src = 'https://public.tockify.com/browser/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden rounded-md border border-zinc-700 shadow-inner">
      <div data-tockify-component="calendar" data-tockify-calendar="nesan.siva"></div>
    </div>
  );
}