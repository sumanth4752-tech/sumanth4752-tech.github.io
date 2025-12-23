import React from "react";

// Font Awesome Icons
import {
  FaGithub,
  FaMicrochip,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa";

// Simple Icons
import {
  SiArduino,
  SiJavascript,
  SiAmazondynamodb,
  SiAmazonapigateway,
  SiAmazoniam,
} from "react-icons/si";

// Game Icons
import { GiElectric, GiNetworkBars } from "react-icons/gi";

import "../styles/project.css";

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Tracker – Monthly Budget",
      description:
        "A personal finance management web application that helps users track monthly income and expenses with real-time balance calculation. The system provides category-wise spending insights, independent month tracking, and budget alerts to improve financial awareness.",
      technologies: [
        { name: "HTML", icon: FaHtml5, color: "#e34f26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
        { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
        { name: "AWS Lambda", icon: FaAws, color: "#ff9900" },
        { name: "Amazon DynamoDB", icon: SiAmazondynamodb, color: "#4053d6" },
        {name: "Amazon API Gateway", icon: SiAmazonapigateway, color: "#ff4f8b" },
        { name: "AWS IAM", icon: SiAmazoniam, color: "#dd344c" },
      ],
      features: [
        "Easily add your monthly income and daily expenses without any complexity",
        "Instantly see how much money is left after each expense",
        "Understand your spending better with clear, category-wise expense views",
        "Receive friendly alerts when your spending starts reaching set budget limits",
        "Keep each month’s budget separate so tracking stays organized",
        "Access your financial data anytime through a secure online system",
        "Safely store your information with reliable cloud-based services",
        "Designed to grow in the future with more features and users",
      ],
      liveLink:
        "https://sumanth4752-tech.github.io/Financial-Tracker-Monthly-Budget-Management-System/",
      githubLink:
        "https://github.com/sumanth4752-tech/Financial-Tracker-Monthly-Budget-Management-System",
      category: "Cloud Project",
    },
    {
      title: "Advanced Vehicle Headlight Automation with Environmental Sensing",
      description:
        "As part of my Bachelor of Engineering final year project, I developed an Advanced Vehicle Headlight Automation System focused on improving road safety through intelligent and automatic light control. The system automatically activates headlights in low-light conditions and dynamically switches between high and low beams to reduce glare for oncoming vehicles.",
      technologies: [
        { name: "Embedded Systems", icon: FaMicrochip, color: "#4caf50" },
        { name: "Microcontrollers", icon: SiArduino, color: "#00979D" },
        { name: "Sensors", icon: GiElectric, color: "#ff9800" },
        { name: "IoT Concepts", icon: GiNetworkBars, color: "#0a66c2" },
        { name: "Automation", icon: FaTools, color: "#607d8b" },
      ],
      features: [
        "Automatically adjusts headlights based on surrounding light conditions",
        "Switches between high and low beams to avoid glare for other drivers",
        "Detects nearby vehicles using environmental sensing",
        "Improves visibility and safety during night driving",
        "Reduces driver effort by automating headlight control",
      ],
      githubLink:
        "https://github.com/sumanth4752-tech/Advanced-Vehicle-Headlight-Automation-with-Environmental-Sensing",
      category: "Academic Project",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <div key={tech.name} className="tech-item">
                      <tech.icon style={{ color: tech.color }} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              {project.githubLink && (
                <div className="project-links center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaGithub /> View on GitHub
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
