import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0ece3]">
      <main className="flex flex-col items-center flex-grow pt-20 pb-16">
        <h1 className="text-black text-5xl font-bold mb-12 tracking-widest">CONTACT</h1>

        <div className="flex gap-12 px-6 items-start">
          {/* Officers Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* External President */}
            <div className="flex flex-col items-center">
              <p className="text-black font-semibold text-sm mb-2">External President</p>
              <div className="text-center bg-white p-6 rounded-2xl shadow-md w-56">
                <img src="/src/assets/team/Samhita.png" alt="External President"
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-gray-700 font-medium">Samhita Vinay</p>
                <p className="text-gray-500 text-sm">Class of '26 | Wiess</p>
                <p className="text-gray-500 text-sm">sv57@rice.edu</p>
              </div>
            </div>
            {/* Internal President */}
            <div className="flex flex-col items-center">
              <p className="text-black font-semibold text-sm mb-2">Internal President</p>
              <div className="text-center bg-white p-6 rounded-2xl shadow-md w-56">
                <img src="/src/assets/team/ChloePark.JPG" alt="Internal President"
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-gray-700 font-medium">Chloe Park</p>
                <p className="text-gray-500 text-sm">Class of '27 | Sid Rich</p>
                <p className="text-gray-500 text-sm">csp8@rice.edu</p>
              </div>
            </div>
            {/* Secretary */}
            <div className="flex flex-col items-center">
              <p className="text-black font-semibold text-sm mb-2">Secretary</p>
              <div className="text-center bg-white p-6 rounded-2xl shadow-md w-56">
                <img src="/src/assets/team/ChloeLim.jpg" alt="Secretary"
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-gray-700 font-medium">Chloe Lim</p>
                <p className="text-gray-500 text-sm">Class of '26 | Martel</p>
                <p className="text-gray-500 text-sm">chl6@rice.edu</p>
              </div>
            </div>
            {/* Treasurer */}
            <div className="flex flex-col items-center">
              <p className="text-black font-semibold text-sm mb-2">Treasurer</p>
              <div className="text-center bg-white p-6 rounded-2xl shadow-md w-56">
                <img src="/src/assets/team/Varshini.JPG" alt="Treasurer"
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-gray-700 font-medium">Varshini Loganathan</p>
                <p className="text-gray-500 text-sm">Class of '28 | Wiess</p>
                <p className="text-gray-500 text-sm">vl37@rice.edu</p>
              </div>
            </div>
          </div>

          {/* Linktree */}
          <a
            href="https://linktr.ee/csters"
            target="_blank"
            rel="noopener noreferrer"
            className="block flex-shrink-0"
          >
            <img
              src="/src/assets/linktree.png"
              alt="Linktree"
              className="w-96 h-auto rounded-2xl shadow-md"
            />
          </a>
        </div>
      </main>
    </div>
  );
}