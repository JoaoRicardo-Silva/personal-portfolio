import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { RiAwardFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-iamge">
            <img src={ME} alt="Abou Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Undergraduates</h5>
              <small>B.Sc in Software Analysis and Development</small>
            </article>

            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>projects</h5>
              <small>1+ Years Working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
