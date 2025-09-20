import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";


function Home() {


  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(to right, #4facfe, #00f2fe)",
          color: "white",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Welcome to Vizlyx Technologies
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "15px" }}>
            We build modern, scalable, and powerful IT solutions for your
            business.
          </p>
          {/* <Button
            variant="light"
            size="lg"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Get Started
          </Button> */}
        </Container>
      </section>

      {/* About Section */}
      <section style={{ padding: "60px 0", background: "#f9f9f9" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="../images/about.jpg"
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h2>Who We Are</h2>
              <p>
                At Vizlyx, we deliver cutting-edge software solutions that help
                businesses grow faster and smarter. Our expertise spans web
                development, mobile apps, cloud, and AI-driven products.
              </p>
              <Button variant="primary">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section style={{ padding: "60px 0" }}>
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row>
            <Col md={4}>
              <Card className="shadow border-0">
                <Card.Img
                  variant="top"
                  src="../images/web-development.jpg"
                />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    Build modern, responsive websites and web applications with
                    React, Node.js, and cloud integrations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow border-0">
                <Card.Img
                  variant="top"
                  src="../images/mobile-apps.jpg"
                />
                <Card.Body>
                  <Card.Title>Mobile Apps</Card.Title>
                  <Card.Text>
                    Native and cross-platform mobile applications designed for
                    performance and great user experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow border-0">
                <Card.Img
                  variant="top"
                  src="../images/cloud-ai.jpg"
                />
                <Card.Body>
                  <Card.Title>Cloud & AI</Card.Title>
                  <Card.Text>
                    Scale your business with cloud solutions and AI-powered
                    insights to stay ahead in the market.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
