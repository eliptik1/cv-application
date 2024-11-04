import { useState } from "react";
import "./App.css";
import Personal from "./Components/Personal";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Result from "./Components/Result";

function App() {
  let [personalInfo, setPersonalInfo] = useState({
    name: "FIRST LAST",
    email: "YOUREMAIL@GMAIL.COM",
    phone: "+23456789533",
    address: "34 ISTANBUL, TURKIYE",
    profileDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aspernatur. Ab, exercitationem quis. Culpa libero, optio totam facere quas obcaecati ad non doloremque nisi eos eaque itaque ab tempore at?",
  });
  let [educationInfo, setEducationInfo] = useState([
    {
      id: 0,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "Turkiye",
    },
  ]);
  let [experienceInfo, setExperienceInfo] = useState([
    {
      id: 0,
      company: "",
      position: "",
      startDateJob: "",
      endDateJob: "",
      locationJob: "",
    },
  ]);
  return (
    <div className="flex justify-center h-[100dvh] ">
      <div className=" flex-1 h-[100dvh] overflow-y-scroll">
        <div className="flex flex-col items-end gap-6 mr-4">
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
        </div>
      </div>
      <div className="border-l-2 flex-1 pl-2">
        <Result
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App;
