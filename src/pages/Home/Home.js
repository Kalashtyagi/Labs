import React from "react";
import { useEffect } from "react";
import "./Home.css";
import hero from "../../assets/img/hero/h1_hero.jpg";
import cv from "../../assets/img/gallery/cv_bg.jpg";
import job1 from "../../assets/img/icon/job-list1.png";
import job2 from "../../assets/img/icon/job-list2.png";
import job3 from "../../assets/img/icon/job-list3.png";
import job4 from "../../assets/img/icon/job-list4.png";
import ab from "../../assets/img/hero/about.jpg";
import applybg from "../../assets/img/gallery/how-applybg.png";
import bg from "../../assets/img/gallery/how-applybg.png";
import bg1 from "../../assets/img/background-img/bg-img-4.jpeg";
import testimonial from "../../assets/img/testmonial/testimonial-founder.png";
import cvg from "../../assets/img/gallery/cv_bg.jpg";
import bg2 from "../../assets/img/gallery/background1.jpg";
import service from "../../assets/img/service/support-img.jpg";

import blog from "../../assets/img/blog/home-blog1.jpg";
import blog1 from "../../assets/img/blog/home-blog2.jpg";

// import form from "../../assets/img/icon/form.png";
// import footerlogo from "../../assets/img/logo/logoo.jpeg";
import { useNavigate } from "react-router-dom";
// import Header from "../../component/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <main>
      <section id="hero" className="">
    <div className="hero-container aos-init aos-animate" data-aos="zoom-in"
          data-aos-duration="3000">
      <h1>MAKE YOUR MILE STONE EASY</h1>
      <a href="#about" className="btn-get-started scrollto">Get Started</a>
    </div>
  </section>

        <section id="about" className="about">
      <div className="container">
         <div className="section-title aos-init aos-animate" data-aos="zoom-in">
           {/* <h2>About</h2>  */}
          <h3>About <span>Us</span></h3>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 video-box d-flex justify-content-center align-items-stretch aos-init aos-animate" data-aos="zoom-in">
            <img src="https://media.istockphoto.com/id/958125956/photo/innovation.jpg?s=612x612&w=0&k=20&c=J2Pp9T9msk8CrwXIB_wRhozkXbCycOv69eVs_ZMHCs4=" alt="" class="img-fluid " style={{borderRadius:"10px"}}/>
          </div>

          <div class="col-xl-6 col-lg-6 d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <div className="box-heading aos-init aos-animate" data-aos="fade-up">
              {/* <!-- <h4>About us</h4> --> */}
              <p>
                At <b>“LABS & Associates”</b>, we are dedicated to delivering exceptional financial services that empower our clients to achieve their financial goals with confidence. With a team of highly skilled professionals and a wealth of industry experience, we strive to provide comprehensive solutions tailored to meet our clients' unique needs.<br/>

                <b>Our</b> team comprises highly qualified professionals with extensive experience in the financial industry. We stay up to date with the latest market trends, regulatory changes, and industry best practices to provide our clients with the most relevant and effective financial advice. Our commitment to professionalism and ethical conduct ensures.

                </p>
                </div>

            

          </div>
        </div>

      </div>
    </section>
    <section id="about" className="about">
      <div className="container">
        
        <div className="section-title aos-init aos-animate" data-aos="zoom-in">
         
          <h3>Mission &amp;<span> Values</span></h3>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 video-box d-flex justify-content-center align-items-stretch aos-init aos-animate" data-aos="zoom-in">
            <img src="https://img.freepik.com/free-photo/business-man-holding-paper-with-finance-inscription_23-2148085358.jpg?size=626&ext=jpg&ga=GA1.1.908292415.1715677622&semt=ais_user" alt="" className="img-fluid" style={{borderRadius:"10px"}}/>
          </div>

          <div className="col-xl-6 col-lg-6 video-box d-flex justify-content-center align-items-stretch aos-init aos-animate" data-aos="zoom-in">
            <div className="box-heading aos-init aos-animate" data-aos="fade-up">
              {/* <!-- <h4>Mission & Values </h4> --> */}
              <p>
                We strive to build the strongest possible ties between our clients and associates, aided by the presence of our industry experts.<br/><br/>
                Our success is judged by the satisfaction of our customers and the growth of our resources.<br/><br/>
                We do not conduct searches. <b>We solve talent challenges.</b><br/><br/>

                In all of our relations, we uphold the greatest standards of integrity, honesty, and ethics. We believe in openness, responsibility, and upholding the confidence placed in us by our clients. The success of our clients is at the centre of all we do. By providing great service and value, we seek to understand their individual needs, provide customised solutions, and surpass their expectations
                
                </p>
                </div>

            

          </div>
        </div>

      </div>
    </section>

        {/* <div
          className="our-services section-pad-t30"
          style={{ backgroundImage: `url(${applybg})` }}
          // style={{background:'yellow'}}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span style={{ color: "orange" }}>services</span>
                  <h2 style={{ color: "white" }}>
                    {" "}
                    We Provide The Best Services For You
                  </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div
                onClick={() => navigate("/rpo")}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
              >
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Recruiment Process outsourcing</a>
                    </h5>
                    <span>
                      At Redwood we help companies and agencies take the heavy
                      lifting.
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/manual")}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
              >
                <div className="single-services text-center mb-30">
                  <div className="services-ion ">
                    <span className="flaticon-cms"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Manual Job Posting</a>
                    </h5>
                    <span>
                      Manual Job Posting Services for Non-Integrated Job Media
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/ofcc")}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
              >
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-report"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>OFCCP Compliance Job Posting</a>
                    </h5>
                    <span>
                      Federal & Government Compliant Manual Job Posting Services
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-app"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Recruitment Media Buying</a>
                    </h5>
                    <span>
                      Consolidating your recruitment media spend helps your
                      company gain a higher.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div onClick={() => navigate("/service")} className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <a style={{ color: "white" }} className="border-btn2">
                    Browse All Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <section className="three-column-block pad-sm bg-blue-dark color-white has-pattern pattern-light pattern-tr">
          <div className="card-group-primary card-group ">
            <div data-aos="zoom-out-up" className="card">
              <div className="card-body mt-4">
                <h2 className="heading-2">ENTERPRISE FULL-CYCLE RPO </h2>
                <p style={{ color: "white" }}>
                  PeopleScout’s full-cycle RPO solutions also provide strategic
                  consultation and oversight of the entire talent acquisition
                  strategy while proactively identifying key areas for
                  improvement, anticipating and planning for upcoming
                  challenges. Our commitment to excellence in service delivery
                  translates to the optimal results delivered for our clients.{" "}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-green toggle-panel"
                  data-panel="block_e021fd7516397af96d058b16a1a521e0-0"
                >
                  Learn More About Full-Cycle RPO{" "}
                </button>
              </div>
            </div>
            <div data-aos="zoom-out-up" className="card">
              <div className="card-body mt-4">
                <h2 className="heading-2">ON-DEMAND PROJECT RPO </h2>
                <p style={{ color: "white" }}>
                  Project-based recruitment process outsourcing solutions are
                  designed to meet the demands that internal resources may be
                  unable to accommodate. PeopleScout’s Recruiter On-Demand and
                  project-based solutions provide focused support for
                  organizations in all industries during challenging periods of
                  the recruitment cycle such as peak hiring, hard-to-fill
                  positions, compressed timeframes and more.{" "}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-green toggle-panel"
                  data-panel="block_e021fd7516397af96d058b16a1a521e0-1"
                >
                  Learn About On-Demand Project RPO{" "}
                </button>
              </div>
            </div>
            <div data-aos="zoom-out-up" className="card">
              <div className="card-body mt-4">
                <h2 className="heading-2">HIGH-VOLUME RPO </h2>
                <p style={{ color: "white" }}>
                  PeopleScout’s High-Volume RPO solution balances the velocity
                  of technology with a high touch candidate experience for
                  speedy, scalable high-volume hiring. Our experienced
                  high-volume recruitment teams are supported by our proprietary
                  talent acquisition suite, Affinix™, leveraging AI and
                  mobile-first tools for a modern, streamlined candidate
                  journey. We made over 335,000 hires last year, so we know a
                  thing or two about large-scale recruitment.{" "}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-green toggle-panel"
                  data-panel="block_e021fd7516397af96d058b16a1a521e0-2"
                >
                  Learn More About High-Volume RPO{" "}
                </button>
              </div>
            </div>
            <div data-aos="zoom-out-up" className="card">
              <div className="card-body mt-4">
                <h2 className="heading-2">MODULAR RPO </h2>
                <p style={{ color: "white" }}>
                  PeopleScout’s RPO Amplifiers is a curated suite of modular
                  recruitment solutions to help you augment your recruiting
                  teams when and where you need it most. Whether it’s focused
                  support for peak hiring seasons or onboarding hard-to-fill
                  roles, RPO Amplifiers are designed to help organizations meet
                  immediate talent goals and drive lasting business impact. Add
                  as a standalone service or combine with an existing RPO
                  engagement—whether with PeopleScout or another provider—when
                  extra support is needed.{" "}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-green toggle-panel"
                  data-panel="block_e021fd7516397af96d058b16a1a521e0-3"
                >
                  Learn More About RPO Amplifiers{" "}
                </button>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="image-block">
          <div
            style={{
              padding: "15px",
              backgroundImage: `url(https://www.peoplescout.com/wp-content/uploads/2023/08/Accelerate-1650x1050-1-1024x652.jpg)`,
              backgroundSize: "contain",
            }}
          >
            <div
              data-aos="zoom-out-up"
              className="col-xl-12 col-lg-12 col-md-4 col-sm-6"
            >
              <div
                style={{
                  marginLeft: "600px",
                  height: "300%",
                  padding: "60px",
                  background: " #004d71",
                  color: "white",
                }}
                className="single-services mb-30"
                onClick={() => navigate("/highVolume")}
              >
                <h5
                  style={{
                    color: "white",
                    font: "10px",
                  }}
                >
                  Ready-to-Go RPO{" "}
                </h5>
                <h2
                  style={{ font: "70px", color: "white" }}
                  className="heading-1"
                >
                  PeopleScout Accelerate for Faster Recruitment{" "}
                </h2>
                <p style={{ color: "white" }}>
                  PeopleScout Accelerate is a tech-powered, ready-to-go
                  recruitment process outsourcing (RPO) solution that combines
                  PeopleScout’s deep recruitment expertise and a pre-configured
                  Affinix™ talent acquisition technology suite—implemented in
                  just two weeks. <br />
                  <br />
                  Recruit faster with a curated suite of the essential tools for
                  creating a modern candidate experience. Gain agility,
                  streamline your recruitment process and create a world-class
                  candidate experience that is unparalleled in the industry.{" "}
                </p>
                <div className="Ready_btn" onClick={() => navigate("/contact")}>
                  <button>Talk to an Expert</button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <div className="our-services section-pad-t30" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span style={{ color: "orange" }}>services</span>
                  <h2 style={{ color: "#26317f" }}>
                    We Provide The Best Services For You
                  </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div
                data-aos="zoom-out-up"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5"}}

                >
                  <div className="services-ion ">
                    <span className="fa fa-thumbs-up fa-3x" style={{ fontSize: '35px' }}></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Bookkeeping &amp; Accounting Services</a>
                    </h5>
                    <ul style={{ textAlign: 'left', listStyle: 'disc' }}>
                      <li>All types of Data Entry for day-to-day operations.</li>
                    </ul>
                   
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                data-aos="zoom-out-up"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5" }}
                >
                  <div className="services-ion ">
                    <span className="fa fa-check"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Customer Managment</a>
                    </h5>
                    <ul  style={{ textAlign: 'left', listStyle: 'disc' }}>
                      <li>Billing to customer & recording.</li>
                      <li>Realisation/Follow Up from Clients</li>
                      <li>Payment collection from Client.</li>
                      <li>Contracts Management for Clients.</li>

                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                data-aos="zoom-out-up"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5" }}
                >
                  <div className="services-ion">
                    <span className="bi bi-currency-rupee"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Vendor Managment</a>
                    </h5>
                    <ul  style={{ textAlign: 'left', listStyle: 'disc' }}>
                      <li>Selecting Vendors..</li>
                      <li>Contract Negotiation.</li>
                      <li>Vendor on-boarding..</li>
                      <li>Monitoring Vendor Performance.</li>
                      <li>Monitoring and Managing Risk.</li>
                      <li>Payment to Vendors.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                data-aos="zoom-out-up"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5" }}
                >
                  <div className="services-ion">
                    <span className="fa fa-briefcase"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Credit Cards Payment & Expense Managment</a>
                    </h5>
                    <ul  style={{ textAlign: 'left', listStyle: 'disc' }}>
                    <li>Handling Expenses through Credit Card.</li>
                    <li>Reimbursement to Employees.</li>
                    <li>Validation of receipts as per Organisation Structure.</li>

                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                data-aos="zoom-out-up"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5" }}
                >
                  <div className="services-ion">
                    <span className="bi bi-bar-chart-line"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Reconciliations</a>
                    </h5>
                   <ul  style={{ textAlign: 'left', listStyle: 'disc' }}>
                    <li>
                    Assistance with monthly and quarterly accounting reports.
                    </li>
                    <li>Preparation of forecasts and projections.</li>

                   </ul>
                  </div>
                </div>
              </div>  <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                data-aos="zoom-out-up"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5" }}
                >
                  <div className="services-ion">
                    <span className="fa fa-adjust"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Reporting</a>
                    </h5>
                   <ul  style={{ textAlign: 'left', listStyle: 'disc' }}>
                    <li>
                    Assistance with monthly and quarterly accounting reports.
                    </li>
                    <li>Preparation of forecasts and projections.</li>

                   </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                data-aos="zoom-out-up"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5" }}
                >
                  <div className="services-ion">
                    <span className="bi bi-bank"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Quarterly/Annually Financial Statements Preparation</a>
                    </h5>
                   <ul  style={{ textAlign: 'left', listStyle: 'disc' }}>
                    <li>Income Statement/Profit & Loss Statements. </li>
                    <li> Cash Flow Statements.
.</li>
                     <li> Balance Sheet</li>
                     <li>Statement of Equity.</li>
                     <li>Notes to Financial Statements</li>

                   </ul>
                  </div>
                </div>
              </div> 
               <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                data-aos="zoom-out-up"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5" }}
                >
                  <div className="services-ion">
                    <span className="fa fa-address-book"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Year End Adjustments And Tax Compliances for USA, UK, & Canada</a>
                    </h5>
                    <ul  style={{ textAlign: 'left', listStyle: 'disc' }}>
                      <li>Depreciation/Amortization</li>
                      <li>Accruals & Provisions Management.</li> 
                      <li>Preparation and filings of tax returns & compliances.
</li>
                    </ul>
                  </div>
                </div>
              </div> 
               <div
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4"
                data-aos="zoom-out-up"
              >
                <div
                  className="single-services text-center mb-30"
                  style={{ border: "1px solid #e5f0d5" }}
                >
                  <div className="services-ion">
                    <span className="fa fa-map"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Fixed Assest Managment</a>
                    </h5>
                    <ul  style={{ textAlign: 'left', listStyle: 'disc' }}>
                      <li>Track and monitor fixed assets and</li>
                      <li>Oversee equipment and machinery in multiple locations.</li>
                      <li>Lower maintenance costs.
</li>
                      <li>Improve operational efficiency.
</li>
<li>Maintain a record of retired, sold, stolen or lost assets.</li>


                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div  className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <a style={{ color: "orange" }} className="border-btn2">
                    Browse All Services
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          style={{
            backgroundColor: "#ebf1fe",
            backgroundImage: `url(${bg2})`,
            backgroundPosition: "20% 20%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  <div
                    data-aos="zoom-out-down"
                    class="section-tittle section-tittle2"
                  >
                    <span>WORK PROCESS</span>
                    <h2>How We Work</h2>
                  </div>
                  <div
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                    className="support-caption"
                  >
                    <p className="pera-top">
                      <b>Step 1-Talk To Us:</b> Understanding your challenges
                      and needs is key to finding a solution. We start all our
                      conversations by listening carefully to those needs.
                    </p>
                    <p className="pera-top">
                      <b>Step 2-Scope Your Requirement:</b> Off the back of
                      initial discussions and exploratory tasks, we go to work
                      to scope out a solution that fits your business.
                    </p>
                    <p className="pera-top">
                      <b>Step 3-Plan The Implementation:</b> Once agreed, we go
                      to work planning carefully the implementation, testing,
                      and deployment of a solution to deliver the desired
                      result.
                    </p>
                    <p className="pera-top">
                      <b>Step 3-Measure & Improve:</b> From the moment your
                      solution is in place, we carefully measure and adjust it
                      to ensure we provide the best possible return on
                      investment.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  {/* <img src={bg2} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="online-cv cv-bg section-overly pt-90 pb-120"
          //  style={{backgroundImage: `url(${applybg})` }}
          style={{ backgroundColor: "#F8F8FF" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div data-aos="zoom-in-up" className="cv-caption text-center">
                  <p
                    className="pera1"
                    style={{ color: "orange", fontSize: "30px" }}
                  >
                    Solutions
                  </p>
                  <p className="pera2" style={{ color: "#28395a" }}>
                    {" "}
                    Recruitment Process Outsourcing Solutions
                  </p>
                </div>
                <div
                  data-aos="zoom-in-right"
                  className="col-xl-10 cv-caption text-left"
                >
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>Industry Leading Service</b>
                    <br />
                    Our teams provide industry-leading customer service across
                    all service lines.
                  </p>
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>
                      Technology Ready Solutions
                    </b>
                    <br />
                    We create synergy between outsourcing activity & integrated
                    technology systems.
                  </p>
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>Great Support</b>
                    <br />
                    We support our clients at every stage of our service
                    delivery.
                  </p>
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>Trusted Experience</b>
                    <br />
                    Our teams have extensive experience in many industries
                    delivering top quality BPO services
                  </p>
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>Always Innovating</b>
                    <br />
                    Our teams and leadership are continuously innovating to
                    improve our services to all customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="testimonial-area testimonial-padding">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img
                           src={testimonial}
                            alt=""
                          />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          //   data-background="assets/img/gallery/how-applybg.png"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container">
            <div className="row">
              <div data-aos="flip-left" className="col-lg-12">
                <div className="section-tittle white-text text-center">
                  <span>our best</span>
                  <h2> Why Choose Us ?</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div data-aos="zoom-out-up" className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-search"></span>
                  </div>
                  <div className="process-cap">
                    <h5>1. Best of Services</h5>
                    <p>
                    We deliver exceptional, dependable services meticulously tailored to meet your unique requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-curriculum-vitae"></span>
                  </div>
                  <div className="process-cap">
                    <h5>2. Expert Team</h5>
                    <p>
                    Our experienced and knowledgeable team is dedicated to providing excellent service and support to our customers.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span ><i class="bi bi-globe2"></i></span>
                  </div>
                  <div className="process-cap">
                    <h5>3. Global Reach</h5>
                    <p>
                    We serve customers worldwide, delivering our products and services to any location with efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="team" className="services">
          <div className="container">
    
            <div className="section-title aos-init aos-animate" data-aos="zoom-in">
            <h2>Team</h2> 
              <h3>Our <span>Team</span></h3>
            </div>
    
            <div className="row">
              <div className="col-lg-3 col-md-4 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in"data-aos-delay="100">
                  <img src="https://thequintet.in/assets/img/namita.jpeg" alt="Pic" style={{height: "100px",width: "100px",borderRadius: "50px"}}/>
                  <h4><a href="">Namita Seth</a></h4>
                   <p>
                   Namita Seth, a 16-year-old CPA/CMA specialist with over 16 years of experience, is a content specialist with a leading provider and Director Academics at an education company in India.                 

                    </p>
                          
                </div>
              </div>
    
              <div className="col-lg-3 col-md-4 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                  <img src="https://thequintet.in/assets/img/Shashank%20Bajaj.jpeg" alt="Pic" style={{height: "100px", width: "100px",borderRadius: "50px;"}}/>
                  <h4><a href="">Shashank Bajaj </a></h4>
                  <p>
                     Shashank Bajaj is a Chartered Accountant with over 10 years of experience in banking, taxation, accounting, and assurance. He has worked with Accenture Services and ICICI Bank for over 5 years in Corporate Banking, Government Banking, and Internal Audit departments.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                  <img src="https://thequintet.in/assets/img/kamlesh.png" alt="Pic" style={{height: "100px", width: "100px",borderRadius: "50px"}}/>
                  <h4><a href="">Kailash Chand Lakhera</a></h4>

                  <p>
                  Kailash Chand Lakhera is a Chartered Accountant with over 10 years of experience in direct, indirect, and transfer pricing for pharmaceutical companies and British Councils..
    
                  </p>
                </div>

              </div>
              <div className="col-lg-3 col-md-4 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                  <img src="https://thequintet.in/assets/img/Vaibhav.png" alt="Pic" style={{height: "100px",width: "100px",borderRadius:"50px"}}/>
                  <h4><a href="">	Vaibhav Bajaj </a></h4>
                  <p>
                    Vaibhav Bajaj has over 7 years of post-qualification experience managing PWC in international trade, handling projects in real estate, manufacturing, electronics, home appliances, and hospitality.  </p>
                </div>
              </div>

            

            </div>
          </div>
        </section>
        <div className="home-blog-area blog-h-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  data-aos="zoom-in-right"
                  className="section-tittle text-center"
                >
                  <span>Our latest blog</span>
                  <h2>Our recent news</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div data-aos="flip-up" className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={blog} alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3>
                        <a href="single-blog.html">
                          Footprints in Time is perfect House in Kurashiki
                        </a>
                      </h3>
                      <a href="#" className="more-btn">
                        Read more »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-up" className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={blog1} alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3>
                        <a href="single-blog.html">
                          Footprints in Time is perfect House in Kurashiki
                        </a>
                      </h3>
                      <a href="#" className="more-btn">
                        Read more »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container contact"
        style={{ marginTop: "20px" }}
      >
        <div id="contact" className="section-title">{/* <h2>Contact</h2> */}</div>
        <div>
          
          <iframe
          style={{ border: 0, width: "100%", height: "270px" }}
           src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14015.805661570057!2d77.26125428449146!3d28.571221605946832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA-98%20New%20Friends%20Colony%2C%20New%20Delhi%20-110025!5e0!3m2!1sen!2sin!4v1715680594144!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A-98 New Friends Colony, New Delhi -110025</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@thequintet.in</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 9990-73-22-73</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form >
              <div className="row gy-2 gx-md-3">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    
                    name="email"
                    
                    id="email"
                    placeholder="Official Email"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Contact Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    
                    name="email"
                    
                    id="email"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="destination"
                    className="form-control"
                    id="name"
                    placeholder="Destination"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="Organisation Name"
                    id="email"
                    placeholder="Organisation Name"
                    required
                  />
                </div>
                
                <div className="form-group col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    
                    required
                  ></textarea>
                </div>

                <div className="text-center ">
                  <button type="submit" className="btn-sub">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </main>

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

export default Home;
