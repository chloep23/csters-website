import { useState } from "react";

// Live embed of the CSters Events Calendar. This is a window onto the calendar
// itself rather than a copy of it, so adding an event in Google Calendar is all
// that's needed to update this page - no redeploy, no .ics parsing on our side.
// Recurring and all-day events render correctly because Google handles them.
//
// The calendar must stay shared publicly for this to load. To change what shows
// here, edit the calendar - not this file.
const CALENDAR_ID = "ov37doivoa8ohnil4k5upd7stc@group.calendar.google.com";

// ctz pins times to Houston so they don't shift for out-of-state visitors; the
// show* flags strip Google's own chrome, since the page supplies its heading.
const EMBED_URL =
  "https://calendar.google.com/calendar/embed?" +
  new URLSearchParams({
    src: CALENDAR_ID,
    ctz: "America/Chicago",
    mode: "MONTH",
    showTitle: "0",
    showNav: "1",
    showDate: "1",
    showTabs: "0",
    showCalendars: "0",
    showPrint: "0",
    showTz: "0",
    bgcolor: "#FFFFFF",
  });

export default function Upcoming() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen pt-20 pb-12 px-3 sm:px-4" style={{ backgroundColor: "#f0ece3" }}>
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-center font-bold mb-8 text-black"
          style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)", letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          Upcoming Events
        </h1>

        <div className="rounded-2xl shadow-lg p-2 sm:p-4 md:p-6" style={{ backgroundColor: "#8e9ed6" }}>
          <div className="relative bg-white rounded-xl overflow-hidden h-[520px] sm:h-[600px] lg:h-[680px]">
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="w-10 h-10 border-4 border-[#8e9ed6] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <iframe
              src={EMBED_URL}
              title="CSters Events Calendar"
              className="w-full h-full border-0"
              onLoad={() => setLoaded(true)}
              style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}
            />
          </div>
        </div>

        <p className="text-center mt-6 text-gray-700 text-base">
          Stay updated with CSters'{" "}
          <a
            href="https://linktr.ee/csters"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium"
          >
            LISTSERV
          </a>
        </p>
      </div>
    </div>
  );
}
