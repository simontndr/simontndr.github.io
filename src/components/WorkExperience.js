import { Link } from 'react-router-dom';

const WorkExperience = ({experience}) => {

  const jobTitle = experience.jobTitle;
  const company = experience.company;
  const startDate = experience.startDate;
  const endDate = experience.endDate;
  const description = experience.description;
  const photoUrl = experience.photoUrl;
  const Quote = experience.Quote;
  const reportUrl = experience.reportUrl;

  return (
    <div className="work-experience w-full flex flex-wrap-reverse justify-center items-center mb-5 lg:mb-3">
      
      <div className="work-photo flex justify-end items-center md:w-[50%]">
        <div className="md:w-[60%] px-8 flex flex-col justify-center items-center my-10">
          {photoUrl && <img loading="lazy" decoding="async" src={photoUrl} alt={jobTitle} className="w-[250px] h-[250px] object-contain" />}
          {Quote && <blockquote className="mt-4 italic font-courier text-sm">"{Quote}"</blockquote>}
        </div>
      </div>

      <div className="work-content w-full md:w-[50%] flex flex-col items-center px-10">

          <p className="w-full md:w-[70%] text-sm font-courier text-right text-midnight font-bold mb-2">
              {startDate} - {endDate}
          </p>
        
          <div className="w-full md:w-[70%] flex flex-col items-start">
        
            <h3 className="font-syncopate uppercase text-midnight font-bold text-lg text-left mb-1">{jobTitle}</h3>
            <p className="text-sm text-gray-500 text-left text-royal uppercase font-syncopate mb-3">@ {company}</p>
            <p className="mt-2 text-left font-courier text-midnight text-sm">{description}</p>

            {reportUrl && (
              <Link
                to={reportUrl}
                className="group self-start inline-flex items-center gap-2 mt-3 font-bold border-b font-courier text-sm text-midnight hover:text-royal hover:border-b pb-1"
              >
                Co-op Report
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  &#8599;&#xFE0E;
                </span>
              </Link>
            )}
          </div>
            
      </div>

    </div>
  );
}

export default WorkExperience;