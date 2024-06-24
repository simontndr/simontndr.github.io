import { Link } from "react-router-dom";

interface NavbarProps{
  selectedOptions :string[];
  currentPage:string;
}

const Navbar : React.FC<NavbarProps>= ({currentPage,selectedOptions}:NavbarProps) =>{

    const options = selectedOptions;

    return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <Link className="navbar-brand" to="/home">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-options" aria-controls="navbar options" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbar-options">
          <ul className="navbar-nav mr-auto">
            {options.map((option) => <li className={'nav-item'+(option===currentPage?' active':'')} key={option}><Link className='nav-link' to={'/'+option}>{option}</Link></li>)}
          </ul>
        </div>
      </nav>);
}

export default Navbar;