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
    <div className="work-experience w-full flex flex-wrap-reverse justify-center items-center md:mb-5 lg:mb-3">
      
      <div className="work-photo flex justify-end items-center md:w-[50%]">
        <div className="md:w-[60%] px-8 flex flex-col justify-center items-center my-10">
          {photoUrl && <img src={photoUrl} alt={jobTitle} className="w-[250px] h-[250px] object-contain" />}
          {Quote && <blockquote className="mt-4 italic font-courier text-sm">"{Quote}"</blockquote>}
        </div>
      </div>

      <div className="work-content md:w-[50%] flex flex-col items-center px-8">
          <div className="md:w-[70%]">
            <p className="text-sm font-courier text-right text-midnight font-bold mb-2">
              {startDate} - {endDate}
            </p>
            <h3 className="font-syncopate uppercase text-midnight font-bold text-lg text-left mb-1">{jobTitle}</h3>
            <p className="text-sm text-gray-500 text-left text-royal uppercase font-syncopate mb-3">@ {company}</p>
            <p className="mt-2 text-left font-courier text-midnight text-sm">{description}</p>
          </div>
          
          {reportUrl!=='' && (
            <Link to={reportUrl} className="bg-moon m-0.5 px-4 py-1 text-sm rounded-full text-midnight border-2 border-midnight">
              View report
            </Link>
          )}
            
      </div>

    </div>
  );
}

export default WorkExperience;