import logo from '../assets/logo.png';
import simonSvg from '../assets/simon.svg';
import BackUpSvg from '../assets/back-up.svg';
import './styles/components.css'
import { Link } from 'react-router-dom';

const Footer = ({topRef}) => {

return (

<footer id="connect" className="w-full bg-gradient-to-b from-dawn to-sky px-8 pt-20 pb-5 flex flex-col items-center justify-between border-t border-midnight">

    {/* navigation + svg logo */}
    <div className="flex w-full flex-wrap mb-20 items-start space-y-8 justify-around">

        {/* Name and navigation - appears second on desktop */}
        <div className="flex flex-col space-y-6">

            {/* logo name */}
            <Link to="/"><img src={logo} alt="logo" className="w-[150px] md:w-[200px]"/></Link>

            <nav className="flex flex-col items-start space-y-3">
            <Link to="/#about" className="text-midnight font-syncopate uppercase font-semibold text-lg lg:text-2xl hover:underline">
                About
            </Link>
            <Link to="/#projects" className="text-midnight font-syncopate uppercase font-semibold text-lg lg:text-2xl hover:underline">
                Projects
            </Link>
            <Link to="/journey/#journeyTop" className="text-midnight font-syncopate uppercase font-semibold text-lg lg:text-2xl hover:underline">
                Journey
            </Link>
            </nav>

            {/* Contact links */}
            <div className="flex flex-wrap gap-4 font-courier">
            <div className="text-midnight font-courier">
                stenedero@uoguelph.ca
            </div>
            <Link to="https://www.linkedin.com/in/simontenedero/" target="_blank" rel="noopener noreferrer" className="text-midnight font-courier underline hover:font-bold">
                LinkedIn
            </Link>
            <Link to="https://github.com/simontndr" target="_blank" rel="noopener noreferrer" className="text-midnight font-courier underline hover:font-bold">
                GitHub
            </Link>
            </div>
        </div>

        <img src={simonSvg} alt="Simon SVG" className="w-[300px] md:w-[400px] lg:w-[500px] "/> 
        
    </div>

    <Link to={topRef} className="mb-4">
        <img src={BackUpSvg} alt="back up arrow" className="bobbing-image mb-10 w-[60px] md:w-[70px]"/>
    </Link>

    {/* Bottom section - Copyright */}
    <div className="text-center text-xs text-midnight font-courier">
    © 2025 simon tenedero (made with care.)
    </div>

</footer>
);
};

export default Footer;