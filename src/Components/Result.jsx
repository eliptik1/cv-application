import { Card, CardBody, Divider } from "@nextui-org/react";
function Result({ personalInfo, educationInfo, experienceInfo }) {
  return (
    <Card className="mt-6 mx-6 rounded-none w-[650px]">
      <CardBody className="h-[700px] ">
        Personal:
        <div>{personalInfo.name}</div>
        <div>{personalInfo.email}</div>
        <div>{personalInfo.phone}</div>
        <div>{personalInfo.address}</div>
        <Divider />
        Education:
        <div>{educationInfo.school}</div>
        <div>{educationInfo.degree}</div>
        <div>{educationInfo.startDate}</div>
        <div>{educationInfo.endDate}</div>
        <div>{educationInfo.location}</div>
        <Divider />
        Experience:
        <div>{experienceInfo.company}</div>
        <div>{experienceInfo.position}</div>
        <div>{experienceInfo.startDateJob}</div>
        <div>{experienceInfo.endDateJob}</div>
        <div>{experienceInfo.locationJob}</div>
      </CardBody>
    </Card>
  );
}

export default Result;
