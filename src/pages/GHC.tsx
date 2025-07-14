import React from "react";

export default function GHC() {
  return (
    <div className="flex-col items-center justify-center bg-[#F7F4F1]">
      <h1 className="text-black text-[36px] font-semibold text-center pt-20 pb-7 px-5 break-words">
        GRACE HOPPER CELEBRATION (GHC)</h1>
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-left text-black text-[16px] font-inter">
          Grace Hopper Celebration (GHC) is the world's largest gathering of women and non-binary technologists. This three-day 
          conference features workshops, presentations, networking, and a career fair. Held annually in late September or early 
          October, GHC rotates between Orlando, Chicago, and Houston. Each year, CSters sponsors 10-20 students with partial or 
          full scholarships covering tickets, flights, and hotels, thanks to our company sponsors.
        </p>
      </div>

      {/* insert photo carousel */}

      <h1 className="text-black text-[36px] font-semibold text-center pt-20 pb-7 px-5 break-words">
        GHC SPONSORSHIP & APPLICATION PROCESS</h1>
      <div className="text-left text-black text-[16px] font-inter max-w-7xl mx-auto px-5">
        <p className="font-bold">
          To apply for GHC sponsorship through CSters, members must meet he following criteria unless granted a petition:
        </p>
        <ul className="list-disc list-outside pl-5">
          <li>Be a Rice undergraduate or graduate student during the conference year.</li>
          <li>Be an active CSters member, including subscription to the CSters listserv at the time of application.</li>
          <li>Attend a mandatory GHC info session hosted by CSters in late March or early April of the previous academic year.</li>
          <li>Have attended at least three CSters events per semester in the previous academic year (exceptions for study abroad).</li>
        </ul>

        <p className="font-bold pt-5">
          Eligible members will be invited to apply in late April or early May, with sponsorship priority based on:
        </p>
        <ol className="list-decimal list-outside pl-5">
          <li>Club involvement</li>
          <li>Seniority</li>
          <li>First-time attendance</li>
          <li>Application responses</li>
        </ol>
        <p className="pt-2">Sponsorship decisions are released in the summer, with the number of awards varying annually.</p>
        <p>For questions, contact csters.rice@gmail.com or the current External President.</p>
      </div>

      {/* insert photo */}

      <h1 className="text-black text-[36px] font-semibold text-center pt-20 pb-7 px-5 break-words">
        WHY GHC</h1>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 gap-x-30 items-center relative">

          {/* center line */}
          <div className="absolute top-[26px] bottom-0 left-1/2 w-[1px] bg-black transform -translate-x-1/2">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-black rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-black rounded-full"></div> 
          </div>

          {/* Left side */}
          <div className="pb-10">
            <h2 className="text-black text-[30px] font-semibold pb-1">Networking & Connections</h2>
            <p className="text-left text-black text-[16px] font-inter"> Community Lounge </p>
            <ul className="list-disc list-outside pl-5 text-left text-black text-[16px] font-inter">
              <li>Connect with AnitaB.org Local Communities and Systers Groups. Meet leaders, explore events, and 
                network with fellow technologists. Volunteers will help you join on the spot! </li>
              <li>Virtual Attendees:
                <ul className="list-disc list-outside pl-5 text-left text-black text-[16px] font-inter">
                  <li>AnitaB.org Local Communities: Grow your network, share insights, find mentors, and attend local 
                    events. </li>
                </ul>
              </li>
            </ul>

            {/* add picture later */}

          </div>

          {/* Right side */}
          <div className="pb-10">

            {/* add picture later */}

            <h2 className="text-black text-[30px] font-semibold pb-1">Insightful Conversations</h2>
            <p className="text-left text-black text-[16px] font-inter"> Braindate </p>
            <ul className="list-disc list-outside pl-5 text-left text-black text-[16px] font-inter">
              <li>Expand your network through one-on-one or small group discussions, in person or virtually.
                Share insights, exchange experiences, and connect at the Braindate Lounge. </li>
            </ul>
            <p className="text-left text-black text-[16px] font-inter">Speaker Meet & Greets</p>
            <ul className="list-disc list-outside pl-5 text-left text-black text-[16px] font-inter">
              <li>Meet industry leaders, engage in conversations, and snap a photo with speakers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
