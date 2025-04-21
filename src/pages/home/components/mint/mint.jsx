// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//? Components

//? CSS
import "./css/mint.scss";
//? Images
import Icon1 from "./img/mint-01.png";
import Icon2 from "./img/mint-02.png";
import Icon3 from "./img/mint-03.png";
import Icon4 from "./img/mint-04.png";
//? JSON File

//? Icons
// *******~ Import ~******** //

const Mint = () => {
  return (
    <>
      <span id="about"></span>
      <section className="how-mint">
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="heading-content">
                <h2>How to mint</h2>
                <p>
                  Use Trust Wallet, Metamask or any wallet to connect to the
                  app.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mint-row">
            <Col xxl={5}>
              <div className="content-box">
                <Image src={Icon1} fluid />
                <div className="content">
                  <h3>Connect your wallet</h3>
                  <p>
                    Use Trust Wallet, Metamask or any wallet to connect to the
                    app.
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={5}>
              <div className="content-box">
                <Image src={Icon2} fluid />
                <div className="content">
                  <h3>Connect your wallet</h3>
                  <p>
                    Use Trust Wallet, Metamask or any wallet to connect to the
                    app.
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={5}>
              <div className="content-box">
                <Image src={Icon3} fluid />
                <div className="content">
                  <h3>Connect your wallet</h3>
                  <p>
                    Use Trust Wallet, Metamask or any wallet to connect to the
                    app.
                  </p>
                </div>
              </div>
            </Col>
            <Col xxl={5}>
              <div className="content-box">
                <Image src={Icon4} fluid />
                <div className="content">
                  <h3>Connect your wallet</h3>
                  <p>
                    Use Trust Wallet, Metamask or any wallet to connect to the
                    app.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Mint;
