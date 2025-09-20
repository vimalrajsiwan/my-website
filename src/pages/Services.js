import { Container, Card, Row, Col } from "react-bootstrap";

export default function Services() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Our Services</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>Modern and responsive websites built using React, Node.js, and more.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Mobile Apps</Card.Title>
              <Card.Text>iOS & Android applications with seamless UI/UX.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Cloud Solutions</Card.Title>
              <Card.Text>Scalable cloud hosting, DevOps, and infrastructure management.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
