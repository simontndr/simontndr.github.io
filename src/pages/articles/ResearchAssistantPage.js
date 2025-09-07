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
              Building upon an existing codebase inherited from a previous researcher called for 
              adaptability and persistence, as I taught myself unfamiliar tools that were part of the existing tech stack. I also 
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
              truly admire the work that is being done at the School of Computer Science.
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
                I gained more confidence in my ability to code independently without constant intervention from teammates. 
                Although I naturally continued to seek feedback, as the term progressed, 
                I became more reliable - given team members felt more at ease designating tasks for me to complete on my own. 
                Moreover, from repeatedly learning new techniques and strategies related to these tools, 
                I learned how to learn! Some of the tips I found most helpful when digesting new knowledge included active recall 
                (i.e. trying to summarize new knowledge from memory through writing it as notes or reciting it out loud), 
                and teaching team members - which forces you to simplify and focus on the key concepts. 
                Relating to the latter strategy, I had a lot of opportunity to do so during our Friday meetings! 
                From routinely sharing these takeaways, I not only reinforced my own learning, but helped everyone on our team increase their knowledge as well.
              </p>
            </div>

            {/* Goal 2 */}
            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                Strengthen UI/UX Design Intuition
              </h4>
              <p className="text-gray-700">
                Through my action plan, I was able to gain extensive exposure to common UI/UX principles and consequently apply it 
                to the ongoing research project for this role. This learning goal really pushed my analytical skills, 
                as I intentionally slowed down to observe and reflect on what makes these popular websites so successful. 
                I came to realize that great UI/UX design is often taken for granted! 
                This is because well-thought-out interfaces are intuitive - you don’t need to think when using them; 
                it almost becomes second nature. However, something I also came to realize is that although these design principles are extremely helpful and provide a strong framework, 
                UI/UX is ultimately human-centred. As much as you can ensure your interface adheres to these principles, 
                it's not until you get in front of users that you’ll truly know whether your design is effective. 
                This is something I learned first hand from conducting focus groups with live demos, and I now know that designing interfaces is a combination of robust knowledge of principles and iteration upon user feedback.
              </p>
            </div>

            {/* Goal 3 */}
            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                Enhance Leadership and Collaboration
              </h4>
              <p className="text-gray-700">
                Thanks to this goal, I was able to really push myself in developing my leadership and collaboration skills! 
                As someone who is naturally on the more introverted side of the spectrum, 
                having this quantifiable and specific action plan ensured that I knew exactly what I needed to do, 
                and how to accomplish it. From contributing a minimum of two suggestions at these weekly meetings, 
                I felt more integrated into the team, and as though I was taking the initiative in steering the direction of this research project. 
                Something I found really helpful was preparing notes in advance of meetings, 
                so that I could see exactly what I wanted to propose and discuss with the team, 
                rather than having to come up with ideas on the spot. Ultimately, I came to see that I’m capable of doing difficult things if I set my mind to it - and that pushing yourself will always lead to growth.
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