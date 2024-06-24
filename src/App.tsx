import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import NoPage from './pages/NoPage'
import { TextCardInfo } from './components/Types'

function App() {

  const menuOptions = ['about','experience','projects']

  /*initializing experiences*/
  const expSeng : TextCardInfo = {
    cardTitle:'Software Engineering Intern',
    cardSubtitle:'MBYN Labs inc.',
    cardDate: '(2024 — present)',
    cardText:"Working independently to develop a responsive company landing page that meets the Founder's specifications, employing the React Library and additional frameworks such as Bootstrap, and React-spring. Developing strong technical abilities."
  };

  const expRes : TextCardInfo = {
    cardTitle:'Resident Assistant',
    cardSubtitle:'Residence Life Staff Team',
    cardDate: '(2024 — present)',
    cardText:"Role will begin in August 2024 "
  };

  const expCoPres : TextCardInfo = {
    cardTitle:'Co-President',
    cardSubtitle:'Filipino Student Association',
    cardDate: '(2024 — present)',
    cardText:'Responsible for managing an executive team in organizing events, and overseeing the corresponding logistics. Currently in the process of planning 2024-2025 events, one of which being for START International week. Developing strong leadership skills.'
  };

  const expTutor : TextCardInfo = {
    cardTitle:'Math Clinic Tutor',
    cardSubtitle:'St. Aloysius Gonzaga S.S.',
    cardDate: '(2022 - 2023)',
    cardText:'Instructed numerous students ranging from grades 9-11 on several math concepts, including practical applications of derivatives. Developed a robust education-oriented toolset, adapting teaching techniques to suit diverse student needs'
  };

  const expPeer : TextCardInfo = {
    cardTitle:'Peer Helper',
    cardSubtitle: 'Cultural Diversity Services Office',
    cardDate: '(2024 — present)',
    cardText:'Collaborating with a team to co-ordinate events that foster and promote cultural awareness and inclusion. Developing event-planning skills'
  };

  const experiences : TextCardInfo[] = [expSeng,expTutor,expCoPres,expPeer]

  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home menuOptions={menuOptions} currentPage='home'/>}/>
      <Route path='/home' element={<Home menuOptions={menuOptions} currentPage='home'/>}/>
      <Route path='/about' element={<About menuOptions={menuOptions} currentPage='about'/>}/>
      <Route path='/experience' element={<Experience menuOptions={menuOptions} currentPage='experience' textCardInfos={experiences}/>}/>
      <Route path='/projects' element={<Projects menuOptions={menuOptions} currentPage='projects'/>}/>
      <Route path='/*' element={<NoPage/>}/>
    </Routes>
  </BrowserRouter>)
}

export default App
