const Footer : React.FC = () =>{
    return (
    <footer className="footer">
        <h2>Connect</h2>
        <ul className="contact-info" id="contact-info">
            <li className='contact-info-items'><img src='https://cdn-icons-png.flaticon.com/256/174/174857.png' alt='linkedin icon' width='30'/><a href='https://www.linkedin.com/in/simon-tenedero-066079292/'>linkedin/in/simontenedero</a></li>
            <li className='contact-info-items'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github icon' width='30'/><a href='https://github.com/simontndr'></a>github.com/simontndr</li>
            <li className='contact-info-items'><img src='https://cdn-icons-png.freepik.com/256/80/80599.png?semt=ais_hybrid' alt='mail icon' width='30'/>tenederosimon@gmail.com</li>
        </ul>
    </footer>
    );
}

export default Footer;