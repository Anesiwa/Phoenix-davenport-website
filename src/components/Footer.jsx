import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./images/phoenix_bird_blk.png";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="row text-left footer-row">
              <div className="col-sm-3">
                <img
                  className="img-fluid mb-2 align-items-center"
                  src={logo}
                  alt="Embers of the Phoenix logo"
                  width="120"
                  height="120"
                />
                <h4 className="footer-title mt-4">Location</h4>
                <br />
                <div className="footer-details">
                  Downtown Davenport
                  <br />
                  111 W 2nd St.
                  <br />
                  Davenport, IA 52801
                </div>
              </div>
              <div className="col-sm-3">
                <h4 className="footer-title">Hours</h4>
                <h5 className="footer-service-header">Dinner</h5>
                <div className="footer-details">
                  Mon - Thurs 3pm to 9pm
                  <br />
                  Fri & Sat 3pm to 9:45pm
                </div>
                <h5 className="footer-service-header">Bar</h5>
                <div className="footer-details">
                  Mon - Thurs 3pm to 9:30pm
                  <br />
                  Fri & Sat 3pm to Midnight
                </div>
                <br />
                <h4 className="footer-title">Happy Hour</h4>
                <div className="footer-details">
                  Monday - All day!
                  <br />
                  Tues-Sat 3pm-6pm and 9pm to Midnight
                </div>
              </div>

              <div className="col-sm-3">
                <h4 className="footer-title">Contact</h4>
                <br />
                <div className="footer-details">
                  Embers of the Phoenix Restaurant & Martini Bar
                  <br />
                  Phone: (563) 323-2345
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:thephoenixofdavenport@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="email-link"
                  >
                    thephoenixofdavenport@gmail.com
                  </a>
                </div>
                <div>
                  <ul className="social-links">
                    <li>
                      <a
                        href="https://www.facebook.com/phoenixofdavenport"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="Facebook-link"
                      >
                        <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/phoenix_davenport/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="Instagram-link"
                      >
                        <FontAwesomeIcon icon="fa-brands fa-instagram-square" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/ThePhoenixqc"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="Twitter-link"
                      >
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 Sitemap">
                <h4 className="footer-title">Sitemap</h4>
                <br />
                <div>
                  <ul>
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>
                      <a href="./About.jsx">About</a>
                    </li>
                    <li>
                      <a href="./blog/dinner">Dinner Menus</a>
                    </li>
                    <li>
                      <a href="./blog/cheesecake">Homemade Cheesecake Menu</a>
                    </li>
                    <li>
                      <a href="./">Drink Menus</a>
                    </li>
                    <li>
                      <a href="./">Banquet Halls & Private Parties</a>
                    </li>
                    <li>
                      <a href="./">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-details mt-3">
            <div>&copy; Embers of the Phoenix 2022</div>
            <div>
              Built and maintained by{" "}
              <a
                className="creator"
                href="https://www.linkedin.com/in/ameliaarku/"
                target="_blank"
                rel="noopener noreferrer"
                alt="Connect with Amelia Arku on LinkedIn"
              >
                Amelia Arku
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
