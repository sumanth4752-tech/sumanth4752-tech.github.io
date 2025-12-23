import React from "react";

// Icons used in Internship section
import { 
  FaExternalLinkAlt, 
  FaMicrochip, 
  FaTools,
  FaWifi
} from "react-icons/fa";

import { SiArduino } from "react-icons/si";
import { GiElectric } from "react-icons/gi";

import "../styles/project.css";

const Internship = () => {
  const internships = [
    {
      title: "Contriver",
      description:
        "Completed an internship at Contriver in the Testing & Development department, where I worked on IoT and embedded system projects. Gained hands-on experience with microcontrollers, sensors, and embedded programming while designing, testing, and analyzing smart system solutions.",
      technologies: [
        { name: "Embedded Systems", icon: FaMicrochip, color: "#4caf50" },
        { name: "Microcontrollers", icon: SiArduino, color: "#00979D" },
        { name: "Sensors & Actuators", icon: GiElectric, color: "#ff9800" },
        { name: "Internet of Things (IoT)", icon: FaWifi, color: "#0a66c2" },
        { name: "Testing & Development", icon: FaTools, color: "#607d8b" },
      ],
      features: [
        "Designed and tested IoT-based embedded projects using microcontrollers and sensors",
        "Implemented basic automation logic using embedded programming concepts",
        "Worked with real-time device data to analyze system behavior",
        "Collaborated with the testing team to ensure hardware reliability and performance",
        "Gained practical exposure to real-world IoT and embedded system workflows",
      ],
      certificate:
        "https://drive.google.com/file/d/1qcf0YRfULi7CSUtfjvhEse73p2CGWI_F/view?usp=drivesdk",
      category: "Internship",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="projects-grid">
          {internships.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <tech.icon style={{ color: tech.color, fontSize: "22px" }} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a
                  href={project.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaExternalLinkAlt />
                  Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
