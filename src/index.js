import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import apps from "./apps";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    {/* <apps /> */}
  </StrictMode>,
  rootElement
);
