import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Divider,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

function Experience({ experienceInfo, setExperienceInfo }) {
  function handleExperienceInfo(e, index) {
    let inputName = e.target.id;
    let updatedArray = [...experienceInfo];
    updatedArray[index] = {
      ...experienceInfo[index],
      [inputName]: e.target.value,
    };

    setExperienceInfo(updatedArray);
  }

  const [selectedKeys, setSelectedKeys] = useState(["0"]);

  useEffect(() => {
    console.log(experienceInfo);
  }, [experienceInfo]);

  return (
    <Card className="w-[400px]">
      <h2 className="text-xl">Experience</h2>
      <Divider></Divider>
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        itemClasses={{
          title: "text-lg text-center",
          trigger: "text-xl",
        }}
      >
        {experienceInfo.map((experience, index) => {
          return (
            <AccordionItem key={index} title={"experience-" + experience.id}>
              <CardBody>
                <label htmlFor="company">Company Name</label>
                <Input
                  id="company"
                  placeholder="Company Name"
                  value={experienceInfo[index].company}
                  onChange={(e) => {
                    handleExperienceInfo(e, index);
                  }}
                ></Input>

                <label htmlFor="position">Position Title</label>
                <Input
                  id="position"
                  placeholder="Position Title"
                  value={experienceInfo[index].position}
                  onChange={(e) => {
                    handleExperienceInfo(e, index);
                  }}
                ></Input>

                <div className="flex justify-between gap-6">
                  <div className="w-full">
                    <label htmlFor="startDateJob">Start Date</label>
                    <Input
                      id="startDateJob"
                      placeholder="Start Date"
                      type="date"
                      value={experienceInfo[index].startDateJob}
                      onChange={(e) => {
                        handleExperienceInfo(e, index);
                      }}
                    ></Input>
                  </div>
                  <div className="w-full">
                    <label htmlFor="endDateJob">End Date</label>
                    <Input
                      id="endDateJob"
                      placeholder="End Date"
                      type="date"
                      value={experienceInfo[index].endDateJob}
                      onChange={(e) => {
                        handleExperienceInfo(e, index);
                      }}
                    ></Input>
                  </div>
                </div>

                <label htmlFor="locationJob">Location</label>
                <Input
                  id="locationJob"
                  placeholder="Location"
                  value={experienceInfo[index].locationJob}
                  onChange={(e) => {
                    handleExperienceInfo(e, index);
                  }}
                ></Input>
                <div className="flex justify-center gap-1 my-4">
                  <ButtonGroup>
                    <Button
                      isDisabled={experienceInfo.length <= 1}
                      color="default"
                      onClick={() => {
                        setExperienceInfo(
                          experienceInfo.filter(
                            (item) => item.id !== experience.id
                          )
                        );
                        setSelectedKeys((experienceInfo.length - 2).toString());
                      }}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button
                      onClick={() => {
                        setExperienceInfo([
                          ...experienceInfo,
                          {
                            id:
                              experienceInfo[experienceInfo.length - 1].id + 1,
                          },
                        ]);

                        setSelectedKeys(experienceInfo.length.toString());
                      }}
                      color="primary"
                    >
                      Add New
                    </Button>
                  </ButtonGroup>
                </div>
              </CardBody>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Card>
  );
}

export default Experience;
