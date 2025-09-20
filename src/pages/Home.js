import { Container, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Vizlyx</h1>
      <p>We build modern software solutions for your business needs.</p>
      <Button variant="primary">Get Started</Button>
    </Container>
  );
}
