import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-mainPurple px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:flex justify-between items-start mb-4">
          <div>
            <p className="text-black font-bold text-xl tracking-wider mb-3">SPONSORS</p>
            <div className="flex items-center gap-6">
              <img src="/src/assets/logos/goldman.png" alt="Goldman Sachs" className="h-14 object-contain" />
              <img src="/src/assets/logos/jpmorgan.png" alt="JPMorgan Chase" className="h-10 object-contain" />
              <img src="/src/assets/logos/paycom.png" alt="Paycom" className="h-8 object-contain" />
              <img src="/src/assets/logos/shell.png" alt="Shell" className="h-12 object-contain" />
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-4">
              <a href="mailto:csters.rice@gmail.com" className="text-black hover:text-indigo">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/csters/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-indigo">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ricecsters/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-indigo">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
            <a
              href="https://linktr.ee/csters"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5B84F1] hover:bg-[#4c74e0] text-white text-xs font-bold px-4 py-2 mt-3 rounded tracking-wider"
            >
              JOIN OUR LISTSERV
            </a>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center gap-6 mb-4">
          <div className="text-center">
            <p className="text-black font-bold text-lg tracking-wider mb-3">SPONSORS</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <img src="/src/assets/logos/goldman.png" alt="Goldman Sachs" className="h-10 object-contain" />
              <img src="/src/assets/logos/jpmorgan.png" alt="JPMorgan Chase" className="h-7 object-contain" />
              <img src="/src/assets/logos/paycom.png" alt="Paycom" className="h-6 object-contain" />
              <img src="/src/assets/logos/shell.png" alt="Shell" className="h-9 object-contain" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:csters.rice@gmail.com" className="text-black hover:text-indigo">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/csters/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-indigo">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ricecsters/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-indigo">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
          </div>

          <a
            href="https://linktr.ee/csters"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5B84F1] hover:bg-[#4c74e0] text-white text-xs font-bold px-4 py-2 rounded tracking-wider"
          >
            JOIN OUR LISTSERV
          </a>
        </div>

        <p className="text-center text-black text-sm">© 2025 Rice CSters</p>
      </div>
    </footer>
  );
}