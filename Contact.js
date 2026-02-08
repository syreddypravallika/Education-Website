import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:info@eduacademy.com">info@eduacademy.com</a>
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        <a href="tel:+919876543210">+91 98765 43210</a>
      </p>

      <p>
        <strong>Address:</strong><br />
        EduAcademy Training Institute<br />
        KPHB Colony, Kukatpally<br />
        Hyderabad, Telangana – 500072
      </p>
    </div>
  );
}

export default Contact;




