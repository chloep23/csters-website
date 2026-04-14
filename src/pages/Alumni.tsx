import React, { useState } from "react";

export default function Alumni() {
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <div style={{ backgroundColor: "#f0ece3" }} className="min-h-screen pt-20 pb-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        <div className="flex-1 flex flex-col gap-6 items-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-black text-center">
            CSters Alumni
          </h1>

          <p className="text-black text-sm leading-relaxed text-center lg:text-left">
            With such a longstanding history, CSters has many graduated members. 
            If you're interested, we would really appreciate if you filled out the 
            Alumni Google Form to help build a strong network of alumni that support 
            each other and help current CSters members grow!
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-widest uppercase text-black mt-4 text-center">
            Alumni Dinners
          </h2>

          <p className="text-black text-sm leading-relaxed text-center lg:text-left">
            Starting from 2025, CSters is hosting annual alumni dinners to act as a 
            sort of reunion.
          </p>

          <img
            src="src/assets/alumni_image.png"
            alt="Alumni Dinner"
            className="rounded-xl object-cover w-full max-w-lg mt-2"
          />
        </div>

        <div className="flex-1 relative overflow-y-auto" style={{ height: "600px" }}>
          {!formLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#f0ece3]">
              <div className="w-10 h-10 border-4 border-[#8e9ed6] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdkQuYhB3hgWaxOocPYO1BQYYRklBI7iCF3mE6YFoSg494Z0w/viewform?embedded=true"
            width="100%"
            height="2046"
            onLoad={() => setFormLoaded(true)}
            style={{ opacity: formLoaded ? 1 : 0, transition: "opacity 0.3s ease" }}
          >
            Loading…
          </iframe>
        </div>

      </div>
    </div>
  );
}