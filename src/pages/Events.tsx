import React, { useEffect, useState } from "react";
import ICAL from "ical.js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Upcoming() {
  const [events, setEvents] = useState<{ title: string; start: string }[]>([]);

   useEffect(() => {
    const icalUrl = "https://corsproxy.io/?https://calendar.google.com/calendar/ical/ov37doivoa8ohnil4k5upd7stc%40group.calendar.google.com/public/basic.ics";

   fetch(icalUrl)
    .then((res) => res.text())
    .then((data) => {
      const jcal = ICAL.parse(data);
      const comp = new ICAL.Component(jcal);
      const vevents = comp.getAllSubcomponents("vevent");
      const parsedEvents = vevents.map((vevent) => {
        const event = new ICAL.Event(vevent);
        return {
          title: event.summary,
          start: event.startDate.toJSDate().toISOString(),
        };
      });
      setEvents(parsedEvents);
    })
    .catch((err) => console.error("Failed to load events:", err));
  }, []);

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
          <div className="bg-white rounded-xl p-2 sm:p-4 text-black">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              height="auto"
              events={events}
              eventColor="#8e9ed6"
              eventDisplay="list-item"
              eventTimeFormat={{
                hour: "numeric",
                meridiem: "short"
              }}
              headerToolbar={{
                left: "prev",
                center: "title",
                right: "next"
              }}
              titleFormat={{ year: "numeric", month: "long" }}
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