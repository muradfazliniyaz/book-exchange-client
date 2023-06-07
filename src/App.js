import React from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Books } from "./Pages/Books";
import { Contact } from "./Pages/Contact";
import { SignIn } from "./Components/SignIn";
import { UserPage } from "./Pages/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { UserManagementPage } from "./Pages/UserManagementPage";
import { BookManagementPage } from "./Pages/BookManagementPage";

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
  {
    path: "usermanagementpage",
    element: (
      <ProtectedRoute>
        <UserManagementPage />
      </ProtectedRoute>
    ),
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
  {
    path: "bookmanagementpage",
    element: (
      <ProtectedRoute>
        <BookManagementPage />
      </ProtectedRoute>
    ),
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
