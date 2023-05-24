import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Books } from "./Pages/Books";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
import { SignIn } from "./Components/SignIn";
import { UserPage } from "./Pages/userPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
  {
    path: "books",
    element: <Books />,
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
  {
    path: "signin",
    element: <SignIn />,
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
  {
    path: "userpage",
    element: (
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Auth0Provider
        domain="dev-18qfumc30xj5cayd.us.auth0.com"
        clientId="x56T8NwZswIIEJzi8hzSj0Qc56qTeh29"
        redirectUri={window.location.origin}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </React.StrictMode>
  );
}

export default App;
