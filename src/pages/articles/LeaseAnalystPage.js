
import Report from "../../components/Report";
import bgisLogo from "../../assets/company-logos/bgis_logo.jpeg"

const LeaseAnalystPage = () => (
  <Report
    logo={bgisLogo}
    companyName="BGIS"
    companyUrl="https://www.bgis.com"
    title="My Experience at BGIS"
    topId="leaseAnalystTop"
    intro={
      <>
        From May to August 2026, I worked as a Lease Data Analyst at BGIS, supporting lease administration for the 
        {" "}<a
              href="https://www.nbc.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-royal transition-colors"
            >
              National Bank of Canada
        </a>{" "}.
        My responsibilities focused on property data validation, reporting, process automation, and stakeholder coordination. 
        Through Excel and Power Query solutions, I helped improve the accuracy and consistency of recurring administrative 
        workflows while gaining practical experience in commercial real estate operations.
      </>
    }

    sections={[
      {
        id: "about",
        group: 1,
        title: "About BGIS",
        tagline: "Enabling Innovation.",
        content: [
          "BGIS is a global provider of integrated facilities management and real estate services, supporting organizations across multiple industries. Its services span facilities management, asset management, project delivery, sustainability, and real estate operations.",
          "During my work term, I supported the Lease Administration team managing property and lease information for the National Bank account. Accurate property data was essential to supporting billing, reporting, and day-to-day client operations."
        ],
      },
      {
        id: "role",
        group: 2,
        title: "A glimpse into my role",
        content: [
          "I supported the management and validation of property information across the National Bank portfolio, helping ensure data used in lease administration and financial processes remained accurate and reliable.",
          "My work involved coordinating with internal teams and external stakeholders to resolve discrepancies, maintain property records, and support recurring administrative requirements. Working in a bilingual environment also required communicating property information in both English and French.",
          "I also contributed to process documentation and knowledge sharing by organizing workflows into clear, repeatable steps. These activities reinforced the importance of standardized procedures, accurate records, and effective communication in supporting business operations."
        ],
      },
      {
        id: "tools",
        group: 2,
        title: "Tools",
        tools: [
          "Excel",
          "Power Query",
          "XLOOKUP",
          "VBA",
          "Outlook",
          "MS Teams",
          "SharePoint"
        ],
      },
      {
        id: "accomplishments",
        group: 2,
        title: "Key Accomplishments",
        content: [
          <ul key="accomplishments" className="list-disc space-y-3 pl-5">
            <li>
              <strong>Streamlined property tax data management:</strong>{" "}
              Consolidated property tax billing information and developed an
              XLOOKUP-based tracking system to improve data visibility,
              validation, and discrepancy identification.
            </li>
            <li>
              <strong>Automated recurring workflows:</strong>{" "}
              Built Excel and Power Query solutions for recurring data updates
              and developed a VBA/Outlook macro to standardize group email
              generation.
            </li>
            <li>
              <strong>Strengthened process documentation:</strong>{" "}
              Prepared Year End Adjustment and Rental Advice Notice
              documentation and organized recurring workflows into repeatable
              procedures to support consistency and knowledge transfer.
            </li>
          </ul>
        ],
      },
      {
        id: "takeaways",
        group: 2,
        title: "What I learned",
        content: [
          "This experience strengthened my understanding of how data quality directly affects business operations. Even small inconsistencies in property records can create downstream administrative challenges, making validation and clear documentation essential.",
          "I also learned that effective process improvement begins with understanding existing workflows, identifying points of friction, and developing practical solutions that improve consistency and usability. This experience reinforced my interest in the intersection of business processes, data, and technology."
        ],
      },
    ]}

    acknowledgments={[
      "I would like to thank my supervisor, Shandeep Nagentheren, for his guidance, mentorship, and trust throughout the work term. His support gave me the opportunity to take ownership of meaningful responsibilities and develop a deeper understanding of the real estate industry.",
      "To my fellow interns, Anthony Nasso and Arielle Smith, thank you for making this co-op term so enjoyable; our lunch chats never failed to make me laugh.",
      "Thank you BGIS, for an incredible summer."
    ]}
  />
);

export default LeaseAnalystPage;
