import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import { Mntn } from "./screens/Mntn/Mntn";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Mntn />
  </StrictMode>,
);
