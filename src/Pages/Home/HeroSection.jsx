import React from "react";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title"> Hey, I'm Sara</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Junior Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Aspiring Junior Software Developer with a passion for innovation and
            a solid foundation in Full Stack Development.
            <br />
            I'm eager to bring creativity and problem-solving skills to dynamic
            tech projects.
            <br />
            Let's connect and build impactful solutions together!
          </p>
        </div>
        <Link
          to="Contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-primary"
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/Sara.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
