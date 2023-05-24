import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BookContextProvider from "./Contexts/BookContext";
import UserContextProvider from "./Contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
