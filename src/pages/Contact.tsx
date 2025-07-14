import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f8f8]">

      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-black text-5xl font-bold mt-12">Contact</h1>

        <div className="flex flex-wrap justify-center mt-12 px-6 space-x-8">
          {/*Officers */}
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/images/external-president.png"
                alt="External President"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">External President</h2>
              <p className="text-gray-700">Emma Li</p>
              <p className="text-gray-600">Class of '25 | Jones</p>
              <p className="text-gray-600">el36@rice.edu</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/images/internal-president.png"
                alt="Internal President"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Internal President</h2>
              <p className="text-gray-700">Janhvi Somaiya</p>
              <p className="text-gray-600">Class of '26 | McMurtry</p>
              <p className="text-gray-600">js212@rice.edu</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/images/secretary.png"
                alt="Secretary"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Secretary</h2>
              <p className="text-gray-700">Sofia Lakhani</p>
              <p className="text-gray-600">Class of '25 | Martel</p>
              <p className="text-gray-600">sl11@rice.edu</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg w-64">
              <img
                src="/images/treasurer.png"
                alt="Treasurer"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Treasurer</h2>
              <p className="text-gray-700">Samhita Vinay</p>
              <p className="text-gray-600">Class of '26 | Wiess</p>
              <p className="text-gray-600">sv57@rice.edu</p>
            </div>
          </div>

          {/* Linktree */}
          <div className="flex items-center justify-center">
            <a
              href="https://linktr.ee/csters"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src="/src/img/linktree.png"
                alt="Linktree"
                className="w-96 h-auto rounded-lg"
              />
            </a>
          </div>
        </div>
      </main>

      {/* Placeholder for Footer */}
      <footer className="bg-gray-200 py-6">
        <h1 className="text-center text-sm text-gray-600">Footer Placeholder</h1>
      </footer>
    </div>
  );
}