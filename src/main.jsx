import React from "react";
import ReactDOM from "react-dom/client";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { HooksApp } from "./HooksApp";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWidthCustomHook } from "./02-useEffect/FormWidthCustomHook";
// import { MulitipleCustomHooks } from "./03-examples/MulitipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <FocusScreen />
  // </React.StrictMode>
);
