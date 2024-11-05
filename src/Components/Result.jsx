import { Card, CardBody, Divider } from "@nextui-org/react";
function Result({ personalInfo, educationInfo, experienceInfo, skillsInfo }) {
  return (
    <Card className="mt-6 px-8 mx-6 rounded-none w-[650px] max-h-[850px]">
      <CardBody className="h-[850px] w-full font-montserrat">
        <div className="font-montserrat font-medium text-3xl text-center mt-8 mb-3 uppercase tracking-[5px]">
          {personalInfo.name}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phone}</div>
          <div>{personalInfo.address}</div>
        </div>
        <div className="mt-8 uppercase">Education</div>
        <Divider />
        {educationInfo.map((education, index) => {
          return (
            <div className="flex justify-between mb-6" key={index}>
              <div>
                <div className="font-bold">{education.school}</div>
                <div>{education.degree}</div>
                <div>{education.location}</div>
              </div>

              <div className="flex gap-1">
                {education.startDate && (
                  <>
                    <div>{education.startDate}</div>
                    {"-"}
                    {education.endDate ? (
                      <div>{education.endDate}</div>
                    ) : (
                      "Present"
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
        <div className="mt-8 uppercase">Experience</div>
        <Divider />
        {experienceInfo.map((experience, index) => {
          return (
            <div className="flex flex-col mb-6" key={index * 5}>
              <div className="flex justify-between">
                <div className="font-bold">{experience.company}</div>
                <div className="flex gap-1">
                  {experience.startDateJob && (
                    <>
                      <div>{experience.startDateJob}</div>
                      {"-"}
                      {experience.endDateJob ? (
                        <div>{experience.endDateJob}</div>
                      ) : (
                        "Present"
                      )}
                    </>
                  )}
                </div>
              </div>
              <div>{experience.position}</div>
              <div>{experience.jobDescription}</div>
              <div>{experience.locationJob}</div>
            </div>
          );
        })}
        <div className="mt-8 uppercase">Skills</div>
        <Divider />
        <div className="flex flex-col flex-wrap max-h-[250px]">
          {skillsInfo.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </div>
      </CardBody>
    </Card>
  );
}

export default Result;
