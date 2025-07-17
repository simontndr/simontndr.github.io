import readMoreSvg from "../assets/read-more.svg";
import './styles/components.css'
import { Link } from "react-router-dom";

const Hero = ({id, readMore, text,bgUrl,imageUrl,textStyle}) => {

    return (
        <div id={id} className="flex flex-col flex-grow items-center justify-center w-full min-h-screen" style={{backgroundImage:`url(${bgUrl})`,backgroundSize:'cover'}} alt="Banner Image">
            <div className="my-auto">
                {//only render if imageUrl is provided
                imageUrl && <img src={imageUrl} alt="simon svg" className="stretchy-image w-[300px] md:w-[400px] lg:w-[500px]" />}
            <h1 className={textStyle}>{text}</h1>
            </div>  
            <Link to={readMore} className="mt-4">
                <img src={readMoreSvg} alt="read more svg" className="bobbing-image mb-20 w-[70px] md:w-[80px]" />
            </Link>
        </div>
    );
}

export default Hero;