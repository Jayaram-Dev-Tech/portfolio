// *******~ Import ~******** //
//? React
import { useState } from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Player } from "@lottiefiles/react-lottie-player";
import AboutLottie from "./img/slide.json";
//? Components
import Contact from "../../../contact/contact";
//? CSS
import "./about.scss";
//? Images

//? JSON File

//? Icons
// import { FaHtml5 } from "react-icons/fa";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdOutlineContacts } from "react-icons/md";

// *******~ Import ~******** //

const About = () => {
  const [Contactshow, setContactshow] = useState(false);

  const ContacthandleShow = () => setContactshow(true);
  const AboutContent = [
    "I am currently a Mobile App Developer with over 1 year of experience, having worked on multiple cross-platform projects using React Native and Flutter to build seamless and responsive mobile applications.",
    "Prior to this, I worked as a React JS Developer for 1 year, during which I was involved in several web development projects. I leveraged modern tools and libraries such as React.js, React Router, Bootstrap, Material UI, SASS, and React Icons to build interactive and dynamic web applications.",
    "I bring a strong understanding of JavaScript, HTML, and CSS, and have hands-on experience in translating UI/UX designs into pixel-perfect, user-friendly interfaces for both mobile and web platforms.",
    "I ensure responsive design and cross-device compatibility, utilizing Flexbox, Grid, and media queries to maintain consistent layouts across various screen sizes.",
    "I effectively manage project codebases using Git and GitHub, promoting clean version control practices and collaborative development.",
  ];
  return (
    <>
      <span id="about"></span>
      <section className="about-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xxl={5} md={8} lg={5}>
              <div className="lottie-ani" data-aos="fade-up">
                <Player autoplay loop src={AboutLottie}></Player>
              </div>
            </Col>
            <Col xxl={7} md={12} lg={7}>
              <div className="heading">
                <h2 data-aos="fade-up">About Me</h2>
                <p data-aos="fade-up">
                  “Crazy <span>Mobile App Developer</span> Who Wants to Explore
                  Every Tech Staks”
                </p>
              </div>
              <ul>
                {AboutContent.map((data, index) => (
                  <>
                    <li key={index} data-aos="fade-up">
                      <VscDebugBreakpointLog /> <p>{data}</p>
                    </li>
                  </>
                ))}
              </ul>
              <button onClick={ContacthandleShow}>
                <MdOutlineContacts />
                Contact Me
              </button>
              {/* <div className="icons-div">
                <ul>
                  <li>
                    <FaHtml5 />
                    HTML
                  </li>
                </ul>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      <Contact Contactshow={Contactshow} setContactshow={setContactshow} />
    </>
  );
};
export default About;
