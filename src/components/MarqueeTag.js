import { Fragment } from "react";
import Marquee from "react-fast-marquee";
import marqueeStar from "../assets/marqueeStar.svg";

// Single source of truth for the marquee copy (easy to translate later).
const WORDS = ["Motivated", "Strategic", "Collaborative", "Problem-Solver", "Design-Thinker"];

// The word list is repeated so the scrolling strip always fills the width.
// Only the first pass is exposed to assistive tech; the rest are decorative.
const REPEATS = 3;

const MarqueeTag = () => {

  return (
    <div className="marquee border-b-2 border-t-2 border-midnight pb-0.5">
      <Marquee gradient={false} speed={50}>
        <div className="marquee__group">
          {Array.from({ length: REPEATS }).flatMap((_, rep) =>
            WORDS.map((word) => (
              <Fragment key={`${rep}-${word}`}>
                <span className="mx-1.5 font-syncopate font-bold text-sm text-midnight uppercase" aria-hidden={rep > 0 || undefined}>{word}</span>
                <img src={marqueeStar} alt="" aria-hidden={rep > 0 || undefined} className="inline-block w-4 h-4" />
              </Fragment>
            ))
          )}
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeTag;