import Navbar from "../components/Navbar";
import heroBg from "../assets/transp-home-hero.png";
import simonSvg from "../assets/simon.svg";
import Hero from "../components/Hero";
import MarqueeTag from "../components/MarqueeTag.js";
import CardCarousel from "../components/CardCarousel.js";
import FooterBanner from "../components/FooterBanner.js";
import Footer from "../components/Footer.js";
import kpopImage from '../assets/kpop_platform.png';
import cardamiImage from '../assets/cardami.png';
import chirpImage from '../assets/chirp.png';
import discussionBoardImage from '../assets/discussionBoard.png';
import mbynLabsImage from '../assets/mbynLabs.png';
import dataAnalysis from '../assets/dataAnalysis.png';
import FlippingCard from "../components/FlippingCard.js";
import { Link } from 'react-router-dom';
import '../components/styles/movingBorder.css'

const HomePage = () => {

  const kpopLivestream = {
    imageUrl: kpopImage,
    imageAlt: 'photo of kpop livestream',
    cardTitle: 'Kpop Livestreaming Platform',
    cardSubtitle: '',
    cardText: "Created to make global fan interactions more accessible through AI integration, this project emphasizes an inclusive UI/UX for multilingual audiences. This project taught me about instrumentation and firestore data security.",
    techUsed: ['React', 'Firebase', 'Axios', 'Express.js', 'API Integration',]
  }

  const cardami = {
    imageUrl: cardamiImage,
    readMoreUrl: 'https://devpost.com/software/cardami',
    imageAlt: 'photo of cardami',
    cardTitle: 'Cardami',
    cardSubtitle: 'Best Web3 - SpurHacks 2025',
    cardText: "Developed as a game where users complete unique challenges to collect cards, we sought to tackle the youth loneliness crisis through gamification. From designing the cards through Figma, I learned about brand identity, and visual storytelling.",
    techUsed: ['React', 'Javascript', 'Firebase', 'Tailwind CSS', 'React-Spring',]
  }

  const chirp = {
    imageUrl: chirpImage,
    readMoreUrl: 'https://devpost.com/software/chirp-habit-tracker',
    imageAlt: 'photo of chirp',
    cardTitle: 'Chirp',
    cardSubtitle: 'GDSC Hacks 2025',
    cardText: "Designed as a task tracker, we wanted to find a playful way to encourage healthy lifestyle changes. This project taught me about SVG animation, as I focused my attention on the creation of our platform's mascot.",
    techUsed: ['React', 'Javascript','GSAP','ngrok','Google API'],
  }

  const discussionBoard = {
    imageUrl: discussionBoardImage,
    imageAlt: 'photo of Discussion Board',
    cardTitle: 'Discussion Board',
    cardSubtitle: '',
    cardText: "Exploring social connection, this program allows users to register, create posts, and read entries from others. This project taught me about core object-oriented programming principles such as inheritance and polymorphism.",
    techUsed: ['Java','OOP','Swing']
  }

  const mybnLabsLanding = {
    imageUrl: mbynLabsImage,
    imageAlt: 'photo of mybn Labs Landing Page',
    cardTitle: 'mybn Labs Landing Page',
    cardSubtitle: '',
    cardText: "Designed to introduce company brand and mission, this website focuses on clean visuals, smooth animations, and responsivitity. This project taught me how to use Bootstrap and React to quickly build and iterate upon a production-ready design.",
    techUsed: ['React','TypeScript','CSS','Bootstrap',]
  }

  const statisticsCanada = {
    imageUrl: dataAnalysis,
    imageAlt: 'photo of data analysis',
    cardTitle: 'Statistics Canada Data Analysis',
    cardSubtitle: '',
    cardText: "Exploring correlations of demographic characteristics on employment. This project taught me fundamentals surrounding data cleaning and statistical modelling.",
    techUsed: ['Python','Pandas','MatPlotLib','Seaborn']
  }

  const projectInfo = [kpopLivestream, cardami, chirp, discussionBoard, mybnLabsLanding, statisticsCanada];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center min-w-screen">

    <Hero id="homeTop" readMore="#about" bgUrl={heroBg} imageUrl={simonSvg} text="welcome to simon's corner." textStyle={'font-courier text-md font-bold md:text-xl text-midnight mb-4'}/>
    
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
            <h2 className="font-syncopate font-bold text-2xl md:text-3xl lg:text-4xl text-midnight mb-10 uppercase">
              Web&nbsp;Developer. <br/>
              Business&nbsp;Fan. <br/>
              Human.
            </h2>

            <div className="font-courier text-midnight">

              <p className="mb-6">
                My name is <span className="font-bold">Simon Tenedero</span> - a third-year <span className="font-bold">software engineering co-op </span>student at the <span className="font-bold">University of Guelph</span> passionate about the intersection between technology, business and community building. 
                Guided by these interests, I approach problem-solving through an interdisciplinary lens that emphasizes both innovation and human connection. 
                When I’m not working, I enjoy exploring local trails, meeting new people and expanding my toy collection. 
              </p>
              
              <h4 className="font-syncopate font-bold text-md  text-midnight mt-10 mb-6 uppercase">
              Highlights
              </h4>

              <ul className="list-disc list-outside space-y-1">
                <li>Web App Dev @Kenna (Current) </li>
                <li>Research Assistant @CCMPS (S25)</li>
                <li>Software Design TA @CCMPS (W25)</li>
                <li>Residence Assistant @SHS (F24&W25)</li>
                <li>Best Web3 @Spurhacks&nbsp;'25</li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <MarqueeTag />
    </div>

    <div className="bg-jicama w-full">
      <div id="projects" className="md:py-20 w-full">
        <h3 className="font-syncopate uppercase text-2xl md:text-3xl text-midnight my-20">
          Projects
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