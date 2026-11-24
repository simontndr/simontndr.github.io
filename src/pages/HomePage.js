import Navbar from "../components/Navbar";

import heroBg from "../assets/hero-images/transp-home-hero.webp";
import simonSvg from "../assets/svgs/simon.svg";
import Hero from "../components/Hero";

import FlippingCard from "../components/FlippingCard.js";

import MarqueeTag from "../components/MarqueeTag.js";
import CardCarousel from "../components/CardCarousel.js";

import FooterBanner from "../components/FooterBanner.js";
import Footer from "../components/Footer.js";

import kpopImage from '../assets/project-thumbnails/kpop_platform.webp';
import cardamiImage from '../assets/project-thumbnails/cardami.webp';
import chirpImage from '../assets/project-thumbnails/chirp.webp';
import discussionBoardImage from '../assets/project-thumbnails/discussionBoard.webp';
import mbynLabsImage from '../assets/project-thumbnails/mbynLabs.webp';
import dataAnalysis from '../assets/project-thumbnails/dataAnalysis.webp';

import { Link } from 'react-router-dom';
import '../components/styles/movingBorder.css'

const HomePage = () => {

  const kpopLivestream = {
    imageUrl: kpopImage,
    readMoreUrl: 'https://dl.acm.org/doi/pdf/10.1145/3715070.3747339',
    imageAlt: 'photo of kpop livestream',
    cardTitle: 'Kpop Livestreaming Platform',
    cardSubtitle: 'NSERC USRA recipient',
    cardText: "Explored ways to make global fan interactions more accessible through multilingual features and AI integration. Conducted focus groups to gather requirements that informed platform design.",
    techUsed: ['User Research','AI Integration','Requirements Analysis'],
  }

  const cardami = {
    imageUrl: cardamiImage,
    readMoreUrl: 'https://devpost.com/software/cardami',
    imageAlt: 'photo of cardami',
    cardTitle: 'Cardami',
    cardSubtitle: 'Best Web3 - SpurHacks 2025',
    cardText: "Developed a gamified platform addressing youth loneliness through interactive challenges and collectible cards. Contributed to product design and visual identity that maximized user engagement.",
    techUsed: ['Product Design', 'Figma', 'Gamification',],
  }

  const statisticsCanada = {
    imageUrl: dataAnalysis,
    imageAlt: 'photo of data analysis',
    cardTitle: 'Statistics Canada Data Analysis',
    cardSubtitle: '',
    cardText: "Explored correlations between demographic characteristics and employment. Applied statistical modelling to uncover factors influencing employment outcomes.",
    techUsed: ['Python','Pandas','MatPlotLib',]
  }

  const discussionBoard = {
    imageUrl: discussionBoardImage,
    imageAlt: 'photo of Discussion Board',
    cardTitle: 'Discussion Board',
    cardSubtitle: '',
    cardText: "Created a discussion platform that enables users to share ideas, publish posts, and engage with community contributions. Structured application functionality around object-oriented design principles to support maintainability.",
    techUsed: ['Application Design','Java','OOP']
  }

  const mybnLabsLanding = {
    imageUrl: mbynLabsImage,
    imageAlt: 'photo of mybn Labs Landing Page',
    cardTitle: 'mybn Labs Landing Page',
    cardSubtitle: '',
    cardText: "Translated a company's brand and mission into a cohesive digital presence, emphasizing visual consistency, accessibility, and responsive design. Created marketing assets that focused on memorability.",
    techUsed: ['Brand Identity', 'Web Design', 'UI/UX',]
  }

  const chirp = {
    imageUrl: chirpImage,
    readMoreUrl: 'https://devpost.com/software/chirp-habit-tracker',
    imageAlt: 'photo of chirp',
    cardTitle: 'Chirp',
    cardSubtitle: 'GDSC Hacks 2025',
    cardText: "Designed a playful habit-tracking experience to encourage healthier routines. Contributed to the platform's visual identity through mascot design and animation.",
    techUsed: ['Product Design', 'Figma', 'Visual Storytelling'],
  }

  const projectInfo = [kpopLivestream, cardami, statisticsCanada, discussionBoard, mybnLabsLanding, chirp];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center min-w-screen">

    <Hero id="homeTop" readMore="#about" bgUrl={heroBg} imageUrl={simonSvg}/>
    
    {/* Move navbar outside of padded container */}
    <Navbar />
    
    <div id="about" className="w-full">
      {/* Content container with padding */}
      <div  className="flex flex-wrap justify-center items-center my-20">

        <div className="hero-content-images md:w-[50%] flex flex-col justify-center items-center mb-6 md:mb-0 relative">
          <div className="bg-jicama h-[330px] w-[330px] absolute top-[15%] rounded-full shadow-inner"></div>
          <FlippingCard imageSrc={simonSvg} />

          {/* Contacts */}
          <div className="flex mt-2 rounded-full bg-gray-200 moving-border">
              <Link to={'#connect'} className="bg-dawn m-1 px-4 py-1 text-sm rounded-full text-midnight font-bold uppercase font-syncopate">
                Connect
              </Link>
            </div>
        </div>

        <div className="flex flex-col items-center text-left hero-content-text w-[100%] md:w-[50%] px-8 py-10">
          <div className="lg:w-[80%]">
            <h1 className="font-syncopate font-bold text-2xl lg:text-3xl text-midnight mb-10 uppercase">
              Leading&nbsp;Projects. <br/>
              Analyzing&nbsp;Data. <br/>
              Driving Insights.
            </h1>

            <div className="font-manrope text-midnight">

              <p className="mb-6">
                My name is Simon Tenedero — a Software Engineering student at the <a href="https://www.uoguelph.ca/" className="underline" target="_blank" rel="noreferrer">University of Guelph</a> passionate 
                about using data to empower better decisions for both people and organizations.
              </p>

              <p className="mb-6">
                Outside of work, you'll find me exploring local trails, going for a run or watching cheesy 2000s films.
              </p>

            </div>
          </div>
        </div>
      </div>

      <MarqueeTag />
    </div>

    <div className="bg-jicama w-full">
      <div id="projects" className="md:py-20 w-full">
        <h3 className="font-syncopate uppercase text-2xl md:text-3xl text-midnight my-20">
          Projects ✦
        </h3>
        <CardCarousel cardsInfo={projectInfo} />
      </div>

      <FooterBanner />
    </div>
    

    <Footer topRef={"/#homeTop"}/>

    </div>
  ); 
}

export default HomePage;