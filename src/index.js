import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BookContextProvider from "./Contexts/BookContext";
import UserContextProvider from "./Contexts/UserContext";
import { Auth0Provider } from "@auth0/auth0-react";
import UserBookContextProvider from "./Contexts/UserBookContext";
import RequestedBookContextProvider from "./Contexts/RequestedBookContext";
import TheBooksIRequestedContextProvider from "./Contexts/TheBooksIRequestedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-18qfumc30xj5cayd.us.auth0.com"
      clientId="x56T8NwZswIIEJzi8hzSj0Qc56qTeh29"
      redirectUri={window.location.origin}
    >
      <UserContextProvider>
        <BookContextProvider>
          <UserBookContextProvider>
            <RequestedBookContextProvider>
              <TheBooksIRequestedContextProvider>
                <App />
              </TheBooksIRequestedContextProvider>
            </RequestedBookContextProvider>
          </UserBookContextProvider>
        </BookContextProvider>
      </UserContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
