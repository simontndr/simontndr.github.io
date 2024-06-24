import { TextGridProps } from "./Types";

const TextGrid : React.FC<TextGridProps> = ({textCardInfos}:TextGridProps) =>{
    
    const cards = textCardInfos.map(
        (textCardInfo)=>{
            return(
                <div key={textCardInfo.cardTitle} className="col-12 col-sm-6 col-xl-3">
                    <article className='text-card-content'>
                    <h4>{textCardInfo.cardTitle}</h4>
                    <span>{textCardInfo.cardSubtitle}<br/>{textCardInfo.cardDate}</span>
                    <hr/>
                    <p>{textCardInfo.cardText}</p>
                    </article>
                </div>);
        })

    return (
        <section id='container'>
            <div className='row'>
                {cards}
            </div>
        </section>
    );
}

export default TextGrid;