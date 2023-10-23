import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";
import Image from "next/image";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        {/* <TopHeader /> */}

        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
<<<<<<< HEAD
                  <Link href="/" className="navbar-brand">
                    {/* <Image src="/img/logo icon.png" alt="logo" className="logo w-100"/> */}
                    <img src="/img/logo icon.png" alt="logo" className="logo w-100" />

=======
                  <Link href="/index-7/" className="navbar-brand">
                    <Image src="/img/logo icon.png" alt="logo" className="logo w-100"/>
                    {/* <img src="/> */}
>>>>>>> 3db28542fb3796ccc551304ce405c86340c080f3
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${currentPath == "/index-7/" && "active"
                            }`}
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${currentPath == "/about/" && "active"
                            }`}
                        >
                          About
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${currentPath == "/faq/" && "active"
                            }`}
                        >
                          FAQs
                        </Link>
                      </li>
<<<<<<< HEAD

                      <li className="nav-item">
                        <Link
                          href="/services-3/"
                          className={`nav-link ${currentPath == "/faq/" && "active"
                            }`}
=======
                     
                      <li className="nav-item">
                        <Link
                          href="/services-3/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
>>>>>>> 3db28542fb3796ccc551304ce405c86340c080f3
                        >
                          Services
                        </Link>
                      </li>
                     


                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Doctors <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/doctors-1/"
                              className={`nav-link ${currentPath == "/doctors-1/" && "active"
                                }`}
                            >
                              Doctors Style One
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctors-2/"
                              className={`nav-link ${currentPath == "/doctors-2/" && "active"
                                }`}
                            >
                              Doctors Style Two
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctors-3/"
                              className={`nav-link ${currentPath == "/doctors-3/" && "active"
                                }`}
                            >
                              Doctors Style Three
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/doctor-details/"
                              className={`nav-link ${currentPath == "/doctor-details/" && "active"
                                }`}
                            >
                              Doctors Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Blog <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/blog-grid/"
                              className={`nav-link ${currentPath == "/blog-grid/" && "active"
                                }`}
                            >
                              Blog Grid
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-left-sidebar/"
                              className={`nav-link ${currentPath == "/blog-left-sidebar/" && "active"
                                }`}
                            >
                              Blog Left Sidebar
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-right-sidebar/"
                              className={`nav-link ${currentPath == "/blog-right-sidebar/" &&
                                "active"
                                }`}
                            >
                              Blog Right Sidebar
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-details/"
                              className={`nav-link ${currentPath == "/blog-details/" && "active"
                                }`}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          className={`nav-link ${currentPath == "/contact/" && "active"
                            }`}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="subscribe">
                      <Link href="/contact" className="default-btn">
                        Get A Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
