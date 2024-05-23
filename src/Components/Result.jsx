import { Card, CardBody, Divider } from "@nextui-org/react";
function Result({ personalInfo, educationInfo, experienceInfo }) {
  return (
    <Card className="mt-6 mx-6 rounded-none w-[650px] h-[700px]">
      <CardBody className="grid grid-cols-[180px_1fr] grid-rows-[120px_1fr]">
        <div className="col-span-2 flex flex-col items-center justify-center">
          Personal:
          <div>{personalInfo.name}</div>
          <div className="flex gap-4">
            <div>{personalInfo.email}</div>
            <div>{personalInfo.phone}</div>
            <div>{personalInfo.address}</div>
          </div>
          <Divider />
        </div>
        <div className="row-start-2 border-r-2">
          <div>Profile:</div>
          {personalInfo.profileDescription}
          <div className="mt-4">Education:</div>
          {educationInfo.map((info, index) => {
            return (
              <div className="mt-2" key={index}>
                <div>{info.school}</div>
                <div>{info.degree}</div>
                <div>{info.startDate}</div>
                <div>{info.endDate}</div>
                <div>{info.location}</div>
              </div>
            );
          })}
        </div>
        <div className="row-start-2">
          Experience:
          {experienceInfo.map((info, index) => {
            return (
              <div className="mt-5" key={index}>
                <div>{info.company}</div>
                <div>{info.position}</div>
                <div>{info.startDateJob}</div>
                <div>{info.endDateJob}</div>
                <div>{info.locationJob}</div>
                <div>{info.jobDescription}</div>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}

export default Result;
