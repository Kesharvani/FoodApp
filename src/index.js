import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MenuContext } from "./Context/MenuContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <MenuContext>
        <App />
      </MenuContext>
    </BrowserRouter>
  </StrictMode>
);
