// *******~ Import ~******** //
//? React
import { useState } from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
//? Components

//? CSS
import "./experiences.scss";
//? Images

//? JSON File

//? Icons
// import { MdWorkHistory } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
// *******~ Import ~******** //

const Experiences = () => {
  const [key, setKey] = useState("exp2");
  const ExpLists = [
    {
      Role: "React Js Developer",
      OrgName: "Fusion Innovative., Chennai",
      Duration: "- Jan 2023 to Dec 2023",
      Url: {
        Path: "https://fusioninnovative.com/",
        Name: "- www.fusioninnovative.com",
      },
      Responsibilitys: [
        "Developing highly interactive front-end user interfaces for web applications with a responsive layout using HTML, CSS, JavaScript, Bootstrap and various other libraries and frameworks.",
        "Ensured cross-browser compatibility and responsiveness using media queries and flexbox layouts.",
      ],
    },
    {
      Role: "Mobile App Developer",
      OrgName: "Digital Wordings., Chennai",
      Duration: "- Apr 2024 to Still",
      Url: {
        Path: "https://www.digitalwordings.com/",
        Name: "- www.digitalwordings.com",
      },
      Responsibilitys: [
        "Developing highly interactive and user-friendly mobile applications for both Android and iOS platforms using React Native, Flutter, and other cross-platform technologies.",
        "Ensured consistent performance and responsive design across a wide range of mobile devices using Flexbox layouts, platform-specific optimizations, and adaptive styling.",
      ],
    },
  ];
  return (
    <>
      <span id="experiences"></span>
      <section className="experiences-section">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading">
                <h2 data-aos="fade-up">Professional Experience</h2>
                <p data-aos="fade-up">
                  Experienced Mobile App Developer proficient in building
                  responsive and
                  <br /> visually engaging cross-platform mobile applications.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xxl={8} md={10} lg={10}>
              <div className="experience-tab-div">
                <Tabs
                  id="experience-tab"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                >
                  {ExpLists.map((explist, index) => (
                    <Tab
                      key={`exp${index + 1}`}
                      eventKey={`exp${index + 1}`}
                      title={`${index + 1}`}
                    >
                      <div className="experience-content" data-aos="fade-up">
                        <div className="header-div">
                          <div className="title-div">
                            <h3>{explist.Role}</h3>
                            <p>{explist.Duration}</p>
                          </div>
                          <div className="org-name">
                            <div className="org">
                              <h3>{explist.OrgName}</h3>
                              {explist.OrgSubName && (
                                <span>{explist.OrgSubName}</span>
                              )}
                            </div>

                            <a
                              className="stack"
                              href={explist.Url.Path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {explist.Url.Name}
                            </a>
                          </div>
                        </div>
                        <div className="roles-respons">
                          <h3>Roles and Responsibilities:</h3>

                          <ul>
                            {explist.Responsibilitys.map(
                              (Responsibility, index) => (
                                <>
                                  <li key={index}>
                                    <IoMdArrowDropright />
                                    <p>{Responsibility}</p>
                                  </li>
                                </>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Experiences;
