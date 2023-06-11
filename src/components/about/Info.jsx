import React from "react";

function Info () {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Months, including student period. OPEN TO WORK </span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">IronHack Bootcamp<br/>Full-Stack Dev<br/>(MERN Stack)</span>
      </div>

      <div className="about__box">
        <i class="bx bx-user-check about__icon"></i>

        <h3 className="about__title">My Self</h3>
        <span className="about__subtitle">inquiring
            mentality Team work<br/>self-learning</span>
      </div>
    </div>
  );
};

export default Info;