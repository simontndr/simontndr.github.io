import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeTag from '../components/MarqueeTag';
import WorkExperience from '../components/WorkExperience';
import LeadershipList from '../components/LeadershipList';
import FooterBanner from '../components/FooterBanner';
import Footer from '../components/Footer';
import journeyBg from '../assets/hero-images/journeyHero.webp';
import journeySvg from "../assets/svgs/journey.svg";

import Duck from '../assets/experience-trinkets/duck.webp';
import House from '../assets/experience-trinkets/house.webp';
import Sheep from '../assets/experience-trinkets/sheep.webp';
import PhotoCard from '../assets/experience-trinkets/photoCard.webp';
import Brick from '../assets/experience-trinkets/brick.webp';
import Hirono from '../assets/experience-trinkets/hirono.webp';

const JourneyPage = () => {

  const softwareEngineeringIntern = {
    jobTitle: "Process Risk COE Intern",
    company: "RBC",
    startDate: "INCOMING",
    endDate: "W27",
    description: "Joining RBC's Process Risk Centre of Excellence to support process risk management, strengthen internal controls, and improve operational resilience.",
    photoUrl: Brick,
    Quote:
      "Building the first line of defence, brick by brick!",
    reportUrl: ""
  };

  const leaseAnalyst = {
    jobTitle: "Lease Data Analyst",
    company: "BGIS",
    startDate: "May 2026",
    endDate: "Aug 2026",
    description: "Supported lease administration for National Bank's corporate real estate portfolio, focusing on data validation, reporting, and workflow improvements. Leveraged Excel and Power Query to streamline data management and support accurate, timely business decisions.",
    photoUrl: Hirono,
    Quote: "Working with data requires a sharp attention to detail. It's almost like you need a magnifying glass!",
    reportUrl: "/leaseAnalyst#leaseAnalystTop"
  };

  const researchAssistant = {
    jobTitle: "User Experience Research Assistant",
    company: "University of Guelph",
    startDate: "May 2025",
    endDate: "Apr 2026",
    description:"Contributed to the design of an AI-enabled livestreaming platform, exploring ways to improve accessibility for global K-pop communities. Conducted focus groups and supported requirements gathering to translate user feedback into platform improvements.",
    photoUrl: PhotoCard,
    Quote: "Being a research assistant was like trading K-pop photo cards — you're constantly exchanging ideas, hoping to find the rare ones worth holding onto.",
    reportUrl: "/researchAssistant#researchTop"
  };

  const webAppDev = {
  jobTitle: "Web Application Developer",
  company: "Kenna",
  startDate: "Sep 2025",
  endDate: "Dec 2025",
  description:"Developed ERP features for BASF Agricultural Solutions, translating evolving business requirements into functional tools for supply chain partners. Collaborated with account managers and QA teams to create reliable business workflows.",
  photoUrl: Duck,
    Quote: "When developing software, sometimes explaining the problem out loud is all it takes to find the solution.",
  reportUrl: "/webDeveloper#webDevTop"
  };

  const teachingAssistant = {
    jobTitle: "Teaching Assistant (Software Design II)",
    company: "University of Guelph",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    description: "Oversaw students in their Agile Python data analysis projects, supporting sprint planning, progress tracking, and iterative development. Provided feedback on deliverables and helped teams navigate technical challenges while maintaining alignment with course objectives.",
    photoUrl: Sheep,
    Quote: "As a teaching assistant, I wanted to be like a stuffed animal — there for unyielding support and reliability.",
    reportUrl: ""
  };

  const residenceAssistant = {
    jobTitle: "Residence Assistant",
    company: "University of Guelph",
    startDate: "Aug 2024",
    endDate: "Dec 2026",
    description: "Supported a first-year residence community through proactive risk management and student engagement. Conducted building inspections, identified emerging community trends, and planned programming to address resident needs while fostering an inclusive environment.",
    photoUrl: House,
    Quote: "Building a community is a lot like decorating a dollhouse — you always make sure there’s space for everyone.",
    reportUrl: ""
  };

  const workExperiences = [
    softwareEngineeringIntern,
    leaseAnalyst,
    researchAssistant,
    webAppDev,
    teachingAssistant,
    residenceAssistant,
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center min-w-screen">

    <Hero id="journeyTop" readMore="#overview" bgUrl={journeyBg} imageUrl={journeySvg} text="" textStyle={''} animate={true}/>

    <Navbar />
    
    <div id="overview" className="flex flex-col items-center justify-center w-full pt-20">
      <div className="md:w-[60%] px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight font-syncopate uppercase mb-10">Overview</h2>
        <div className="text-midnight font-manrope text-left mb-[140px]">
          <p className="mb-6">
            My experiences have shaped how I approach problems, collaborate with others, and understand how organizations operate.
            Working across different environments, including government-funded research, corporate real estate, and financial services, has exposed me to diverse organizational cultures, workflows, and challenges.
          </p>
          <p className="mb-6">
            Despite these different experiences, one common thread has emerged: data plays an important role in how organizations operate and make decisions. By combining my background in business, technology, and statistics, I've found success in using data to understand existing processes, identify opportunities for improvement, and support better-informed decisions.
          </p>
          <p>
            Although my journey is just getting started, I'm already grateful for the mentors, and colleagues who have guided me along thus far. I'm looking forward to taking on new challenges, building my skills, and finding new ways to make an impact.
          </p>

        </div>
      </div>
      <MarqueeTag/>
    </div>

    <div className="work-experience bg-jicama w-full py-20">
      
      <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">Roles ✦</h3>

      {workExperiences.map((experience, index) => (
        <WorkExperience
          key={index}
          experience={experience}
          jobTitle={experience.jobTitle}
          company={experience.company}
          startDate={experience.startDate}
          endDate={experience.endDate}
          description={experience.description}
          photoUrl={experience.photoUrl}
          Quote={experience.Quote}
          reportUrl={experience.reportUrl}
        />
      ))}

    </div>

    <div className="leadership w-full flex flex-col justify-center items-center">
      <MarqueeTag/>

      <div className="py-[125px]">
        <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">Leadership ✦</h3>
        <LeadershipList/>
      </div>

      <FooterBanner />
    </div>
    
    <Footer topRef={"#journeyTop"}/>
  </div>)
};

export default JourneyPage
