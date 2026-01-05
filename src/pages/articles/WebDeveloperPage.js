import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import KennaBg from '../../assets/kennaBlurTransp.png';
import MarqueeTag from '../../components/MarqueeTag';
import FooterBanner from '../../components/FooterBanner';

const WebDeveloperPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />

    <Hero
      id="webDevTop"
      readMore="#abstract"
      bgUrl={KennaBg}
      imageUrl={""}
      text="My Experience as a Web Application Developer at Kenna"
      textStyle="max-w-5xl text-4xl md:text-5xl font-bold text-midnight font-syncopate"
      animate={false}
    />

    {/* Content */}
    <div className="mx-auto font-courier">

      {/* Abstract / Introduction */}
      <section className="flex justify-center px-10 py-20">
        <div className="max-w-3xl">
          <h2
            id="abstract"
            className="text-2xl md:text-3xl font-bold text-midnight font-syncopate uppercase mb-10"
          >
            Abstract
          </h2>
          <p className="text-gray-700">
            This report details my experience from September to December 2025 as a
            Web Application Developer at Kenna in Mississauga, Ontario. During this
            work term, I contributed to enterprise-facing web applications
            supporting BASF Agricultural Solutions, translating evolving business
            requirements into reliable, user-focused features. Through this role,
            I strengthened my technical foundations in modern web development while
            gaining exposure to professional software delivery, quality assurance,
            and cross-functional collaboration.
          </p>
        </div>
      </section>

      {/* Information about the Employer */}
      <section className="flex flex-col items-center bg-jicama">
        <MarqueeTag />

        <div className="max-w-4xl mx-10 my-20">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">
            About Kenna
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>
              Founded in 1985 as AppliCan Marketing, <a href="https://www.kenna.ca" className="underline" target="_blank" rel="noreferrer">Kenna</a> was rebranded in 2002 and
              has since grown into a technology company specializing in customer
              engagement, CRM, and data-driven marketing solutions. Over three
              decades, Kenna’s evolution has closely mirrored the advancement of
              CRM technologies, positioning the company as an agent of change for
              organizations navigating major digital inflection points.
            </p>

            <p>
              Kenna has supported a range of globally recognized clients, including
              Sonos, Mercedes-Benz, and Coca-Cola, by delivering tools that enable
              more effective customer engagement and business decision-making. The
              company operates at the intersection of applied computing science,
              enterprise web development, and analytics, with a strong emphasis on
              usability, scalability, and reliability.
            </p>

            <p>
              Kenna’s head office is located in downtown Mississauga, Ontario,
              directly across from Square One Shopping Centre. The organization
              fosters a collaborative and welcoming workplace culture supported by
              rigorous quality assurance practices and close collaboration between
              developers and account managers who represent client needs. In
              addition, Kenna places strong value on its social culture, creating
              opportunities for coworkers to build meaningful connections that
              strengthen teamwork and day-to-day collaboration.
            </p>
          </div>
        </div>

        <MarqueeTag />
      </section>

      {/* Job Description */}
      <section className="mb-12 flex justify-center px-10 py-20">
        <div className="max-w-4xl flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">
            A Glimpse into My Role
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>
              As a Web Application Developer at Kenna, I contributed to the
              development and maintenance of enterprise web applications used by
              BASF Agricultural Solutions. My responsibilities included
              implementing new features, modernizing legacy systems, and ensuring
              that delivered solutions aligned closely with business requirements
              provided by account managers.
            </p>

            <p>
              A defining aspect of this role was working within a production
              environment that emphasized reliability and quality. Features were
              developed alongside rigorous QA processes, formal reviews, and
              structured release practices, reinforcing the importance of writing
              clear, maintainable, and well-tested code.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mt-10 max-w-xl">
            <h4 className="text-lg font-semibold text-midnight mb-3 uppercase">
              Highlights of Responsibilities
            </h4>
            <ul className="pl-4 list-disc list-outside space-y-2 text-gray-700 text-left">
              <li>
                Implemented interactive data grids using KendoReact to support
                territory-based product allocation and inventory management
              </li>
              <li>
                Built a RESTful API using Express and Puppeteer to generate PDF
                exports, automating sales summary reporting for retail account
                managers
              </li>
              <li>
                Led the migration of legacy IBM Notes and jQuery modules into a
                modern React application, improving scalability and reducing
                redundant code
              </li>
              <li>
                Managed tasks, code reviews, and releases using Jira and Bitbucket,
                contributing to smoother deployments and fewer integration issues
              </li>
              <li>
                Imported and validated 300+ agricultural market records into SQL
                Server using Excel-generated scripts to support accurate business
                reporting
              </li>
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-midnight mb-3 uppercase">
              Technology Stack
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'React',
                'JavaScript',
                'KendoReact',
                'SQL Server',
                'Express',
                'Puppeteer',
                'Jira',
                'Bitbucket',
                'Confluence',
                'Excel'
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learning */}
          <div className="mt-10 max-w-4xl">
            <h4 className="text-lg font-semibold text-midnight mb-3 uppercase">
              An Interesting Thing I Learned
            </h4>
            <p className="text-gray-700">
              One of the most important lessons from this role was that clarity
              consistently outperforms complexity in professional software
              development. Writing self-documenting code through clear naming,
              consistent structure, and intuitive abstractions made collaboration
              easier, reduced review friction, and improved long-term
              maintainability.
            </p>
            <p className="text-gray-700 mt-4">
              I also gained a deeper appreciation for the structured processes
              required to deliver production updates. Effective software delivery
              depends not only on writing code, but on strong QA practices,
              stakeholder alignment, and disciplined release workflows that ensure
              reliability for end users.
            </p>
          </div>
        </div>
      </section>

      {/* Goals and Learning Outcomes */}
      <section className="mb-12 flex flex-col items-center bg-jicama">
        <MarqueeTag />

        <div className="max-w-2xl mx-10 my-20">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">
            Goals & Learning Outcomes
          </h3>

          <div className="space-y-10">
            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                	Enhance Problem Solving through the consistent completion of project tickets
              </h4>
              <p className="text-gray-700">
                	From consistently completing project tickets throughout the semester, 
                  I was able to noticeably strengthen my problem-solving skills. 
                  Actively documenting my challenges and solutions helped me identify recurring patterns in my thinking 
                  (both effective habits and areas that needed improvement) which ultimately made me more efficient when approaching new assignments. 
                  One key realization was that when working with endpoints or tickets involving data transfer between the frontend and backend, 
                  I often focused too narrowly on the most visible symptom of an issue. 
                  In reality, these problems often required a more holistic understanding of how different components interacted. 
                  To address this, I became much more intentional with my debugging strategies: using detailed print statements, 
                  sketching out system diagrams, and mapping the relationships between files. 
                  These practices helped me uncover root causes more systematically. 
                  Over time, I grew increasingly comfortable tackling unfamiliar tickets independently, 
                  while still knowing when to seek clarification from the team. 
                  This learning goal made me more confident, reliable, and adaptable, and motivated me to contribute meaningfully to our team's progress.
              </p>
            </div>

            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                	Strengthen abilities in Quantitative Analysis through the study and application of Financial Principles
              </h4>
              <p className="text-gray-700">
                Dedicating time each day to the Khan Academy Financial Literacy course allowed me to build a stronger foundation in quantitative concepts and financial reasoning. 
                As I progressed through the units, I developed a much clearer understanding of how credit works - including the key factors that contribute to a credit score, 
                such as credit utilization, payment history, and the length of credit accounts. 
                This knowledge helped me better appreciate how everyday financial decisions can have long-term impacts. 
                Beyond credit, the course also expanded my business knowledge in ways directly relevant to being a working professional in any field. 
                For example, one of the modules explored different forms of insurance, and I learned how employee benefits such as health insurance, disability coverage, 
                and retirement plans play a major role in evaluating job opportunities. These insights helped me interpret numerical information more confidently, 
                evaluate trade-offs in real scenarios, and understand the broader financial context surrounding professional life. 
                Sharing weekly takeaways reinforced my learning and sparked meaningful discussions during one-on-ones. 
                Ultimately, this initiative strengthened both my analytical abilities and my confidence when approaching the technical and business-oriented aspects of team projects.
              </p>
            </div>

            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                Improve written communication through effective correspondence with team members
              </h4>
              <p className="text-gray-700">
                Through the daily practice of writing concise updates to my supervisor, 
                I enhanced the clarity and structure of my written communication. 
                This habit helped me stay organized, set daily intentions, and reflect on my progress. 
                When encountering obstacles, I learned to articulate the context, my debugging attempts, and the specific support I needed, 
                which made problem resolution faster and more collaborative. 
                Over time, my communication became more proactive, precise, and helpful to the team, 
                ultimately strengthening trust and demonstrating my commitment to learning.
              </p>
            </div>
          </div>
        </div>

        <MarqueeTag />
      </section>

      {/* Acknowledgments */}
      <section className="flex justify-center px-10 py-20">
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">
            Acknowledgments
          </h3>

          <div className="space-y-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                I would like to sincerely thank my supervisor,{' '}
                <strong>Nicholas Paul</strong>, for his mentorship and guidance
                throughout the term. From his example, I learned what it truly
                means to be an effective and supportive manager in a professional
                environment.
              </p>
            </div>

            <p>
              I am also grateful to my co-op peers and colleagues whose
              collaboration, kindness, and strong social culture made this
              experience both rewarding and memorable. I leave this role with
              stronger technical skills, professional confidence, and excitement
              for continued growth in future work terms.
            </p>
          </div>
        </div>
      </section>
    </div>

    <FooterBanner />
    <Footer topRef="#webDevTop" />
  </div>
);

export default WebDeveloperPage;
