import React from "react";
import Banner from "../../assets/img/banner.png";
import Logo from "../../assets/img/logo.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-md-4">
            <h5>About ESGB</h5>
            <p className="text-justify">
              The Engineering Students' Group of Bhaktapur (ESGB) was
              established on February 14, 2002, by enthusiastic students from
              Bhaktapur district studying at IOE, Pulchowk Campus. Initially
              formed to address transportation challenges for Bhaktapurian
              students, ESGB successfully collaborated with the campus
              administration to provide two buses for their commute. Over time,
              the group expanded its objectives to include organizing various
              student-oriented programs such as trainings, workshops, and
              competitions. ESGB also actively fosters inner and outer
              development of students, enhancing bonds among members. The group
              conducts different events like Deusi Bhailo, Welcome and Farewell,
              Futsal etc . Since 2004, ESGB has been publishing an annual
              technical journal called "The Limelight," with seven volumes
              released to date.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Information</h5>
            <span>
              <Link to="/about">About Us</Link>
            </span>
            <br />
            <span>
              <Link to="/limelight">The Limelight</Link>
            </span>
            <br />
            <span>
              <Link to="/events">Our Events</Link>
            </span>
            <br />
            <div className="dress_footer pt-5">
              <div className="row">
                <div className="offset-md-2 col-md-6">
                  <img src={Logo} className="img-fluid" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <span>
              <i className="fa fa-envelope pr-1" aria-hidden="true"></i>
              <a href="mailto:esgb@gmail.com">esgb@gmail.com</a>
            </span>
            <br />
            <span>
              <i className="fa fa-phone pr-2" aria-hidden="true"></i>
              <a href="tel:+9779843865781">9843865781</a>
            </span>
            <div className="logo pt-4">
              <div className="row">
                <div className="col-md-12">
                  <img src={Banner} alt="Logo" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
