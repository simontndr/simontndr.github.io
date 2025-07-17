import Marquee from "react-fast-marquee";
import marqueeStar from "../assets/marqueeStar.svg";

const MarqueeTag = () => {

  return (
    <div className="marquee border-b-2 border-t-2 border-midnight pb-0.5">
      <Marquee gradient={false} speed={50}>
        <div className="marquee__group">
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase">Motivated </span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase">Strategic</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase">Collaborative</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase">Problem-Solver</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase">Design-Thinker</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Motivated</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Strategic</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Collaborative</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Problem-Solver</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Design-Thinker</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Motivated</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Strategic</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Collaborative</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Problem-Solver</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
          <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase aria-hidden">Design-Thinker</span>
          <img src={marqueeStar} alt="star" className="inline-block w-4 h-4" />
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeTag;