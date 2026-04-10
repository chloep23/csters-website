import React, { useEffect, useState } from "react";

interface AlumniMember {
  name: string;
  email: string;
  classYear: string;
  college: string;
  linkedin?: string;
}

export default function AlumniDirectory() {
  const [alumni, setAlumni] = useState<AlumniMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ7qQ1rRM_i7v0JRPjIknlXnDaB0zkwI1zuOudAFz8HTzCpD5gcVLeuis92k738Ng3QujXGJxQqyN5/pub?gid=1772729466&single=true&output=csv";

    fetch(csvUrl)
      .then((res) => res.text())
      .then((data) => {
        const lines = data.split("\n").slice(1)
        const parsed = lines
          .filter((line) => line.trim())
          .map((line) => {
            const cols = line.split(",");
            return {
              // col[0] is timestamp — skip it
              email: cols[1]?.trim(),
              name: cols[2]?.trim(),
              college: cols[3]?.trim(),
              classYear: cols[4]?.trim(),
              linkedin: cols[5]?.trim() || undefined,
            };
          })
          .filter((a) => a.name);
        setAlumni(parsed);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load alumni:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#f0ece3" }} className="min-h-screen pt-20 pb-16 px-12">
      <h1 className="text-3xl font-bold tracking-widest uppercase text-black text-center mb-8">
        Alumni Directory
      </h1>

      {loading ? (
        <div className="flex justify-center mt-20">
          <div className="w-10 h-10 border-4 border-[#8e9ed6] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-4">
          {alumni.map((person, i) => (
            <div
              key={i}
              className="text-center px-6 py-8"
            >
              <p className="text-black font-medium text-base mb-1">{person.name}</p>
              <p className="text-black text-sm">{person.email}</p>
              <p className="text-black text-sm">
                Class of '{person.classYear?.slice(-2)} | {person.college}
              </p>
              {person.linkedin && (
               <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-xs underline block mt-1"
                >
                  {person.linkedin}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}