import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="relative min-h-screen p-8 flex flex-col items-start text-left bg-black font-sans dark:bg-zinc-900 dark:text-white">
      <div className="absolute top-[-10px] right-0">
        <Image
          src="/nxcampus-logo.png"
          alt="NxCampus Logo"
          width={600


          }
          height={600
          }
          className="shadow-lg bg-transparent"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
      <section className="w-full max-w-3xl border border-gray-300 p-6 rounded-lg mb-8 shadow hover:scale-[1.02] transition-transform duration-200 ease-in-out bg-zinc-800">
        <h1 className="text-5xl font-bold text-blue-600 font-serif">
          Welcome to NxCampus!
          <span className="ml-3 align-super text-sm font-semibold" style={{ color: '#007A33' }}>
            UAB edition
          </span>
        </h1>
        <p className="text-lg text-white mt-4">
          Your student hub for finding apartments, budgeting tools, roommates, and campus resources — all in one place.
        </p>
      </section>
      <div className="flex gap-8 flex-wrap">
        <section className="w-full max-w-xl border border-gray-300 p-6 rounded-lg shadow font-serif hover:scale-[1.02] transition-transform duration-200 ease-in-out bg-zinc-800">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 font-medium tracking-wide font-logo">🏫 UAB Quick Links</h2>
          <ul className="text-base font-medium text-white space-y-3 font-logo">
            <li>
              <a className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200" href="https://padlock.idm.uab.edu/cas/login?service=https%3A%2F%2Fuab.instructure.com%2Flogin%2Fcas" target="_blank" rel="noopener noreferrer">
                Canvas
              </a>
            </li>
            <li>
              <a className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200" href="https://padlock.idm.uab.edu/cas/login?service=https%3a%2f%2fidm.uab.edu%2fcgi-cas%2fssbsso%3finst%3dprod" target="_blank" rel="noopener noreferrer">
                Blazer Portal
              </a>
            </li>
            <li>
              <a className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200" href="https://uab.campuslabs.com/engage/" target="_blank" rel="noopener noreferrer">
                Engage
              </a>
            </li>
            <li>
              <a className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200" href="https://studentwellness.uab.edu/confirm.aspx" target="_blank" rel="noopener noreferrer">
                UAB Wellness Portal
              </a>
            </li>
            <li>
              <a className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200" href="https://uab.givepulse.com/" target="_blank" rel="noopener noreferrer">
                BlazerPulse
              </a>
            </li>
            <li>
              <a className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200" href="https://www.uab.edu/students/academics/academic-calendar/2025-2026" target="_blank" rel="noopener noreferrer">
                Academic Calendar
              </a>
            </li>
          </ul>
        </section>
        <section className="w-full max-w-xl border border-gray-300 p-6 rounded-lg shadow font-serif hover:scale-[1.02] transition-transform duration-200 ease-in-out bg-zinc-800">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 font-medium tracking-wide font-logo">📚 Study Resources</h2>
          <ul className="text-base font-medium text-white space-y-3 font-logo">
            <li>
              <a href="https://www.chegg.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Chegg
              </a>
            </li>
            <li>
              <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                ChatGPT
              </a>
            </li>
            <li>
              <a href="https://lens.google/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Google Lens
              </a>
            </li>
            <li>
              <a href="https://www.sparknotes.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                SparkNotes
              </a>
            </li>
            <li>
              <a href="https://copilot.microsoft.com/chats/145kXUsT8HgyBFBifeD6C" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Microsoft Copilot
              </a>
            </li>
          </ul>
        </section>
        <section className="w-full max-w-xl border border-gray-300 p-6 rounded-lg shadow font-serif hover:scale-[1.02] transition-transform duration-200 ease-in-out bg-zinc-800">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 font-medium tracking-wide font-logo">🏠 Apartment Complexes Near UAB</h2>
          <ul className="text-base font-medium text-white space-y-3 font-logo">
            <li>
              <a href="https://www.crowneon10th.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Crowne on 10th
              </a>
            </li>
            <li>
              <a href="https://www.tapestryparkbirmingham.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Tapestry
              </a>
            </li>
            <li>
              <a href="https://www.axelrowapartments.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Axel Row and Avondale Gardens
              </a>
            </li>
            <li>
              <a href="https://livemarshallon3rd.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Marshall on 3rd
              </a>
            </li>
            <li>
              <a href="https://livemarshallon5th.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Marshall on 5th
              </a>
            </li>
            <li>
              <a href="https://www.lumenbirmingham.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Lumen
              </a>
            </li>
            <li>
              <a href="https://www.alight-birmingham.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-blue-300 transition-colors duration-200">
                Alight
              </a>
            </li>
          </ul>
        </section>
      </div>
      <section className="w-full max-w-4xl border border-gray-300 p-6 rounded-lg shadow font-serif hover:scale-[1.02] transition-transform duration-200 ease-in-out bg-zinc-800 mb-8">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4 font-medium tracking-wide font-logo">📆 Upcoming Campus Events</h2>
        <p className="text-white mb-4">
          Want to promote your event? Submit it here:&nbsp;
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-DsDQVROjg3MAv7IUA7zkTDhbmnFVrAgMMCM09fQ9RgvMaA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-300">
            Event Submission Form
          </a>
        </p>
        <div className="overflow-hidden rounded-md border border-zinc-700 shadow-inner">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=05a7d07c508f55b2d540fdf471ab8f023fa5015477073349ef2d0ca0539f078%40group.calendar.google.com&ctz=America%2FChicago&mode=AGENDA"
            style={{ border: "0" }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Campus Events Calendar"
          ></iframe>
        </div>
      </section>
      <footer className="mt-16 text-sm text-gray-600 border-t pt-4 w-full text-center">
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1758909554616544"
          crossOrigin="anonymous"
        ></script>
      </footer>
      <Analytics />
    </main>
  );
}
