import React from "react";
import Link from "next/link";

const FeaturedService = () => {
  return (
    <>
      <div className="second-facility-area seven pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/facility-img/Laboratory Design.png" alt="Image" />
                <h3  className="h5">Laboratory Services</h3>
                <div className="textt1">
                <p>
                Our architects and designers create tailored spaces that are optimized for efficiency, precision, and innovation. 
                </p>
</div>
                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/facility-img/Equipment Procurement.png" alt="Image" />
                <h3 className="h5">Equipment Procuremen</h3>
                <div className="textt1">
                <p>
                We source cutting-edge equipment to equip your laboratory with the tools necessary for precise diagnostics.
                </p>
</div>
                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/facility-img/training.png" alt="Image" />
                <h3  className="h5">Training</h3>
               <div className="textt1">
               <p>
                Maximize efficiency and minimize errors with our streamlined workflow solutions. 


                </p>

               </div>
                <Link href="/service-details" className="read-more ">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/facility-img/Workflow Enhancement.png" alt="Image" />
                <h3  className="h5">Workflow Enhancement</h3>
                <div className="textt1">
                <p>
                Equip your team with the knowledge and skills essential for excelling in a high-complexity laboratory environment.
 

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
    </>
  );
};

export default FeaturedService;
