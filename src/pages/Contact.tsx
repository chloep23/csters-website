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
                src="/images/external-president.png"
                alt="External President"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">External President</h2>
              <p className="text-gray-700">Emma Li</p>
              <p className="text-gray-600">Class of '25 | Jones</p>
              <p className="text-gray-600">el36@rice.edu</p>
            </div>
            {/* Internal President */}
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
            {/* Secretary */}
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
            {/* Treasurer */}
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

          {/* Linktree Section */}
          <div className="flex flex-col items-center bg-[#e0f7ff] p-6 rounded-lg shadow-lg w-96">
            <img
              src="/src/img/linktree.png"
              alt="Linktree"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">CSTERS</h2>
            <p className="text-gray-700">Women in Computer Science @ Rice</p>
            <ul className="mt-4 space-y-2">
              <li className="text-blue-600 hover:underline">Subscribe to our Listserv!</li>
              <li className="text-blue-600 hover:underline">Follow our Instagram!</li>
              <li className="text-blue-600 hover:underline">Add our Google Calendar!</li>
              <li className="text-blue-600 hover:underline">Check out our website!</li>
              <li className="text-blue-600 hover:underline">Email us at csters.rice@gmail.com!</li>
              <li className="text-blue-600 hover:underline">Give us your feedback!</li>
              <li className="text-blue-600 hover:underline">Join our Facebook Group!</li>
              <li className="text-blue-600 hover:underline">Alumni? Tell us how you're doing!</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#d9d9d9] py-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4">
            <img src="/images/sponsor1.png" alt="Sponsor 1" className="h-12" />
            <img src="/images/sponsor2.png" alt="Sponsor 2" className="h-12" />
            <img src="/images/sponsor3.png" alt="Sponsor 3" className="h-12" />
          </div>
          <p className="text-sm text-gray-600 mt-4">© 2025 Rice CSTERS</p>
        </div>
      </footer>
    </div>
  );
}