import React, { useState } from "react";
import { Sidebar } from "./src/components/Sidebar/Sidebar";
import "./styles.scss";

const SidebarContainer = () => {
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
        <h1>
          Чтобы увидеть сайдбар, превью должно занимать достаточно много места
        </h1>
      </div>
    </div>
  );
};

export default SidebarContainer;
