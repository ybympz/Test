import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SidebarContainer from "./SidebarContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <SidebarContainer />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
