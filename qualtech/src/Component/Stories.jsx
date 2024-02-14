import React, { useState } from "react";
import {
  Rectangle_stories,
  CanQualify,
  Apple,
  Playstore,
  Rectangle_dog,
} from "../assets";

const Stories = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage === 1 ? 2 : 1); // Toggle between page 1 and page 2
  };

  const prevPage = () => {
    setCurrentPage(currentPage === 1 ? 2 : 1); // Toggle between page 1 and page 2
  };

  return (
    <>
      <div className="qt-success">
        <div className="stories">
          <h1>Our Success Stories</h1>
        </div>
        <div className="story-t">
          <p>
            We believe in long-term relationships with our clients. Let’s have a
            look at our successful projects and happy clients.
          </p>
        </div>
        <div className="qualify">
          {/* Render content based on the current page */}
          {currentPage === 1 && (
            <>
              <img
                src={Rectangle_stories}
                className="rectangle_stories"
                alt="Project"
              />
              <img src={CanQualify} className="can_qualify" alt="Project" />
              <h2>CanQualify :</h2>
              <p>Qualify and Manage Suppliers.</p>
              <h6>
                CanQualify helps hiring clients identify and mitigate risks
                within their supply chain. We provide hiring clients the crucial
                tools necessary to connect with safe companies that have been
                pre-qualified based on specific client requirements.
              </h6>

              <div className="qt-region">
                <p>Region: USA</p>
              </div>
              <div className="qt-platform">
                <p>Platform: Web, iOS, Android</p>
              </div>
              <div className="qt-technology">
                <p>Technology: Flutter, Php, DevOps</p>
              </div>
            </>
          )}
          {/* Additional page content */}
          {currentPage === 2 && (
            <>
              <img
                src={Rectangle_dog}
                className="rectangle_dog"
                alt="Rectangle_dog"
              />
              <img src={CanQualify} className="can_qualify" alt="Project" />
              <h2>Mypet :</h2>
              <p className="online-dog">Online Dog Adopt & Care</p>
              {/* Repeat same content as page 1 */}
              <h6>
                CanQualify helps hiring clients identify and mitigate risks
                within their supply chain. We provide hiring clients the crucial
                tools necessary to connect with safe companies that have been
                pre-qualified based on specific client requirements.
              </h6>

              <div className="qt-region">
                <p>Region: USA</p>
              </div>
              <div className="qt-platform">
                <p>Platform: Web, iOS, Android</p>
              </div>
              <div className="qt-technology">
                <p>Technology: Flutter, Php, DevOps</p>
              </div>
            </>
          )}
          {/* Buttons for both pages */}
          <div className="AG_btn">
            <button className="apple-btn">
              <p>
                Apple App Store
                <img src={Apple} className="qt-apple" alt="Apple" />
              </p>
            </button>
            <button className="google-btn">
              <p>
                Google Play Store
                <img
                  src={Playstore}
                  className="qt-playstore"
                  alt="Play Store"
                />
              </p>
            </button>
          </div>

          <div className="navigation-buttons">
            {/* Show Previous button only if not on the first page */}
            <button className="prev-button" onClick={prevPage}>
              {"<"}
            </button>

            {/* Show Next button only if not on the last page */}
            <button className="next-button" onClick={nextPage}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
