import { Card, CardBody, Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

function Education() {
  return (
    <Card className="w-[400px] ">
      <h2 className="text-xl">Education</h2>
      <CardBody className="">
        <label htmlFor="school">School</label>
        <Input
          id="school"
          placeholder="School / University"
          type="name"
        ></Input>

        <label htmlFor="degree">Degree</label>
        <Input id="degree" placeholder="Degree / Field of study"></Input>

        <div className="flex justify-between gap-6">
          <div className="w-full">
            <label htmlFor="start-date">Start Date</label>
            <Input
              id="start-date"
              placeholder="Phone Number"
              type="date"
            ></Input>
          </div>
          <div className="w-full">
            <label htmlFor="end-date">End Date</label>
            <Input id="end-date" placeholder="Phone Number" type="date"></Input>
          </div>
        </div>

        <label htmlFor="location">Location</label>
        <Input id="location" placeholder="Location"></Input>

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
