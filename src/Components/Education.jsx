import { Card, CardBody, Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useEffect } from "react";

function Education({ educationInfo, setEducationInfo }) {
  function handleEducationInfo(e) {
    let inputName = e.target.id;
    setEducationInfo({ ...educationInfo, [inputName]: e.target.value });
  }

  useEffect(() => {
    console.log(educationInfo);
  }, [educationInfo]);

  return (
    <Card className="w-[400px] ">
      <h2 className="text-xl">Education</h2>
      <CardBody className="">
        <label htmlFor="school">School</label>
        <Input
          id="school"
          placeholder="School / University"
          type="name"
          value={educationInfo.school}
          onChange={handleEducationInfo}
        ></Input>

        <label htmlFor="degree">Degree</label>
        <Input
          id="degree"
          placeholder="Degree / Field of study"
          value={educationInfo.degree}
          onChange={handleEducationInfo}
        ></Input>

        <div className="flex justify-between gap-6">
          <div className="w-full">
            <label htmlFor="startDate">Start Date</label>
            <Input
              id="startDate"
              placeholder="Phone Number"
              type="date"
              value={educationInfo.startDate}
              onChange={handleEducationInfo}
            ></Input>
          </div>
          <div className="w-full">
            <label htmlFor="endDate">End Date</label>
            <Input
              id="endDate"
              placeholder="Phone Number"
              type="date"
              value={educationInfo.endDate}
              onChange={handleEducationInfo}
            ></Input>
          </div>
        </div>

        <label htmlFor="location">Location</label>
        <Input
          id="location"
          placeholder="Location"
          value={educationInfo.location}
          onChange={handleEducationInfo}
        ></Input>

        <div className="flex justify-center gap-1 my-4">
          <ButtonGroup>
            <Button color="default">Cancel</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button isDisabled="" color="primary">
              Add
            </Button>
          </ButtonGroup>
        </div>
        <Divider></Divider>
        <Card className="mt-2">
          <CardBody>
            <div className="flex justify-center">University-1</div>
          </CardBody>
        </Card>
        <Card className="mt-2">
          <CardBody>
            <div className="flex justify-center">University-2</div>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
}

export default Education;
