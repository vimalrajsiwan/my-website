// // import { Navbar, Nav, Container } from "react-bootstrap";
// // import { Link } from "react-router-dom";

// // export default function Header() {
// //   return (
// //     <Navbar bg="dark" variant="dark" expand="lg">
// //       <Container>
// //         <Navbar.Brand href="/">Vizlyx</Navbar.Brand>
// //         <Navbar.Toggle />
// //         <Navbar.Collapse>
// //           <Nav className="ms-auto">
// //             <Nav.Link as={Link} to="/">Home</Nav.Link>
// //             <Nav.Link as={Link} to="/services">Services</Nav.Link>
// //             <Nav.Link as={Link} to="/about">About</Nav.Link>
// //             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // }


// import { useState, useEffect } from 'react';
// import './Header.css';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/services' },
//     { name: 'About', path: '/about' },
//     { name: 'Case Studies', path: '/case-studies' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="header-container">
//         <div className="logo">
//           <a href="/">
//             <span className="logo-icon">
//               <img src="../images/logo.png" width={100}
//               height={50} alt="Vizlyx Logo" />
//             </span>
//             <span className="logo-text">Vizlyx</span>
//             <span className="logo-tagline">Tech Solutions</span>
//           </a>
//         </div>

//         <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
//           <ul className="nav-list">
//             {navItems.map((item) => (
//               <li key={item.name} className="nav-item">
//                 <a href={item.path} className="nav-link">
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="header-actions">
//           {/* <button className="cta-button">Get Started</button> */}
//           <button 
//             className="mobile-menu-toggle"
//             onClick={toggleMobileMenu}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <span className="logo-icon">
              <img
                src="../images/logo.png"
                width={100}
                height={50}
                alt="Vizlyx Logo"
              />
            </span>
            <span className="logo-text">Vizlyx</span>
            <span className="logo-tagline">Tech Solutions</span>
          </Link>
        </div>

        {/* Nav */}
        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          {/* Example CTA Button */}
          {/* <button className="cta-button">Get Started</button> */}

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
