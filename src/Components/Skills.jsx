import { Button, Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { IoCloseCircleOutline } from "react-icons/io5";

function Skills({ skillsInfo, setSkillsInfo }) {
  function handleSkillInfo(e, index) {
    console.log(e.target.value);
    let updatedSkills = [...skillsInfo];
    updatedSkills[index] = e.target.value;
    setSkillsInfo(updatedSkills);
  }

  return (
    <Card className="w-full max-w-[400px]">
      <h2 className="text-xl">Skills</h2>
      <CardBody>
        {skillsInfo.map((skill, index) => {
          return (
            <div key={index} className="flex gap-2 items-center group">
              <IoCloseCircleOutline
                onClick={() => {
                  //let updatedSkills = skillsInfo.splice(index, 1);
                  let updatedSkills = [...skillsInfo];
                  updatedSkills.splice(index, 1);

                  setSkillsInfo(updatedSkills);
                }}
                className="opacity-20 group-hover:opacity-100 cursor-pointer"
                size={30}
              />
              <Input
                id="skill"
                placeholder="Skill"
                type="name"
                value={skillsInfo[index]}
                onChange={(e) => handleSkillInfo(e, index)}
              ></Input>
            </div>
          );
        })}
        <div className="flex justify-center gap-1 my-4">
          <Button
            onClick={() => {
              setSkillsInfo([...skillsInfo, ""]);
            }}
            color="primary"
          >
            Add More Skill
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default Skills;
