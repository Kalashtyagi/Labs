import React, { useState } from "react";
import "./Contact.css";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";

const Contact = () => {
  // const [inputValue, setInputValue] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  // };
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   alert(inputValue.name);
  //   setInputValue({
  //     name: "",
  //     email: "",
  //     message: "",
  //     subject: "",
  //   });
  // }
  return (
    <>
      <div
        data-aos="zoom-out"
        data-aos-duration="3000"
        className="container contact"
        style={{ marginTop: "20px" }}
      >
        <div className="section-title">{/* <h2>Contact</h2> */}</div>
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
    </>
  );
};

export default Contact;
