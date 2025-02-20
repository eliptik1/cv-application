import { useState } from "react";
import "./App.css";
import Personal from "./Components/Personal";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Result from "./Components/Result";
import Skills from "./Components/Skills";
import { FaGithub } from "react-icons/fa";

function App() {
  let [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "0123 456 78 90",
    address: "Istanbul, TR",
  });
  let [educationInfo, setEducationInfo] = useState([
    {
      id: 0,
      school: "Lorem Ipsum University",
      degree: "Computer engineering",
      startDate: "2016-08",
      endDate: "2020-07",
      location: "Dolor",
    },
  ]);
  let [experienceInfo, setExperienceInfo] = useState([
    {
      id: 0,
      company: "Consectetur ",
      position: "Front-end developer",
      jobDescription:
        "Built e-commerce websites and ERP system for the company",
      startDateJob: "2023-12",
      endDateJob: "2024-07",
      locationJob: "Dolor",
    },
  ]);
  let [skillsInfo, setSkillsInfo] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
  ]);

  return (
    <div className="flex justify-center lg:h-[100dvh] max-lg:flex-col">
      <div className=" flex-1 h-[100dvh] lg:overflow-y-scroll ">
        <div className="flex flex-col max-lg:items-center lg:items-end gap-6 lg:mr-4 px-4 ">
          <Personal
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <Education
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
          />
          <Experience
            experienceInfo={experienceInfo}
            setExperienceInfo={setExperienceInfo}
          />
          <Skills skillsInfo={skillsInfo} setSkillsInfo={setSkillsInfo} />
          <div className="flex items-center gap-2 justify-center w-full max-w-[400px] mb-6  text-blue-500 ">
            <FaGithub size={18} />
            <a href="https://github.com/eliptik1" className="hover:underline">
              Developed by Eliptik1
            </a>
          </div>
        </div>
      </div>
      <div className="border-l-2 flex-1 max-lg:flex max-lg:justify-center max-lg:mb-16 lg:pl-2">
        <Result
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          skillsInfo={skillsInfo}
        />
      </div>
    </div>
  );
}

export default App;
