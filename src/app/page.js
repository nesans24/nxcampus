'use client';

import Image from 'next/image';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white px-6 py-8">

        <section className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-blue-600 mb-4 flex items-center justify-center gap-2">
            Welcome to
            <Image
              src="/nxcampus-logo.png"
              alt="NxCampus Logo"
              width={200}
              height={60}
              className="inline-block align-middle"
            />
            <span className="text-sm align-super ml-2 text-[#007A33] font-semibold">UAB edition</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
            Your ultimate guide for student life, academics, housing, and campus events at UAB.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <section className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6 font-serif">🏫 UAB Quick Links</h2>
            <ul className="space-y-3 list-disc list-inside text-lg">
              <li>
                <a
                  href="https://uab.instructure.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canvas
                </a>
              </li>
              <li>
                <a
                  href="https://blazerportal.uab.edu"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blazer Portal
                </a>
              </li>
              <li>
                <a
                  href="https://engage.uab.edu"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Engage
                </a>
              </li>
              <li>
                <a
                  href="https://wellness.uab.edu"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wellness Portal
                </a>
              </li>
              <li>
                <a
                  href="https://blazerpulse.uab.edu"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BlazerPulse
                </a>
              </li>
              <li>
                <a
                  href="https://uab.edu/academic-calendar"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Academic Calendar
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6 font-serif">📚 Study Resources</h2>
            <ul className="space-y-3 list-disc list-inside text-lg">
              <li>
                <a
                  href="https://www.chegg.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chegg
                </a>
              </li>
              <li>
                <a
                  href="https://chat.openai.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ChatGPT
                </a>
              </li>
              <li>
                <a
                  href="https://lens.google"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Lens
                </a>
              </li>
              <li>
                <a
                  href="https://www.sparknotes.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SparkNotes
                </a>
              </li>
              <li>
                <a
                  href="https://www.microsoft.com/en-us/microsoft-365/copilot"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Copilot
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6 font-serif text-center">🏠 Apartment Complexes Near UAB</h2>
            <ul className="space-y-3 list-disc list-inside text-lg">
              <li>
                <a
                  href="https://crowneon10th.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Crowne on 10th
                </a>
              </li>
              <li>
                <a
                  href="https://tapestryuab.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tapestry
                </a>
              </li>
              <li>
                <a
                  href="https://axelrow.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Axel Row
                </a>
              </li>
              <li>
                <a
                  href="https://marshallon3rd.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marshall on 3rd
                </a>
              </li>
              <li>
                <a
                  href="https://theunionuab.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Union
                </a>
              </li>
              <li>
                <a
                  href="https://theblocuab.com"
                  className="hover:underline hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Bloc
                </a>
              </li>
            </ul>
          </section>
        </div>

        <section className="mt-12 w-1/2 mx-auto bg-zinc-800 border border-zinc-700 p-10 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-blue-500 mb-6 font-serif">📅 Campus Events Calendar</h2>
          <div className="min-h-[900px]" data-tockify-component="calendar" data-tockify-calendar="nesan.siva"></div>
          <Script
            src="https://public.tockify.com/browser/embed.js"
            strategy="lazyOnload"
            data-cfasync="false"
            data-tockify-script="embed"
          />
          <p className="text-center text-blue-400 underline">
            <a
              href="https://tockify.com/tkf2/submitEvent/ec4647a4e40a4d73823ceb1852dc4711"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit an event to the calendar
            </a>
          </p>
        </section>

        <footer className="text-center mt-16 text-sm text-gray-400">
          &copy; 2024 NxCampus. All rights reserved.
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            crossOrigin="anonymous"
          ></script>
        </footer>
      </div>
      <Analytics />
    </main>
  );
}
