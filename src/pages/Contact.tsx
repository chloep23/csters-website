import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0ece3]">
      <main className="flex flex-col items-center flex-grow pt-20 pb-16 px-6">
        <h1 className="text-black text-3xl sm:text-5xl font-bold mb-12 tracking-widest">CONTACT</h1>
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none">
            <div className="flex flex-col items-center">
              <p className="text-black font-semibold text-xs sm:text-sm mb-2">External President</p>
              <div className="text-center bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full h-full">
                <img src="/src/assets/team/Samhita.png" alt="External President"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover" />
                <p className="text-gray-700 font-medium text-sm sm:text-base">Samhita Vinay</p>
                <p className="text-gray-500 text-xs sm:text-sm">Class of '26 | Wiess</p>
                <p className="text-gray-500 text-xs sm:text-sm">sv57@rice.edu</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-black font-semibold text-xs sm:text-sm mb-2">Internal President</p>
              <div className="text-center bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full h-full">
                <img src="/src/assets/team/ChloePark.JPG" alt="Internal President"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover" />
                <p className="text-gray-700 font-medium text-sm sm:text-base">Chloe Park</p>
                <p className="text-gray-500 text-xs sm:text-sm">Class of '27 | Sid Rich</p>
                <p className="text-gray-500 text-xs sm:text-sm">csp8@rice.edu</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-black font-semibold text-xs sm:text-sm mb-2">Secretary</p>
              <div className="text-center bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full h-full">
                <img src="/src/assets/team/ChloeLim.jpg" alt="Secretary"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover" />
                <p className="text-gray-700 font-medium text-sm sm:text-base">Chloe Lim</p>
                <p className="text-gray-500 text-xs sm:text-sm">Class of '26 | Martel</p>
                <p className="text-gray-500 text-xs sm:text-sm">chl6@rice.edu</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-black font-semibold text-xs sm:text-sm mb-2">Treasurer</p>
              <div className="text-center bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full h-full">
                <img src="/src/assets/team/Varshini.JPG" alt="Treasurer"
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover" />
                <p className="text-gray-700 font-medium text-sm sm:text-base">Varshini Loganathan</p>
                <p className="text-gray-500 text-xs sm:text-sm">Class of '28 | Wiess</p>
                <p className="text-gray-500 text-xs sm:text-sm">vl37@rice.edu</p>
              </div>
            </div>
          </div>

          <a
            href="https://linktr.ee/csters"
            target="_blank"
            rel="noopener noreferrer"
            className="block flex-shrink-0"
          >
            <img
              src="/src/assets/linktree.png"
              alt="Linktree"
              className="w-72 sm:w-96 h-auto rounded-2xl shadow-md"
            />
          </a>

        </div>
      </main>
    </div>
  );
}