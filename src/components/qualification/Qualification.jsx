import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section id="qualification" className="qualification section">
      <h3>My Personal journey</h3>
      <h2>Qualification</h2>
      {/* <div className="test"> */}

      <div className="qualification__container container">
        <div>
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              {/* <i className="uil uil-graduation-cap qualification__icon"></i> */}
              <h2> Education</h2>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              {/* <i className="uil uil-briefcase-alt qualification__icon"></i> */}
              <h2>Experience</h2>
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">B.A in Economics</h3>
                  <span className="qualification__subtitle">
                    Chha. Shivaji Collage , Satara
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2021-2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    12 <sup>th</sup>
                  </h3>
                  <span className="qualification__subtitle">
                    Y.C Collage , Satara
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2018 - 2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    10<sup>th</sup>
                  </h3>
                  <span className="qualification__subtitle">M.H.M</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2017-2018
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Full Stack Web Developer
                  </h3>
                  <span className="qualification__subtitle">Almabetter</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2022 - 2023
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Full Stack Web Developer
                  </h3>
                  <span className="qualification__subtitle">
                    AlmaBetter - Bengaluru , Karnataka
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calender"></i> 2022 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Qualification;
