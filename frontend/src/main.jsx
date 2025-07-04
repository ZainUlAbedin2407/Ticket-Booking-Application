import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SearchContextProvider from "./context/SearchContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <SearchContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SearchContextProvider>
);
