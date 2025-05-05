import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen p-8 flex flex-col items-start text-left bg-black font-sans">
      <div className="absolute top-8 right-8">
        <Image
          src="/nxcampus-logo.png"
          alt="NxCampus Logo"
          width={400
            

          }
          height={400
          }
          className="shadow-lg bg-transparent"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
      <section className="w-full max-w-3xl border border-gray-300 p-6 rounded-lg mb-8 bg-white shadow">
        <h1 className="text-5xl font-bold text-red-600">Welcome to NxCampus!</h1>
        <p className="text-lg text-gray-700 mt-4">
          Your student hub for finding apartments, budgeting tools, roommates, and campus resources — all in one place.
        </p>
      </section>
      <div className="flex gap-8 flex-wrap">
        <section className="w-full max-w-xl border border-gray-300 p-6 rounded-lg bg-white shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-medium tracking-wide">UAB Quick Links</h2>
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
        <section className="w-full max-w-xl border border-gray-300 p-6 rounded-lg bg-white shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-medium tracking-wide">Apartment Complexes Near UAB</h2>
          <ul className="text-base font-medium text-[#1E6B52] space-y-3">
            <li>
              <a href="https://www.crowneon10th.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200">
                Crowne on 10th
              </a>
            </li>
            <li>
              <a href="https://www.tapestryuab.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200">
                Tapestry
              </a>
            </li>
            <li>
              <a href="https://www.axelrow.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200">
                Axel Row and Avondale Gardens
              </a>
            </li>
            <li>
              <a href="https://www.marshallon3rd.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200">
                Marshall on 3rd
              </a>
            </li>
            <li>
              <a href="https://www.marshallon5th.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200">
                Marshall on 5th
              </a>
            </li>
            <li>
              <a href="https://www.lumenbirmingham.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200">
                Lumen
              </a>
            </li>
            <li>
              <a href="https://www.alight-birmingham.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-2 hover:text-[#14532d] transition-colors duration-200">
                Alight
              </a>
            </li>
          </ul>
        </section>
      </div>
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
