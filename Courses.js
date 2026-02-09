import React from "react";
import dataScienceImg from "../images/data science.png";
import javaImg from "../images/java.png";
import pythonImg from "../images/python.png";
import reactImg from "../images/react.png";

function Courses() {
  const courses = [
    {
      title: "Full Stack Java Development",
      price: "₹25,000",
      duration: "3 Months",
      img: javaImg,
      description: `This course covers complete Java programming from basics to advanced.
You will learn core Java, OOP concepts, JDBC, Servlets, JSP, and Spring framework.
It also includes hands-on projects and real-world application development.
By the end, you will be confident to build enterprise-level Java applications.`
    },
    {
      title: "Python Full Stack Development",
      price: "₹30,000",
      duration: "4 Months",
      img: pythonImg,
      description: `Learn Python programming along with front-end and back-end development.
The course covers Python, Django, Flask, HTML, CSS, JavaScript, and database integration.
You will build full-stack web applications and APIs with practical projects.
This program prepares you for professional Python developer roles.`
    },
    {
      title: "Data Science & Machine Learning",
      price: "₹35,000",
      duration: "3 Months",
      img: dataScienceImg,
      description: `Master data analysis, visualization, and machine learning using Python.
The course includes pandas, NumPy, Matplotlib, scikit-learn, and real datasets.
You will learn to build predictive models and perform exploratory data analysis.
By completion, you will be ready to work on data science projects confidently.`
    },
    {
      title: "React.js Frontend Development",
      price: "₹15,000",
      duration: "1 Month",
      img: reactImg,
      description: `Learn to build dynamic and responsive web applications using React.js.
The course covers JSX, components, props, state, hooks, and routing.
You will create modern single-page applications and reusable UI components.
Hands-on projects help you gain professional front-end development skills.`
    }
  ];

  return (
    <div>
      <h2 className="section-title">Our Courses</h2>
      {courses.map((course, index) => (
        <div className="course-row" key={index}>
          <img src={course.img} alt={course.title} />
          <div className="course-info">
            <h3>{course.title}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p style={{ whiteSpace: "pre-line" }}>{course.description}</p>
            <p className="price">{course.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
