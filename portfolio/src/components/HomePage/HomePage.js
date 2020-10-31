import React from "react";
import "./HomePage.css";
import BlueLine from "../UI/BlueLine/BlueLine";
import { Row, Col, Card } from "reactstrap";
import Progress from "react-circle-progress-bar";
import Projects from "./Projects/Projects";

const projects = [
  {
    name: "Workout App",
    link: "https://github.com/dikshitkumarn/Daily-Workout",
  },
  { name: "Weather App", link: "https://github.com/dikshitkumarn/weatherapp" },
  {
    name: "Burger App",
    link: "https://github.com/dikshitkumarn/Burger-Builder",
  },
];

const HomePage = (props) => {
  const gotoEmail = (e) => {
    e.preventDefault();
    window.open("mailto:dikshitkumarn@gmail.com");
  };

  const goto = (e) => {
    if (e.target.name === "facebook") {
      window.open("https://www.facebook.com/dikshit.dikshit.503", "_blank");
    } else if (e.target.name === "instagram") {
      window.open("https://www.instagram.com/dikshit_619/", "_blank");
    } else if (e.target.name === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/dikshitkumar-n-1713721a5/",
        "_blank"
      );
    }
  };

  return (
    <div className="content">
      <div id="home">
        <div className="img-1-container">
          <img
            src={require("../../assets/svg/developer.svg")}
            alt=" "
            className="img-1 img"
          />
        </div>
        <div className="Intro-container">
          <h1>Hello, I am Dikshitkumar</h1>
          <h4>React JS Developer</h4>
          <div className="social-media">
            <img
              src={require("../../assets/social-icons/facebook.svg")}
              alt=" "
              name="facebook"
              onClick={goto}
            />
            <img
              src={require("../../assets/social-icons/linkedin.svg")}
              alt=" "
              name="linkedin"
              onClick={goto}
            />
            <img
              src={require("../../assets/social-icons/instagram.svg")}
              alt=" "
              name="instagram"
              onClick={goto}
            />
          </div>
        </div>
      </div>
      <div id="aboutme" className="give-top-space">
        <Row className="zero">
          <div className="Heading">
            <h1>About Me</h1>
            <BlueLine />
            <p>What I do ?</p>
          </div>
          <Col lg="6" md="12" sm="12" xs="12">
            <img
              src={require("../../assets/svg/developing.svg")}
              alt=" "
              className="img"
            />
          </Col>
          <Col lg="6" md="12" sm="12" xs="12">
            <p>
              I am a React js developer.
              <br /> I develop websites that are faster, responsive, and really
              awesome to interact with.
              <br /> Practicing to perfect with what I know.
            </p>
          </Col>
        </Row>
      </div>
      <div id="whatiknow" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1>Knowledge</h1>
            <BlueLine />
            <p>What I Know ?</p>
          </div>
          <div className="Progress">
            <Progress
              progress={75}
              gradient={[
                { stop: 0.0, color: "#216AEC" },
                { stop: 1, color: "#343A40" },
              ]}
            />
            <p>React JS</p>
          </div>
          <div className="Progress">
            <Progress
              progress={50}
              gradient={[
                { stop: 0.0, color: "#216AEC" },
                { stop: 1, color: "#343A40" },
              ]}
            />
            <p>CSS</p>
          </div>
          <div className="Progress">
            <Progress
              progress={50}
              gradient={[
                { stop: 0.0, color: "#216AEC" },
                { stop: 1, color: "#343A40" },
              ]}
            />
            <p>Javascript</p>
          </div>
        </Row>
      </div>
      <div id="projects" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1 className="bold">Projects</h1>
            <BlueLine />
            <p>What I did ?</p>
          </div>
          <Projects projects={projects} />
        </Row>
      </div>
      <div id="experience" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1 className="bold">Experience</h1>
            <BlueLine />
            <p>What am I going on ?</p>
          </div>
          <Card
            className="Project"
            body
            onClick={() => window.open("https://nanbanconnect.tech", "_blank")}
          >
            <Col>
              <h4>Intern At Nanban Tech Ventures</h4>
            </Col>
          </Card>
          <Card
            className="Project"
            body
            onClick={() => window.open("https://leora.co", "_blank")}
          >
            <Col>
              <h4>Front-End Developer</h4>
            </Col>
          </Card>
        </Row>
      </div>
      <div id="contact" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1 className="bold">Contact</h1>
            <BlueLine />
          </div>
          <Col
            lg="4"
            md="12"
            sm="12"
            xs="12"
            onClick={gotoEmail}
            style={{ cursor: "pointer" }}
          >
            <h4>Email</h4>
            <p>dikshitkumarn@gmail.com</p>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <h4>Contact Number</h4>
            <p>9600714338</p>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <h4>Social Media</h4>
            <div className="contact-social-media">
              <img
                src={require("../../assets/social-icons/facebook.svg")}
                alt=" "
                name="facebook"
                onClick={goto}
              />
              <img
                src={require("../../assets/social-icons/linkedin.svg")}
                alt=" "
                name="linkedin"
                onClick={goto}
              />
              <img
                src={require("../../assets/social-icons/instagram.svg")}
                alt=" "
                name="instagram"
                onClick={goto}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="give-top-space"></div>
    </div>
  );
};

export default HomePage;
