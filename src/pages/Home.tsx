import React from "react";

export default function Home() {
  return (
    <div className="bg-[#F7F4F1]">
      {/* hero section 
        - dimensions from figma mockup
        - making the section as tall as the screen
        - making the background centered and covering the whole box
        - heading and paragraph stacked vertically in columns */}
      <section
        className="w-full h-[650px] bg-[#e7e4f4] bg-cover bg-center flex flex-col items-center justify-center text-black text-center px-6"
        style={{ backgroundImage: "url('/images/homepage/hero.png')" }}
      >
        {/* main heading */}
        <h1 className="text-6xl font-bold tracking-wide leading-tight">
          RICE <br /> &lt; CSTERS &gt;
        </h1>

        {/* mission statement paragraph */}
        <p className="mt-4 max-w-xl text-lg text-black/90">
          To encourage and empower women interested in Computer Science to develop a tight-knit community of current students, alumni, professors, and mentors through professional and social events.
        </p>

        {/* get involved button (white text on cornflower blue bg), i estimated the blue color bc i couldn't retrieve from figma for some reason. also wanted to add a drop shadow */}
        <a
          href="/get-involved"
          className="mt-6 bg-[#5B84F1] hover:bg-[#4c74e0] text-white py-2 px-6 rounded-full shadow-md transition"
        >
          Get Involved &gt;
        </a>
      </section>

      {/* Instagram section */}
      <section className="relative z-0 bg-[#F7F4F1] py-20 px-4 overflow-hidden">
        {/* purple stripe behind text, used figma dimensions */}
        <div className="absolute top-1/2 left-0 w-full h-[281px] bg-[#DFDFF2] -translate-y-1/2 -z-10"></div>
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

          {/* Text */}
          <div className="w-full md:w-1/2 p-6 md:p-12 z-10 text-center md:text-left">
            {/* Instead of 30 px like the figma layout, i made it 25 so it would fit in one line. */}
            <p className="text-[25px] font-normal text-[#0B1956] text-center pl-8">
              Follow our{" "}
              <a
                href="https://www.instagram.com/ricecsters/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-indigo-700 font-semibold"
              >
                Instagram
              </a>{" "}
              for live updates!
            </p>
          </div>

          {/* Phone Image */}
          <div className="flex justify-center mt-8 md:mt-0 z-10">
            {/* Instead of 760 px like the figma layout, i made it 600 so it would look less overpowering. */}
            <img
              src="/images/homepage/instagram.png"
              alt="Instagram pic"
              className="w-[600px] h-[600px] flex-shrink-0 aspect-square translate-y-20 translate-x-20"
            />
          </div>
        </div>
      </section>



    </div>
  );
}
