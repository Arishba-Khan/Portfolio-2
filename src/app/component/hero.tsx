"use client";
import Image from "next/image";
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-container-row">
            <h1 className="hero-title">
              Hi, I am 
              <br />
              <br className="line-break" />
              WEB DEVELOPER
            </h1>
            <p className="hero-description">
              Crafting clean, functional websites and intuitive user
              experiences. Focused on creating designs that are both visually
              appealing and easy to navigate, ensuring every digital interaction
              feels effortless.
            </p>
            <div className="button-container">
              <a href="/assets/Cv.docx">
                <button className="download-button">
                  
                  About My Work
                </button>
              </a>
            </div>
          </div>

          <div className="image-container">
            <div className="image-wrapper">
              <Image
                className="object-cover object-center"
                width={500}
                height={500}
                alt="hero"
                src="/assets/pp.jpg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
