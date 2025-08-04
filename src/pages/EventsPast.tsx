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
  
    const nextPage = () => {
      setPage((prev) => (prev + 1) % 3);
    };
    const prevPage = () =>
        setPage((prev) => (prev - 1 + totalPages) % totalPages);
  
    return (
      <section className="bg-white py-12 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-black text-center mb-8">{galleryTitles[page]}</h2>
        <div className="relative w-full max-w-6xl">
          <div className="bg-[#acb8f2] p-6 rounded-3xl grid grid-cols-4 gap-6 justify-items-center">
            {currentEvents.map((event, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-xl object-cover w-full aspect-square"
                />
              </div>
            ))}
          </div>
        {/* prev button */}
        <button
          onClick={prevPage}
          className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 bg-[#e6e5f5] hover:bg-[#dcd9f0] rounded-full p-2 shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>   
          {/* next button */}
          <button
            onClick={nextPage}
            className="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 bg-[#e6e5f5] hover:bg-[#dcd9f0] rounded-full p-2 shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>
    );
  }

