import Card from './Card';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const fixCardLen = (cardsInfo) => {
    while(cardsInfo.length % 3 !== 0 || cardsInfo.length < 6){
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

const TripleCardCarousel = ({cardsInfo}) => {
    fixCardLen(cardsInfo);

    let carouselSlides = [];
    let addedActiveClass = false;

    for(let i = 3; i <= cardsInfo.length; i += 3){
        carouselSlides.push(
            <div className={'carousel-item ' + (!addedActiveClass ? 'active' : '')} key={i}>
                <div className='container-fluid flex justify-around items-center h-[600px]'>
                    <div className='row'>
                        {cardsInfo.slice(i-3, i).map((cardInfo, index) => (
                            <div className='col-md-4' key={`${i}-${index}`}>
                                <Card
                                    imageUrl={cardInfo.imageUrl}
                                    imageAlt={cardInfo.imageAlt}
                                    cardTitle={cardInfo.cardTitle}
                                    cardSubtitle={cardInfo.cardSubtitle}
                                    cardText={cardInfo.cardText}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
        addedActiveClass = true;
    }

    return (
        <div id="tripleCarousel" className="carousel slide">
            <div className="carousel-inner">
                {carouselSlides}
            </div>
            {/* Removed 'hidden' class */}
            <button className="carousel-control-prev" type="button" data-bs-target="#tripleCarousel" data-bs-slide="prev">
                <ChevronLeftIcon className="h-14 w-14 text-midnight" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#tripleCarousel" data-bs-slide="next">
                <ChevronRightIcon className="h-14 w-14 text-midnight" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default TripleCardCarousel;