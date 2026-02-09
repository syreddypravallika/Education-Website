import React from "react";
function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2 className="logo">EduAcademy</h2>

      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("courses")}>Courses</button>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("register")}>Register</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;

