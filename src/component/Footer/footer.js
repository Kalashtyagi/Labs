import React from "react";
import "./footer.css";
import logo from "../../assets/img/logo/logo_u.jpeg";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer>
        <div className="footer-area footer-bg footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-logo mb-20 margin:auto ">
                  <img className="f-logo" src={logo} alt="Logo" width="150px"  height="100px" />
                  <h2 style={{ color: "white" }}></h2>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-tittle">
                      <h4>About Us</h4>
                      <div className="footer-pera">
                        <p>
                        At “LABS & Associates”, we are dedicated to delivering exceptional financial services that empower our clients to achieve their financial goals with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Contact Info</h4>
                    <ul>
                      <li>
                        <p>
                          Address :A-98 New Friends Colony, New Delhi -110025
                        </p>
                      </li>
                      <li>
                        <a href="#">Phone : +91 9990-73-22-73</a>
                      </li>
                      <li>
                        <a href="#">Email : <a href="mailto:info@vittiyam.com">labsandassociates.ca@gmail.com</a></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Important Link</h4>
                    <ul>
                      <li>
                        <a href="#team"> View Teams</a>
                      </li>
                      <li>
                        <a href="#contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="#services">Services</a>
                      </li>
                      <li>
                        <a href="#about">About us</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Newsletter</h4>
                    <div className="footer-pera footer-pera2">
                      <p>
                        Heaven fruitful doesn't over lesser in days. Appear
                        creeping.
                      </p>
                    </div>

                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form
                          target="_blank"
                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                          method="get"
                          className="subscribe_form relative mail_part"
                        >
                          <input
                            type="email"
                            name="email"
                            id="newsletter-form-email"
                            placeholder="Email Address"
                            className="placeholder hide-on-focus"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = ' Email Address '"
                          />
                          <div className="form-icon">
                            <button
                              type="submit"
                              name="submit"
                              id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm"
                            >
                              <img src={form} alt="" />
                            </button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="row footer-wejed justify-content-between"> */}
            {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-logo mb-20">
                  <a href="index-2.html">
                    <img src={footerlogo} alt="" />
                  </a>
                </div>
              </div> */}
            {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="footer-tittle-bottom">
                  <span>5000+</span>
                  <p>Talented Hunter</p>
                </div>
              </div> */}
            {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="footer-tittle-bottom">
                  <span>451</span>
                  <p>Talented Hunter</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="footer-tittle-bottom">
                  <span>568</span>
                  <p>Talented Hunter</p>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>

        <div className="footer-bottom-area footer-bg">
          <div className="fluid-container">
            <div className="footer-border">
              <div className="row d-flex">
                <div className="col-xl-10 col-lg-10 ">
                  <div className="footer-copy-right">
                    <p>
                      Copyright &copy;
                      <script>
                        document.write(new Date().getFullYear());
                      </script>{" "}
                      All rights reserved |
                      <span style={{ color: "white" }}>LABS & Associates</span>
                      {/* <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
                      <a href="https://colorlib.com/" target="_blank">
                        vannova
                      </a> */}
                    </p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                  <div className="footer-social f-right">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a onClick={() => navigate("/service/rpo")}>
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
