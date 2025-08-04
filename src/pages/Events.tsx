import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";

export default function Upcoming() {
  const [events, setEvents] = useState<{ title: string; date: string }[]>([]);

  useEffect(() => {
    const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFSeI9581ZsY__Oz6KTuVnnbI1fGnl-_SBvI3TjpdBQUrZ9ZtvQBkGsKLQM-QOiuCu21QAVHmRak2E/pub?output=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split("\n").slice(1); // skip header
        const parsedEvents = lines.map((line) => {
          const [date, title] = line.split(",");
          return {
            title: title?.trim(),
            date: date?.trim(),
          };
        });
        setEvents(parsedEvents);
      });
  }, []);

  return (
    <div className="bg-white justify-center min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-black text-4xl font-semibold text-center mb-6">Upcoming Events</h1>
      <div className="bg-[#8e9ed6] p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg">
        <div className="bg-white rounded-xl p-4 text-black">

        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="auto"
          events={[
            { title: 'Hackathon Kickoff', date: '2025-09-19' },
            { title: 'Workshop: Design Thinking', date: '2025-09-20' },
          ]}
        />
        </div>
      </div>
    </div>
    </div>
  );
}

{/* Calendar */}
<div className="calendar-wrapper max-w-5xl mx-auto mt-6">
<FullCalendar
  plugins={[dayGridPlugin]}
  initialView="dayGridMonth"
  height="auto"
  events={[
    { title: "12pm March Mc", date: "2025-03-07" },
    { title: "5pm COMP 182", date: "2025-03-25" },
    { title: "7pm March CCC", date: "2025-03-26" },
    { title: "7pm Alumni Din", date: "2025-03-29" },
  ]}
/>
</div>

