import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Parallax,ParallaxLayer} from "@react-spring/parallax";
import { PageProps } from "../components/Types";
import { useState,useEffect} from "react";

const Home : React.FC<PageProps> = ({menuOptions,currentPage}:PageProps) =>{

    const [fullTitleVisibility,setFullTitleVisibility] = useState(false);

    const navStart=0;
    const mainStart=navStart+0.5;
    const footerStart= mainStart+1;
    const pageEnd = footerStart+0.5;

    const totalDuration = pageEnd - navStart;

    console.log(window.innerWidth);

    //this function is called within useEffect, responsible for updating the useState variable
    const handleResize = () => {
        if (window.innerWidth > 450) {
            setFullTitleVisibility(true);
        } else {
            setFullTitleVisibility(false);
        }
    };

    /* UseEffect explained!
    1. Home page renders
    2. useEffect is ran once (because no variables in dependancy arrray)
    3. apply handleResize() , to determine what title to display
    4. resize event listener is applied to the window from within useEffect
    5. The handleResize function will only trigger when the window is resized
    6. If the state of fullTitleVisibility is changed to a new value by handleResize(), this counts as a re-render by react!
    7. Before re-render the clean up function is called, removing the window event lister
    8. the cycle repeats!
    */

    //rerendering on page resizing
    useEffect(() => {

        handleResize()
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        
    <Parallax pages={totalDuration} id='home-container'>
        <ParallaxLayer offset={navStart} speed={1} className='parallax-header'>
            <Navbar currentPage={currentPage} selectedOptions={menuOptions}/>
        </ParallaxLayer>
        <ParallaxLayer offset={mainStart} speed={0.5}>
                {fullTitleVisibility?<h1>Simon<br/>Tenedero</h1>:<h1>Simon<br/>Tene • dero</h1>}
                <div id='home-subtitle'>Your next Front-End Web Developer.
                <img src='https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg' alt='react-logo' width='150px'/>
                </div>
        </ParallaxLayer>
        <ParallaxLayer offset={footerStart} speed={0.5} id='parallax-footer'>
            <Footer/>
        </ParallaxLayer>
    </Parallax>)
}

export default Home;