import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen p-8 flex flex-col items-start text-left bg-gray-50">
      <div className="absolute top-8 right-8">
        <Image
          src="/uab-hill-center.jpg"
          alt="UAB Hill Center"
          width={450}
          height={450}
          className="rounded shadow-lg"
        />
      </div>
      <section className="w-full max-w-3xl border border-gray-300 p-6 rounded-lg mb-8 bg-white shadow">
        <h1 className="text-5xl font-bold text-[#1E6B52]">Welcome to NxCampus!</h1>
        <p className="text-lg text-gray-700 mt-4">
          Your student hub for finding apartments, budgeting tools, roommates, and campus resources — all in one place.
        </p>
      </section>
      <section className="w-full max-w-xl border border-gray-300 p-6 rounded-lg bg-white shadow self-end">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-medium tracking-wide">Quick Links</h2>
        <ul className="text-base font-medium text-[#1E6B52] space-y-3">
          <li>
            <a className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200" href="https://padlock.idm.uab.edu/cas/login?service=https%3A%2F%2Fuab.instructure.com%2Flogin%2Fcas" target="_blank" rel="noopener noreferrer">
              Canvas
            </a>
          </li>
          <li>
            <a className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200" href="https://padlock.idm.uab.edu/cas/login?service=https%3a%2f%2fidm.uab.edu%2fcgi-cas%2fssbsso%3finst%3dprod" target="_blank" rel="noopener noreferrer">
              Blazer Portal
            </a>
          </li>
          <li>
            <a className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200" href="https://uab.campuslabs.com/engage/" target="_blank" rel="noopener noreferrer">
              Engage
            </a>
          </li>
        </ul>
      </section>
      <div className="mt-12 flex justify-center w-full">
        <Image
          src="/qr-code.png"
          alt="Scan to open NxCampus"
          width={180}
          height={180}
          className="shadow-md border border-gray-300 rounded"
        />
      </div>
      <footer className="mt-16 text-sm text-gray-600 border-t pt-4 w-full text-center">
        Brought to you by Nesan and Christian
  
      </footer>
    </main>
  );
}
