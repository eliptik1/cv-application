import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Divider,
  Accordion,
  AccordionItem,
  Input,
  Button,
  ButtonGroup,
} from "@nextui-org/react";

function Education({ educationInfo, setEducationInfo }) {
  function handleEducationInfo(e, index) {
    let inputName = e.target.id;
    let updatedArray = [...educationInfo];
    updatedArray[index] = {
      ...educationInfo[index],
      [inputName]: e.target.value,
    };
    setEducationInfo(updatedArray);
  }

  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  useEffect(() => {
    //console.log(educationInfo);
  }, [educationInfo]);

  return (
    <Card className="w-full max-w-[400px]">
      <h2 className="text-xl">Education</h2>
      <Divider></Divider>
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        itemClasses={{
          title: "text-lg text-center",
          trigger: "text-xl",
        }}
      >
        {educationInfo.map((education, index) => {
          return (
            <AccordionItem
              key={index}
              title={"education-" + Math.floor(education.id + 1)}
            >
              <CardBody className="">
                <label htmlFor="school">School</label>
                <Input
                  id="school"
                  placeholder="School / University"
                  type="name"
                  value={educationInfo[index].school}
                  onChange={(e) => handleEducationInfo(e, index)}
                ></Input>

                <label htmlFor="degree">Degree</label>
                <Input
                  id="degree"
                  placeholder="Degree / Field of study"
                  value={educationInfo[index].degree}
                  onChange={(e) => handleEducationInfo(e, index)}
                ></Input>

                <div className="flex justify-between gap-6 max-xl:flex-wrap">
                  <div className="w-full">
                    <label htmlFor="startDate">Start Date</label>
                    <Input
                      id="startDate"
                      type="month"
                      value={educationInfo[index].startDate}
                      onChange={(e) => handleEducationInfo(e, index)}
                    ></Input>
                  </div>
                  <div className="w-full">
                    <label htmlFor="endDate">End Date</label>
                    <Input
                      id="endDate"
                      type="month"
                      value={educationInfo[index].endDate}
                      onChange={(e) => handleEducationInfo(e, index)}
                    ></Input>
                  </div>
                </div>

                <label htmlFor="location">Location</label>
                <Input
                  id="location"
                  placeholder="Location"
                  value={educationInfo[index].location}
                  onChange={(e) => handleEducationInfo(e, index)}
                ></Input>

                <div className="flex justify-center gap-1 my-4">
                  <ButtonGroup>
                    <Button
                      isDisabled={educationInfo.length <= 1}
                      color="default"
                      onClick={() => {
                        setEducationInfo(
                          educationInfo.filter(
                            (item) => item.id !== education.id
                          )
                        );
                        setSelectedKeys((educationInfo.length - 2).toString());
                      }}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button
                      onClick={() => {
                        setEducationInfo([
                          ...educationInfo,
                          {
                            school: "",
                            degree: "",
                            startDate: "",
                            endDate: "",
                            location: "",
                            id: educationInfo[educationInfo.length - 1].id + 1,
                          },
                        ]);
                        setSelectedKeys(educationInfo.length.toString());
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

export default Education;
