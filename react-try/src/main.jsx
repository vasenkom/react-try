import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AvocadoToast } from "./Food.jsx";
import Greeting from "./Greeting.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <AvocadoToast />
  </StrictMode>
);
