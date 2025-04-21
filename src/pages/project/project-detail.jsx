// *******~ Import ~******** //
//? React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Helmet } from "react-helmet";
//? Components
import ProjectData from "./projectdata";
//? CSS
import "./project-details.scss";
//? Images
import DetailBg from "./img/detail-bg.jpg";
//? JSON File

//? Icons
import { IoIosArrowForward } from "react-icons/io";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { MdDone } from "react-icons/md";
import { PiPlaceholderBold } from "react-icons/pi";
import { TbProgressBolt } from "react-icons/tb";
import { IoMdArrowDropright } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
// *******~ Import ~******** //

const ProjectDetail = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openLightbox = (index) => {
    setStartIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  const { path } = useParams();
  const [Project, setProject] = useState(null);
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const foundPost = ProjectData.find((proj) => proj.path === path);
        setProject(foundPost);
      } catch (error) {
        console.log("Error fetching blog post:", error);
      }
    };

    fetchProject();
  }, [path]);

  const statusMap = {
    0: "Inprogress",
    1: "Completed",
    2: "Hold",
  };
  return (
    <>
      {Project ? (
        <>
          <MetData Project={Project} />
          <section className="project-details">
            <div className="image-div">
              <div className="overlay"></div>
              <Image src={DetailBg} alt="" />
              <div className="heading-content">
                <h5>Project Details</h5>
                <p>
                  <Link to="/project">Project</Link> <IoIosArrowForward />{" "}
                  {Project.title}
                </p>
              </div>
            </div>
            <section className="detail-section">
              <Container>
                <Row>
                  <Col xxl={8} lg={8}>
                    <div className="project-detail-div">
                      <span className="type">{Project.type}</span>
                      <div className="header-div">
                        <h4>{Project.title}</h4>
                        <ul>
                          {Project.tech.map((tec, index) => (
                            <>
                              <li key={index}>
                                <Image src={tec} fluid />
                              </li>
                            </>
                          ))}
                        </ul>
                        <div className="duration">
                          <p className="time">
                            <span>Duration:</span> {Project.date.startdate} to{" "}
                            {Project.date.enddate}
                          </p>
                          <p
                            className={`status ${statusMap[
                              Project.status
                            ]?.toLowerCase()}`}
                          >
                            {Project.status === 0 ? (
                              <TbProgressBolt />
                            ) : Project.status === 1 ? (
                              <MdDone />
                            ) : (
                              Project.status === 2 && <PiPlaceholderBold />
                            )}
                            {statusMap[Project.status] || "Unknown Status"}
                          </p>
                        </div>
                        {Project.liveurl.length === 0 ? (
                          <a className="live-demo not-avil">
                            <TbWorld /> URL Not Available
                          </a>
                        ) : (
                          <a
                            className="live-demo"
                            href={Project.liveurl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={Project.liveurl}
                          >
                            <TbWorld /> Live Demo
                          </a>
                        )}
                      </div>
                      <div className="project-desc">
                        <h3>Responsibility:</h3>
                        {Project.disc ? (
                          <>
                            {Project.disc.length === 0 ? (
                              <>
                                <p className="not-avil">
                                  Description not available.
                                </p>
                              </>
                            ) : (
                              <ul>
                                {Project.disc.map((discContent, index) => (
                                  <>
                                    <li key={index}>
                                      <IoMdArrowDropright />
                                      <p>{discContent}</p>
                                    </li>
                                  </>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <>
                            <p className="not-avil">
                              Description not available.
                            </p>
                          </>
                        )}
                      </div>
                      <div className="screenshot-div">
                        <h3>Screenshot:</h3>
                        <Row>
                          {Project.images ? (
                            <>
                              {Project.images.map((image, index) => (
                                <>
                                  <Col xxl={6} md={6}>
                                    <img
                                      key={index}
                                      src={image.url}
                                      alt={`Thumbnail ${index}`}
                                      onClick={() => openLightbox(index)}
                                      width={"200px"}
                                    />
                                  </Col>
                                </>
                              ))}
                            </>
                          ) : (
                            <>
                              <p>
                                Screenshot not available, kindly utilize the
                                live demo button.
                              </p>
                            </>
                          )}
                        </Row>
                      </div>
                    </div>

                    {lightboxOpen && (
                      <Lightbox
                        showTitle={false}
                        startIndex={startIndex}
                        images={Project.images.map((image, index) => ({
                          url: image.url,
                          title: image.title,
                        }))}
                        onClose={closeLightbox}
                        zoomStep={0.5}
                      />
                    )}
                  </Col>
                  <Col xxl={4} lg={4}>
                    <StickyBox offsetTop={90} offsetBottom={0}>
                      <div className="sidebar-project">
                        <h3>Other Projects:</h3>
                        <div className="listing-div">
                          {ProjectData.map((projectlist, index) => (
                            <>
                              {Project.path === projectlist.path ? null : (
                                <Link
                                  key={index}
                                  to={`/project/${projectlist.path}`}
                                  className="sidebar-project-box"
                                >
                                  <Image src={projectlist.banner} fluid />
                                  <div className="content-data">
                                    <h1>{projectlist.title}</h1>
                                  </div>
                                </Link>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </StickyBox>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </>
  );
};
export default ProjectDetail;

function MetData({ Project }) {
  return (
    <Helmet>
      <title>jayaram C | {Project.title}</title>
      <meta
        name="description"
        content="Crazy Senior UI Developer Who Wants to Explore
        Every Tech Staks"
      />
      <meta
        name="keywords"
        content="Crazy Senior UI Developer Who Wants to Explore
        Every Tech Staks"
      />
      <meta name="author" content="Jayaram C" />
      <link
        rel="canonical"
        href={`https://jayaram-cp-02.github.io/portfolio/project/${Project.path}`}
      />

      <meta
        property="og:title"
        content="Jayaram C | React Native Developer | React JS Developer"
      />
      <meta
        property="og:url"
        content={`https://jayaram-cp-02.github.io/portfolio/project/${Project.path}`}
      />
      <meta http-equiv="content-language" content="en" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jayaram C | Portfolio" />
      <meta
        property="og:description"
        content="Crazy Senior UI Developer Who Wants to Explore
        Every Tech Staks"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Jayaram C | Portfolio" />
      <meta name="twitter:creator" content="Jayaram C" />
      <meta
        name="twitter:domain"
        content="https://jayaram-cp-02.github.io/portfolio/"
      />
    </Helmet>
  );
}
