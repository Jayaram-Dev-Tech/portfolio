// *******~ Import ~******** //
//? React

import React, { useState } from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//? Components
import Contact from "../../pages/contact/contact";
//? CSS
import "./footer.scss";
//? Images
import Photo from "./img/jayaram1.jpg";
//? JSON File

//? Icons
import { IoHeart } from "react-icons/io5";

// *******~ Import ~******** //

const Footer = () => {
  const [Contactshow, setContactshow] = useState(false);
  const ContacthandleShow = () => setContactshow(true);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <footer className="footer">
        <section className="hire-me">
          <Container>
            <Row className="justify-content-center">
              <Col xxl={10} xl={9} md={11}>
                <div className="hire-div">
                  <div className="bg-color-div"></div>
                  <Image src={Photo} fluid className="profile" />
                  <h2>
                    Let’s Work Together On Your
                    <br />
                    Organization!
                  </h2>
                  <button onClick={ContacthandleShow}>Hire Me Now!</button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="copy-right">
          <Container>
            <Row>
              <Col xxl={12}>
                <p>
                  &copy; {new Date().getFullYear()}, Made With <IoHeart /> by{" "}
                  <a
                    title="linkedin"
                    href="https://www.linkedin.com/in/jayaramchinnaiyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jayaraman S
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
      <Contact Contactshow={Contactshow} setContactshow={setContactshow} />
    </>
  );
};
export default Footer;
