// *******~ Import ~******** //
//? React
import React, { useEffect, useState } from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
//? Components
import ProjectData from "./projectdata";
//? CSS
import "./project.scss";
//? Images

//? JSON File

//? Icons
import { IoIosArrowDropright } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import { PiPlaceholderBold } from "react-icons/pi";
import { TbProgressBolt } from "react-icons/tb";
import { IoIosArrowDropleft } from "react-icons/io";
// import { IoIosArrowDropright } from "react-icons/io";
// *******~ Import ~******** //

const Project = () => {
  const itemsPerPage = 6; // Adjust the number of items per page as needed
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    AOS.init({});
  }, []);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = ProjectData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className="project-list-page">
        <Container>
          <Row className="justify-content-center">
            <Col xxl={8} xl={8} lg={10}>
              <div className="heading">
                <h2>Latest Project</h2>
                <p>
                  Explore my UI development prowess through a curated showcase
                  of projects, highlighting innovative designs and seamless user
                  experiences. Each project reflects my commitment to creating
                  visually stunning and functionally robust web applications.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {currentProjects.map((projectlist, index) => (
              <>
                <Col xxl={6} xl={6} lg={6}>
                  <ProjectListing projectlist={projectlist} index={index} />
                </Col>
              </>
            ))}
          </Row>
          <Row className="justify-content-center">
            <Col xl={12} md={12} xxl={12}>
              <div className="pagination">
                {/* <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <IoIosArrowDropleft />
                </button> */}
                {Array.from(
                  { length: Math.ceil(ProjectData.length / itemsPerPage) },
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={currentPage === index + 1 ? "active" : ""}
                    >
                      {index + 1}
                    </button>
                  )
                )}
                {/* <button
                  disabled={
                    currentPage === Math.ceil(ProjectData.length / itemsPerPage)
                  }
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <IoIosArrowDropright />
                </button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Project;

export function ProjectListing({ projectlist, index }) {
  const statusMap = {
    0: "Inprogress",
    1: "Completed",
    2: "Hold",
  };

  return (
    <>
      <div className="project-box" key={index} data-aos="fade-up">
        <Link to={`${projectlist.liveurl}`} target="_blank" className="img-div">
          <Image src={projectlist.banner} fluid />
          {/* <div className="overlay-shadow"></div> */}
          <span>{projectlist.type}</span>
          <div className="content-data">
            <h1>{projectlist.title}</h1>
          </div>
        </Link>
        <div className="content">
          {/* <p className="desc">{truncateDescription(projectlist.disc, 70)}</p> */}
          <ul>
            {projectlist.tech.map((tec, index) => (
              <>
                <li key={index}>
                  <Image src={tec} fluid />
                </li>
              </>
            ))}
          </ul>
          <div className="duration">
            <p className="time">
              <span>Duration:</span> {projectlist.date.startdate} to{" "}
              {projectlist.date.enddate}
            </p>
            <p
              className={`status ${statusMap[
                projectlist.status
              ]?.toLowerCase()}`}
            >
              {projectlist.status === 0 ? (
                <TbProgressBolt />
              ) : projectlist.status === 1 ? (
                <MdDone />
              ) : (
                projectlist.status === 2 && <PiPlaceholderBold />
              )}
              {statusMap[projectlist.status] || "Unknown Status"}
            </p>
          </div>

          <div className="footer-div">
            {projectlist.liveurl.length === 0 ? (
              <a className="live-demo not-avil">URL Not Available</a>
            ) : (
              <a
                className="live-demo"
                href={projectlist.liveurl}
                target="_blank"
                rel="noopener noreferrer"
                title={projectlist.liveurl}
              >
                <TbWorld /> Live Demo
              </a>
            )}

            {/* <Link className="readmore-btn" to={`/project/${projectlist.path}`}>
              More Details <IoIosArrowDropright />
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
