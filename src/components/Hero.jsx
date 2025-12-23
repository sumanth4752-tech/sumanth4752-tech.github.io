import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  FaLinux,
  FaTerminal,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaRedhat,
  FaAws,     // AWS icon – always available in all versions
} from "react-icons/fa";

import {
  SiKubernetes,
  SiAnsible,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiNginx,
} from "react-icons/si";

import "../styles/hero.css";
import { IoDocumentText } from "react-icons/io5";

// 🔥 Use a safe filename that always works
import profileImage from "../assets/Sumanth_P.jpg";
const Hero = () => {
  const heroRef = useRef(null);
  const iconsRef = useRef([]);

  // Typing Text Titles
  const texts = useMemo(
    () => [
      "DevOps Engineer",
      "AWS Cloud Engineer",
      "Linux Administrator",
      "Cloud Engineer",
    ],
    []
  );

  // Floating DevOps Icons
  const skillsIcons = [
    { Icon: FaAws, color: "#FF9900", name: "AWS" },
    { Icon: FaLinux, color: "#FCC624", name: "Linux" },
    { Icon: FaRedhat, color: "#CC0000", name: "RedHat" },
    { Icon: FaTerminal, color: "#4EAA25", name: "Shell Scripting" },
    { Icon: FaDocker, color: "#2496ED", name: "Docker" },
    { Icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
    { Icon: SiTerraform, color: "#844FBA", name: "Terraform" },
    { Icon: SiAnsible, color: "#EE0000", name: "Ansible" },
    { Icon: SiPrometheus, color: "#E6522C", name: "Prometheus" },
    { Icon: SiGrafana, color: "#F46800", name: "Grafana" },
    { Icon: FaGitAlt, color: "#F05032", name: "Git" },
    { Icon: FaGithub, color: "#181717", name: "GitHub" },
    { Icon: SiNginx, color: "#009639", name: "Nginx" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");

  // Typing Effect Animation
  useEffect(() => {
    const currentText = texts[currentIndex];
    const speed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setTypedText(
          currentText.substring(0, typedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, texts]);

  // Random Icon Placement
  const positionedIcons = useMemo(() => {
    return skillsIcons.map((item) => ({
      ...item,
      left: `${Math.random() * 85 + 5}%`,
      top: `${Math.random() * 85 + 5}%`,
      animationDelay: `${Math.random() * 2}s`,
    }));
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background Icons */}
      <div className="hero-background">
        {positionedIcons.map((item, index) => (
          <div
            key={index}
            className="floating-icon"
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.animationDelay,
            }}
          >
            <item.Icon style={{ color: item.color, fontSize: "35px" }} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-image">
            <img
              src={profileImage}
              alt="Sumanth P"
              className="profile-photo"
            />
          </div>
        </div>

        <div className="hero-right">
          <p className="wish">Hi, I'm</p>
          <h1 className="hero-title">Sumanth P</h1>

          <div className="typing-container">
            <span className="typing-text">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </div>

          <p className="hero-subtitle">
            DevOps & Cloud Engineer with hands-on experience in AWS services, 
            Linux server administration, CI/CD pipelines, Docker, Kubernetes, 
            Terraform, Ansible, Prometheus, and Grafana. Passionate about 
            automation, cloud optimization, and building scalable, reliable systems.
          </p>

          <div>
            <a
              className="btn btn-primary"
              href="https://drive.google.com/file/d/19x0LtaQi95Q7N9IsiU31E8YsvNYVQzBq/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoDocumentText style={{ marginRight: "8px" }} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
