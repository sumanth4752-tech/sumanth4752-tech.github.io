import React from "react";
import { FaMapMarkerAlt, FaHandsHelping } from "react-icons/fa";
import "../styles/about.css";
const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              I'm a passionate engineering graduate from JSS Academy of Technical 
             Education Karnataka with a strong foundation in DevOps, cloud computing,
              and IT infrastructure. My journey in tech began with curiosity about how
               DevOps practices and cloud solutions can transform software delivery and 
               solve real-world problems.
            </p>

            <p>
              With expertise in AWS, Linux Administration, CCNA, and DevOps methodologies,
               I specialize in building automated, scalable infrastructure solutions. 
               I'm particularly drawn to DevOps culture and practices—continuous integration,
                continuous deployment, infrastructure as code, and automation—where I can streamline 
                development workflows, enhance system reliability, and bridge the gap between development 
                and operations teams.
            </p>

            <div className="personal-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Education</h3>
              <p>BE in Electronics and Communication Engineering</p>
              <p>CGPA: 7.58</p>
            </div>

            <div className="highlight-card">
              <p>Diploma in Electronics and Communication Engineering</p>
              <p>Percentage: 70.34%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
