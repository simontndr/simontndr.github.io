import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import { PageProps, TextGridProps} from "../components/Types";
import TextGrid from "../components/TextGrid";

interface ExperienceProps extends PageProps,TextGridProps{

}

const Experience : React.FC<ExperienceProps> = ({menuOptions,currentPage,textCardInfos}:ExperienceProps) =>{

    const navStart=0;
    const bgStart=navStart+0.2;
    const experienceTextStart=bgStart+0.5;
    const workExpStart = experienceTextStart + 0.5;
    const bottomStart = workExpStart+2;
    const footerStart = bottomStart+1.5;
    const pageEnd = footerStart+0.5;

    const totalDuration = pageEnd - navStart;

    return(
        <Parallax pages={totalDuration}>
            <ParallaxLayer className='parallax-header' speed={1}>
                <Navbar currentPage={currentPage} selectedOptions={menuOptions}/>
            </ParallaxLayer>
            <ParallaxLayer offset={experienceTextStart} speed={0.75}>
                <h2>Experience</h2>
            </ParallaxLayer>
            <ParallaxLayer offset={workExpStart}  speed={1.25} id='work-exp-title-layer'>
                <h3>Work &<br/>Volunteer Experience</h3>
            </ParallaxLayer>
            <ParallaxLayer offset={workExpStart + 0.4} speed={1}>
                <TextGrid textCardInfos={textCardInfos}/>
            </ParallaxLayer>
            <ParallaxLayer id='experience-bottom-layer' offset={bottomStart} speed={0.75} factor={2}>
                <div id='experience-bottom'>
                    <article id='education'>
                        <h3>Education</h3>
                        <h4>Bachelor of Computing,<br/>Honours Software Engineering Co-op</h4>
                        <p>University of Guelph, 2023-2028</p>
                    </article>
                    <article id='skills'>
                        <h3>Skills</h3>
                        <h4>Technical</h4>
                        <ul>
                            <li>React.js</li>
                            <li>Typescript</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>HTMl5</li>
                        </ul>
                        <h4>Software</h4>
                        <ul>
                            <li>Microsoft Teams</li>
                            <li>Microsoft Office Suite</li>
                            <li>Figma</li>
                            <li>Canva</li>
                        </ul>
                        <h4>Languages</h4>
                        <ul>
                            <li>French</li>
                            <li>Tagalog</li>
                        </ul>
                    </article>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={bgStart} id='experience-bg-layer' factor={6} speed={0.5}>
                <div id='experience-bg'>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={footerStart}>
                <Footer/>
            </ParallaxLayer>

        </Parallax>)
}

export default Experience;