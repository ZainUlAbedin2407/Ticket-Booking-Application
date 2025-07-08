import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContextProvider.jsx";
import { DarkModeContextProvider } from "./context/darModeContextProvide.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </AuthContextProvider>
);
