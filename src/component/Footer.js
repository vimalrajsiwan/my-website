import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} Vizlyx. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}
