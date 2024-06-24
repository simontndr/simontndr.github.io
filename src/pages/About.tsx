import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";

interface aboutProps{
    menuOptions : string[];
    currentPage : string;
}

const About:React.FC<aboutProps> = ({menuOptions,currentPage}:aboutProps) =>{

    const navStart=0;
    const mainStart=navStart+0.1;
    const aboutTextStart= mainStart+1;
    const footerStart = aboutTextStart+1.75;
    const pageEnd = footerStart+0.5;

    const totalDuration = pageEnd - navStart;

    return(
    
    <Parallax pages={totalDuration} id='about-container'>
        <ParallaxLayer offset={navStart} speed={1} className='parallax-header'>
            <Navbar currentPage={currentPage} selectedOptions={menuOptions}/>
        </ParallaxLayer>
        <ParallaxLayer offset={mainStart} speed={0.5} id='about-banner-layer' factor={2}>
            <div id='about-banner'></div>
        </ParallaxLayer>
        <ParallaxLayer offset={mainStart+0.6} speed={0.75}>
            <h2>about</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={aboutTextStart} speed={1.5} factor={1.5}>
            <article id='about-content'>
                <section>
                    <p>
                            Hey there!
                        </p>
                        <p>
                            I'm Simon Tenedero, and welcome to my personal portfolio.
                            As a dedicated student pursuing a degree in Software Engineering, 
                            I’m eager to gain more experience the web-development industry. 
                            With a passion for creative problem-solving and design, I have a unique perspective to bring to the table.
                        </p>
                        <p>
                            What makes me stand out from other candidates is my well-rounded nature. 
                            During my time at college, I’ve succeeded in several programming and mathematics courses, 
                            whilst simultaneously balancing the responsibilities as a university club Co-President, Software Engineering Intern, and Peer Helper. 
                            These experiences have not only contributed to rich technical abilities, 
                            but soft-skills as well, such as leadership and time-management. 
                            Feel free to explore this website to see what I have to offer.
                            If you think I would make a good fit for your team or project, reach out! 
                        </p>
                        <p>
                            Hope to hear from you soon,<br/>
                            Simon
                        </p>
                </section>
                <figure>
                    <picture>
                        <img srcSet='./src/images/AboutDrawing-400.png 400w, ./src/images/AboutDrawing-480.png 480w' sizes='(max-width: 1050px) 350px, 480px'src='./src/images/AboutDrawing-480.png' alt='image of simon tenedero'/>
                    </picture>
                    <figcaption>This is a photo of me!</figcaption>
                </figure>
            </article>
        </ParallaxLayer>
        <ParallaxLayer offset={footerStart} id='about-footer-layer'>
            <Footer/>
        </ParallaxLayer>
    </Parallax>)
}

export default About;