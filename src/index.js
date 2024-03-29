import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { UserProvider } from "./context/Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CookiesProvider>

        <App />
      </CookiesProvider>
    </UserProvider>
  </React.StrictMode>
);
