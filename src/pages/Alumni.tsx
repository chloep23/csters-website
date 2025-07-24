import '../styles/alumni.styles.css';

const alumni = [
  { name: "Jane Doe", linkedin: "[LinkedIn]", class: "’23", college: "Baker" },
  { name: "John Smith", linkedin: "[LinkedIn]", class: "’23", college: "Sid Richardson" },
  { name: "Edward Stonehammer", linkedin: "[LinkedIn]", class: "’24", college: "Lovett" },
  { name: "Sarah Randall", linkedin: "[LinkedIn]", class: "’23", college: "Lovett" },
  { name: "Mac Miller", linkedin: "[LinkedIn]", class: "’21", college: "Duncan" },
  { name: "Lyla Bridges", linkedin: "[LinkedIn]", class: "’23", college: "Brown" },
  { name: "Mason Hernandez", linkedin: "[LinkedIn]", class: "’23", college: "McMurtry" },
  { name: "Jane Doe", linkedin: "[LinkedIn]", class: "’23", college: "Martel" },
  { name: "Emily Shen", linkedin: "[LinkedIn]", class: "’19", college: "Sid Richardson" },
  { name: "Riley Nguyen", linkedin: "[LinkedIn]", class: "’23", college: "Baker" },
  { name: "Bailey Koh", linkedin: "[LinkedIn]", class: "’23", college: "Baker" },
  { name: "Jason Sharon", linkedin: "[LinkedIn]", class: "’23", college: "Baker" },
  { name: "Emma Little", linkedin: "[LinkedIn]", class: "’23", college: "Sid Richardson" },
  { name: "Jane Doe", linkedin: "[LinkedIn]", class: "’23", college: "Baker" },
  { name: "Fiona Grouch", linkedin: "[LinkedIn]", class: "’23", college: "Brown" },
  { name: "Mariam Wedge", linkedin: "[LinkedIn]", class: "’23", college: "Lovett" },
  { name: "Jane Doe", linkedin: "[LinkedIn]", class: "’23", college: "Martel" },
  { name: "Mason Hernandez", linkedin: "[LinkedIn]", class: "’23", college: "McMurtry" },
  { name: "Mac Miller", linkedin: "[LinkedIn]", class: "’21", college: "Duncan" },
  { name: "Lyla Bridges", linkedin: "[LinkedIn]", class: "’23", college: "Brown" },
  { name: "Brandon Song", linkedin: "[LinkedIn]", class: "’24", college: "Baker" },
  { name: "Murt Bartholemew", linkedin: "[LinkedIn]", class: "’23", college: "Baker" },
  { name: "Emily Shen", linkedin: "[LinkedIn]", class: "’19", college: "Sid Richardson" },
  { name: "Riley Nguyen", linkedin: "[LinkedIn]", class: "’23", college: "Baker" },
  { name: "Lyla Bridges", linkedin: "[LinkedIn]", class: "’23", college: "Brown" },
  { name: "Bailey Koh", linkedin: "[LinkedIn]", class: "’23", college: "Baker" },
  { name: "Sarah Randall", linkedin: "[LinkedIn]", class: "’23", college: "Lovett" },
  { name: "Jane Doe", linkedin: "[LinkedIn]", class: "’23", college: "Will Rice" },
];

export default function Alumni() {
  return (
    <div className="alumni-page">
      <div className="alumni-directory-container">
        <h1 className="alumni-title">ALUMNI DIRECTORY</h1>
        <div className="alumni-grid">
          {alumni.map((alum, idx) => (
            <div className="alumni-card" key={idx}>
              <div className="alumni-name">{alum.name}</div>
              <div className="alumni-class">
                Class of {alum.class} | {alum.college}
              </div>
              {alum.linkedin && (
                <div className="alumni-linkedin">
                  <a href={`https://${alum.linkedin}`} target="_blank" rel="noopener noreferrer">
                    {alum.linkedin}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
