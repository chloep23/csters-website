import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f8f8]">
      <main className="flex flex-col items-center flex-grow">
        <h1 className="text-black text-5xl font-bold mt-12">CONTACT</h1>

        <div className="flex flex-wrap justify-center mt-12 px-6 space-x-8">
          {/* Officers Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* External President */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/src/assets/Samhita.jpeg"
                alt="External President"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-800">External President</h2>
              <p className="text-gray-700">Samhita Vinay</p>
              <p className="text-gray-600">Class of '26 | Wiess</p>
              <p className="text-gray-600">sv57@rice.edu</p>
            </div>
            {/* Internal President */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/src/assets/ChloePark.JPG"
                alt="Internal President"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-800">Internal President</h2>
              <p className="text-gray-700">Chloe Park</p>
              <p className="text-gray-600">Class of '27 | Sid Rich</p>
              <p className="text-gray-600">csp8@rice.edu</p>
            </div>
            {/* Secretary */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/src/assets/ChloeLim.jpg"
                alt="Secretary"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-800">Secretary</h2>
              <p className="text-gray-700">Chloe Lim</p>
              <p className="text-gray-600">Class of '26 | Martel</p>
              <p className="text-gray-600">chl6@rice.edu</p>
            </div>
            {/* Treasurer */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/src/assets/treasurer.png"
                alt="Treasurer"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Treasurer</h2>
              <p className="text-gray-700">Varshini Loganathan</p>
              <p className="text-gray-600">Class of '28</p>
              <p className="text-gray-600">[Pending]</p>
            </div>
            {/* Grad Student Representative */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/src/assets/grad-rep.png"
                alt="Grad Student Representative"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Grad Student Representative</h2>
              <p className="text-gray-700">Nikki Hart</p>
              <p className="text-gray-600">[Pending]</p>
              <p className="text-gray-600">[Pending]</p>
            </div>
            {/* Social Coordinators */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/src/assets/social-coordinator.png"
                alt="Social Coordinator"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Social Coordinator</h2>
              <p className="text-gray-700">Richa Jayanti</p>
              <p className="text-gray-600">Class of '28 | Brown</p>
              <p className="text-gray-600">rj63@rice.edu</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/src/assets/social-coordinator.png"
                alt="Social Coordinator"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Social Coordinator</h2>
              <p className="text-gray-700">Stella Chen</p>
              <p className="text-gray-600">Class of '28 | Baker</p>
              <p className="text-gray-600">sc300@rice.edu</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/src/assets/social-coordinator.png"
                alt="Social Coordinator"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Social Coordinator</h2>
              <p className="text-gray-700">Carolyn Lu</p>
              <p className="text-gray-600">Class of '28 | Duncan</p>
              <p className="text-gray-600">cl236@rice.edu</p>
            </div>
          </div>

          <a
            href="https://linktr.ee/csters"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="/src/assets/linktree.png"
              alt="Linktree"
              className="w-80 h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>

        <div className="mt-12"></div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#d9d9d9] py-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4">
            <img src="/src/assets/sponsor1.png" alt="Sponsor 1" className="h-12" />
            <img src="/src/assets/sponsor2.png" alt="Sponsor 2" className="h-12" />
            <img src="/src/assets/sponsor3.png" alt="Sponsor 3" className="h-12" />
          </div>
          <p className="text-sm text-gray-600 mt-4">© 2025 Rice CSTERS</p>
        </div>
      </footer>
    </div>
  );
}