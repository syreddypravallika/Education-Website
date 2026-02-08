import React, { useEffect, useRef } from "react";
import homeImg from "../images/home.png";

function Home({ setPage }) {
  const featureRefs = useRef([]);
  const certRef = useRef(null);

  useEffect(() => {
    const reveal = () => {
      featureRefs.current.forEach((el) => {
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top < window.innerHeight - 80) el.classList.add("show");
        }
      });

      if (certRef.current) {
        const top = certRef.current.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) certRef.current.classList.add("show");
      }
    };

    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const features = [
    {
      title: "Real-Time Projects",
      lines: [
        "Provides hands-on experience through projects based on industry requirements.",
        "Facilitates development of professional portfolios with practical applications."
      ]
    },
    {
      title: "Expert Trainers",
      lines: [
        "Conducted by certified professionals with extensive industry experience.",
        "Focus on both technical skills and professional development."
      ]
    },
    {
      title: "Placement Support",
      lines: [
        "Includes guidance for resume preparation and interview practice sessions.",
        "Offers support for career advancement and employment opportunities."
      ]
    },
    {
      title: "Flexible Batches",
      lines: [
        "Multiple batch options including weekday and weekend schedules.",
        "Designed to accommodate working professionals and academic schedules."
      ]
    }
  ];

  return (
    <div className="home">

      {/* Main Section with Image */}
      <div className="main-section">
        <div className="main-text">
          <h1>Learn Industry-Relevant Skills at EduAcademy</h1>
          <p>
            Comprehensive training programs with practical projects and career support,
            designed to empower professionals and students with real-world expertise.
          </p>
          <button onClick={() => setPage("courses")} className="primary-btn">
            Explore Courses
          </button>
        </div>

        <div className="main-image-container">
          <img src={homeImg} alt="EduAcademy Training" className="short-image" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About EduAcademy</h2>
        <p>
          EduAcademy is a leading educational institute specializing in professional skill development and
          career-oriented training. The curriculum is designed with industry collaboration, ensuring all
          courses provide practical exposure, real-time projects, and mentorship from certified experts.
        </p>
        <p>
          The institute emphasizes holistic development, combining technical knowledge with professional
          skills like communication, problem-solving, and teamwork. EduAcademy consistently delivers
          training that prepares graduates for immediate contribution in professional environments.
        </p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        {features.map((item, index) => (
          <div
            className="feature-card"
            key={index}
            ref={(el) => (featureRefs.current[index] = el)}
          >
            <h3>{item.title}</h3>
            {item.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Certification Section */}
      <div className="certification-section" ref={certRef}>
        <h2>Certification Programs</h2>
        <p>
          EduAcademy provides globally recognized certifications upon completion of each course. These
          certifications validate technical expertise, practical project experience, and professional readiness.
        </p>
        <p>
          Each certification is designed to demonstrate industry-relevant skills, improving employability
          and enhancing professional profiles. Multiple certifications can be earned across different domains.
        </p>
      </div>

     {/* Footer Section */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <h3>EduAcademy</h3>
    </div>
    <div className="footer-contact">
      <p>
        Email: <a href="mailto:info@eduacademy.com">info@eduacademy.com</a>
      </p>
      <p>
        Phone: <a href="tel:+919876543210">+91 98765 43210</a>
      </p>
      <p>
        Address: <a href="https://goo.gl/maps/YOUR_MAPS_LINK" target="_blank" rel="noopener noreferrer">
          KPHB Colony, Kukatpally, Hyderabad, Telangana – 500072
        </a>
      </p>
    </div>
  </div>
  <p className="footer-bottom">© 2026 EduAcademy. All rights reserved.</p>
</footer>

    </div>
  );
}

export default Home;




