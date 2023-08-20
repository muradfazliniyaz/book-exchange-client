import React from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Books } from "./Pages/Books";
import { Contact } from "./Pages/Contact";
import { SignIn } from "./Components/SignIn";
import { UserPage } from "./Pages/UserPage";
import { createBrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { UserManagementPage } from "./Pages/UserManagementPage";
import { BookManagementPage } from "./Pages/BookManagementPage";
import SearchResults from "./Components/SearchResults";

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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userpage" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
        <Route path="/usermanagementpage" element={<ProtectedRoute><UserManagementPage /></ProtectedRoute>} />
        <Route path="/bookmanagementpage" element={<ProtectedRoute><BookManagementPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
