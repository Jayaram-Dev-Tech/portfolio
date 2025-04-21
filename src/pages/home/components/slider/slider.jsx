// *******~ Import ~******** //
//? React
import { useState } from "react";
//? Assets
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Player } from "@lottiefiles/react-lottie-player";
import AboutLottie from "./img/slider1.json";
import { Link } from "react-router-dom";
//? Components
// import myResumePDF from "../../../../common/assets/jayaram-UI-Developer.pdf";
import Contact from "../../../contact/contact";
// import Social from "../social";
// CSS
import "./slider.scss";
// Images
// import SliderImg from "./img/slide.png";

//? JSON File

//? Icons

// import { GrDocumentDownload } from "react-icons/gr";
import { MdOutlineContacts } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

// *******~ Import ~******** //

const Slider = () => {
  const [Contactshow, setContactshow] = useState(false);

  const ContacthandleShow = () => setContactshow(true);
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = myResumePDF;
  //   link.download = "Jayaram UI Developer.pdf";
  //   link.click();
  // };

  return (
    <>
      <section className="slider">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xxl={6} md={6}>
              <span className="sub-title">WELCOME TO MY WORLD</span>
              <h1>
                Hi, I’m Jayaraman s <br />a{" "}
                <span>
                  <Typewriter
                    options={{
                      strings: ["Mobile App Developer", "React js Developer"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 0,
                      delay: 10,
                      pauseFor: 3000,
                      cursor: "",
                    }}
                  />
                </span>
              </h1>
              {/* <p>
                "Having over <span>1 year of experience</span> in building web
                applications with a responsive layout using
                <span>
                  {" "}
                  HTML5, CSS3, JavaScript, React.js, JQuery, SASS, Bootstrap{" "}
                </span>
                and various other libraries and frameworks."
              </p> */}
              <p>
                Having over <span>1 year of experience</span> in developing
                mobile applications as well as <span>1 year of experience</span>{" "}
                in building dynamic web applications using{" "}
                <span>
                  HTML, CSS, JavaScript, React.js, jQuery, SASS, Bootstrap,
                  React Native, and Flutter{" "}
                </span>
                to deliver responsive and user-friendly interfaces across
                platforms.
              </p>

              <div className="btn-grp">
                <button onClick={ContacthandleShow}>
                  <MdOutlineContacts />
                  Contact Me
                </button>
                {/* <button onClick={handleDownload}>
                  <GrDocumentDownload /> Download CV
                </button> */}
                <Link to="/project">
                  <CgFileDocument /> My Project
                </Link>
              </div>
              {/* <Social /> */}
            </Col>
            <Col xxl={5} md={6}>
              {/* <Image src={SliderImg} fluid alt="" title="" /> */}
              <div className="lottie-ani">
                <Player autoplay loop src={AboutLottie}></Player>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Contact Contactshow={Contactshow} setContactshow={setContactshow} />
    </>
  );
};
export default Slider;
