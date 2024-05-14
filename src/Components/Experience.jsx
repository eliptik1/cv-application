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

function Experience({
  experienceInfo,
  setExperienceInfo,
  experienceList,
  setExperienceList,
}) {
  function handleExperienceInfo(e) {
    let inputName = e.target.id;
    setExperienceInfo({ ...experienceInfo, [inputName]: e.target.value });
  }

  const [selectedKeys, setSelectedKeys] = useState(["0"]);

  useEffect(() => {
    console.log(experienceList);
  }, [experienceList]);

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
        {experienceList.map((experience, index) => {
          return (
            <AccordionItem key={index} title={"experience-" + experience.id}>
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
                    <Button
                      isDisabled={experienceList.length <= 1}
                      color="default"
                      onClick={() => {
                        setExperienceList(
                          experienceList.filter(
                            (item) => item.id !== experience.id
                          )
                        );
                        setSelectedKeys((experienceList.length - 2).toString());
                      }}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button
                      onClick={() => {
                        setExperienceList([
                          ...experienceList,
                          {
                            id:
                              experienceList[experienceList.length - 1].id + 1,
                          },
                        ]);

                        setSelectedKeys(experienceList.length.toString());
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
