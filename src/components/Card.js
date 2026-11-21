import './styles/card.css';

const Card = ({ imageUrl, readMoreUrl, imageAlt, cardTitle, cardSubtitle, cardText, techUsed }) => {
    const image = (
        <img
            src={imageUrl}
            alt={imageAlt}
            draggable={false}
            className="card-img-top block border-1 border-midnight rounded-1"
        />
    );

    return (
        <div className="card custom-card w-[300px] h-[520px] p-2 bg-dawn drop-shadow-lg text-midnight text-left">
            <p className="card-title font-syncopate font-bold uppercase text-sm">{cardTitle}</p>
            <p className="card-subtitle mb-2 text-muted font-syncopate uppercase text-sm">{cardSubtitle}</p>

            {readMoreUrl ? (
                <a
                    href={readMoreUrl}
                    className="image-link mb-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${cardTitle} (opens in a new tab)`}
                >
                    {image}
                    <span className="image-link-badge font-syncopate uppercase text-xs" aria-hidden="true">
                        View &#8599;&#xFE0E;
                    </span>
                </a>
            ) : (
                <div className="mb-3">{image}</div>
            )}

            <div>
                <p className="card-text font-manrope text-sm">{cardText}</p>
            </div>
            <div className="languages-used flex items-center font-manrope flex-wrap gap-2 mt-2">
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