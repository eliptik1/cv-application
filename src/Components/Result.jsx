import { Card, CardBody, Divider } from "@nextui-org/react";
function Result({ personalInfo, educationInfo, experienceInfo }) {
  return (
    <Card className="mt-6 mx-6 rounded-none w-[650px]">
      <CardBody className="h-[850px] ">
        Personal:
        <div>{personalInfo.name}</div>
        <div>{personalInfo.email}</div>
        <div>{personalInfo.phone}</div>
        <div>{personalInfo.address}</div>
        <Divider />
        Education:
        {educationInfo.map((education, index) => {
          return (
            <div key={index}>
              <div>{education.school}</div>
              <div>{education.degree}</div>
              <div>{education.startDate}</div>
              <div>{education.endDate}</div>
              <div>{education.location}</div>
            </div>
          );
        })}
        <Divider />
        Experience:
        {experienceInfo.map((experience, index) => {
          return (
            <div key={index * 5}>
              <div>{experience.company}</div>
              <div>{experience.position}</div>
              <div>{experience.jobDescription}</div>
              <div>{experience.startDateJob}</div>
              <div>{experience.endDateJob}</div>
              <div>{experience.locationJob}</div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}

export default Result;
