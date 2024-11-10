import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <section className="container">
        <div className="text-center mb-12">
          <h1 className="title">Let's Connect</h1>
          <p className="subtitle">
            Reach Out & Let's Make Something Amazing Together!
          </p>
        </div>
        <div className="form-container">
          <div className="flex">
            <div className="input-group">
              <div>
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input type="text" id="name" name="name" className="input" />
              </div>
            </div>
            <div className="input-group">
              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input type="email" id="email" name="email" className="input" />
              </div>
            </div>
          </div>
          <div className="input-group">
            <div>
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea id="message" name="message" className="textarea"></textarea>
            </div>
          </div>
          <div className="button-container">
            <button className="button">Send</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
