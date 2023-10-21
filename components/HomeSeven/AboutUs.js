import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area-seven bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>The Future of Regenerative Medicine</h2>
                <p>
                Our mission at LMTG is to advance the field of regenerative medicine through innovative research and development of novel therapies solutions that address unmet medical needs, while prioritizing safety, efficacy, and ethical standards.
                </p>

                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do sit amet,
                  consectetur.
                </p> */}

                <ul className="m-0">
                  <li>
                    <i className="bx bx-check"></i>
                    Highest quality allografts
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    Iso 5 processing environment 
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                  	FDA and AATB compliant 
                  </li>
            
                </ul>

                <div className="about-btn">
                  <Link href="/about" className="default-btn">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/home-seven/luxe1.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
