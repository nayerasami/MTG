import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-area-seven bg-color pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Services</span>
            <h2>Regenerative Medicine</h2>
            <p>
            
Regulatory Compliance: We stay at the forefront of evolving regulatory requirements to ensure that your laboratory upholds the highest standards in quality and safety. 

            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <img
                  src="/img/home-seven/Comprehensive Solutions.jpg"
                  alt="Image" className="w-100 servImg "
                />
                <div className="services-content">
                  <h3>Comprehensive Solutions </h3>
                 
              <div>

              <p>
                  We accompany you through every phase, from inception to full operation, ensuring a seamless and successful journey
                  </p>

              </div>

                  <Link href="/service-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <img
                  src="/img/home-seven/Tailored Solutions.jpg"
                  alt="Image" className="w-100 servImg"
                />
                <div className="services-content">
                  <h3>Tailored Solutions </h3>
                  <div className="texttt2">
                  
                  <p>
                  Your laboratory is unique, and so are our services. We customize our offerings to align precisely with your specific needs.
                  </p>
</div>
                  <Link href="/service-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <img
                  src="/img/home-seven/Medical Expertise.jpg"
                  alt="Image" className="w-100 servImg"
                />
                <div className="services-content">
                  <h3>Medical Expertise </h3>
              <div className="texttt2">

              <p>
                  Our team comprises seasoned professionals with extensive laboratory backgrounds, providing insights that resonate with your vision.
                  </p>
              </div>

                  <Link href="/service-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
