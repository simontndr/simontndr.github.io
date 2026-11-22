
import Report from "../../components/Report";

// Placeholder logo — replace with your actual CCMPS logo asset when available.
const CSL_Logo =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="20" fill="#17365D"/>
      <text x="48" y="57" font-size="27" font-weight="700"
        text-anchor="middle" font-family="sans-serif" fill="#FFFFFF">CSL</text>
    </svg>
  `);

const ResearchAssistantPage = () => (
  <Report
    logo={CSL_Logo}
    companyName="CSL"
    companyUrl="https://csl.uwaterloo.ca/"
    title="My Experience at the Collaborative Systems Laboratory"
    topId="researchTop"
    intro={
      <>
        From May to April 2026, I worked as a Research Assistant with the Collaborative Systems Laboratory (CSL), 
        affiliated with the University of Guelph's College of Computational, Mathematical, and Physical Sciences 
        {" "}<a
          href="https://www.uoguelph.ca/ccmps"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-royal transition-colors"
        >
          (CCMPS)
        </a>{" "}. 
        My work involved supporting the development of a web-based platform for human-computer interaction research, 
        facilitating focus groups, and gathering participant feedback. 
        This experience strengthened my understanding of requirements gathering, user-centred design, stakeholder engagement,
         and the importance of translating research needs into practical solutions.
      </>
    }

    sections={[
      {
        id: "about",
        group: 1,
        title: "About CCMPS & CSL",
        content: [
          "The College of Computational, Mathematical, and Physical Sciences (CCMPS) is one of eight colleges at the University of Guelph, comprising the departments of Computer Science, Mathematics and Statistics, Physics, and Chemistry.",
          "My role was within the Collaborative Systems Laboratory (CSL), a research group specializing in human-centred design and emerging technologies. Led by Dr. Stacey Scott, the laboratory explores how technology can enhance collaborative and social experiences through areas such as human-computer interaction and artificial intelligence."
        ],
      },
      {
        id: "role",
        group: 2,
        title: "A glimpse into my role",
        content: [
          "As a Research Assistant, I contributed to an ongoing research project involving the development of a web-based livestreaming platform designed to facilitate user studies and support academic publication. I worked with an existing application, reviewing its architecture and documentation to understand project requirements and identify areas for improvement.",
          "Beyond development, I participated in research activities by facilitating focus groups, conducting live demonstrations, and gathering participant feedback. I also collaborated with researchers and developers to communicate progress, discuss implementation decisions, and document system functionality for future contributors."
        ],
      },
      {
        id: "tools",
        group: 2,
        title: "Tools",
        tools: [
          "React",
          "JavaScript",
          "Firebase",
          "Trello",
          "Figma",
          "Focus Groups",
          "Qualitative Methods"
        ],
      },
      {
        id: "accomplishments",
        group: 2,
        title: "Key Accomplishments",
        content: [
          <ul key="accomplishments" className="list-disc space-y-3 pl-5">
            <li>
              <strong>Supported requirements gathering through user research:</strong>{" "}
              Facilitated focus groups and live platform demonstrations, gathering
              participant feedback to inform ongoing research and platform improvements.
            </li>
            <li>
              <strong>Improved platform functionality and access controls:</strong>{" "}
              Redesigned user interfaces, implemented permission-based component
              rendering, and restructured Firestore data to support security rules
              and protect sensitive research information.
            </li>
            <li>
              <strong>Strengthened technical documentation and knowledge transfer:</strong>{" "}
              Documented application functionality and system architecture to
              support future development and provide continuity for incoming
              project contributors.
            </li>
          </ul>
        ],
      },
      {
        id: "takeaways",
        group: 2,
        title: "What I learned",
        content: [
          "This experience gave me a greater appreciation for the importance of human-centred design and user feedback. While established design principles provide a useful foundation, understanding whether a solution actually meets user needs requires engaging with the people who will use it. Facilitating focus groups and observing participants interact with the platform showed me the value of validating assumptions through direct feedback.",
          "I also developed a stronger understanding of the planning and ethical considerations involved in academic research. Working alongside researchers reinforced the importance of research integrity, informed participation, and Research Ethics Board (REB) requirements. Ultimately, this experience strengthened my interest in understanding user needs, evaluating existing processes, and translating requirements into effective solutions."
        ],
      },
    ]}

    acknowledgments={[
      "First and foremost I want to thank my supervisor, Dr. Stacey Scott for seeing my potential as a developer, and trusting me to work on her ongoing passion project. Her wisdom and knowledge as a researcher continues to astound me, and grounded the entire team. Her constructive feedback always pushed me to grow, and is what encouraged me to develop features I thought previously too difficult to implement.",
      
      "Moreover, I want to express how much I appreciated working under Dr. Stacey Scott’s PhD student, Shan Yun Kuo, who acted as an additional mentor for this project. Understanding my deep love for business, she took the time to share her lived experience working as a Marketing Manager, which I found fascinating and extremely helpful.",
      
      "Last but not least, I want to thank the developers who I worked alongside on this project: Paola Bustos and Yevheniia Bazhmaieva. Coming from across the globe (Mexico and Ukraine respectively), they are not only some of the strongest coders I’ve ever met, but also some of the closest coworkers I have ever had. From eating lunch together in the UC, to sharing our different cultures with each other, they showed me what it means to be a team player. I will truly miss seeing them in the office every day, and wish them the best with their future endeavours.",
      
      "Thank you CSL, for such an amazing first work term!"
    ]}
  />
);

export default ResearchAssistantPage;
