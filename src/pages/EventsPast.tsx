import React, { useState } from "react";

const events = [
    {
        image: "/src/assets/aprilccc.jpg",
    },
    {
        image: "/src/assets/marchccc.jpg",
    },
    {
        image: "/src/assets/febccc.jpg",
    },
    {
        image: "/src/assets/novccc.jpg",
    },
    {
        image: "/src/assets/octccc.jpg",
    },
    {
        image: "/src/assets/sepccc.jpg",
    },
    {
        image: "/src/assets/april24ccc.jpg",
    },
    {
        image: "/src/assets/march24ccc.jpg",
    },
    {
        image: "/src/assets/decstudy.jpg",
    },
    {
        image: "/src/assets/decevent.jpg",
    },
    {
        image: "/src/assets/novevent.jpg",
    },
    {
        image: "/src/assets/microsoft.jpg",
    },
    {
        image: "/src/assets/octevent.jpg",
    },
    {
        image: "/src/assets/sepevent.jpg",
    },
    {
        image: "/src/assets/roblox.jpg",
    },
    {
        image: "/src/assets/gsevent.jpg",
    }, 
    {
        image: "/src/assets/aprillunch.jpg",
    },
    {
        image: "/src/assets/marchlunch.jpg",
    },
    {
        image: "/src/assets/feblunch.jpg",
    },
    {
        image: "/src/assets/janlunch.jpg",
    },
    {
        image: "/src/assets/novlunch.jpg",
    },
    {
        image: "/src/assets/octlunch.jpg",
    },
    {
        image: "/src/assets/seplunch.jpg",
    },
    {
        image: "/src/assets/april24lunch.jpg",
    },
  ];

const galleryTitles = [
  "CCC’s: Coffee, Cookies, & Coding",
  "Company Events and Study Breaks",
  "Monthly Lunches",
];

export default function Past() {
  const [page, setPage] = useState(0);
  const eventsPerPage = 8;
  const totalPages = 3;
  const startIdx = page * eventsPerPage;
  const currentEvents = events.slice(startIdx, startIdx + eventsPerPage);

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section style={{ backgroundColor: "#f0ece3" }} className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        {galleryTitles[page]}
      </h2>

      <div className="relative w-full max-w-5xl flex items-center">
        <button
          onClick={prevPage}
          className="absolute -left-10 z-10 bg-[#e6e5f5] hover:bg-[#dcd9f0] rounded-lg p-2 shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
            stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="bg-[#acb8f2] px-10 py-7 rounded-3xl grid grid-cols-4 gap-8 w-fit mx-auto">
          {currentEvents.map((event, i) => (
            <div key={i} className="rounded-3xl overflow-hidden w-50 h-50">
              <img src={event.image} alt={`event-${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <button
          onClick={nextPage}
          className="absolute -right-10 z-10 bg-[#e6e5f5] hover:bg-[#dcd9f0] rounded-lg p-2 shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
            stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}