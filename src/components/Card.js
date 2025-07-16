import './styles/card.css';

const Card = ({imageUrl, imageAlt, cardTitle, cardSubtitle, cardText}) => {
    return (
        <div className="card custom-card w-[300px] h-[525px] mx-4 p-2 bg-dawn drop-shadow-lg text-midnight text-left">
            <p className="card-title font-syncopate font-bold uppercase text-sm">{cardTitle}</p>
            <p className="card-subtitle mb-2 text-muted font-syncopate uppercase text-sm">{cardSubtitle}</p>
            <img src={imageUrl} className="card-img-top border border-midnight mb-3 rounded-1" alt={imageAlt}/>
            <div>
                <p className="card-text font-courier text-sm">{cardText}</p>
                <p className="languages-used"></p>
            </div>
        </div>
    );
}

export default Card;