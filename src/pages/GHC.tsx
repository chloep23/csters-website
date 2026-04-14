import {useState, useEffect, useRef} from "react";
import ghc_title from "../assets/ghc_title.png"
import ghc_timeline_left from "../assets/ghc_timeline_left.jpg"
import ghc_timeline_right from "../assets/ghc_timeline_right.jpg"
import ghc_carousel_1 from "../assets/ghc_carousel_1.png"
import ghc_carousel_2 from "../assets/ghc_carousel_2.jpg"

const carousel_imgs = [ghc_carousel_1, ghc_carousel_2];

export default function GHC() {
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [
    carousel_imgs[carousel_imgs.length - 1],
    ...carousel_imgs, carousel_imgs[0],
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      if (current >= images.length - 1) {
        setCurrent(1);
      } else if (current <= 0) {
        setCurrent(images.length - 2);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [current, isTransitioning, images.length]);

  return (
    <div className="flex-col items-center justify-center bg-[#F7F4F1] overflow-hidden">
      <h1 className="text-black text-2xl sm:text-3xl md:text-[36px] font-semibold text-center pt-20 pb-7 px-5 break-words">
        GRACE HOPPER CELEBRATION (GHC)
      </h1>
      <div className="max-w-5xl mx-auto px-5">
        <p className="text-left text-black text-sm sm:text-[16px] font-inter">
          Grace Hopper Celebration (GHC) is the world's largest gathering of women and non-binary technologists. This three-day 
          conference features workshops, presentations, networking, and a career fair. Held annually in late September or early 
          October, GHC rotates between Orlando, Chicago, and Houston. Each year, CSters sponsors 10-20 students with partial or 
          full scholarships covering tickets, flights, and hotels, thanks to our company sponsors.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto mt-10 overflow-hidden rounded-xl box-border">
        <div
          ref={sliderRef}
          className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : "transition-none"}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 relative aspect-[16/9] px-3 sm:px-5 rounded-xl overflow-hidden">
              <img src={img} alt={`GHC Slide ${index}`} className="w-full h-full object-cover rounded-xl" />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-7 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full text-sm sm:text-base">
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-7 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full text-sm sm:text-base">
          &#10095;
        </button>
      </div>

      <h1 className="text-black text-2xl sm:text-3xl md:text-[36px] font-semibold text-center pt-16 pb-7 px-5 break-words">
        GHC SPONSORSHIP & APPLICATION PROCESS
      </h1>
      <div className="text-left text-black text-sm sm:text-[16px] font-inter max-w-5xl mx-auto px-5">
        <p className="font-bold">
          To apply for GHC sponsorship through CSters, members must meet the following criteria unless granted a petition:
        </p>
        <ul className="list-disc list-outside pl-6 mt-2 space-y-1">
          <li>Be a Rice undergraduate or graduate student during the conference year.</li>
          <li>Be an active CSters member, including subscription to the CSters listserv at the time of application.</li>
          <li>Attend a mandatory GHC info session hosted by CSters in late March or early April of the previous academic year.</li>
          <li>Have attended at least three CSters events per semester in the previous academic year (exceptions for study abroad).</li>
        </ul>
        <p className="font-bold pt-5">
          Eligible members will be invited to apply in late April or early May, with sponsorship priority based on:
        </p>
        <ol className="list-decimal list-outside pl-7 mt-2 space-y-1">
          <li>Club involvement</li>
          <li>Seniority</li>
          <li>First-time attendance</li>
          <li>Application responses</li>
        </ol>
        <p className="pt-2">Sponsorship decisions are released in the summer, with the number of awards varying annually.</p>
        <p className="pt-2">For questions, contact <u><b>csters.rice@gmail.com</b></u> or the current External President: <u>sv57@rice.edu</u>.</p>
      </div>

      <div className="max-w-4xl mx-auto px-5 pt-16">
        <img src={ghc_title} alt="GHC title image" className="w-full h-auto rounded-xl"></img>
      </div>

      <div className="hidden md:block">
        <h1 className="text-black text-[36px] font-semibold text-center pt-16 px-5 break-words">
          WHY GHC
        </h1>
        <div className="relative w-full max-w-5xl mx-auto py-10 px-5">
          <div className="absolute top-15 left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-black"></div>

          <div className="mb-4 flex w-full">
            <div className="w-1/2 pr-8 text-left">
              <h2 className="text-black text-[30px] font-semibold pb-1">Networking & Connections</h2>
              <p className="text-black text-[16px] font-inter"><b>Community Lounge</b></p>
              <ul className="list-disc list-outside pl-5 text-black text-[16px] font-inter">
                <li>Connect with AnitaB.org Local Communities and Systers Groups. Meet leaders, explore events, and 
                  network with fellow technologists. Volunteers will help you join on the spot!</li>
              </ul>
              <p className="text-black text-[16px] font-inter mt-5"><b>Virtual Attendees</b></p>
              <ul className="list-disc list-outside pl-5 text-left text-black text-[16px] font-inter">
                <li>AnitaB.org Local Communities: Grow your network, share insights, find mentors, and attend local events.</li>
                <li>Explore virtual expo/company booths during platform hours.</li>
              </ul>
            </div>
            <div className="relative z-10 w-3 h-3 bg-black rounded-full border-4 border-black mt-3"></div>
            <div className="relative z-10 mx-auto w-1/2 pl-8 pt-3">
              <img src={ghc_timeline_right} alt="Networking & Connections" className="w-full h-auto rounded-xl"></img>
            </div>
          </div>

          <div className="mb-4 flex w-full">
            <div className="relative z-10 mx-auto w-1/2 pr-8 pt-3 mt-10">
              <img src={ghc_timeline_left} alt="Insightful Connections" className="w-full h-auto rounded-xl"></img>
            </div>
            <div className="relative z-10 w-3 h-3 bg-black rounded-full border-4 border-black mt-16"></div>
            <div className="w-1/2 pl-8 text-left mt-12">
              <h2 className="text-black text-[30px] font-semibold pb-1">Insightful Conversations</h2>
              <p className="text-black text-[16px] font-inter"><b>Braindate</b></p>
              <ul className="list-disc list-outside pl-5 text-black text-[16px] font-inter">
                <li>Expand your network through one-on-one or small group discussions, in person or virtually.
                  Share insights, exchange experiences, and connect at the Braindate Lounge.</li>
              </ul>
              <p className="text-black text-[16px] font-inter mt-5"><b>Speaker Meet & Greets</b></p>
              <ul className="list-disc list-outside pl-5 text-black text-[16px] font-inter">
                <li>Meet industry leaders, engage in conversations, and snap a photo with speakers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden w-full max-w-5xl mx-auto px-5 pt-16 pb-10">
        <h1 className="text-black text-2xl font-semibold text-center pb-7">WHY GHC</h1>

        <h2 className="text-black text-[20px] font-semibold pb-1">Networking & Connections</h2>
        <p className="text-black text-[16px] font-inter"><b>Community Lounge</b></p>
        <ul className="list-disc list-outside pl-5 text-black text-[16px] font-inter">
          <li>Connect with AnitaB.org Local Communities and Systers Groups. Meet leaders, explore events, and 
            network with fellow technologists. Volunteers will help you join on the spot!</li>
        </ul>
        <p className="text-black text-[16px] font-inter mt-5"><b>Virtual Attendees</b></p>
        <ul className="list-disc list-outside pl-5 text-black text-[16px] font-inter mb-4">
          <li>AnitaB.org Local Communities: Grow your network, share insights, find mentors, and attend local events.</li>
          <li>Explore virtual expo/company booths during platform hours.</li>
        </ul>
        <img src={ghc_timeline_right} alt="Networking & Connections" className="w-full h-auto rounded-xl mb-4"></img>

        <h2 className="text-black text-[20px] font-semibold pb-1 mt-10">Insightful Conversations</h2>
        <p className="text-black text-[16px] font-inter"><b>Braindate</b></p>
        <ul className="list-disc list-outside pl-5 text-black text-[16px] font-inter">
          <li>Expand your network through one-on-one or small group discussions, in person or virtually.
            Share insights, exchange experiences, and connect at the Braindate Lounge.</li>
        </ul>
        <p className="text-black text-[16px] font-inter mt-5"><b>Speaker Meet & Greets</b></p>
        <ul className="list-disc list-outside pl-5 text-black text-[16px] font-inter mb-4">
          <li>Meet industry leaders, engage in conversations, and snap a photo with speakers.</li>
        </ul>
        <img src={ghc_timeline_left} alt="Insightful Connections" className="w-full h-auto rounded-xl"></img>
      </div>

    </div>
  );
}