import "./qualification.css";
import { useState } from "react";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My customized tour</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
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
                <h3 className="qualification__title">
                  Full-Stack Web Developer
                </h3>
                <span className="qualification__subtitle">
                  Ironhack - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
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
                <h3 className="qualification__title">Higienista Bucodental</h3>
                <span className="qualification__subtitle">
                  Centre d'estudis Roca
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2014
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">First Certificate</h3>
                <span className="qualification__subtitle">
                  University of Cambridge
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2009 - 2010
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
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
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  qGenomics - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full-Stack Developer</h3>
                <span className="qualification__subtitle">
                  Ironhack - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
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
                <h3 className="qualification__title">Customer Service</h3>
                <span className="qualification__subtitle">
                  WebHelp - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Sales Assistant</h3>
                <span className="qualification__subtitle">
                  JD Sports - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2020
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
              </div>

              <div>
                <h3 className="qualification__title">Higienista Bucodental</h3>
                <span className="qualification__subtitle">
                  Adeslas - Barcelona
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2017
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
