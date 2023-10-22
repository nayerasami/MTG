import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/index-7/"
        homePageText="Home"
        activePageText="About"
        imgClass="bg-1"
      />

      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-5">
              <div className="about-img">
                <img src="/img/about/steptodown.com355152 copy.jpg" alt="Image" />

                {/* <div className="shape-1">
                  <img src="/img/about/about-shape-1 copy.png"  style={{opacity:0.5}} alt="Image" />
                </div> */}

                <div className="shape-2">
                  <img src="/img/about/about-shape-2 copy.png" style={{opacity:0.4}} alt="Image" />
                </div>

                {/* <div className="shape-3">
                  <img src="/img/about/about-shape-3 copy.png"  alt="Image" />
                </div> */}
          
              </div>

            </div>

            <div className="col-lg-7 position-relative">
              <div className="about-content mx-4">
                <span className="top-title">About Us</span>
                <h2>Exploring New Horizons in Healthcare: 
                </h2>
      
              <h5> Your Path to Cutting-Edge Clinical Solutions. </h5>


                <p>

                Are you a forward-thinking medical professional with a deep passion for advanced diagnostics? 
Do you aspire to establish a state-of-the-art clinical laboratory that pushes the boundaries of medical science? Look no further – our accomplished team is here to guide you on your journey towards creating a high-complexity clinical laboratory that sets unprecedented standards in patient care.

Presenting Medical Technology Group: Your Trusted Partner for Laboratory Excellence.
Why Choose Us? At Medical Technology Group, we specialize in transforming your visionary goals into tangible realities. Our team of seasoned consultants possesses an in-depth understanding of the complexities involved in establishing and operating high-complexity clinical laboratories. From adeptly navigating regulatory challenges to crafting cutting-edge facilities, we serve as your unwavering compass on the road to triumph.

             </p>

{/* 
<div className="shape-4">
                  <img src="/img/about/about-shape-3 copy.png "  style={{opacity:0.5}} alt="Image" />
                </div> */}


              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-img">
                <img src="/img/about-two/about-two1 copy.png" className="w-100 " alt="Image" />

                <div className="shape-1">
                  <img src="/img/about-two/about-two-shape2 copy 2.png" alt="Image"  className=""/>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-content mx-4">
                <span className="top-title">The MTG Paradigm</span>
                <h2>  Beyond the provision of elite scientific tools and solutions</h2>
                <p>
                 MTG emerges as a vanguard in the healthcare evolution. Our modus operandi emphasizes symbiotic collaboration with the brightest minds in biomedical research. In tandem with distinguished scientific peers and industry innovators, we continuously refine our approach, deriving solutions that address both contemporary and emergent challenges.
                </p>
                <strong>
                The MTG Advantage:
                </strong>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Comprehensive Solutions: We accompany you through every phase, from inception to full operation, ensuring a seamless and successful journey. 
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    	Tailored Solutions: Your laboratory is unique, and so are our services. We customize our offerings to align precisely with your specific needs. 
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    	Medical Expertise: Our team comprises seasoned professionals with extensive laboratory backgrounds, providing insights that resonate with your vision.
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DoctorsStyleOne />

      <div className="about-area four abouts-six">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content ml-auto">
                <span className="top-title">Scientific Excellence</span>
                <h2>Why MTG is Synonymous with Scientific Excellence</h2>
                <p>
                Founded in 2019, MTG has carved its niche at the nexus of advanced biomedical research and cutting-edge molecular technologies. Acclaimed within the scientific community, our commitment to rigorous research methodologies and peer-reviewed quality resonates profoundly. Every diagnostic solution stems from meticulous scientific inquiry, bolstered by the strictest quality control parameters.
                </p>

                {/* <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Registration of Deserving Cases for Surgeries
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Hepatitis B & C Screening Test
                  </li>
             
             
                </ul> */}
              </div>
            </div>

            <div className="col-lg-6 pr-0">
             
                <img src="/img/home-four/01010.jpg" className="w-100 about-img-2"></img>
 
            </div>
          </div>
        </div>
      </div>

      <FunFactStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
};

export default About;
