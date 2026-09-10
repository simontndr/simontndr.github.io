import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import KennaBg from '../../assets/BGIS.jpg';
import MarqueeTag from '../../components/MarqueeTag';
import FooterBanner from '../../components/FooterBanner';

const WebDeveloperPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />

    <Hero
      id="leaseAnalystTop"
      readMore="#abstract"
      bgUrl={KennaBg}
      imageUrl={""}
      text="My Experience as a Lease Data Analyst at BGIS"
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
            This report outlines my experience from May to August 2026 as a Lease Data Analyst at BGIS in Markham, Ontario. 
            During this internship, I worked on the National Bank account, supporting the abstraction, validation, and maintenance of key property and lease data. 
            My work directly improved data visibility, and supported day-to-day operations and strategic decision-making. 
            Overall, this internship gave me practical experience in data management, process improvement, reporting, and cross-functional communication within a corporate real estate environment.
          </p>
        </div>
      </section>

      {/* Information about the Employer */}
      <section className="flex flex-col items-center bg-jicama">
        <MarqueeTag />

        <div className="max-w-4xl mx-10 my-20">
          <h3 className="text-2xl md:text-3xl text-midnight font-syncopate uppercase mb-10">
            About BGIS
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>
              <a href="https://www.bgis.com" className="underline" target="_blank" rel="noreferrer">BGIS</a> is a global provider of integrated facilities management and real estate services, with a history dating back to 1992. 
              The company was originally established in Canada as a joint venture between Brookfield and Johnson Controls. 
              In 2015, the organization was rebranded as Brookfield Global Integrated Solutions under Brookfield Asset Management, 
              reflecting its expansion and growing range of integrated real estate and facilities services. 
              In 2019, Brookfield Asset Management sold its interest in the company, and the organization subsequently adopted the name BGIS.
            </p>

            <p>
              Today, BGIS provides a broad range of services, including facilities management, project delivery, energy and sustainability solutions, 
              asset management, workplace advisory, and real estate services. The company supports clients across a variety of industries, 
              helping organizations manage their real estate assets, improve operational efficiency, and create value through data-driven 
              and technology-enabled solutions. BGIS manages a large portfolio of facilities and real estate assets across multiple countries, 
              making accurate property and lease information an important component of its operations.
            </p>

            <p>
              BGIS is headquartered in Markham, Ontario, and maintains a collaborative work environment in which employees 
              from various disciplines work together to support client needs. Teams involved in lease administration, property management, 
              transactions, facilities management, and strategic real estate services frequently collaborate to ensure that client information 
              is accurate and business requirements are addressed effectively.
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
              As a Lease Data Analyst at BGIS, I supported the Lease Administration team responsible for managing property and lease data for the National Bank account. 
              My role involved validating, maintaining, and organizing property information to ensure that data used for operational and administrative processes was accurate and reliable. 
              I also contributed to reporting and process improvements by developing Excel and Power Query solutions that reduced manual work and made recurring data updates more efficient.
            </p>

            <p>
              A key aspect of this role was communicating with internal teams and external stakeholders to resolve data discrepancies and ensure that information was communicated clearly and accurately. 
              Working in a bilingual environment, I regularly handled property information and correspondence in both English and French, 
              requiring attention to detail when interpreting and communicating business information. 
              This experience strengthened my ability to work across different functions and adapt my communication to different stakeholders. 
              I applied concepts from coursework such as statistics and accounting while developing new skills in commercial real estate, data validation, and reporting automation.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mt-10 max-w-2xl">
            <h4 className="text-lg font-semibold text-midnight mb-3 uppercase">
              Highlights of Responsibilities
            </h4>
            <ul className="pl-4 list-disc list-outside space-y-2 text-gray-700 text-left">
              <li>
                Developed and maintained Excel and Power Query workflows to automate recurring data updates and reduce manual spreadsheet preparation
              </li>
              <li>
                Consolidated and standardized property tax billing information across multiple spreadsheets to improve data accuracy and support centralized correspondence
              </li>
              <li>
                Created a property tax bill tracking system using XLOOKUP and structured Excel tables to efficiently monitor billing information and identify data discrepancies
              </li>
              <li>
                Developed a VBA macro to automate group email generation through Outlook, improving the efficiency and consistency of recurring communications
              </li>
              <li>
                Prepared and updated documentation for Year End Adjustments and Rental Advice Notices to support standardized processes and knowledge transfer within the team
              </li>
              <li>
                Communicated with internal teams, landlords, facility managers, and other stakeholders to resolve property data discrepancies and coordinate administrative requirements
              </li>
            </ul>
          </div>

          {/* Business Tools */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-midnight mb-3 uppercase">
              Business Tools
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Excel',
                'Power Query',
                'RealSuite',
                'MS Outlook',
                'SharePoint',
                'VBA / Excel Macros',
                'XLOOKUP / Excel Tables',
                'MS Teams'
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
              One of the most valuable lessons I learned during this role was the importance of data accuracy in supporting business operations. 
              Working with property and lease information showed me how even small inconsistencies can affect downstream processes and stakeholders, 
              reinforcing the need for careful data validation. I also gained a greater appreciation for process improvement and automation, 
              seeing how tools such as Excel, Power Query, and VBA could reduce manual effort and improve consistency. 
              This taught me that effective automation begins with understanding the underlying business process rather than simply applying complex technology. 
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
                	Expand cross-functional knowledge by building professional relationships with employees from different work streams through coffee chats.
              </h4>
              <p className="text-gray-700">
                	Through coffee chats and informal conversations with employees from different teams, 
                  I expanded my understanding of how various work streams contribute to the organization, 
                  its overall goals and specific client accounts. These conversations helped me see how my work in Lease Administration 
                  connected to the broader business and exposed me to different roles and career paths. 
                  As a computing student with a business minor, I was particularly interested in learning how technology, data, 
                  and business processes intersect across different departments. From these conversations, 
                  I saw tangible examples of how technical and analytical skills could be applied beyond traditional software development. 
                  I also became more comfortable initiating professional conversations, asking thoughtful questions, and learning from people with different areas of expertise. 
                  Overall, this goal encouraged me to look beyond my immediate responsibilities and develop a more well-rounded understanding of the organization.	
              </p>
            </div>

            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                	Improve process documentation and organizational skills by creating a standardized operating procedure (SOP) for recurring lease administration tasks.	
              </h4>
              <p className="text-gray-700">
                Throughout my work term, I strengthened my organizational and analytical skills by documenting recurring processes and breaking complex workflows into clear, 
                logical steps. Working with lease administration tasks often involved multiple files, tools, and sources of information, 
                requiring me to understand both how and why each step was completed. Through this process, I learned that effective documentation 
                involves more than simply listing instructions; it requires anticipating where someone unfamiliar with the task may need additional context or clarification. 
                I became more intentional about identifying key decision points, organizing information, and communicating best practices clearly. 
                This experience also reinforced the importance of knowledge sharing, as clear documentation can improve consistency and make recurring processes easier for future team members to understand. 
                Overall, this goal strengthened my ability to critically analyze workflows and identify ways to make processes more structured, accessible, and repeatable.
              </p>
            </div>

            <div className="border-l-4 border-midnight pl-6 text-left">
              <h4 className="text-lg font-semibold text-midnight mb-2 uppercase">
                Strengthen data visualization and analytical skills by developing a simple dashboard to present lease data and reporting insights more effectively.	
              </h4>
              <p className="text-gray-700">
                Throughout my work term, I strengthened my technical and analytical skills by exploring ways to organize, analyze, and present lease-related data more effectively. 
                Working with large spreadsheets showed me that data is most valuable when it is accessible and easy for others to interpret. 
                I explored tools such as Excel and Power BI to better understand how information could be summarized through metrics, trends, and visualizations. 
                Through this process, I developed a greater appreciation for the importance of properly structuring and preparing data before creating reports. 
                This experience also showed me how technical skills can be applied to solve business problems and improve decision-making. 
                Overall, this goal strengthened my confidence in using technology and data visualization to communicate insights and 
                reinforced my interest in further developing my skills in data analysis and business intelligence.
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
            <p>
              I would like to sincerely thank my supervisor, <strong>Shandeep Nagentheren</strong>, for his guidance, mentorship, and support throughout the work term. 
              His encouragement gave me the opportunity to take ownership of my work, develop new skills, and gain a deeper understanding of the real estate industry.
            </p>

            <p>
              To my fellow interns, <strong>Anthony Nasso</strong> and <strong>Arielle Smith</strong> thank you for making this co-op term so enjoyable; our lunch chats never failed to make me laugh.
            </p>

            <p>
              Thank you, BGIS, for an incredible summer.
            </p>

          </div>
        </div>
      </section>
    </div>

    <FooterBanner />
    <Footer topRef="#leaseAnalystTop" />
  </div>
);

export default WebDeveloperPage;
