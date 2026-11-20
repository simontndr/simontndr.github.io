import './styles/card.css';

// Original 300x550 size. The carousel positions it (no horizontal margin needed any more).
const Card = ({ imageUrl, readMoreUrl, imageAlt, cardTitle, cardSubtitle, cardText, techUsed }) => {
    return (
        <div className="card custom-card w-[300px] h-[550px] p-2 bg-dawn drop-shadow-lg text-midnight text-left">
            <p className="card-title font-syncopate font-bold uppercase text-sm">{cardTitle}</p>
            <p className="card-subtitle mb-2 text-muted font-syncopate uppercase text-sm">{cardSubtitle}</p>
            <a href={readMoreUrl} className="mb-3" target="_blank" rel="noopener noreferrer">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    decoding="async"
                    loading="lazy"
                    draggable={false}
                    className="card-img-top border-1 border-midnight rounded-1"
                />
            </a>
            <div>
                <p className="card-text font-courier text-sm">{cardText}</p>
            </div>
            <div className="languages-used flex items-center flex-wrap gap-2 mt-2">
                {techUsed && techUsed.map((tech) => (
                    <div key={tech} className={`${tech} bg-asian-pear border-1 border-midnight rounded-full px-2 py-1 text-sm`}>
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;