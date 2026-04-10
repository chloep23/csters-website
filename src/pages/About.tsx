import React from "react";

interface Officer {
  id: string;
  name: string;
  position: string;
  class: string;
  college: string;
  email: string;
  image: string;
}

const OFFICERS: Officer[] = [
  {
    id: "samhita",
    name: "Samhita Vinay",
    position: "External President",
    class: "Class of '26",
    college: "Wiess",
    email: "sv57@rice.edu",
    image: "src/assets/team/Samhita.png",
  },
  {
    id: "chloep",
    name: "Chloe Park",
    position: "Internal President",
    class: "Class of '27",
    college: "Sid Richardson",
    email: "csp8@rice.edu",
    image: "src/assets/team/ChloePark.JPG",
  },
  {
    id: "chloel",
    name: "Chloe Lim",
    position: "Secretary",
    class: "Class of '26",
    college: "Will Rice",
    email: "chl6@rice.edu",
    image: "src/assets/team/ChloeLim.jpg",
  },
  {
    id: "varshini",
    name: "Varshini Loganathan",
    position: "Treasurer",
    class: "Class of '28",
    college: "Wiess",
    email: "vl37@rice.edu",
    image: "src/assets/team/Varshini.JPG",
  },
];

const SOCIALS: Officer[] = [
  {
    id: "richa",
    name: "Richa Jayanti",
    position: "Socials",
    class: "Class of '28",
    college: "Will Rice",
    email: "rj63@rice.edu",
    image: "src/assets/team/Richa.jpeg",
  },
  {
    id: "stella",
    name: "Stella Chen",
    position: "Socials",
    class: "Class of '28",
    college: "Lovett",
    email: "sc300@rice.edu",
    image: "src/assets/team/Stella.JPG",
  },
  {
    id: "carolyn",
    name: "Carolyn Lu",
    position: "Socials",
    class: "Class of '28",
    college: "McMurtry",
    email: "cl236@rice.edu",
    image: "src/assets/team/Carolyn.jpg",
  },
];

const OfficerCard: React.FC<{ officer: Officer }> = ({ officer }) => (
  <div className="flex flex-col items-center">
    <div className="w-60 h-60 rounded-xl bg-gray-100 flex items-center justify-center text-6xl mb-4 shadow-sm mt-4">
      <img 
        src={officer.image} 
        alt={officer.name}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
    <h3 className="text-black text-lg font-semibold text-center">{officer.name}</h3>
    <p className="text-gray-600 text-sm text-center">{officer.class} | {officer.college}</p>
    <p className="text-gray-500 text-xs text-center mt-1 break-all">{officer.email}</p>
  </div>
);

export default function About() {
  return (
  <div className="w-full bg-[#F7F4F1] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black text-4xl font-bold mb-8 text-center md:text-left">
              ABOUT RICE CSTERS
            </h1>
            <div className="text-black text-base font-inter space-y-4 text-center md:text-left">
              <p>
                CSters was founded in the spring of 2002 by a group of female computer science 
                undergraduates who realized the importance of supporting women in this field. We 
                aim to foster a network of undergraduate, graduate, and prospective students, as 
                well as alumni and professionals within the field.
              </p>
              <p>
                Over the years, we have sponsored many Rice students to attend the annual 
                <b> Grace Hopper Conference</b>. Through partnerships with various organizations in the 
                Rice community and beyond, CSters further expands opportunities for students to 
                interact with industry professionals for career development and mentorship.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <img 
                src="src/assets/about.png" 
                alt="CSters community gathering" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Officers Section */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-4">
          CURRENT OFFICERS
        </h2>
        
        {/* Officers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-16">
          {OFFICERS.map((officer) => (
            <div key={officer.id}>
              <p className="text-black text-base font-semibold text-center mt-3">
                {officer.position}
              </p>
              <OfficerCard officer={officer} />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {SOCIALS.map((social) => (
            <div key={social.id}>
               <p className="text-black text-base font-semibold text-center mt-3">
                {social.position}
              </p>
              <OfficerCard officer={social} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

