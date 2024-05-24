import logo2 from "../../assets/img/logo/logo_u.jpeg";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import "../../../src/assets/css/slicknav.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useState } from "react";
// import '../../assets/css/style.css'
function Header() {
  const navLinkStyles = {
    fontFamily: "Bahnschrift SemiBold Condensed",
    fontSize: "8px", // Adjust the font size as needed
    color: "white", // Set the text color
  };
  const navDropdownTitleStyles = {
    fontFamily: "Bahnschrift SemiBold Condensed", // Set your preferred font for the title
    fontSize: "28px", // Set the font size as needed
    color: "white", // Set the text color to white
  };
  // const expand = "lg";
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const [activeService, setActiveService] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link);
  };
  const handleServiceClick = (service) => {
    setActiveService(service);
    setActiveLink("");
    navigate(service);

    // You can also navigate to the respective service page here if needed
  };

  const isLinkActive = (link) => link === activeLink;
  const isServiceActive = (service) => service === activeService;

  return (
    <>
    <section id="topbar" className="d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="https://mail.google.com/mail/u/0/#inbox">info@thequintet.in</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span><a href="tel:+91 96346 91832"> +91 9990-73-22-73 (Ind)</a></span></i>
      </div>
    {/* <div class="search-box">
        <button className="btn-search"><i class="fa fa-search"></i></button>
        <input type="text" className="input-search" placeholder="Type to Search..."/>
      </div>  */}
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A102035433&keywords=labs%20%26%20associates&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=e668fad8-ab3e-488d-8002-3c5db9977409&sid=foW&spellCorrectionEnabled=true" className="linkedin" target="_blank"><i className="bi bi-linkedin" style={{color: "white"}}></i></a>
      </div>

    </div>
  </section>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#14284b",
          fontFamily: "Bahnschrift SemiBold Condensed",
        }}
        sticky="top"
      >
        
        <Container>
          
          <Navbar.Brand onClick={() => navigate("/")}>
            <div style={{ padding: "auto", textAlign: "center" }}>
              <img src={logo2} alt="Logo" style={{ cursor: "pointer" }} width="120px" height="80px"/>
              {/* <h6 style={{ color: "white" }}>vannova</h6> */}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 pe-1">
              <Nav.Link
              href="#hero"
                style={{
                  fontSize: "15px",
                  textTransform:"uppercase",
                  marginLeft: "20px",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
              href="#about"
                style={{
                  fontSize: "15px",
                  textTransform:"uppercase",
                  marginLeft: "20px",
                }}
              >
                About
              </Nav.Link>

              <Nav.Link
              href="#services"
                style={{
                  fontSize: "15px",
                  textTransform:"uppercase",
                  marginLeft: "20px",
                }}
              >
                Services
              </Nav.Link>

              <Nav.Link
                
                style={{
                  fontSize: "15px",
                  textTransform:"uppercase",
                  marginLeft: "20px",
                }}
              >
                Career
              </Nav.Link>


              <Nav.Link
              href="#team"
                style={{
                  fontSize: "15px",
                  textTransform:"uppercase",
                  marginLeft: "20px",
                }}
              >
                Teams
              </Nav.Link>

              {/* <NavDropdown
                title="Service"
                id="basic-nav-dropdown"
                // style={{ marginLeft: "20px" }}
                style={{
                  color: isServiceActive("rpo") ? "orange" : "white",
                  marginLeft: "20px",
                }}
              >
                <NavDropdown.Item
                  className="header-hover"
                  onClick={() => handleServiceClick("/rpo")}

                  // onClick={() => handleLinkClick("/rpo")}
                >
                  <u>Recruitment Process Outsourcing</u>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="header-hover"
                  onClick={() => handleServiceClick("/insurance")}
                >
                  <u> Insurance Process Outsourcing</u>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="header-hover"
                  onClick={() => handleServiceClick("/digital")}
                >
                  <u>Digital Marketing</u>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="header-hover"
                  onClick={() => handleServiceClick("/web")}
                >
                  <u>Web Development</u>
                </NavDropdown.Item>
              </NavDropdown> */}

              <Nav.Link
              href="#contact"
                style={{
                  fontSize: "15px",
                  textTransform:"uppercase",
                  marginLeft: "20px",
                  border:"2px solid orange",
                  borderRadius:"20px",
                  padding:"8px 24px 0px 24px"
                  // textDecoration: isLinkActive("/contact")
                  //   ? "underline"
                  //   : "none",
                }}
                // onClick={() => handleLinkClick("/contact")}
              >
                Contact US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <script src="assets/js/vendor/modernizr-3.5.0.min.js"></script>
      <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>

      <script src="assets/js/jquery.slicknav.min.js"></script>

      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/slick.min.js"></script>
      <script src="assets/js/price_rangs.js"></script>

      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/animated.headline.js"></script>
      <script src="assets/js/jquery.magnific-popup.js"></script>

      <script src="assets/js/jquery.scrollUp.min.js"></script>
      <script src="assets/js/jquery.nice-select.min.js"></script>
      <script src="assets/js/jquery.sticky.js"></script>

      <script src="assets/js/contact.js"></script>
      <script src="assets/js/jquery.form.js"></script>
      <script src="assets/js/jquery.validate.min.js"></script>
      <script src="assets/js/mail-script.js"></script>
      <script src="assets/js/jquery.ajaxchimp.min.js"></script>

      <script src="assets/js/plugins.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}
export default Header;
