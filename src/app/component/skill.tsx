import React from "react";
import "./Skill.css"; // Importing the custom CSS file

const Skill = () => {
  const skills = [
    { name: "UI/UX Designing", progress: 70, color: "gradient-1" },
    { name: "Web Development", progress: 60, color: "gradient-2" },
    { name: "MS Automation", progress: 85, color: "gradient-3" },
    { name: "Adobe Video Editing Tools", progress: 80, color: "gradient-4" },
  ];

  return (
    <div id="skill" className="skill-container">
      <div className="skill-wrapper">
        <h4 className="skill-title">Skills</h4>

        {/* Display skills */}
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-progress">{skill.progress}%</span>
            </div>

            <div className="skill-bar">
              <div
                className={`skill-bar-progress ${skill.color}`}
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
