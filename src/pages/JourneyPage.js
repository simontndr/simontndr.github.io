import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeTag from '../components/MarqueeTag';
import WorkExperience from '../components/WorkExperience';
import LeadershipList from '../components/LeadershipList';
import FooterBanner from '../components/FooterBanner';
import Footer from '../components/Footer';
import journeyBg from '../assets/journeyHero.png';
import journeySvg from "../assets/journey.svg";

import Duck from '../assets/duck.png';
import House from '../assets/house.png';
import Sheep from '../assets/sheep.png';
import PhotoCard from '../assets/photoCard.png';

const JourneyPage = () => {

  const webAppDev = {
    jobTitle: "Web Application Developer",
    company: "Kenna",
    startDate: "September 2025",
    endDate: "present",
    description: "Contributing to CRM-driven projects, focusing on full-stack development.",
    photoUrl: "",
    Quote: "more to come...",
    reportUrl: ""
  }

  const researchAssistant = {
    jobTitle: "Research Assistant (NSERC)",
    company: "College of Computational, Mathematical & Physical Sciences, UofG",
    startDate: "May 2025",
    endDate: "August 2025",
    description: "As a Research Assistant, I helped prototype a livestreaming platform for global K-pop fans, integrating AI tools to support multilingual interaction. I learned how to conduct instrumentation for UI/UX research and ensure Firestore data was securely structured. This role taught me how to align technical development with academic goals and user inclusivity.",
    photoUrl: PhotoCard,
    Quote: "Being a research assistant was like trading K-pop photo cards - you're constantly exchanging ideas, hoping to find the rare ones worth holding onto.",
    reportUrl: "/researchAssistant"
  }

  const teachingAssistant = {
    jobTitle: "Teaching Assistant (Software Design II)",
    company: "College of Computational, Mathematical & Physical Sciences, UofG",
    startDate: "January 2025",
    endDate: "April 2025",
    description: "As a Teaching Assistant I supported students through weekly labs, code reviews, and project troubleshooting. I learned how to explain abstract design principles clearly and give actionable feedback on python data analysis algorithms. Something I valued in this role was helping students build confidence in their technical and problem-solving skills.",
    photoUrl: Sheep,
    Quote: "As a teaching assistant, I wanted to be like a stuffed animal - there for unyielding support and reliability.",
    reportUrl: ""
  };

  const residenceAssistant = {
    jobTitle: "Residence Assistant",
    company: "Student Housing Services, UofG",
    startDate: "August 2024",
    endDate: "April 2025",
    description: "As a Residence Assistant, I supported student well-being through building an inclusive community and serving as a reliable point of contact during conflicts and emergencies. I learned how to lead with empathy, manage responsibilities under pressure, and plan events that brought people together. This role deepened my commitment to fostering safe, welcoming spaces for others.",
    photoUrl: House,
    Quote: "Building a community is a lot like decorating a dollhouse dining room - you always make sure there’s a seat for everyone at the table.",
    reportUrl: ""
  };

  const softwareEngineeringIntern = {
    jobTitle: "Software Engineering Intern",
    company: "mbyn Labs",
    startDate: "May 2024",
    endDate: "August 2024",
    description: "As a Software Engineering Intern, I collaborated with stakeholders to design a responsive landing page that met evolving requirements. I learned how to iterate quickly by wireframing in Figma and refining components based on user feedback. This experience taught me the value of balancing technical feasibility with clean, user-centered design.",
    photoUrl: Duck,
    Quote: "As a software developer, sometimes explaining the problem out loud to a duck is all it takes to find the solution.",
    reportUrl: ""
  };

  const workExperiences = [
    researchAssistant,
    teachingAssistant,
    residenceAssistant,
    softwareEngineeringIntern,
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center min-w-screen">

    <Navbar />

    <Hero id="journeyTop" readMore="#overview" bgUrl={journeyBg} imageUrl={journeySvg} text="Learn more about my experiences." textStyle={'font-courier font-bold text-md md:text-xl text-midnight mb-4'} animate={false}/>

    <div id="overview" className="flex flex-col items-center justify-center w-full pt-20">
      <div className="md:w-[60%] px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-midnight font-syncopate mb-10 uppercase">Overview</h2>
        <div className="text-midnight font-courier text-left mb-[140px]">
          <p className="mb-6">
          Each work experience I’ve had has helped shape my skills, mindset, and sense of purpose. Whether I was leading a team, supporting students, or building software, every role has taught me something valuable. I’m especially thankful for the mentors who challenged and supported me, and for the teammates who turned work into a space for connection, learning, and growth.
          </p>
          <p>
            These experiences have laid a strong foundation, but I know I’m just getting started. I’m excited to keep growing - whether it be from taking on new challenges, learning from those around me, or contributing to meaningful work. Every step forward is a chance to build something better, and I look forward to wherever that journey leads next.
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
        <h3 className="text-2xl md:text-3xl text-midnight font-syncopate mb-10 uppercase">Leadership ✦</h3>
        <LeadershipList/>
      </div>

      <FooterBanner />
    </div>
    
    <Footer topRef={"#journeyTop"}/>
  </div>)
};

export default JourneyPage
