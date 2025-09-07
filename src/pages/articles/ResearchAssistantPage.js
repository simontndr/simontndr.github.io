import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ResearchBg from '../../assets/reynoldsBlurTransp.png';
import MarqueeTag from '../../components/MarqueeTag';
import FooterBanner from '../../components/FooterBanner';

const ResearchAssistantPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />

    <Hero id="researchTop" readMore="#abstract" bgUrl={ResearchBg} imageUrl={""} text="My Experience as a Research Assistant at CCMPS" textStyle={'max-w-5xl text-4xl md:text-5xl font-bold text-midnight font-syncopate'} animate={false}/>

    {/* Content */}
    <div className="mx-auto font-courier">

      {/* Abstract/Introduction */}
      <section className="flex justify-center px-10 py-20">
        <div className="max-w-3xl">
          <h2 id="abstract" className="text-2xl md:text-3xl font-bold text-midnight font-syncopate uppercase mb-10">Abstract</h2>
          <p className="text-gray-700">
            This report details my experience from May to August 2025 as a Research Assistant at the 
            College of Engineering and Physical Sciences, under the Collaborative Systems Laboratory. 
            Diving into the world of Human Computer Interaction, I not only developed my 
            technical ability, but gained an understanding of requirements essential to conducting 
            secure, ethical academic research.
          </p>
        </div>
      </section>

      {/* Information about the Employer */}
      <section className="flex flex-col items-center bg-jicama">
        <MarqueeTag/>

        <div className="max-w-4xl mx-10 my-20">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">About CCMPS</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              <a href="https://www.uoguelph.ca/ccmps" className="underline" target="_blank" rel="noreferrer">The College of Computational, Mathematical, and Physical Sciences (CCMPS)</a> is the newest 
              of eight colleges at the University of Guelph. Formed Summer 2025 as the result of the 
              bifurcation of the College of Engineering and Physical Sciences (CEPS), the institution 
              now comprises four main departments: Computer Science, Mathematics/Statistics, Physics, 
              and Chemistry.
            </p>
            <p>
              My role specifically belonged to a research unit affiliated with CCMPS: the <a href="https://csl.uwaterloo.ca/" className="underline" target="_blank" rel="noreferrer">Collaborative Systems Laboratory (CSL)</a>, which is headed by Dr. Stacey Scott - 
              the current interim dean of CCMPS. CSL itself was founded in 2007 at the University of 
              Waterloo and specializes in human-centred design of emerging technology, with the goal 
              to enhance collaborative and social activity.
            </p>
            <p>
              Some prominent research projects include the development of novel UI technology to support 
              face-to-face collaboration through the use of large-format surface computing systems and 
              AI-powered summaries for livestream chats. Ultimately, CSL is actively contributing to 
              the expansion of knowledge within the field of Human Computer Interaction (HCI), and more 
              recently, Artificial Intelligence.
            </p>
          </div>
        </div>

        <MarqueeTag/>
      </section>

      {/* Job Description */}
      <section className="mb-12 flex justify-center px-10 py-20">
        <div className="max-w-4xl flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">A glimpse into my role</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              As a Research Assistant at the Collaborative Systems Laboratory, my main responsibility 
              was engineering a web-based livestreaming platform intended to facilitate user studies 
              for academic publication. My ancillary tasks also included moderating focus groups to 
              collect data for ongoing research and monitoring team progress with project management 
              tools such as Trello.
            </p>
            <p>
              Building upon an existing codebase inherited by a previous Research Assistant called for 
              adaptability, as I taught myself unfamiliar tools part of the existing tech stack. I also 
              had to read through documentation and system diagrams to understand the existing architecture 
              and areas which required further development.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mt-10 max-w-xl">
            <h4 className="text-lg font-semibold text-midnight mb-3 uppercase">Highlight of Responsibilities</h4>
            <ul className="pl-4 list-disc list-outside space-y-2 text-gray-700 text-left">
              <li>Redesigning the existing UI of the platform to be more user-friendly and accessible</li>
              <li>Creating a modular interface that dynamically renders components based on assigned user permissions</li>
              <li>Restructuring the Firestore database to accommodate for implemented security rules, preventing unauthorized access to sensitive data</li>
              <li>Integrating instrumentation into the platform to track user activity</li>
              <li>Facilitating live demos during focus groups, and recording participant responses for an ongoing academic study</li>
              <li>Creating documentation for future developers of the platform</li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-midnight mb-3 uppercase">Technology Stack</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['React', 'JavaScript', 'Firebase', 'Cloud Firestore', 'Cloud Storage', 'Cloud Functions', 'Security Rules', 'YouTube API', 'Gemini API', 'Docker', 'Trello', 'Figma'].map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-4xl">
            <h4 className="text-lg font-semibold text-midnight mb-3 uppercase">An interesting thing I learned</h4>
            <p className="text-gray-700">
              One of the things I appreciated most about this role was that it provided me an opportunity 
              to explore the world of academia. Working alongside talented researchers allowed me to get 
              an in-depth understanding of the extensive effort that goes into conducting experiments and 
              maintaining the integrity of results. Given that much of CSL's research falls within the 
              domain of HCI, conducting effective studies often relies on the participation of humans. 
              This essentially implies a higher standard which must be followed, as researchers must consider 
              the ethics of their experiments as outlined by the Research Ethics Board (REB).
            </p>
            <p className="text-gray-700 mt-4">
              Moreover, working on campus allowed me to meet many graduate students, and understand the 
              process of obtaining a Masters/Doctorate. Candidates must identify a research gap, come up 
              with their own thesis, and formulate associated questions they seek to answer, and finally - 
              figure out how they will answer these questions. It is an intensive process, which made me 
              truly admire the work that is being done by the School of Computer Science.
            </p>
          </div>

         </div>
        </section>

      {/* Goals and Learning Outcomes */}
      <section className="mb-12 flex flex-col items-center bg-jicama">
        <MarqueeTag/>

        <div className="max-w-2xl mx-10 my-20">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">Goals & Learning Outcomes</h3>
          
          <div className="space-y-10">
            {/* Goal 1 */}
            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                Increase Technological Literacy
              </h4>
              <p className="text-gray-700">
                From intentionally allocating time each week to exploring documentation and video tutorials, 
                I gained more confidence in my ability to code independently without constant intervention 
                from teammates. I learned how to learn through active recall and teaching team members, 
                which forces you to simplify and focus on key concepts.
              </p>
            </div>

            {/* Goal 2 */}
            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                Strengthen UI/UX Design Intuition
              </h4>
              <p className="text-gray-700">
                Through consistent observation and reflection on interface patterns in popular web 
                applications, I gained extensive exposure to common UI/UX principles. I realized that 
                great UI/UX design is often taken for granted because well-thought-out interfaces are 
                intuitive. However, UI/UX is ultimately human-centred, and real validation comes from 
                user feedback during testing.
              </p>
            </div>

            {/* Goal 3 */}
            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                Enhance Leadership and Collaboration
              </h4>
              <p className="text-gray-700">
                As someone naturally on the more introverted side, having a quantifiable action plan 
                helped me contribute meaningfully to project discussions. By preparing notes in advance 
                and contributing a minimum of two suggestions at weekly meetings, I felt more integrated 
                into the team and learned that pushing yourself always leads to growth.
              </p>
            </div>
          </div>
        </div>

        <MarqueeTag/>
      </section>

      {/* Acknowledgments */}
      <section className="flex justify-center px-10 py-20">
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">Acknowledgments</h3>
          <div className="space-y-4 text-gray-700">
            
            <div className="space-y-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  First and foremost I want to thank my supervisor, <strong>Dr. Stacey Scott</strong> for seeing my potential as a developer, and trusting me to work on her ongoing passion project. 
                  Her wisdom and knowledge as a researcher continues to astound me, and grounded the entire team. 
                  Her constructive feedback always pushed me to grow, and is what encouraged me to develop features I thought previously too difficult to implement.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  Moreover, I want to express how much I appreciated working under Dr. Stacey Scott’s PhD student, <strong>Shan Yun Kuo</strong>, who acted as an additional mentor for this project. 
                  Understanding my deep love for business, she took the time to share her lived experience working as a Marketing Manager, 
                  which I found fascinating and extremely helpful. 
                  Beyond that, she provided strong strategic vision and encouragement, 
                  which effectively chartered the direction of the project. 
                  With her leadership, I was able to understand the bigger picture for my work and its impact.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  Last but not least, I want to thank the developers who I worked alongside on this project: <strong>Paola Bustos</strong> and <strong>Yevheniia Bazhmaieva</strong>. Coming from across the globe (Mexico and Ukraine respectively), they are not only some of the strongest coders I’ve ever met, but also some of the closest coworkers I have ever had. From eating lunch together in the UC, to sharing our different cultures with each other, they showed me what it means to be a team player. I will truly miss seeing them in the office every day, and wish them the best with their future endeavours in their home countries.
                </p>
              </div>

              <p>
                Now wrapping up my time at the Collaborative Systems Laboratory, 
                I am nothing but grateful for this opportunity which allowed me to grow, learn, and make lifelong connections. 
                I saw first-hand how you can accomplish far more as a team, rather than working alone - and I will forever be in debt to those who took a chance in collaborating with me.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>

    <FooterBanner/>
    <Footer topRef={"#researchTop"}/>
  </div>
);

export default ResearchAssistantPage;