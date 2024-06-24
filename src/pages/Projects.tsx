import Navbar from "../components/Navbar";

import { PageProps } from "../components/Types";

const Projects : React.FC<PageProps> = ({menuOptions,currentPage}:PageProps) =>{
    return(
        
    <div id='projects-container'>
    <Navbar currentPage={currentPage} selectedOptions={menuOptions}/>
    <div>projects</div>
    </div>)
}

export default Projects;