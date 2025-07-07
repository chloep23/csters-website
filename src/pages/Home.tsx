import React from "react";

export default function Home() {
  return (
    <div>
      {/* hero section 
        - making the section as tall as the screen
        - making the background centered and covering the whole box
        - heading and paragraph stacked vertically in columns */}
      <section
        className="w-full min-h-[calc(100vh-96px)] bg-[#e7e4f4] bg-cover bg-center flex flex-col items-center justify-start text-black text-center px-6 pt-32"
        style={{ backgroundImage: "url('/images/homepage/hero.png')" }}
      >
        {/* main heading */}
        <h1 className="text-5xl font-bold tracking-wide leading-tight">
          RICE <br /> &lt; CSTERS &gt;
        </h1>

        {/* mission statement paragraph */}
        <p className="mt-4 max-w-xl text-lg text-black/90">
          To encourage and empower women interested in Computer Science to develop a tight-knit community of current students, alumni, professors, and mentors through professional and social events.
        </p>

        {/* get involved button (white text on blue bg) */}
        <a
          href="/get-involved"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full shadow-md transition"
        >
          Get Involved &gt;
        </a>
      </section>
    </div>
  );
}
