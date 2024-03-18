import { useState } from "react";
import "./App.css";
import Personal from "./Components/Personal";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Result from "./Components/Result";

function App() {
  return (
    <div className="flex justify-center">
      <div className="border-2 flex-1 flex flex-col items-center gap-6">
        <Personal />
        <Education />
        <Experience />
      </div>
      <div className="border-2 flex-1">
        <Result />
      </div>
    </div>
  );
}

export default App;
