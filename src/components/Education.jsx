import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaUniversity,
  FaCalendar,
} from "react-icons/fa";

import "../styles/education.css";

const Education = () => {
  const [previewSrc, setPreviewSrc] = useState(null);

  // ✅ EDUCATION DATA (ARRAY)
  const educationList = [
    {
      degree: "BE in Electronics and Communication Engineering",
      institution: "JSS Academy of Technical Education",
      cgpa: "7.58",
      duration: "2022 - 2025",
      location: "Bengaluru, India",
      highlights: [
        "Completed Electronics and Communication Engineering with strong technical fundamentals.",
        "Developed interest in Cloud Computing and DevOps during academics.",
        "Gained hands-on experience with Linux, AWS, and automation tools.",
        "Focused on practical, project-based learning.",
      ],
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "Government Polytechnic College Siddapur",
      cgpa: "Completed",
      duration: "2019 - 2022",
      location: "Siddapur (U.K), Karnataka, India",
      highlights: [
  "Completed a Diploma in Electronics and Communication Engineering, which built my core technical foundation.",
  "Learned essential subjects such as digital electronics, networking basics, and microcontrollers.",
  "Developed strong interest in practical labs and real-world problem-solving.",
  "This diploma played a key role in shaping my decision to pursue engineering and IT-related technologies.",
   ],
    },
  ];

  // Certifications (hidden for now)
  const certifications = [];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-content">
          <div className="education-main">
            {educationList.map((edu, index) => (
              <div className="degree-card" key={index}>
                <div className="degree-header">
                  <FaGraduationCap className="degree-icon" />
                  <div className="degree-info">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <div className="institution-info">
                      <FaUniversity className="institution-icon" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>

                <div className="degree-details">
                  <div className="detail-item">
                    <span className="detail-label">CGPA:</span>
                    <span className="detail-value">{edu.cgpa}</span>
                  </div>

                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span className="detail-value">{edu.duration}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{edu.location}</span>
                  </div>
                </div>

                <div className="degree-highlights">
                  <h4>Academic Highlights</h4>
                  <ul>
                    {edu.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CERTIFICATIONS HIDDEN */}
          {false && (
            <div className="certifications-section">
              <h3 className="certifications-title">
                <FaCertificate className="cert-title-icon" />
                Professional Certifications
              </h3>

              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="certification-card"
                    onClick={() => setPreviewSrc(cert.certificateImage)}
                  >
                    <div className="cert-header">
                      <cert.icon
                        className="cert-icon"
                        style={{ color: cert.color }}
                      />
                      <div className="cert-info">
                        <h4 className="cert-title">{cert.title}</h4>
                        <p className="cert-issuer">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="cert-description">{cert.description}</p>
                    <br />
                    <p className="cert-description">Tap to see</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal disabled */}
      {false && previewSrc && (
        <div className="certificate-modal" onClick={() => setPreviewSrc(null)}>
          <div
            className="certificate-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={previewSrc} alt="Certificate Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
