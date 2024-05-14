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
  let [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  let [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    startDateJob: "",
    endDateJob: "",
    locationJob: "",
  });
  let [educationList, setEducationList] = useState([{ id: 0 }, { id: 1 }]);
  let [experienceList, setExperienceList] = useState([{ id: 0 }, { id: 1 }]);
  return (
    <div className="flex justify-center">
      <div className="border-2 flex-1 flex flex-col items-center gap-6">
        <Personal
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Education
          educationList={educationList}
          educationInfo={educationInfo}
          setEducationList={setEducationList}
          setEducationInfo={setEducationInfo}
        />
        <Experience
          experienceList={experienceList}
          experienceInfo={experienceInfo}
          setExperienceList={setExperienceList}
          setExperienceInfo={setExperienceInfo}
        />
      </div>
      <div className="border-2 flex-1">
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
