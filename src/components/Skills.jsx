// src/components/Skills.jsx
import React from "react";
// stable FontAwesome icons (Fa...) and others
import {
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaTerminal,
  FaCloud,
} from "react-icons/fa";

import {
  FaAws,
  FaServer,
  FaDatabase,
  FaNetworkWired,
  FaUserShield,
  FaExchangeAlt,
  FaEye,
} from "react-icons/fa";

import { TbLambda } from "react-icons/tb"; // <-- WORKING LAMBDA ICON

import {
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiNginx,
  SiPython,
  SiRedhat,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import "../styles/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps Tools & Platforms",
      // using a stable generic cloud icon for AWS-related entries
      skills: [
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Kubernetes(Learning)", icon: SiKubernetes, color: "#326CE5" },
        { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
        { name: "Terraform (Learning)", icon: SiTerraform, color: "#844FBA" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
        { name: "Grafana", icon: SiGrafana, color: "#F46800" },
        { name: "Nginx (Learning)", icon: SiNginx, color: "#009639" },
      ],
    },

    {
      title: "Cloud & AWS Services",
      skills: [
       { name: "AWS", icon: FaAws, color: "#FF9900" },
       { name: "EC2", icon: FaServer, color: "#FF9900" },
       { name: "S3", icon: FaDatabase, color: "#569A31" },
       { name: "VPC", icon: FaNetworkWired, color: "#FF9900" },
       { name: "IAM", icon: FaUserShield, color: "#3B3B3B" },
       { name: "API Gateway", icon: FaExchangeAlt, color: "#FF4F8B" },
       { name: "Lambda", icon: TbLambda, color: "#F37C20" },  // ✔ FIXED
       { name: "DynamoDB", icon: FaDatabase, color: "#4053D6" },
       { name: "CloudWatch", icon: FaEye, color: "#FF4F8B" },

      ],
    },

    {
      title: "Operating Systems & Scripting",
      skills: [
        { name: "Linux", icon: FaLinux, color: "#FCC624" },
        { name: "RedHat", icon: SiRedhat, color: "#EE0000" },
        { name: "Shell Scripting(Learning)", icon: FaTerminal, color: "#4EAA25" },
        { name: "Python Scripting(Learning)", icon: SiPython, color: "#3776AB" },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        {Icon ? (
                          <Icon className="skill-icon" style={{ color: skill.color }} />
                        ) : (
                          <span className="skill-icon-placeholder" />
                        )}
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="leetcode-stats">
          <div className="stats-card">
            <h3>DevOps Journey</h3>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-number">Hands-On</span>
                <span className="stat-label">AWS • Linux • CI/CD</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Projects</span>
                <span className="stat-label">Deployments & Automation</span>
              </div>
            </div>
            <p className="stats-description">
              Skilled in cloud infrastructure, CI/CD pipelines, container orchestration,
              monitoring, automation, and Linux server administration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
