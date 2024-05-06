import { StrictMode } from "react";
import { PrimeReactProvider } from "primereact/api";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider value={{ ripple: true }}>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
