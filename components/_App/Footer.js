import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div 
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
           <div className="d-flex justify-content-start align-items-center">
            <div className="f-im ">
            <Link href="/index-7/">
                  <img src="/img/logo icon.png" alt="Image" className="w-25 mx-0"/>
                </Link>
            </div>
           </div>

                <p>
                Let's breathe life into your high-complexity clinical laboratory, catalyzing breakthroughs in healthcare and enhancing the quality of life. Join the diagnostic revolution with Medical Technology Group, Your Gateway to Laboratory Excellence!


                </p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebyoutubeook.com/"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div 
                className="single-widget "
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>Departments</h3>
                <ul>
                  <li>
                    <Link href="#">Laboratory Design</Link>
                  </li>
                  <li>
                    <Link href="#">Equipment Procurement</Link>
                  </li>
                  <li>
                    <Link href="#">Workflow Enhancement</Link>
                  </li>
                  <li>
                    <Link href="#">Staff Training</Link>
                  </li>
                
                </ul>
              </div>
            </div>
{/* 
            <div className="col-lg-4 col-md-6">
              <div 
                className="single-widget open-time"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h3>Opening Hours</h3>
                <ul>
                  <li>
                    <span>Mon-Tue:</span>
                    <span className="right">6:00 AM - 10:00 PM</span>
                  </li>
                  <li>
                    <span>Wed-Thu:</span>
                    <span className="right">6:00 AM - 10:00 PM</span>
                  </li>
                  <li>
                    <span>Fry:</span>
                    <span className="right">6:00 AM - 04:00 PM</span>
                  </li>
                  <li>
                    <span>Sun:</span>
                    <span className="right">Closed</span>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6">
              <div 
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="tel:+822456974">
                      <i className="bx bx-phone-call"></i>
                      <span>Phone: </span>
                      312-888-1829
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@corf.com">
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                     mhajjawi@medicaltechnology-group.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>Address:</span>
                    4300 Belmont Ave. Suite 3 Youngstown, OH  44505
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright &copy; {currentYear} Corf Designed by{" "}
              <a href="https://cyparta.com/" target="blank">
                Cyparta
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
