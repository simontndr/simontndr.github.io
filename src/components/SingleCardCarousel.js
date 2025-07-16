// SingleCardCarousel.js
import Card from './Card';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const fixSingleCardLen = (cardsInfo) => {
    while(cardsInfo.length < 2){
        let dataTemp = {
            imageUrl:'https://www.horizonplant.com/wp-content/uploads/2017/05/placeholder-400x400.png',
            imageAlt:'placeholder alt',
            cardTitle:'placeholder title',
            cardSubtitle: 'placeholder subtitle',
            cardText:'placeholder text'
        }
        cardsInfo.push(dataTemp);
    }
}

const SingleCardCarousel = ({cardsInfo}) => {

    fixSingleCardLen(cardsInfo);

    let carouselSlides = [];

    carouselSlides = cardsInfo.map((cardInfo, index) => (
        <div className={'carousel-item ' + (index === 0 ? 'active' : '')} key={index}>
            <div className='single-cards-wrapper flex justify-around items-center h-[600px]'>
                <Card
                imageUrl={cardInfo.imageUrl}
                imageAlt={cardInfo.imageAlt}
                cardTitle={cardInfo.cardTitle}
                cardSubtitle={cardInfo.cardSubtitle}
                cardText={cardInfo.cardText}
                />
            </div>
        </div>
    ))

    return (
        <div id="singleCarousel" className="carousel slide">
            <div className="carousel-inner">
                {carouselSlides}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#singleCarousel" data-bs-slide="prev">
                <ChevronLeftIcon className="h-15 w-15 text-midnight" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#singleCarousel" data-bs-slide="next">
                <ChevronRightIcon className="h-15 w-15 text-midnight" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default SingleCardCarousel;