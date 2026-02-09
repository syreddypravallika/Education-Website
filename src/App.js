import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [page, setPage] = useState("home");

  // Manage browser history
  useEffect(() => {
    if (page === "home") {
      // Replace history when on home → back arrow becomes light
      window.history.replaceState({ page: "home" }, "");
    } else {
      // Push state for other pages
      window.history.pushState({ page }, "");
    }
  }, [page]);

  // Listen for browser back button
  useEffect(() => {
    const handlePopState = () => {
      setPage("home");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  let content;

  if (page === "home") content = <Home setPage={setPage} />;
  else if (page === "login")
    content = <Login setPage={setPage} onLogin={() => setPage("courses")} />;
  else if (page === "register") content = <Register />;
  else if (page === "courses") content = <Courses />;
  else if (page === "contact") content = <Contact />;
  else if (page === "forgot") content = <ForgotPassword setPage={setPage} />; // NEW

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="container">{content}</div>
    </div>
  );
}

export default App;

