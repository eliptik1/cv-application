import { Card, CardBody, Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useEffect } from "react";

function Experience({ experienceInfo, setExperienceInfo }) {
  function handleExperienceInfo(e) {
    let inputName = e.target.id;
    setExperienceInfo({ ...experienceInfo, [inputName]: e.target.value });
  }

  useEffect(() => {
    console.log(experienceInfo);
  }, [experienceInfo]);

  return (
    <Card className="w-[400px]">
      <h2 className="text-xl">Experience</h2>
      <CardBody>
        <label htmlFor="company">Company Name</label>
        <Input
          id="company"
          placeholder="Company Name"
          value={experienceInfo.company}
          onChange={handleExperienceInfo}
        ></Input>

        <label htmlFor="position">Position Title</label>
        <Input
          id="position"
          placeholder="Position Title"
          value={experienceInfo.position}
          onChange={handleExperienceInfo}
        ></Input>

        <div className="flex justify-between gap-6">
          <div className="w-full">
            <label htmlFor="startDateJob">Start Date</label>
            <Input
              id="startDateJob"
              placeholder="Start Date"
              type="date"
              value={experienceInfo.startDateJob}
              onChange={handleExperienceInfo}
            ></Input>
          </div>
          <div className="w-full">
            <label htmlFor="endDateJob">End Date</label>
            <Input
              id="endDateJob"
              placeholder="End Date"
              type="date"
              value={experienceInfo.endDateJob}
              onChange={handleExperienceInfo}
            ></Input>
          </div>
        </div>

        <label htmlFor="locationJob">Location</label>
        <Input
          id="locationJob"
          placeholder="Location"
          value={experienceInfo.locationJob}
          onChange={handleExperienceInfo}
        ></Input>
        <div className="flex justify-center gap-1 my-4">
          <ButtonGroup>
            <Button color="default">Cancel</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="primary">Add</Button>
          </ButtonGroup>
        </div>

        <Divider></Divider>
        <Card className="mt-2">
          <CardBody>
            <div className="flex justify-center">Company-1</div>
          </CardBody>
        </Card>
        <Card className="mt-2">
          <CardBody>
            <div className="flex justify-center">Company-2</div>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
}

export default Experience;
