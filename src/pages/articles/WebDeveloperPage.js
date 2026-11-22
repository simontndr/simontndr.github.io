import Report from "../../components/Report";

// Placeholder logo — replace with your actual Kenna logo asset when available.
const kennaLogo =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="20" fill="#17365D"/>
      <text x="48" y="57" font-size="25" font-weight="700"
        text-anchor="middle" font-family="sans-serif" fill="#FFFFFF">KENNA</text>
    </svg>
  `);

const WebDeveloperPage = () => (
  <Report
    logo={kennaLogo}
    companyName="Kenna"
    companyUrl="https://www.kenna.ca"
    title="My Experience at Kenna"
    topId="webDevTop"
    intro="From September to December 2025, I worked as a Web Application Developer at Kenna in Mississauga, Ontario, contributing to enterprise applications supporting BASF Agricultural Solutions. My work involved translating business requirements into application features, modernizing existing systems, and supporting data-driven reporting workflows. Through collaboration with developers and account managers, I gained practical experience in enterprise software delivery, data validation, and the processes required to deliver reliable solutions."

    sections={[
      {
        id: "about",
        group: 1,
        title: "About Kenna",
        tagline: "Customer First Thinking.",
        content: [
          "Founded in 1985 as AppliCan Marketing and rebranded in 2002, Kenna is a technology company specializing in customer engagement, CRM, and data-driven marketing solutions. Over the years, the company has evolved alongside CRM technologies, helping organizations navigate digital transformation.",
          "Kenna has worked with globally recognized clients, including Sonos, Mercedes-Benz, and Coca-Cola. Its work brings together enterprise application development, analytics, and customer engagement, with an emphasis on usability, scalability, and reliability.",
          "During my work term, I supported applications for BASF Agricultural Solutions, working in a collaborative environment where developers and account managers worked together to align application functionality with client requirements."
        ],
      },
      {
        id: "role",
        group: 2,
        title: "A glimpse into my role",
        content: [
          "As a Web Application Developer, I contributed to the development and maintenance of enterprise applications supporting BASF Agricultural Solutions. I worked on features for territory-based product allocation and inventory management, automated sales reporting, and the modernization of legacy application modules. These responsibilities required understanding existing workflows and translating requirements communicated by account managers into functional application updates.",
          "I also supported data-related workflows, including importing and validating agricultural market records in SQL Server. Throughout the term, I worked within structured development and quality assurance processes, using project management and version control tools to track tasks, participate in code reviews, and coordinate releases. This provided valuable exposure to how technical teams collaborate to deliver and maintain business-facing systems."
        ],
      },
      {
        id: "tools",
        group: 2,
        title: "Tools",
        tools: [
          "React",
          "JavaScript",
          "SQL",
          "Express",
          "Jira",
          "Bitbucket",
          "Confluence",
          "Excel"
        ],
      },
      {
        id: "accomplishments",
        group: 2,
        title: "Key Accomplishments",
        content: [
          <ul key="accomplishments" className="list-disc space-y-3 pl-5">
            <li>
              <strong>Translated business requirements into application features:</strong>{" "}
              Implemented interactive data grids using KendoReact to support
              territory-based product allocation and inventory management for
              BASF Agricultural Solutions.
            </li>
            <li>
              <strong>Modernized application workflows and reporting:</strong>{" "}
              Contributed to migrating legacy IBM Notes and jQuery modules into
              React, reducing redundant code, and built an API-based PDF export
              workflow to automate sales summary reporting for retail account
              managers.
            </li>
            <li>
              <strong>Supported data accuracy and structured delivery:</strong>{" "}
              Imported and validated 300+ agricultural market records in SQL
              Server using Excel-generated scripts, while contributing to task
              tracking, code reviews, and release coordination through Jira
              and Bitbucket.
            </li>
          </ul>
        ],
      },
      {
        id: "takeaways",
        group: 2,
        title: "What I learned",
        content: [
          "This experience reinforced the importance of understanding the broader system before attempting to solve individual problems. Working with unfamiliar application modules taught me to investigate how different components interacted, trace issues to their root causes, and document my findings. I became more comfortable approaching unfamiliar tasks independently while recognizing when clarification from teammates was necessary.",
          "I also developed a greater appreciation for the communication and quality assurance processes behind enterprise software delivery. Clear progress updates, thorough reviews, and structured release practices helped ensure that changes aligned with requirements and remained reliable for end users. Outside of my project work, completing a financial literacy course strengthened my understanding of concepts such as credit, insurance, and employee benefits, giving me a broader perspective on the financial considerations involved in professional decision-making."
        ],
      },
    ]}

    acknowledgments={[
      "I would like to sincerely thank my supervisor, Nicholas Paul, for his mentorship and guidance throughout the term. From his example, I learned what it truly means to be an effective and supportive manager in a professional environment.",
      "I am also grateful to all my co-op peers, especially Meem Zulkernine, Chahana Reddy, and Tong Chanprakaisi, whose kindness and insight and made this experience both rewarding and memorable.",
      "Thank you Kenna, for another impactful work term!"

    ]}
  />
);

export default WebDeveloperPage;