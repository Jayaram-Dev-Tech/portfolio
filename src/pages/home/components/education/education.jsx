// *******~ Import ~******** //
//? React
import React, { useEffect } from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
//? Components

//? CSS
import "./education.scss";
//? Images

//? JSON File

//? Icons
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
// *******~ Import ~******** //

const Education = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const EducationList = [
    {
      title: "B.Tech (Mechanical Engineering ) - 2019 to 2022",
      study: "SRM institute of science and technology.",
      location: "Chennai.",
      mark: "7.65",
    },
    {
      title: "Diploma – 2016",
      study: "V Ramakrishna Polytechnic college.",
      location: "Chennai.",
      mark: "56",
    },
    {
      title: "SSLC – 2013",
      study: "Velammal, Higher Secondary School.",
      location: "Chennai.",
      mark: "78",
    },
  ];

  return (
    <>
      <span id="educational"></span>
      <section className="education-section">
        <Container>
          <Row className="justify-content-center">
            <Col xxl={12}>
              <div className="heading">
                <h2 data-aos="fade-up">Educational</h2>
                <p data-aos="fade-up">
                  My academic journey has equipped me with the knowledge to
                  <br /> excel in the role of UI Developer
                </p>
              </div>
            </Col>
            <Col xxl={8} md={10} lg={8}>
              <Accordion defaultActiveKey={0}>
                {EducationList.map((list, index) => (
                  <Accordion.Item
                    eventKey={index}
                    id={index}
                    data-aos="flip-up"
                  >
                    <Accordion.Header>
                      <span>
                        <FaGraduationCap />
                      </span>

                      <span>{list.title}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        <span>
                          <FaUniversity />
                        </span>
                        <span>{list.study}</span>
                      </p>
                      <p>
                        <span>
                          <FaLocationDot />
                        </span>
                        <span>{list.location}</span>
                      </p>
                      <p>
                        <span>
                          <FaAward />
                        </span>

                        <span>
                          {list.mark === "7.65"
                            ? list.mark + " CGPA."
                            : list.mark + "% of Marks."}
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Education;
