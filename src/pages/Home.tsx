import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#F7F4F1]">
      {/* ------------- Main Header Section ------------- */}
      <section
        className="w-full min-h-[650px] bg-[#e7e4f4] bg-cover bg-center flex flex-col items-center justify-center text-black text-center px-6"
        style={{ backgroundImage: "url('/images/homepage/hero.png')" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight">
          RICE <br /> &lt; CSTERS &gt;
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-black">
          Our mission is to encourage and empower women interested in Computer Science to 
          develop a tight-knit community of current students, alumni, professors, and 
          mentors through professional and social events.
        </p>
        <Link
          to="/events/upcoming"
          className="mt-6 bg-[#5B84F1] hover:bg-[#4c74e0] font-bold text-white py-2 px-6 rounded-full shadow-md transition"
        >
          Get Involved <span className="inline-block -scale-x-100 ml-1">く</span>
        </Link>
      </section>

      {/* ------------- Insta Section ------------- */}
      <section className="relative z-0 bg-[#F7F4F1] py-16 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[200px] sm:h-[281px] bg-[#DFDFF2] -translate-y-1/2 -z-10"></div>
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[45%] p-6 md:p-12 z-10">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-[#0B1956] whitespace-nowrap">
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
          <div className="w-full md:w-[55%] flex justify-center z-10 mt-12">
            <img
              src="/images/homepage/instagram.png"
              alt="Instagram pic"
              className="w-full h-auto aspect-square max-w-[600px] sm:max-w-[800px] md:max-w-[950px] lg:max-w-[1100px] ml-6 sm:ml-20"
            />
          </div>
        </div>
      </section>

      {/* ------------- Cloud Section ------------- */}
      {/* The blobs are a background layer; the grid below sets the section
          height, so the tiles can never overflow and get clipped. */}
      <section className="relative w-full bg-[#F7F4F1] overflow-hidden">
        <svg
          viewBox="0 0 1440 795"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
        >
          <ellipse cx="45.5" cy="493.5" rx="430.5" ry="493.5" fill="#8D99C6" />
          <ellipse cx="1156.5" cy="674.5" rx="298.5" ry="344.5" fill="#8D99C6" />
          <ellipse cx="479" cy="233" rx="241" ry="233" fill="#8D99C6" />
          <ellipse
            cx="685.019"
            cy="570.427"
            rx="348.521"
            ry="249.891"
            transform="rotate(-49.6914 685.019 570.427)"
            fill="#8D99C6"
          />
          <ellipse
            cx="1550.49"
            cy="705.152"
            rx="490.5"
            ry="435.5"
            transform="rotate(143.617 1550.49 705.152)"
            fill="#8D99C6"
          />
        </svg>

        {/* ------------- Button Grid ------------- */}
        <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-32 lg:py-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 max-w-md sm:max-w-2xl">
            {/* ------------- Join Our Listserv ------------- */}
            <a
              href="https://mailman.rice.edu/mailman/listinfo/csters-l"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E9E7F5] min-h-32 w-full rounded-2xl shadow-md p-5 sm:p-6 flex justify-between items-center gap-3 hover:scale-[1.07] hover:shadow-lg transition"
            >
              <span className="text-black font-medium text-lg sm:text-[22px]">
                Join Our Listserv
              </span>
              <img
                src="/images/homepage/arrow.png"
                alt=""
                className="w-16 sm:w-20 h-auto shrink-0 transition"
              />
            </a>

            {/* ------------- More About Us ------------- */}
            <Link
              to="/about"
              className="group bg-[#FAF3EB] min-h-32 w-full rounded-2xl shadow-md p-5 sm:p-6 flex justify-between items-center gap-3 hover:scale-[1.07] hover:shadow-lg transition"
            >
              <span className="text-black font-medium text-lg sm:text-[22px]">
                More About Us
              </span>
              <img
                src="/images/homepage/arrow.png"
                alt=""
                className="w-16 sm:w-20 h-auto shrink-0 transition"
              />
            </Link>

            {/* ------------- Collaborate With Us ------------- */}
            <Link
              to="/contact"
              className="group bg-[#FAF3EB] min-h-32 w-full rounded-2xl shadow-md p-5 sm:p-6 flex justify-between items-center gap-3 hover:scale-[1.07] hover:shadow-lg transition"
            >
              <span className="text-black font-medium text-lg sm:text-[22px]">
                Collaborate With Us
              </span>
              <img
                src="/images/homepage/arrow.png"
                alt=""
                className="w-16 sm:w-20 h-auto shrink-0 transition"
              />
            </Link>

            {/* ------------- Upcoming Events ------------- */}
            <Link
              to="/events/upcoming"
              className="group bg-[#E9E7F5] min-h-32 w-full rounded-2xl shadow-md p-5 sm:p-6 flex justify-between items-center gap-3 hover:scale-[1.07] hover:shadow-lg transition"
            >
              <span className="text-black font-medium text-lg sm:text-[22px]">
                Upcoming Events
              </span>
              <img
                src="/images/homepage/arrow.png"
                alt=""
                className="w-16 sm:w-20 h-auto shrink-0 transition"
              />
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
