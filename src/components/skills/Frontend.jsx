function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Intermediate/Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Intermediate/Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* Other Group */}
          <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Git/GitHub</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        </div>
      </div>

    </div>
  );
}

export default Frontend;
