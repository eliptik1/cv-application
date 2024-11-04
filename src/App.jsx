import { useState } from "react";
import "./App.css";
import Personal from "./Components/Personal";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Result from "./Components/Result";

function App() {
  let [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  let [educationInfo, setEducationInfo] = useState([
    {
      id: 0,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);
  let [experienceInfo, setExperienceInfo] = useState([
    {
      id: 0,
      company: "",
      position: "",
      jobDescription: "",
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
