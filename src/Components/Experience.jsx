import { Card, CardBody, Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

function Experience() {
  return (
    <Card className="w-[400px]">
      <h2 className="text-xl">Experience</h2>
      <CardBody>
        <label htmlFor="company">Company Name</label>
        <Input id="company" placeholder="Company Name"></Input>

        <label htmlFor="position">Position Title</label>
        <Input id="position" placeholder="Position Title"></Input>

        <div className="flex justify-between gap-6">
          <div className="w-full">
            <label htmlFor="start-date-job">Start Date</label>
            <Input
              id="start-date-job"
              placeholder="Start Date"
              type="date"
            ></Input>
          </div>
          <div className="w-full">
            <label htmlFor="end-date-job">End Date</label>
            <Input id="end-date-job" placeholder="End Date" type="date"></Input>
          </div>
        </div>

        <label htmlFor="location-job">Location</label>
        <Input id="location-job" placeholder="Location"></Input>
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

export default Experience;
