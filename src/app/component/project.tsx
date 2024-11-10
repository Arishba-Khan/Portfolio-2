import React from "react";
import Link from "next/link";
import "./Project.css";  // Importing the custom CSS file

const Project = () => {
  return (
    <div id="project">
      <section className="project-section">
        <div className="container">
          <div className="project-wrapper">
            {/* Career Craftor Project */}
            <div className="project-item">
              <Link href="https://milestone-5-one-olive.vercel.app" target="_blank">
                <div className="project-image">
                  <img
                    alt="Career Craftor"
                    className="project-img"
                    src="assets/cc.png"
                  />
                </div>
                <h2 className="project-title">Career Craftor</h2>
              </Link>
              <p className="project-description">
                Career Craftor is a dynamic, user-friendly resume builder
                designed to simplify the resume creation process.
              </p>
            </div>

            {/* Journey Journal Project */}
            <div className="project-item">
              <Link href="https://travel-guide-sand.vercel.app" target="_blank">
                <div className="project-image">
                  <img
                    alt="Journey Journal"
                    className="project-img"
                    src="/assets/jjs.png"
                  />
                </div>
                <h2 className="project-title">Journey Journal</h2>
              </Link>
              <p className="project-description">
                Journey Journal is an immersive travel guide website that
                inspires and informs travelers at every step of their journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
