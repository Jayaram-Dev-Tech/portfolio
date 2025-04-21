// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
//? Components
import { ProjectListing } from "../../../project/project";
import ProjectData from "../../../project/projectdata";
//? CSS
import "./project.scss";
//? Images

//? JSON File

//? Icons

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
// *******~ Import ~******** //

const Project = () => {
  return (
    <>
      <section className="project-section" id="project">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading">
                <h2 data-aos="fade-up">Latest Project</h2>
                <p data-aos="fade-up">
                  Each project reflects my commitment to creating visually
                  stunning and <br />
                  functionally robust web applications.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xxl={12}>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                modules={[Pagination, Autoplay, Mousewheel]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={25}
                centeredSlides={false}
                loop={true}
                mousewheel={true}
                grabCursor={true}
                className="project-swiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    centeredSlides: false,
                  },

                  992: {
                    slidesPerView: 2,
                    centeredSlides: true,
                  },
                }}
              >
                {ProjectData.map((projectlist, index) => (
                  <SwiperSlide>
                    <ProjectListing projectlist={projectlist} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
            <Link to="/project" className="view-all">
              View All
            </Link>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Project;
