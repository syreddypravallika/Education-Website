import React, { useState } from "react";

function Enroll({ selectedCourse, setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enrolled successfully in ${selectedCourse.title}!\nName: ${name}\nEmail: ${email}`);
    setPage("courses"); // Go back to courses after enrollment
  };

  if (!selectedCourse) {
    return <p>No course selected!</p>;
  }

  return (
    <div>
      <h2>Enroll in {selectedCourse.title}</h2>
      <p><strong>Duration:</strong> {selectedCourse.duration}</p>
      <p><strong>Price:</strong> {selectedCourse.price}</p>
      <p style={{ whiteSpace: "pre-line" }}>{selectedCourse.description}</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Confirm Enrollment</button>
        <button type="button" onClick={() => setPage("courses")} style={{ marginLeft: "10px" }}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Enroll;
