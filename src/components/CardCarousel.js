import { useState, useEffect } from 'react';
import TripleCardCarousel from './TripleCardCarousel';
import SingleCardCarousel from './SingleCardCarousel';

const CardCarousel = ({ cardsInfo }) => {
    const [fullCarouselVisibility, setFullCarouselVisibility] = useState(false);

    const handleResize = () => {
        if (window.innerWidth > 1010) {
            setFullCarouselVisibility(true);
        } else {
            setFullCarouselVisibility(false);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Return the appropriate carousel based on screen size
    return (
        <div className="w-full flex-shrink-0">
            {fullCarouselVisibility ? console.log('Full carousel visible') : console.log('Single carousel visible')}
            {fullCarouselVisibility ?  <TripleCardCarousel cardsInfo={cardsInfo} /> : 
            <SingleCardCarousel cardsInfo={cardsInfo} /> }
        </div>
        
    );
}

export default CardCarousel;