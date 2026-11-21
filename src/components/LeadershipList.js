
const leadership = [
  {
    role: "HR Manager",
    organization: "Asian Business Leaders",
    url: "https://www.asianbusinessleaders.ca/",
  },
  {
    role: "Project Coordinator",
    organization: "Enactus Guelph",
    url: "https://www.enactusguelph.com/",
  },
  {
    role: "Peer Helper",
    organization: "Cultural Diversity Services",
    url: "https://www.uoguelph.ca/studentexperience/cultural-diversity",
  },
  {
    role: "Co-President",
    organization: "Filipino Student Association",
    url: "https://www.instagram.com/uogfsa/",
  },
  {
    role: "Representative",
    organization: "PCDR Advisory Committee",
    url: "https://www.uoguelph.ca/experiential-learning/pcdr",
  },
];

const LeadershipList = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12 text-midnight font-manrope">
      {leadership.map((item, index) => (
        <div
          key={item.organization}
          className={`group flex flex-col md:flex-row md:items-center md:justify-between gap-x-4 gap-y-2 md:gap-10 py-5 md:py-7 ${
            index !== leadership.length - 1
              ? "border-b border-midnight/15"
              : ""
          }`}
        >
          <span className="font-syncopate uppercase font-bold text-lg md:text-xl lg:text-2xl text-left">
            {item.role}
          </span>

          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold text-base lg:text-lg hover:text-royal"
          >
            {item.organization}
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              &#8599;&#xFE0E;
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default LeadershipList;
