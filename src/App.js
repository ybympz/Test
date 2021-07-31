import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./styles.scss";
import GradeTableContainer from "./components/TeacherOffice/Table/GradeTableContainer";
import MyStudentsContainer from "./components/TeacherOffice/My students/myStudentsContainer";

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100 ? true : false
  );
  return (
    <div className="App__personal-account-container">
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleOpen={setSidebarIsOpen} />
      <div
        id="content-wrapper"
        className="App__personalaccount-wrapper non-auth"
      >
          <MyStudentsContainer/>
          <GradeTableContainer/>
      </div>
    </div>
  );
};

export default App;
